import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function FinalCtaSection() {
  return (
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-charcoal py-28 md:min-h-[680px]">
      {/* Background image */}
      <Image
        src="/images/hero/cta-resort.jpg"
        alt="Swahili Beach Resort overlooking the Indian Ocean"
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Image overlay */}
      <div className="absolute inset-0 -z-0 bg-charcoal/55" />
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-charcoal/75 via-charcoal/40 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Your coastal escape awaits
          </span>

          <h2 className="mt-7 font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Make room for
            <br />
            <span className="italic text-gold">something beautiful.</span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/80 md:text-lg">
            From the warmth of Swahili hospitality to the serenity of the Indian
            Ocean, discover a stay shaped around unforgettable moments. Your
            time in Diani begins here.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/rooms"
              className="group inline-flex min-h-14 items-center justify-center gap-4 bg-gold px-8 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-white hover:text-charcoal"
            >
              Explore Rooms & Suites
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact-us"
              className="group inline-flex min-h-14 items-center justify-center gap-3 border border-white/50 px-8 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-charcoal"
            >
              Enquire With Us
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </Container>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold/40 to-transparent" />
    </section>
  );
}
