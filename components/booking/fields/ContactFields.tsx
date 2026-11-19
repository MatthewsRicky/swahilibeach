import type { BookingFormValues } from "@/types/booking";

type ContactFieldsProps = {
  values: BookingFormValues;
  updateField: <K extends keyof BookingFormValues>(
    field: K,
    value: BookingFormValues[K],
  ) => void;
  errors: Record<string, string>;
};

const inputClass =
  "mt-2 w-full border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-gold";

export default function ContactFields({
  values,
  updateField,
  errors,
}: ContactFieldsProps) {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-xs font-medium text-charcoal">
          Full name *
          <input
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your full name"
            className={inputClass}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <span className="mt-1 block text-xs text-red-700">
              {errors.name}
            </span>
          )}
        </label>

        <label className="block text-xs font-medium text-charcoal">
          Email address *
          <input
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <span className="mt-1 block text-xs text-red-700">
              {errors.email}
            </span>
          )}
        </label>
      </div>

      <label className="block text-xs font-medium text-charcoal">
        Phone / WhatsApp number *
        <input
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder="+254 ..."
          className={inputClass}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <span className="mt-1 block text-xs text-red-700">
            {errors.phone}
          </span>
        )}
      </label>

      <label className="block text-xs font-medium text-charcoal">
        Additional requests
        <textarea
          rows={4}
          maxLength={2000}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Is there anything else you would like us to know?"
          className={`${inputClass} resize-y`}
        />
        <span className="mt-1 block text-right text-[11px] text-charcoal/45">
          {values.message.length}/2000
        </span>
      </label>

      <div>
        <label className="flex items-start gap-3 text-xs leading-6 text-charcoal/70">
          <input
            type="checkbox"
            checked={values.privacyAccepted}
            onChange={(event) =>
              updateField("privacyAccepted", event.target.checked)
            }
            className="mt-1 accent-gold"
          />
          <span>
            I have read and agree to the{" "}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ocean underline underline-offset-4 hover:text-gold"
            >
              Privacy Policy
            </a>
            . *
          </span>
        </label>

        {errors.privacyAccepted && (
          <span className="mt-1 block text-xs text-red-700">
            {errors.privacyAccepted}
          </span>
        )}
      </div>
    </div>
  );
}
