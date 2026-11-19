import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const activities = [
  {
    number: "01",
    name: "Amazing Race",
    description:
      "Race across Diani, completing a series of tasks and overcoming obstacles along the way. A shared challenge that brings teams together through discovery and friendly competition.",
    image: "/images/activities/amazing-race.png",
    imageAlt: "Team taking part in an outdoor activity in Diani",
  },
  {
    number: "02",
    name: "Pirates Treasure Hunt",
    description:
      "Follow clues and take on challenges along the Diani coastline in a treasure hunt designed to bring a sense of adventure to the team experience.",
    image: "/images/activities/pirates-treasure-hunt.png",
    imageAlt: "Coastal treasure hunt activity along Diani Beach",
  },
  {
    number: "03",
    name: "Lost in Diani",
    description:
      "Take on a mystery-based challenge to find a lost team member, with clues that encourage collaboration while introducing participants to local culture and adventure.",
    image: "/images/activities/lost-in-diani.png",
    imageAlt: "Group exploring the surroundings of Diani",
  },
];

export default function CuratedActivitiesSection() {
  return (
    <section className="section-padding overflow-hidden bg-ivory">
      <div className="container">
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-eyebrow text-gold">
              Discover something different
            </span>

            <h2 className="mt-4 text-4xl leading-tight text-ocean sm:text-5xl lg:text-6xl">
              Experiences that bring people together.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-charcoal/70 md:pb-2">
            From friendly competition to coastal exploration, discover
            activities designed to make shared experiences even more memorable.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {activities.map((activity) => (
            <article key={activity.number} className="group">
              <div className="relative mb-6 aspect-square overflow-hidden bg-sand">
                <Image
                  src={activity.image}
                  alt={activity.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contaon transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-white/60 bg-ocean/80 font-sans text-xs tracking-widest text-white backdrop-blur-sm">
                  {activity.number}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-3xl text-ocean">
                  {activity.name}
                </h3>

                <ArrowUpRight
                  size={21}
                  strokeWidth={1.3}
                  className="mt-2 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <p className="mt-4 text-sm leading-7 text-charcoal/70">
                {activity.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/things-to-do"
            className="group inline-flex items-center gap-3 border-b border-gold pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ocean transition-colors hover:text-gold"
          >
            Explore more experiences
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
