import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CulinaryCta() {
  return (
    <section className="relative overflow-hidden bg-ocean">
      <div className="absolute inset-0">
        <Image
          src="/images/restaurants/dining-cta.jpg"
          alt="Dining by the Indian Ocean at Swahili Beach Resort"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-ocean/65" />
      </div>

      <div className="container relative z-10 py-24 text-center sm:py-32 lg:py-36">
        <span className="text-eyebrow text-gold">Your table awaits</span>

        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-7xl">
          Make every moment a little more delicious.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/75">
          Discover the flavours, settings and experiences that make dining at
          Swahili Beach Resort part of the journey.
        </p>

        <Link
          href="/contact-us"
          className="mt-9 inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-ocean"
        >
          Get in touch
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
