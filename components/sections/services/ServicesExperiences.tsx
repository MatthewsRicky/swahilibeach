"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

const experiences = [
  {
    id: "spa",
    number: "01",
    label: "Spa & Wellness",
    eyebrow: "A moment for yourself",
    title: "A quieter kind of luxury.",
    description:
      "Boasting one of the most stunning views in the resort, the Swahili Beach Club & Spa offers a serene escape with its own private pool. Unwind in one of our six tranquil treatment rooms, where our skilled team of masseurs and beauticians are dedicated to soothing your mind, body, and soul. With a curated selection of award-winning treatments, we provide the perfect blend of relaxation and rejuvenation. Adult guests can access the Beach Club at an extra charge to enjoy an adults only quiet area with benefits such as a welcome drink, a snack platter, a mini massage and discounts on a wide range of spa treatments.",
    image: "/images/spa/spa-1.png",
    imageAlt: "A relaxing spa treatment at Swahili Beach Resort",
    secondaryImage: "/images/spa/spa-home.jpg",
    secondaryImageAlt: "Private pool at the Swahili Beach Club",
    link: "/contact-us",
    linkLabel: "Enquire about the spa",
  },
  {
    id: "restaurant",
    number: "02",
    label: "Restaurant",
    eyebrow: "A taste of the coast",
    title: "Dining worth slowing down for.",
    description:
      "Discover a collection of formal and casual dining experiences at Swahili Beach Resort. From relaxed moments by the ocean to memorable meals in elegant surroundings, explore a variety of settings and flavours during your stay. The Resort’s restaurant offering ensures a gourmet selection of formal and casual dining to cater for every taste and desire.",
    image: "/images/hd/1-167-scaled-1.jpg",
    imageAlt: "Dining experience at Swahili Beach Resort",
    secondaryImage: "/images/hd/resto-2.png",
    secondaryImageAlt: "Beachside dining at Swahili Beach Resort",
    link: "/culinary-finds",
    linkLabel: "Explore our restaurants",
  },
  {
    id: "pool",
    number: "03",
    label: "Pools",
    eyebrow: "Poolside living",
    title: "Find your place in the sun.",
    description:
      "Enjoy the resort's cascading pools, including an infinity pool overlooking Diani Beach and a dedicated children's pool. Whether you're looking for a refreshing swim or a relaxed afternoon by the water, there's a poolside experience to enjoy - all set amid lush tropical gardens.",
    image: "/images/hd/package-images-swahili-beach.jpg",
    imageAlt: "Infinity pool overlooking Diani Beach",
    secondaryImage: "/images/hd/pool.jpg",
    secondaryImageAlt: "Cascading swimming pools at Swahili Beach Resort",
    link: "/contact-us",
    linkLabel: "Enquire about your stay",
  },
  {
    id: "activities",
    number: "04",
    label: "Activities",
    eyebrow: "Discover more",
    title: "Make every day an adventure.",
    description:
      "There's more to discover beyond the shoreline. Our guest relations team can help you explore excursions and experiences around Diani, while the resort's animation team offers engaging activities for children and relaxed options for adults. Our guest relations team is ready to help you discover unforgettable excursions and experiences. For those staying in, our friendly animation team offers just the right mix of fun —with light, engaging activities for kids and relaxed options for adults",
    image:
      "/images/activities/Swahili-Beach-Resort-by-Leah-Marie-Photography-256-scaled.jpg",
    imageAlt: "Activities and experiences at Swahili Beach Resort",
    secondaryImage: "/images/hd/Baobab-1.png",
    secondaryImageAlt: "A beach experience at Diani",
    link: "/things-to-do",
    linkLabel: "Discover things to do",
  },
];

const beachClubBenefits = [
  "Welcome drink",
  "Snack platter",
  "Mini massage",
  "Discounts on selected spa treatments",
];

export default function ServicesExperiences() {
  const [activeExperience, setActiveExperience] = useState("spa");

  const active =
    experiences.find((experience) => experience.id === activeExperience) ??
    experiences[0];

  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-36">
      <div className="container">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-eyebrow mb-5 text-gold">
            Experience Swahili Beach
          </p>

          <h2 className="text-4xl leading-[1.08] font-medium text-ocean sm:text-5xl lg:text-6xl">
            Everything you need
            <span className="block font-normal italic">
              to make the most of your stay.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-foreground-muted">
            From restorative moments to memorable experiences, discover the many
            ways to enjoy your time at the resort.
          </p>
        </div>

        {/* Experience selector */}
        <div
          className="mt-12 border-y border-charcoal/15"
          role="tablist"
          aria-label="Resort experiences"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {experiences.map((experience) => {
              const isActive = activeExperience === experience.id;

              return (
                <button
                  key={experience.id}
                  id={`tab-${experience.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="experience-panel"
                  onClick={() => setActiveExperience(experience.id)}
                  className={`relative flex min-h-20 items-center justify-center gap-3 px-3 py-5 text-center transition-colors duration-300 md:min-h-24 md:gap-4 ${
                    isActive
                      ? "text-ocean"
                      : "text-foreground-muted hover:text-ocean"
                  }`}
                >
                  <span className="hidden text-[10px] tracking-[0.15em] text-gold sm:inline">
                    {experience.number}
                  </span>

                  <span className="text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
                    {experience.label}
                  </span>

                  <span
                    className={`absolute right-4 bottom-0 left-4 h-[2px] origin-center bg-gold transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected experience */}
        <div
          id="experience-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="mt-12 grid items-center gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16"
        >
          {/* Image composition */}
          <div className="relative lg:col-span-7">
            <div className="grid grid-cols-12 items-start gap-3 sm:gap-5">
              <div className="relative col-span-8 aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 70vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="relative col-span-4 mt-16 aspect-[3/4] overflow-hidden bg-sand sm:mt-24">
                <Image
                  src={active.secondaryImage}
                  alt={active.secondaryImageAlt}
                  fill
                  sizes="(max-width: 1024px) 35vw, 22vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-5 left-3 bg-ivory px-4 py-3 sm:bottom-8 sm:left-8 sm:px-6 sm:py-5">
              <p className="font-display text-4xl leading-none text-ocean sm:text-5xl">
                {active.number}
              </p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-foreground-muted sm:text-[10px]">
                {active.label}
              </p>
            </div>
          </div>

          {/* Experience copy */}
          <div className="lg:col-span-5">
            <p className="text-eyebrow mb-5 text-gold">{active.eyebrow}</p>

            <h3 className="text-4xl leading-[1.08] font-medium text-ocean sm:text-5xl lg:text-6xl">
              {active.title}
            </h3>

            <div className="mt-7 h-px w-16 bg-gold" />

            <p className="mt-7 text-base leading-8 text-foreground-muted">
              {active.description}
            </p>

            <Link
              href={active.link}
              className="group mt-9 inline-flex items-center gap-3 border-b border-gold pb-2 text-xs font-semibold tracking-[0.16em] text-ocean uppercase transition-colors hover:text-gold"
            >
              {active.linkLabel}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Spa-specific Beach Club information */}
        {activeExperience === "spa" && (
          <div className="mt-20 grid overflow-hidden bg-ocean lg:mt-28 lg:grid-cols-2">
            <div className="relative min-h-[300px] lg:min-h-[420px]">
              <Image
                src="/images/hero/bnnr-002.webp"
                alt="The private pool at the Swahili Beach Club"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
              <p className="text-eyebrow mb-5 text-gold">
                An adults-only escape
              </p>

              <h3 className="text-3xl leading-tight font-medium sm:text-4xl">
                Discover the Beach Club experience.
              </h3>

              <p className="mt-6 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                Adult guests can access the Beach Club at an extra charge to
                enjoy an adults-only quiet area with benefits designed to make
                the experience even more special.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
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

              <Link
                href="/contact-us"
                className="group mt-8 inline-flex items-center gap-3 border-b border-gold pb-2 text-xs font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:text-gold"
              >
                Make an enquiry
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
