import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

const beachClubBenefits = [
  "Welcome drink",
  "Snack platter",
  "Mini massage",
  "Discounts on selected spa treatments",
];

export default function SpaSection() {
  return (
    <section id="spa" className="section-padding overflow-hidden bg-white">
      <div className="container">
        {/* Main spa introduction */}
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-7">
            <div className="grid grid-cols-12 items-start gap-4">
              <div className="relative col-span-8 aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/spa/spa-1.png"
                  alt="A relaxing spa treatment at Swahili Beach Resort"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 70vw, 42vw"
                  className="object-cover"
                />
              </div>

              <div className="relative col-span-4 mt-16 aspect-[3/4] overflow-hidden sm:mt-24">
                <Image
                  src="/images/spa/spa-home.jpg"
                  alt="The tranquil interior of the resort spa"
                  fill
                  quality={90}
                  sizes="(max-width: 1024px) 35vw, 22vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-5 left-4 bg-ivory px-5 py-4 sm:bottom-8 sm:left-8 sm:px-7 sm:py-5">
              <p className="font-display text-4xl leading-none text-ocean sm:text-5xl">
                06
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-foreground-muted">
                Treatment rooms
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="text-eyebrow mb-5 text-gold">Spa & wellness</p>

            <h2 className="text-4xl leading-[1.08] font-medium text-ocean sm:text-5xl lg:text-6xl">
              A quieter kind of luxury.
            </h2>

            <div className="mt-7 h-px w-16 bg-gold" />

            <p className="mt-7 text-base leading-8 text-foreground-muted">
              Boasting one of the most stunning views in the resort, the Swahili
              Beach Club & Spa offers a serene escape with its own private pool.
            </p>

            <p className="mt-5 text-base leading-8 text-foreground-muted">
              Unwind in one of six tranquil treatment rooms, where a skilled
              team of masseurs and beauticians is dedicated to soothing your
              mind, body and soul. A curated selection of treatments offers
              moments of relaxation and rejuvenation.
            </p>

            <div className="mt-9">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-3 border-b border-gold pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ocean transition-colors hover:text-gold"
              >
                Enquire about the spa
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Beach Club experience */}
        <div className="mt-24 grid overflow-hidden bg-ocean lg:mt-32 lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[480px]">
            <Image
              src="/images/pools/page-banner-amenities-1-scaled.jpg"
              alt="The private pool at the Swahili Beach Club"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <p className="text-eyebrow mb-5 text-gold">An adults-only escape</p>

            <h3 className="max-w-lg text-3xl leading-tight font-medium sm:text-4xl lg:text-5xl">
              Discover the Beach Club experience.
            </h3>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Adult guests can access the Beach Club for an additional charge,
              enjoying a peaceful adults-only space with thoughtful touches
              designed to make the experience even more special.
            </p>

            <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {beachClubBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <Check
                    size={16}
                    className="mt-1 shrink-0 text-gold"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm leading-6 text-white/90">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs leading-6 text-white/50">
              Beach Club access is subject to an additional charge.
            </p>

            <div className="mt-8">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-3 border-b border-gold pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:text-gold"
              >
                Make an enquiry
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
