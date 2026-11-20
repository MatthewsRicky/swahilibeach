"use client";

import type { ReactNode } from "react";

import { useBooking } from "@/components/booking/BookingProvider";
import type { BookingContext } from "@/types/booking";

type BookingActionProps = {
  children: ReactNode;
  context?: BookingContext;
  className?: string;
};

export default function BookingAction({
  children,
  context = {
    type: "general",
    source: "Website enquiry CTA",
  },
  className,
}: BookingActionProps) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => openBooking(context)}
      className={className}
    >
      {children}
    </button>
  );
}
