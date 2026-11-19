import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { offers } from "@/data/offers";

export default function OffersCollection() {
  return (
    <section
      id="special-offers"
      className="section-padding scroll-mt-24 bg-white"
    >
      <div className="container">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-eyebrow">Find your occasion</span>
            <h2 className="mt-4 font-display text-5xl text-ocean sm:text-6xl">
              Our special offers
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-charcoal/65">
            A selection of escapes and getaways to inspire your next visit to
            the Kenyan coast.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-20">
          {offers.map((offer, index) => (
            <article key={offer.slug} className="group">
              <div className="relative overflow-hidden bg-ivory">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={offer.image}
                    alt={offer.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
              </div>

              <div className="flex items-start justify-between gap-5 pt-6">
                <div>
                  <span className="text-xs tracking-[0.18em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-2 font-display text-3xl text-ocean sm:text-4xl">
                    {offer.name}
                  </h3>
                </div>

                <a
                  href={`mailto:stay@swahilibeach.com?subject=${encodeURIComponent(
                    `Enquiry - ${offer.name}`,
                  )}`}
                  aria-label={`${offer.buttonLabel}: ${offer.name}`}
                  className="mt-3 flex h-11 w-11 shrink-0 items-center justify-center border border-gold/50 text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white"
                >
                  <ArrowUpRight size={19} strokeWidth={1.4} />
                </a>
              </div>

              <a
                href={`mailto:stay@swahilibeach.com?subject=${encodeURIComponent(
                  `Enquiry - ${offer.name}`,
                )}`}
                className="mt-5 inline-flex items-center gap-3 border-b border-gold pb-2 text-[11px] font-medium tracking-[0.15em] text-ocean transition-colors hover:text-gold"
              >
                {offer.buttonLabel.toUpperCase()}
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
