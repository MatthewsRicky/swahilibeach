"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { rooms } from "@/data/rooms";
import { useBooking } from "@/components/booking/BookingProvider";
import FadeUp from "@/components/animations/FadeUp";

export default function RoomsCTA() {
  const { openBooking } = useBooking();

  // Use the first room as the initial enquiry selection.
  const defaultRoom = rooms[0];

  return (
    <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-ocean md:min-h-[600px]">
      <Image
        src="/images/rooms/SWAHILI-BEACH-Rooms-37-1.png"
        alt="Elegant accommodation at Swahili Beach Resort"
        fill
        loading="eager"
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/35 to-transparent" />

      <div className="container relative z-10 py-24">
        <FadeUp>
          <div className="max-w-2xl">
            <p className="text-eyebrow mb-6 text-gold">Your time in paradise</p>

            <h2 className="font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Make space for something beautiful.
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-white/80 md:text-base">
              Discover the comfort of Swahili-inspired living and find the room
              that makes your time on the coast unforgettable.
            </p>

            <button
              type="button"
              onClick={() =>
                openBooking({
                  type: "stay",
                  source: "Rooms page CTA",
                  itemName: defaultRoom?.name,
                })
              }
              className="mt-10 inline-flex items-center gap-5 bg-gold px-8 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-ocean"
            >
              Book Your Stay
              <ArrowUpRight size={17} />
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
