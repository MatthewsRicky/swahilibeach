"use client";

import type { ReactNode } from "react";

import { useBooking } from "@/components/booking/BookingProvider";
import type { BookingContext } from "@/types/booking";

type BookingTriggerProps = {
  children: ReactNode;
  context?: BookingContext;
  className?: string;
  ariaLabel?: string;
};

export default function BookingTrigger({
  children,
  context,
  className,
  ariaLabel,
}: BookingTriggerProps) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => openBooking(context)}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
