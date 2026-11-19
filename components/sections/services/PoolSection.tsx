import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const pools = [
  {
    number: "01",
    name: "The Main Pool",
    description:
      "Enjoy the resort's cascading pool experience, surrounded by tropical gardens and spaces to unwind.",
    image: "/images/hd/package-images-swahili-beach.jpg",
    imageAlt: "The cascading main swimming pool at Swahili Beach Resort",
    className: "md:col-span-7",
  },
  {
    number: "02",
    name: "Infinity Pool",
    description:
      "Take in the views of Diani Beach from the resort's infinity pool, where the poolside experience meets the Indian Ocean.",
    image: "/images/pools/DJI_0147-1024x764.jpg",
    imageAlt: "Infinity pool overlooking Diani Beach",
    className: "md:col-span-5 md:mt-24",
  },
  {
    number: "03",
    name: "Children's Pool",
    description:
      "A dedicated pool space for younger guests to enjoy during their stay.",
    image: "/images/pools/act-1.png",
    imageAlt: "Children's swimming pool at Swahili Beach Resort",
    className: "md:col-span-7 md:col-start-3",
  },
];

export default function PoolsSection() {
  return (
    <section id="pools" className="section-padding overflow-hidden bg-ivory">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-eyebrow mb-5 text-gold">Poolside living</p>

          <h2 className="text-4xl leading-[1.08] font-medium text-ocean sm:text-5xl lg:text-6xl">
            Find your own
            <span className="block italic font-normal">place in the sun.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-foreground-muted">
            From the resort's cascading pools to its infinity pool overlooking
            Diani Beach, discover inviting spaces to slow down, cool off and
            enjoy the coastal atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12 md:gap-y-24">
          {pools.map((pool) => (
            <article key={pool.number} className={`group ${pool.className}`}>
              <div className="relative aspect-[5/4] overflow-hidden bg-sand">
                <Image
                  src={pool.image}
                  alt={pool.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                <span className="absolute top-5 left-5 bg-ivory px-4 py-2 text-xs tracking-[0.15em] text-ocean">
                  {pool.number}
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-md">
                  <h3 className="font-display text-3xl font-medium text-ocean sm:text-4xl">
                    {pool.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-foreground-muted sm:text-base">
                    {pool.description}
                  </p>
                </div>

                <span className="mt-1 hidden text-xs tracking-[0.2em] text-gold sm:block">
                  {pool.number}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-charcoal/10 pt-8 sm:flex-row">
          <p className="max-w-lg text-sm leading-7 text-foreground-muted">
            Make the most of your stay with a little time by the water.
          </p>

          <Link
            href="/rooms"
            className="group inline-flex items-center gap-3 border-b border-gold pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ocean transition-colors hover:text-gold"
          >
            Discover your stay
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
