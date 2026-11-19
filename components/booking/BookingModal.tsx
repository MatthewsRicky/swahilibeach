"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";

import { useBooking } from "@/components/booking/BookingProvider";
import type { BookingType } from "@/types/booking";
import BookingForm from "@/components/booking/BookingForm";

const bookingTitles: Record<BookingType, string> = {
  stay: "Plan your stay",
  offer: "Enquire about an offer",
  wedding: "Plan your wedding",
  conference: "Plan your event",
  dining: "Discover our dining",
  spa: "Enquire about the spa",
  general: "Get in touch",
};

const bookingDescriptions: Record<BookingType, string> = {
  stay: "Tell us a little about your visit and our team will help you plan your stay.",
  offer:
    "Let us know which offer interests you and when you would like to visit.",
  wedding:
    "Share your wedding plans with us and let's start creating something memorable.",
  conference: "Tell us about your meeting or event requirements.",
  dining: "Let us help you plan a memorable dining experience.",
  spa: "Tell us about the experience you are interested in.",
  general: "Send us your enquiry and our team will be happy to assist.",
};

export default function BookingModal() {
  const { isOpen, bookingContext, closeBooking } = useBooking();

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  const type = bookingContext.type ?? "stay";

  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeBooking();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [isOpen, closeBooking]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/70 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeBooking();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden bg-ivory shadow-2xl"
      >
        {/* Modal header */}
        <div className="relative border-b border-charcoal/10 px-6 py-7 sm:px-10 sm:py-9">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeBooking}
            aria-label="Close booking enquiry"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center text-charcoal/70 transition-colors hover:bg-gold hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <X size={21} strokeWidth={1.5} />
          </button>

          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
            Swahili Beach Resort
          </p>

          <h2
            id={titleId}
            className="max-w-lg font-display text-4xl leading-none text-ocean sm:text-5xl"
          >
            {bookingTitles[type]}
          </h2>

          <p
            id={descriptionId}
            className="mt-4 max-w-lg text-sm leading-7 text-charcoal/70"
          >
            {bookingDescriptions[type]}
          </p>

          {bookingContext.itemName && (
            <p className="mt-4 inline-flex border border-gold/40 px-3 py-2 text-xs text-charcoal">
              Enquiry:{" "}
              <span className="ml-1 font-medium">
                {bookingContext.itemName}
              </span>
            </p>
          )}
        </div>

        {/* Form content will be added next */}
        <div className="overflow-y-auto px-6 py-8 sm:px-10 sm:py-10">
          <BookingForm context={bookingContext} onClose={closeBooking} />
        </div>
      </div>
    </div>
  );
}
