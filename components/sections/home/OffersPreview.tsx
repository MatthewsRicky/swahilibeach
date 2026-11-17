import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import FadeUp from "@/components/animations/FadeUp";

const offers = [
  {
    number: "01",
    title: "Bridal Shower Offer",
    image: "/images/offers/bridal-shower.png",
  },
  {
    number: "02",
    title: "Girls Getaway",
    image: "/images/offers/girls-getaway.png",
  },
  {
    number: "03",
    title: "Guys Weekend",
    image: "/images/offers/guys-weekend.png",
  },
  {
    number: "04",
    title: "2-Night Family Break",
    image: "/images/offers/family-break.jpg",
  },
];

export default function OffersPreview() {
  return (
    <section className="bg-ocean py-[var(--section-space)] text-white">
      <Container>
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <FadeUp>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Something special awaits
            </p>

            <h2 className="max-w-2xl font-display text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
              Exceptional stays.
              <span className="block text-white/55">Thoughtful offers.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="max-w-md text-sm leading-8 text-white/65">
              Whether celebrating a special occasion, escaping with friends or
              enjoying time together as a family, discover an offer for your
              next coastal getaway.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {offers.map((offer, index) => (
            <FadeUp key={offer.number} delay={index * 0.1}>
              <Link href="/special-offers" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-white/10">
                  <Image
                    src={offer.image}
                    alt={`${offer.title} promotional poster`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex items-center justify-between gap-3 border-b border-white/20 py-5">
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                      Offer {offer.number}
                    </p>

                    <h3 className="font-display text-2xl font-medium text-white transition-colors group-hover:text-gold">
                      {offer.title}
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-gold group-hover:bg-gold">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="mt-12 flex justify-center">
            <Link
              href="/special-offers"
              className="inline-flex items-center gap-4 border border-white/35 px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-gold hover:bg-gold"
            >
              Explore all special offers
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
