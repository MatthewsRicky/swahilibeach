import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function OffersHero() {
  return (
    <section className="relative flex min-h-[580px] items-end overflow-hidden bg-ocean sm:min-h-[680px] lg:min-h-[760px]">
      <Image
        src="/images/offers/30_DSC09149.png"
        alt="Swahili Beach Resort's tropical coastal setting"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 via-ocean/35 to-ocean/10" />

      <div className="container relative z-10 w-full pb-16 pt-40 text-white sm:pb-20 lg:pb-28">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-xs tracking-wide text-white/70"
        >
          <Link href="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <span className="mx-3">/</span>
          <span className="text-white">Special Offers</span>
        </nav>

        <span className="text-eyebrow text-gold">Something special awaits</span>

        <h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
          A little more
          <br />
          to look forward to.
        </h1>

        <p className="mt-7 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
          Discover a collection of special escapes and experiences at Swahili
          Beach Resort. Find an occasion to celebrate, a reason to reconnect, or
          simply an excuse to get away.
        </p>

        <Link
          href="#special-offers"
          className="mt-9 inline-flex items-center gap-4 border-b border-gold pb-3 text-xs font-medium tracking-[0.16em] text-white transition-colors hover:text-gold"
        >
          EXPLORE OUR OFFERS
          <ArrowDown size={15} strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
