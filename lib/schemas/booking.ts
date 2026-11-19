import { z } from "zod";

export const bookingSchema = z
  .object({
    type: z.enum([
      "stay",
      "offer",
      "wedding",
      "conference",
      "dining",
      "spa",
      "general",
    ]),
    itemName: z.string().optional(),
    checkIn: z.string().optional(),
    checkOut: z.string().optional(),
    adults: z.number().min(1).max(20),
    children: z.number().min(0).max(20),
    rooms: z.number().min(1).max(10),
    preferredRoom: z.string().optional(),
    flexibleDates: z.boolean(),
    eventDate: z.string().optional(),
    guestCount: z.number().min(0).max(1000),
    eventType: z.string().optional(),
    meetingSetup: z.string().optional(),
    duration: z.string().optional(),
    experience: z.string().optional(),
    partySize: z.number().min(1).max(100),
    name: z.string().trim().min(2, "Please enter your name."),
    email: z.string().trim().email("Please enter a valid email address."),
    phone: z.string().trim().min(7, "Please enter a valid phone number."),
    message: z.string().max(2000).optional(),
    privacyAccepted: z.literal(true, {
      error: "Please accept the privacy policy to continue.",
    }),
  })
  .superRefine((values, context) => {
    if (values.type === "stay" || values.type === "offer") {
      if (!values.checkIn) {
        context.addIssue({
          code: "custom",
          path: ["checkIn"],
          message: "Please select a check-in date.",
        });
      }

      if (!values.checkOut) {
        context.addIssue({
          code: "custom",
          path: ["checkOut"],
          message: "Please select a check-out date.",
        });
      }

      if (
        values.checkIn &&
        values.checkOut &&
        values.checkOut <= values.checkIn
      ) {
        context.addIssue({
          code: "custom",
          path: ["checkOut"],
          message: "Check-out must be after check-in.",
        });
      }
    }

    if (values.type === "wedding" || values.type === "conference") {
      if (!values.eventDate) {
        context.addIssue({
          code: "custom",
          path: ["eventDate"],
          message: "Please provide a preferred event date.",
        });
      }

      if (values.guestCount < 1) {
        context.addIssue({
          code: "custom",
          path: ["guestCount"],
          message: "Please provide an approximate guest or delegate count.",
        });
      }
    }
  });

export type BookingSchema = z.infer<typeof bookingSchema>;
