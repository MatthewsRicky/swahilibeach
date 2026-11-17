import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";
import ImageReveal from "@/components/ui/ImageReveal";

export default function IntroductionSection() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Editorial content */}
          <div className="order-2 max-w-xl lg:order-1">
            <FadeUp>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <span className="text-eyebrow text-gold">
                  Welcome to Swahili Beach
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-ocean sm:text-6xl lg:text-7xl">
                Discover Diani&apos;s
                <span className="block italic text-gold">timeless charm.</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-8 max-w-lg text-base leading-8 text-charcoal/75 sm:text-lg">
                Where the spirit of Swahili heritage meets the beauty of the
                Indian Ocean, Swahili Beach Resort offers a distinctive coastal
                escape.
              </p>

              <p className="mt-5 max-w-lg text-sm leading-8 text-charcoal/65">
                Set along the white sands of Diani Beach, the resort brings
                together striking architecture, thoughtful hospitality and
                experiences inspired by the rich culture of Kenya&apos;s coast.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <Link
                href="/about-us"
                className="group mt-10 inline-flex items-center gap-4 border-b border-gold pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ocean transition-colors duration-300 hover:text-gold"
              >
                Discover the resort
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </FadeUp>

            {/* Small editorial detail */}
            <FadeUp delay={0.4}>
              <div className="mt-16 hidden border-t border-charcoal/15 pt-6 sm:block">
                <p className="font-display text-2xl italic text-ocean/70">
                  A contemporary Swahili experience.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Photography composition */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-[580px] pb-16 pl-8 sm:pl-12">
              {/* Main photograph */}
              <ImageReveal
                src="/images/architecture/highlights-119-1-2.jpg"
                alt="Swahili-inspired architecture at Swahili Beach Resort"
                aspectRatio="4 / 5"
                className="w-full shadow-lg shadow-black/35 rounded-md"
                imageClassName="object-center"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />

              {/* Secondary photograph */}
              <div className="absolute bottom-0 left-0 w-[48%] border-[8px] border-ivory sm:border-[12px]">
                <ImageReveal
                  src="/images/pools/DJI_0147-1024x764.jpg"
                  alt="The cascading swimming pools at Swahili Beach Resort"
                  aspectRatio="1 / 1"
                  className="w-full shadow-md shadow-black/40 rounded-sm"
                  sizes="(max-width: 1024px) 45vw, 22vw"
                />
              </div>

              {/* Decorative marker */}
              <div className="absolute right-0 top-0 -z-10 h-28 w-28 border-r border-t border-gold/50 sm:h-36 sm:w-36" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
