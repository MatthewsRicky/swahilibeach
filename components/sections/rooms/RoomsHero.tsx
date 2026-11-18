import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function RoomsHero() {
  return (
    <section className="relative flex min-h-[480px] items-end overflow-hidden bg-ocean md:min-h-[560px] lg:min-h-[640px]">
      <Image
        src="/images/rooms/superior.png"
        alt="Luxury accommodation at Swahili Beach Resort"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />

      <div className="container relative z-10 pb-16 pt-32 md:pb-20 lg:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-xs tracking-wide text-white/75"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight size={13} />
          <span className="text-white">Rooms</span>
        </nav>

        <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold">
          Luxury accommodation
        </p>

        <h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
          Rooms &amp; Suites
        </h1>

        <p className="mt-7 max-w-xl text-sm leading-7 text-white/85 md:text-base">
          Discover a more refined way to stay, where Swahili heritage,
          thoughtful comfort and coastal elegance come together.
        </p>
      </div>
    </section>
  );
}
