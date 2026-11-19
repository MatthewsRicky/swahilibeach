import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function CulinaryHero() {
  return (
    <section className="relative flex min-h-[540px] items-end overflow-hidden bg-ocean sm:min-h-[620px] lg:min-h-[700px]">
      <Image
        src="/images/hd/SWAHILI-BEACH-12-rest.jpg"
        alt="Dining experience at Swahili Beach Resort"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-ocean/80 via-ocean/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ocean/65 via-transparent to-transparent" />

      <div className="container relative z-10 pb-16 pt-36 sm:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          <div className="mb-7 flex items-center gap-3 text-xs text-white/80">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-white">Culinary Finds</span>
          </div>

          <span className="text-eyebrow text-gold">A taste of the coast</span>

          <h1 className="mt-5 font-display text-5xl leading-[0.98] text-white sm:text-6xl lg:text-8xl">
            Slice of
            <br />
            Paradise.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
            Discover a collection of distinctive dining experiences, where
            Swahili heritage, international flavours and coastal hospitality
            come together.
          </p>

          <Link
            href="#dining-venues"
            className="mt-9 inline-flex items-center gap-3 border-b border-gold pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:text-gold"
          >
            Discover our restaurants
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
