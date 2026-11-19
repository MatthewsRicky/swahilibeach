import Image from "next/image";
import { Clock3, ArrowUpRight } from "lucide-react";
import { diningVenues } from "@/data/dining";

export default function DiningVenues() {
  return (
    <section id="dining-venues" className="bg-white">
      {diningVenues.map((venue, index) => {
        const imageOnLeft = index % 2 === 0;

        return (
          <article
            key={venue.number}
            id={venue.name
              .toLowerCase()
              .replaceAll(" ", "-")
              .replaceAll("&", "and")}
            className="border-b border-charcoal/10 py-16 sm:py-20 lg:py-28"
          >
            <div className="container">
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                  imageOnLeft ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                <div className="relative">
                  <div className="relative aspect-square overflow-hidden bg-sand">
                    <Image
                      src={venue.image}
                      alt={venue.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>

                  <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center bg-ocean/90 font-sans text-xs tracking-widest text-white">
                    {venue.number}
                  </span>
                </div>

                <div className="py-2 lg:py-8">
                  <span className="text-eyebrow text-gold">
                    {venue.category}
                  </span>

                  <div className="mt-5 flex min-h-24 items-center">
                    <Image
                      src={venue.logo}
                      alt={venue.logoAlt}
                      width={420}
                      height={160}
                      sizes="(max-width: 1024px) 70vw, 360px"
                      className="h-auto max-h-24 w-auto max-w-[280px] object-contain object-left sm:max-w-[340px]"
                    />
                  </div>

                  <h1 className="text-gold/90 font-bold text-3xl py-5 underline-offset-4 underline">{venue.title}</h1>

                  <h2 className="sr-only">{venue.name}</h2>

                  <div className="mt-7 max-w-xl space-y-5 text-sm leading-8 text-charcoal/75">
                    <p>{venue.description}</p>
                  </div>

                  <div className="mt-8 border-y border-charcoal/10 py-5">
                    <div className="flex items-start gap-3">
                      <Clock3
                        size={19}
                        strokeWidth={1.4}
                        className="mt-1 shrink-0 text-gold"
                      />

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ocean">
                          Opening hours
                        </p>

                        <p className="mt-2 text-sm text-charcoal/75">
                          {venue.hours}
                        </p>

                        {venue.additionalInfo && (
                          <p className="mt-1 text-sm text-charcoal/60">
                            {venue.additionalInfo}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {venue.menuLinks && venue.menuLinks.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4">
                      {venue.menuLinks.map((menu) => (
                        <a
                          key={menu.label}
                          href={menu.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 border-b border-gold pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ocean transition-colors hover:text-gold"
                        >
                          {menu.label}
                          <ArrowUpRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
