"use client";

import { useEffect, useState } from "react";
import { X, CalendarDays, Users, ArrowRight } from "lucide-react";

import type { Room } from "@/types/room";

type BookingModalProps = {
  room: Room;
  onClose: () => void;
};

function getToday() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function BookingModal({ room, onClose }: BookingModalProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [message, setMessage] = useState("");

  const today = getToday();

  const validDates =
    checkIn !== "" && checkOut !== "" && checkIn >= today && checkOut > checkIn;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  function handleContinue() {
    if (!validDates) return;

    const bookingDetails = {
      room: room.name,
      checkIn,
      checkOut,
      adults: Number(adults),
      children: Number(children),
    };

    // Booking engine integration will be connected here.
    console.info("Booking request:", bookingDetails);

    setMessage(
      "Your dates and guest details are ready. Online booking will be connected here.",
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-charcoal/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative my-auto w-full max-w-2xl overflow-hidden bg-ivory shadow-2xl"
      >
        {/* Header */}
        <div className="relative bg-ocean px-6 py-8 text-white md:px-10 md:py-10">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking modal"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/10"
          >
            <X size={19} />
          </button>

          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold">
            Your stay begins here
          </p>

          <h2 id="booking-title" className="font-display text-4xl md:text-5xl">
            Plan your escape.
          </h2>

          <p className="mt-3 text-sm text-white/70">
            Selected accommodation: {room.name}
          </p>
        </div>

        {/* Booking form */}
        <div className="space-y-7 px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="check-in"
                className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal"
              >
                <CalendarDays size={16} className="text-gold" />
                Check-in
              </label>

              <input
                id="check-in"
                type="date"
                value={checkIn}
                min={today}
                onChange={(event) => {
                  setCheckIn(event.target.value);
                  setMessage("");

                  if (checkOut && event.target.value >= checkOut) {
                    setCheckOut("");
                  }
                }}
                className="w-full border border-charcoal/15 bg-white px-4 py-4 text-sm text-charcoal outline-none transition-colors focus:border-gold"
                required
              />
            </div>

            <div>
              <label
                htmlFor="check-out"
                className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal"
              >
                <CalendarDays size={16} className="text-gold" />
                Check-out
              </label>

              <input
                id="check-out"
                type="date"
                value={checkOut}
                min={checkIn || today}
                onChange={(event) => {
                  setCheckOut(event.target.value);
                  setMessage("");
                }}
                disabled={!checkIn}
                className="w-full border border-charcoal/15 bg-white px-4 py-4 text-sm text-charcoal outline-none transition-colors focus:border-gold disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
            </div>
          </div>

          <div className="border-t border-charcoal/10 pt-7">
            <div className="mb-5 flex items-center gap-2">
              <Users size={17} className="text-gold" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal">
                Guests
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="adults"
                  className="mb-2 block text-sm text-foreground-muted"
                >
                  Adults
                </label>

                <select
                  id="adults"
                  value={adults}
                  onChange={(event) => setAdults(event.target.value)}
                  className="w-full border border-charcoal/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                    <option key={number} value={number}>
                      {number}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="children"
                  className="mb-2 block text-sm text-foreground-muted"
                >
                  Children
                </label>

                <select
                  id="children"
                  value={children}
                  onChange={(event) => setChildren(event.target.value)}
                  className="w-full border border-charcoal/15 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
                >
                  {Array.from({ length: 9 }, (_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {message && (
            <p
              role="status"
              className="border border-gold/30 bg-gold/10 p-4 text-sm leading-6 text-charcoal"
            >
              {message}
            </p>
          )}

          <button
            type="button"
            onClick={handleContinue}
            disabled={!validDates}
            className="flex w-full items-center justify-center gap-3 bg-ocean px-6 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-gold disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continue to booking
            <ArrowRight size={17} />
          </button>

          <p className="text-center text-xs leading-6 text-foreground-muted">
            Availability and final rates will be confirmed through our booking
            system.
          </p>
        </div>
      </section>
    </div>
  );
}
