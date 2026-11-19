import type { BookingSchema } from "@/lib/schemas/booking";

const brand = {
  ocean: "#173B55",
  gold: "#A7834D",
  ivory: "#F5F1E9",
  sand: "#D9CBB5",
  charcoal: "#26343A",
  muted: "#68777D",
  white: "#FFFFFF",
};

const enquiryLabels: Record<BookingSchema["type"], string> = {
  stay: "Accommodation",
  offer: "Special offer",
  wedding: "Wedding",
  conference: "Conference",
  dining: "Dining",
  spa: "Spa and wellness",
  general: "General enquiry",
};

type EmailRow = {
  label: string;
  value: string | number;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function formatDate(value?: string) {
  if (!value) return "Not specified";

  const dateParts = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (!dateParts) return value;

  const date = new Date(`${value}T00:00:00Z`);

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function createRows(rows: EmailRow[]) {
  return rows
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding: 11px 0; color: ${brand.muted}; font-size: 13px; border-bottom: 1px solid ${brand.ivory}; width: 42%;">
            ${escapeHtml(label)}
          </td>
          <td style="padding: 11px 0; color: ${brand.charcoal}; font-size: 14px; font-weight: 600; text-align: right; border-bottom: 1px solid ${brand.ivory};">
            ${escapeHtml(String(value))}
          </td>
        </tr>
      `,
    )
    .join("");
}

function createSection(title: string, rows: EmailRow[]) {
  if (!rows.length) return "";

  return `
    <div style="margin-top: 24px; padding: 22px; background: ${brand.white}; border: 1px solid ${brand.sand}; border-radius: 8px;">
      <h2 style="margin: 0 0 12px; color: ${brand.ocean}; font-family: Georgia, 'Times New Roman', serif; font-size: 21px; font-weight: 400;">
        ${escapeHtml(title)}
      </h2>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
        ${createRows(rows)}
      </table>
    </div>
  `;
}

export function buildBookingNotificationEmail(
  booking: BookingSchema,
  source = "Website",
) {
  const enquiryType = enquiryLabels[booking.type];

  const enquiryRows: EmailRow[] = [
    ...(booking.itemName
      ? [{ label: "Selected experience", value: booking.itemName }]
      : []),
  ];

  if (booking.type === "stay" || booking.type === "offer") {
    enquiryRows.push(
      { label: "Check-in", value: formatDate(booking.checkIn) },
      { label: "Check-out", value: formatDate(booking.checkOut) },
      { label: "Adults", value: booking.adults },
      { label: "Children", value: booking.children },
      { label: "Rooms", value: booking.rooms },
      {
        label: "Preferred room",
        value: booking.preferredRoom || "No preference",
      },
      {
        label: "Flexible dates",
        value: booking.flexibleDates ? "Yes" : "No",
      },
    );
  }

  if (booking.type === "wedding" || booking.type === "conference") {
    enquiryRows.push(
      { label: "Preferred event date", value: formatDate(booking.eventDate) },
      { label: "Expected guests / delegates", value: booking.guestCount },
      {
        label: "Event type",
        value: booking.eventType || "Not specified",
      },
      {
        label: "Meeting setup",
        value: booking.meetingSetup || "Not specified",
      },
      {
        label: "Duration",
        value: booking.duration || "Not specified",
      },
    );
  }

  if (booking.type === "dining" || booking.type === "spa") {
    enquiryRows.push(
      {
        label: "Experience",
        value: booking.experience || "Not specified",
      },
      { label: "Party size", value: booking.partySize },
      {
        label: "Preferred date",
        value: formatDate(booking.eventDate),
      },
    );
  }

  const contactRows: EmailRow[] = [
    { label: "Name", value: booking.name },
    { label: "Email", value: booking.email },
    { label: "Phone", value: booking.phone },
  ];

  const message = booking.message?.trim() || "No additional message.";

  const subjectReference = (booking.itemName || booking.name)
    .replace(/[\r\n]/g, " ")
    .slice(0, 80);

  const subject = `${enquiryType} enquiry — ${subjectReference}`;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(subject)}</title>
      </head>

      <body style="margin: 0; padding: 0; background: ${brand.ivory}; color: ${brand.charcoal}; font-family: Arial, Helvetica, sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: ${brand.ivory}; padding: 32px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 640px;">

                <!-- Branded header -->
                <tr>
                  <td align="center" style="padding: 34px 24px 30px; background: ${brand.ocean}; border-radius: 10px 10px 0 0;">
                    <p style="margin: 0; color: ${brand.ivory}; font-family: Georgia, 'Times New Roman', serif; font-size: 29px; letter-spacing: 3px;">
                      SWAHILI BEACH
                    </p>
                    <p style="margin: 8px 0 0; color: ${brand.sand}; font-size: 10px; letter-spacing: 3px;">
                      RESORT · DIANI BEACH, KENYA
                    </p>
                    <div style="width: 42px; height: 1px; margin: 22px auto 18px; background: ${brand.gold};"></div>
                    <p style="margin: 0; color: ${brand.sand}; font-size: 10px; font-weight: 700; letter-spacing: 2px;">
                      NEW ENQUIRY NOTIFICATION
                    </p>
                  </td>
                </tr>

                <!-- Main content -->
                <tr>
                  <td style="padding: 34px 30px; background: ${brand.ivory};">
                    <p style="margin: 0 0 10px; color: ${brand.gold}; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">
                      ${escapeHtml(enquiryType)}
                    </p>

                    <h1 style="margin: 0; color: ${brand.ocean}; font-family: Georgia, 'Times New Roman', serif; font-size: 32px; line-height: 1.2; font-weight: 400;">
                      A new enquiry has arrived.
                    </h1>

                    <p style="margin: 16px 0 0; color: ${brand.muted}; font-size: 14px; line-height: 1.7;">
                      A guest has submitted an enquiry through the Swahili Beach Resort website. Review the details below and follow up with them.
                    </p>

                    ${createSection("Enquiry details", enquiryRows)}
                    ${createSection("Guest contact", contactRows)}

                    <div style="margin-top: 24px; padding: 22px; background: ${brand.white}; border: 1px solid ${brand.sand}; border-radius: 8px;">
                      <h2 style="margin: 0 0 12px; color: ${brand.ocean}; font-family: Georgia, 'Times New Roman', serif; font-size: 21px; font-weight: 400;">
                        Additional message
                      </h2>
                      <p style="margin: 0; color: ${brand.charcoal}; font-size: 14px; line-height: 1.8; white-space: pre-wrap; overflow-wrap: anywhere;">
                        ${escapeHtml(message)}
                      </p>
                    </div>

                    <div style="margin-top: 24px; padding: 18px 20px; background: ${brand.ocean}; border-radius: 8px; text-align: center;">
                      <p style="margin: 0 0 12px; color: ${brand.ivory}; font-family: Georgia, 'Times New Roman', serif; font-size: 19px;">
                        Ready to respond?
                      </p>
                      <a
                        href="mailto:${escapeHtml(booking.email)}?subject=${encodeURIComponent(`Re: ${subject}`)}"
                        style="display: inline-block; padding: 12px 22px; background: ${brand.gold}; color: ${brand.white}; font-size: 12px; font-weight: 700; letter-spacing: 0.5px; text-decoration: none; border-radius: 4px;"
                      >
                        REPLY TO GUEST
                      </a>
                    </div>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 20px;">
                      <tr>
                        <td style="padding: 8px 0; color: ${brand.muted}; font-size: 12px;">
                          Enquiry source
                        </td>
                        <td align="right" style="padding: 8px 0; color: ${brand.charcoal}; font-size: 12px; font-weight: 600;">
                          ${escapeHtml(source)}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: ${brand.muted}; font-size: 12px;">
                          Privacy policy accepted
                        </td>
                        <td align="right" style="padding: 8px 0; color: ${brand.charcoal}; font-size: 12px; font-weight: 600;">
                          ${booking.privacyAccepted ? "Yes" : "No"}
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 22px 0 0; color: ${brand.muted}; font-size: 11px; line-height: 1.6; text-align: center;">
                      This is an automated website notification. It is not a confirmed reservation or booking.
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td align="center" style="padding: 24px; background: ${brand.ocean}; border-radius: 0 0 10px 10px;">
                    <p style="margin: 0; color: ${brand.ivory}; font-family: Georgia, 'Times New Roman', serif; font-size: 16px; letter-spacing: 1px;">
                      SWAHILI BEACH RESORT
                    </p>
                    <p style="margin: 8px 0 0; color: ${brand.sand}; font-size: 11px;">
                      Diani Beach · Kenya
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const textSections = [
    "SWAHILI BEACH RESORT",
    "DIANI BEACH, KENYA",
    "",
    "NEW ENQUIRY NOTIFICATION",
    "",
    `Enquiry type: ${enquiryType}`,
    `Reference: ${booking.itemName || "Not specified"}`,
    `Source: ${source}`,
    "",
    "ENQUIRY DETAILS",
    ...enquiryRows.map(({ label, value }) => `${label}: ${value}`),
    "",
    "GUEST CONTACT",
    ...contactRows.map(({ label, value }) => `${label}: ${value}`),
    "",
    "ADDITIONAL MESSAGE",
    message,
    "",
    `Privacy policy accepted: ${booking.privacyAccepted ? "Yes" : "No"}`,
    "",
    "This is an automated website notification. It is not a confirmed reservation or booking.",
  ];

  return { subject, html, text: textSections.join("\n") };
}
