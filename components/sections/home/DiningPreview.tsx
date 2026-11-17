import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import FadeUp from "@/components/animations/FadeUp";

const diningExperiences = [
  {
    name: "Majilis",
    category: "Restaurant",
    image: "/images/restaurants/majilis.jpg",
  },
  {
    name: "Spice Route",
    category: "Restaurant",
    image: "/images/restaurants/6_DSC00368-scaled.jpg",
  },
  {
    name: "Barharini",
    category: "Beach Bar & Restaurant",
    image: "/images/restaurants/baharini.jpg",
  },
  {
    name: "Zanzibar",
    category: "Restaurant",
    image: "/images/restaurants/zanzi-bar.jpg",
  },
  {
    name: "Kahawa Lounge",
    category: "Lounge",
    image: "/images/restaurants/kahawa-lounge.jpg",
  },
];

export default function DiningPreview() {
  return (
    <section className="overflow-hidden bg-white py-[var(--section-space)]">
      <Container>
        <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <FadeUp>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              A taste of the coast
            </p>

            <h2 className="max-w-2xl font-display text-5xl font-medium leading-[1.05] text-ocean sm:text-6xl lg:text-7xl">
              Discover the art
              <span className="block text-charcoal/55">of dining.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="max-w-md text-sm leading-8 text-charcoal/65">
              From relaxed beachfront moments to distinctive dining experiences,
              discover a collection of venues celebrating flavour, atmosphere
              and the pleasure of good company.
            </p>
          </FadeUp>
        </div>

        {/* Featured dining image */}
        <FadeUp>
          <div className="group relative mb-12 grid min-h-[420px] overflow-hidden bg-ocean lg:min-h-[580px] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
              <Image
                src="/images/restaurants/majilis.jpg"
                alt="Dining experience at Swahili Beach Resort"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </div>

            <div className="flex flex-col justify-center px-8 py-12 text-white sm:px-12 lg:px-16">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Culinary experiences
              </p>

              <h3 className="max-w-lg font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
                Every meal,
                <br />a moment to savour.
              </h3>

              <p className="mt-6 max-w-md text-sm leading-8 text-white/70">
                Explore an inspired selection of restaurants, bars and lounges,
                each offering its own atmosphere and a memorable way to
                experience the flavours of Swahili Beach.
              </p>

              <Link
                href="/culinary-finds"
                className="mt-9 inline-flex w-fit items-center gap-4 border-b border-gold pb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:text-gold"
              >
                Explore culinary finds
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </FadeUp>

        {/* Dining venues */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="font-display text-2xl font-medium text-ocean sm:text-3xl">
            Our dining destinations
          </h3>

          <Link
            href="/culinary-finds"
            className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ocean transition-colors hover:text-gold sm:inline-flex"
          >
            View all
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-9 md:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {diningExperiences.map((venue, index) => (
            <FadeUp key={venue.name} delay={index * 0.08}>
              <Link href="/culinary-finds" className="group block">
                <div className="relative mb-5 aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={venue.image}
                    alt={`${venue.name} at Swahili Beach Resort`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold">
                  {venue.category}
                </p>

                <h4 className="mt-2 font-display text-xl font-medium text-ocean transition-colors group-hover:text-gold sm:text-2xl">
                  {venue.name}
                </h4>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
