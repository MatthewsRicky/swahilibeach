
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import ImageReveal from "@/components/ui/ImageReveal";

const featuredRooms = [
  {
    name: "Standard Room",
    size: "59 m²",
    description:
      "Thoughtfully designed spaces with elegant Swahili furnishings, private balconies and everything you need for a relaxing coastal stay.",
    image: "/images/rooms/standard.png",
    imageAlt: "Standard Room at Swahili Beach Resort",
    number: "01",
  },
  {
    name: "Superior Room",
    size: "66 m²",
    description:
      "More room to unwind, with additional Baraza beds and a comfortable setting suited to couples and families.",
    image: "/images/rooms/superior.png",
    imageAlt: "Superior Room at Swahili Beach Resort",
    number: "02",
  },
  {
    name: "Executive Suite",
    size: "134 m²",
    description:
      "Expansive living spaces featuring a separate lounge, dining area, private kitchenette and balcony.",
    image: "/images/rooms/executive.png",
    imageAlt: "Executive Suite at Swahili Beach Resort",
    number: "03",
  },
];

export default function RoomsPreview() {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
      <div className="container">
        {/* Section introduction */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <FadeUp>
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <span className="text-eyebrow text-gold">
                  The art of staying
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-ocean sm:text-6xl lg:text-7xl">
                Spaces to unwind.
                <span className="block italic text-gold">
                  Moments to remember.
                </span>
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <p className="max-w-md text-sm leading-8 text-charcoal/70 sm:text-base">
              Discover thoughtfully appointed rooms and suites where
              Swahili-inspired design, generous spaces and modern comforts come
              together.
            </p>
          </FadeUp>
        </div>

        {/* Featured accommodation */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {featuredRooms.map((room, index) => (
            <FadeUp key={room.number} delay={index * 0.12}>
              <article className="group">
                <Link
                  href="/rooms"
                  aria-label={`Explore ${room.name}`}
                  className="block"
                >
                  <div className="relative mb-7 overflow-hidden bg-ivory">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <ImageReveal
                        src={room.image}
                        alt={room.imageAlt}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-white/70 bg-ocean/60 font-display text-lg text-white backdrop-blur-sm">
                      {room.number}
                    </span>

                    <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-ocean transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl font-medium text-ocean transition-colors duration-300 group-hover:text-gold sm:text-4xl">
                        {room.name}
                      </h3>

                      <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-charcoal/50">
                        {room.size}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-charcoal/65">
                    {room.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-ocean transition-colors duration-300 group-hover:text-gold">
                    Explore room
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </article>
            </FadeUp>
          ))}
        </div>

        {/* All accommodation CTA */}
        <FadeUp delay={0.2}>
          <div className="mt-16 flex justify-center border-t border-charcoal/10 pt-10">
            <Link
              href="/rooms"
              className="group inline-flex min-h-[54px] items-center gap-5 bg-ocean px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-gold"
            >
              Explore all rooms & suites
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
