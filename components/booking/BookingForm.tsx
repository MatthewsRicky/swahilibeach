"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, LoaderCircle } from "lucide-react";

import BookingProgress from "@/components/booking/BookingProgress";
import BookingSuccess from "@/components/booking/BookingSuccess";
import ContactFields from "@/components/booking/fields/ContactFields";
import EventFields from "@/components/booking/fields/EventFields";
import StayFields from "@/components/booking/fields/StayFields";

import { bookingSchema } from "@/lib/schemas/booking";
import {
  defaultBookingValues,
  type BookingContext,
  type BookingFormValues,
  type BookingType,
} from "@/types/booking";

type BookingFormProps = {
  context: BookingContext;
  onClose: () => void;
};

const inputClass =
  "mt-2 w-full border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-gold";

const stepTitles: Record<BookingType, string> = {
  stay: "Your stay",
  offer: "Your preferred dates",
  wedding: "Your celebration",
  conference: "Your event",
  dining: "Your dining experience",
  spa: "Your spa experience",
  general: "Your enquiry",
};

export default function BookingForm({ context, onClose }: BookingFormProps) {
  const type = context.type ?? "stay";

  const [values, setValues] = useState<BookingFormValues>({
    ...defaultBookingValues,
    type,
    itemName: context.itemName ?? "",
  });

  const [step, setStep] = useState<1 | 2>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [website, setWebsite] = useState("");

  const updateField = <K extends keyof BookingFormValues>(
    field: K,
    value: BookingFormValues[K],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));

    setErrors((current) => {
      if (!current[field]) return current;

      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validateFirstStep = () => {
    const nextErrors: Record<string, string> = {};

    if (type === "stay" || type === "offer") {
      if (!values.checkIn) {
        nextErrors.checkIn = "Please select a check-in date.";
      }

      if (!values.checkOut) {
        nextErrors.checkOut = "Please select a check-out date.";
      } else if (values.checkIn && values.checkOut <= values.checkIn) {
        nextErrors.checkOut = "Check-out must be after check-in.";
      }
    }

    if (type === "wedding" || type === "conference") {
      if (!values.eventDate) {
        nextErrors.eventDate = "Please select a preferred event date.";
      }

      if (values.guestCount < 1) {
        nextErrors.guestCount = "Please enter an approximate guest count.";
      }
    }

    if (type === "dining" || type === "spa") {
      if (!values.experience.trim()) {
        nextErrors.experience = "Please select an experience.";
      }
    }

    if (type === "general" && !values.message.trim()) {
      nextErrors.message = "Please tell us a little about your enquiry.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return false;

    return true;
  };

  const handleContinue = () => {
    if (!validateFirstStep()) return;

    setSubmissionError("");
    setStep(2);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const result = bookingSchema.safeParse(values);

    if (!result.success) {
      const nextErrors: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        const field = String(issue.path[0]);

        if (!nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      });

      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmissionError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...result.data,
          source: context.source ?? "Website",
          website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "We could not send your enquiry. Please try again.",
        );
      }

      setIsSuccessful(true);
    } catch (error) {
      setSubmissionError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccessful) {
    return (
      <BookingSuccess
        type={type}
        itemName={context.itemName}
        onClose={onClose}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="booking-website">Leave this field empty</label>

        <input
          id="booking-website"
          type="text"
          name="website"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <BookingProgress currentStep={step} />

      <div className="mb-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
          Step {step} of 2
        </p>

        <h3 className="mt-2 font-display text-3xl text-ocean">
          {step === 1 ? stepTitles[type] : "Your contact details"}
        </h3>

        <p className="mt-2 text-xs leading-6 text-charcoal/55">
          {step === 1
            ? "Tell us what you have in mind."
            : "How can our team get in touch with you?"}
        </p>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          {(type === "stay" || type === "offer") && (
            <StayFields
              values={values}
              updateField={updateField}
              errors={errors}
            />
          )}

          {(type === "wedding" || type === "conference") && (
            <EventFields
              type={type}
              values={values}
              updateField={updateField}
            />
          )}

          {(type === "dining" || type === "spa") && (
            <div className="space-y-5">
              <label className="block text-xs font-medium text-charcoal">
                {type === "dining"
                  ? "Dining experience"
                  : "Preferred spa experience"}
                <select
                  value={values.experience}
                  onChange={(event) =>
                    updateField("experience", event.target.value)
                  }
                  className={inputClass}
                >
                  <option value="">Please select</option>
                  {type === "dining" ? (
                    <>
                      <option value="Majilis Restaurant">
                        Majilis Restaurant
                      </option>
                      <option value="Spice Route">Spice Route</option>
                      <option value="Barharini">Barharini</option>
                      <option value="Zanzibar Restaurant">
                        Zanzibar Restaurant
                      </option>
                      <option value="The Deck">The Deck</option>
                      <option value="Kahawa Lounge">Kahawa Lounge</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </>
                  ) : (
                    <>
                      <option value="Massage">Massage</option>
                      <option value="Couples treatment">
                        Couples treatment
                      </option>
                      <option value="Facial">Facial</option>
                      <option value="Wellness experience">
                        Wellness experience
                      </option>
                      <option value="Not sure yet">Not sure yet</option>
                    </>
                  )}
                </select>
                {errors.experience && (
                  <span className="mt-1 block text-xs text-red-700">
                    {errors.experience}
                  </span>
                )}
              </label>

              <div className="border border-charcoal/10 bg-white px-5 py-2">
                <div className="flex items-center justify-between gap-4 py-3">
                  <span className="text-sm text-charcoal">
                    Number of guests
                  </span>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      disabled={values.partySize <= 1}
                      onClick={() =>
                        updateField("partySize", values.partySize - 1)
                      }
                      className="flex h-8 w-8 items-center justify-center border border-charcoal/20 text-ocean disabled:opacity-30"
                      aria-label="Decrease party size"
                    >
                      −
                    </button>
                    <span className="w-5 text-center text-sm tabular-nums">
                      {values.partySize}
                    </span>
                    <button
                      type="button"
                      disabled={values.partySize >= 100}
                      onClick={() =>
                        updateField("partySize", values.partySize + 1)
                      }
                      className="flex h-8 w-8 items-center justify-center border border-charcoal/20 text-ocean disabled:opacity-30"
                      aria-label="Increase party size"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <label className="block text-xs font-medium text-charcoal">
                Preferred date
                <input
                  type="date"
                  value={values.eventDate}
                  onChange={(event) =>
                    updateField("eventDate", event.target.value)
                  }
                  min={new Date().toISOString().split("T")[0]}
                  className={inputClass}
                />
              </label>
            </div>
          )}

          {type === "general" && (
            <label className="block text-xs font-medium text-charcoal">
              How can we help? *
              <textarea
                rows={5}
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Tell us what you would like to know..."
                className={`${inputClass} resize-y`}
              />
              {errors.message && (
                <span className="mt-1 block text-xs text-red-700">
                  {errors.message}
                </span>
              )}
            </label>
          )}
        </div>
      )}

      {step === 2 && (
        <ContactFields
          values={values}
          updateField={updateField}
          errors={errors}
        />
      )}

      {submissionError && (
        <p
          role="alert"
          className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-xs leading-6 text-red-800"
        >
          {submissionError}
        </p>
      )}

      <div className="mt-9 flex items-center justify-between gap-4 border-t border-charcoal/10 pt-6">
        {step === 2 ? (
          <button
            type="button"
            onClick={() => {
              setErrors({});
              setSubmissionError("");
              setStep(1);
            }}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal/65 transition-colors hover:text-gold disabled:opacity-40"
          >
            <ArrowLeft size={15} />
            Back
          </button>
        ) : (
          <span className="text-[11px] text-charcoal/45">
            * Required information
          </span>
        )}

        {step === 1 ? (
          <button
            type="button"
            onClick={handleContinue}
            className="inline-flex items-center gap-3 bg-ocean px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold"
          >
            Continue
            <ArrowRight size={15} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-3 bg-ocean px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                Sending
                <LoaderCircle size={16} className="animate-spin" />
              </>
            ) : (
              <>
                Send enquiry
                <ArrowRight size={15} />
              </>
            )}
          </button>
        )}
      </div>

      <p className="mt-5 text-center text-[10px] leading-5 text-charcoal/45">
        Sending an enquiry does not confirm a booking or guarantee availability.
      </p>
    </form>
  );
}
