"use client";

import Button from "@/components/ui/Button";
import { useBooking } from "@/components/booking/BookingProvider";

export default function BookingHeaderButton() {
  const { openBooking } = useBooking();

  return (
    <Button
      variant="primary"
      arrow
      onClick={() =>
        openBooking({
          type: "stay",
          source: "Main navigation",
        })
      }
    >
      Book Your Stay
    </Button>
  );
}
