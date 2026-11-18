"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { rooms } from "@/data/rooms";
import type { Room } from "@/types/room";
import BookingModal from "@/components/booking/BookingModal";
import FadeUp from "@/components/animations/FadeUp";

export default function RoomsCollection() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <>
      <section className="section-padding bg-white">
        <div className="container">
          <FadeUp>
            <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-eyebrow mb-4 text-gold">
                  Find your perfect stay
                </p>

                <h2 className="font-display text-4xl font-medium leading-tight text-charcoal md:text-5xl lg:text-6xl">
                  Discover our rooms & suites.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-foreground-muted md:text-base">
                  From intimate retreats to expansive suites, discover
                  accommodation designed to make every moment of your stay
                  memorable.
                </p>
              </div>

              <p className="shrink-0 text-xs uppercase tracking-[0.2em] text-foreground-muted">
                Five ways to stay
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-y-16">
            {rooms.map((room, index) => (
              <FadeUp
                key={room.slug}
                delay={index * 0.08}
                className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
              >
                <button
                  type="button"
                  onClick={() => setSelectedRoom(room)}
                  aria-label={`Book ${room.name}`}
                  className="group block h-full w-full text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                    <Image
                      src={room.image}
                      alt={room.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                    <span className="absolute left-5 top-5 text-xs tracking-[0.2em] text-white">
                      0{index + 1}
                    </span>

                    <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 group-hover:border-gold group-hover:bg-gold">
                      <ArrowUpRight size={19} strokeWidth={1.5} />
                    </span>
                  </div>

                  <div className="flex flex-col pt-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-display text-2xl font-medium text-charcoal md:text-3xl">
                        {room.name}
                      </h3>

                      <p className="shrink-0 pt-2 text-xs text-foreground-muted">
                        From{" "}
                        <span className="font-medium text-charcoal">
                          ${room.priceFrom}
                        </span>
                      </p>
                    </div>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-foreground-muted">
                      {room.description}
                    </p>

                    <span className="mt-6 inline-flex w-fit items-center gap-3 border-b border-gold pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors group-hover:text-gold">
                      Book Now
                      <ArrowUpRight size={15} strokeWidth={1.5} />
                    </span>
                  </div>
                </button>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {selectedRoom && (
        <BookingModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </>
  );
}
