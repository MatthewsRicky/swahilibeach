import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import FadeUp from "@/components/animations/FadeUp";

const experiences = [
  {
    number: "01",
    category: "Relax & Rejuvenate",
    title: "Pools & Beach",
    description:
      "Find your own rhythm between the resort's cascading pools and the beautiful shores of the Indian Ocean.",
    image: "/images/pools/page-banner-amenities-1-scaled.jpg",
    imageAlt: "Swimming pool overlooking the Indian Ocean",
    href: "/things-to-do",
    layout: "large",
  },
  {
    number: "02",
    category: "Wellness & Tranquillity",
    title: "Spa & Wellness",
    description:
      "Step away from the everyday with restorative treatments and moments dedicated to your wellbeing.",
    image: "/images/spa/spa-home.jpg",
    imageAlt: "Relaxing spa treatment at Swahili Beach Resort",
    href: "/services",
    layout: "small",
  },
  {
    number: "03",
    category: "Taste & Discover",
    title: "Dining Experiences",
    description:
      "Explore distinctive culinary experiences inspired by coastal flavours and international influences.",
    image: "/images/restaurants/DSC_5875-1-3.jpg",
    imageAlt: "Beachfront dining experience at Swahili Beach Resort",
    href: "/culinary-finds",
    layout: "small",
  },
];

export default function ExperiencesPreview() {
  const [featured, ...supporting] = experiences;

  return (
    <section className="bg-ivory py-[var(--section-space)]">
      <Container>
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <FadeUp>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              More than a destination
            </p>

            <h2 className="max-w-xl font-display text-5xl font-medium leading-[1.05] text-ocean sm:text-6xl lg:text-7xl">
              Beyond the stay.
              <span className="block text-charcoal/55">
                Into the experience.
              </span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="max-w-lg text-sm leading-8 text-charcoal/65 lg:ml-auto">
              From peaceful moments by the water to exceptional dining and
              restorative wellness, discover the experiences that make every
              moment at Swahili Beach memorable.
            </p>
          </FadeUp>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          {/* Featured experience */}
          <FadeUp>
            <Link href={featured.href} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                <span className="absolute left-6 top-6 text-sm font-medium tracking-widest text-white">
                  {featured.number}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/75">
                    {featured.category}
                  </p>

                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <h3 className="font-display text-4xl font-medium sm:text-5xl">
                        {featured.title}
                      </h3>

                      <p className="mt-3 max-w-md text-sm leading-7 text-white/80">
                        {featured.description}
                      </p>
                    </div>

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-ocean transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </FadeUp>

          {/* Supporting experiences */}
          <div className="flex flex-col gap-10">
            {supporting.map((experience, index) => (
              <FadeUp key={experience.number} delay={index * 0.12}>
                <Link href={experience.href} className="group block">
                  <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-5 sm:gap-7">
                    <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                      <Image
                        src={experience.image}
                        alt={experience.imageAlt}
                        fill
                        sizes="(max-width: 640px) 40vw, 25vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="py-3">
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold sm:text-xs">
                        {experience.category}
                      </p>

                      <h3 className="font-display text-2xl font-medium leading-tight text-ocean transition-colors duration-300 group-hover:text-gold sm:text-3xl">
                        {experience.title}
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-charcoal/65 sm:text-sm sm:leading-7">
                        {experience.description}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-ocean sm:text-xs">
                        Discover more
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
