import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

import { bookingSchema } from "@/lib/schemas/booking";
import { buildBookingNotificationEmail } from "@/lib/email/booking-notification";

const rateLimit = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string) {
  const now = Date.now();

  // Remove expired entries.
  for (const [key, entry] of rateLimit.entries()) {
    if (entry.resetAt <= now) {
      rateLimit.delete(key);
    }
  }

  const current = rateLimit.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimit.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW,
    });

    return true;
  }

  if (current.count >= MAX_REQUESTS) {
    return false;
  }

  current.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        { status: 429 },
      );
    }

    const body: unknown = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, message: "Invalid enquiry details." },
        { status: 400 },
      );
    }

    const payload = body as Record<string, unknown>;

    // Honeypot: silently accept submissions that fill this field.
    if (
      typeof payload.website === "string" &&
      payload.website.trim().length > 0
    ) {
      return NextResponse.json({
        success: true,
        message: "Your enquiry has been received.",
      });
    }

    const sourceResult = z
      .string()
      .trim()
      .max(120)
      .optional()
      .safeParse(payload.source);

    if (!sourceResult.success) {
      return NextResponse.json(
        { success: false, message: "Invalid enquiry source." },
        { status: 400 },
      );
    }

    // Validate the actual booking fields using the existing schema.
    const { source: _source, website: _website, ...bookingPayload } = payload;

    const result = bookingSchema.safeParse(bookingPayload);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your enquiry details and try again.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.BOOKING_FROM_EMAIL;
    const toEmail = process.env.BOOKING_TO_EMAIL;

    if (!apiKey || !fromEmail || !toEmail) {
      console.error("Booking email environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "The enquiry service is not configured yet.",
        },
        { status: 500 },
      );
    }

    const booking = result.data;
    const resend = new Resend(apiKey);

    // Generate the branded HTML and plain-text email.
    const email = buildBookingNotificationEmail(
      booking,
      sourceResult.data || "Website",
    );

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: booking.email,
      subject: email.subject,
      html: email.html,
      text: email.text,
    });

    if (error) {
      console.error("Resend booking email error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "We could not send your enquiry. Please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been received.",
    });
  } catch (error) {
    console.error("Booking API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}
