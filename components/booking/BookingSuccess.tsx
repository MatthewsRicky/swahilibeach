import { Check } from "lucide-react";

import type { BookingType } from "@/types/booking";

type BookingSuccessProps = {
  type: BookingType;
  itemName?: string;
  onClose: () => void;
};

const messages: Record<BookingType, string> = {
  stay: "Thank you for your interest in staying with us.",
  offer: "Thank you for enquiring about this special offer.",
  wedding:
    "Thank you for considering Swahili Beach Resort for your celebration.",
  conference: "Thank you for considering us for your event.",
  dining: "Thank you for your dining enquiry.",
  spa: "Thank you for your spa enquiry.",
  general: "Thank you for getting in touch with us.",
};

export default function BookingSuccess({
  type,
  itemName,
  onClose,
}: BookingSuccessProps) {
  return (
    <div className="py-8 text-center sm:py-12">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
        <Check size={30} strokeWidth={1.5} />
      </div>

      <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
        Enquiry received
      </p>

      <h3 className="mt-3 font-display text-4xl text-ocean">Thank you.</h3>

      <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-charcoal/65">
        {messages[type]} Our team will review your request and get in touch
        using the contact details you provided.
      </p>

      {itemName && (
        <p className="mt-4 text-sm text-charcoal">
          Enquiry: <span className="font-medium">{itemName}</span>
        </p>
      )}

      <p className="mx-auto mt-6 max-w-md text-xs leading-6 text-charcoal/50">
        Please note that submitting an enquiry does not confirm a reservation or
        secure availability. Your arrangements will only be confirmed directly
        by the resort.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="mt-8 inline-flex items-center justify-center bg-ocean px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold"
      >
        Close
      </button>
    </div>
  );
}
