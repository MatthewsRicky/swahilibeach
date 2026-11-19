import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Armchair,
  Users,
  Presentation,
  BriefcaseBusiness,
} from "lucide-react";

const venueFeatures = [
  {
    icon: Armchair,
    title: "Three meeting rooms",
    description:
      "Fully air-conditioned spaces for focused and comfortable meetings.",
  },
  {
    icon: Users,
    title: "Theatre-style seating",
    description: "Flexible arrangements accommodating up to 150 and 50 guests.",
  },
  {
    icon: Presentation,
    title: "Classroom-style setups",
    description: "Seating arrangements for 120 and 40 attendees.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Intimate boardroom",
    description: "A dedicated setting for meetings of up to 16 guests.",
  },
];

export default function MeetingsEventsSection() {
  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="text-eyebrow text-gold">
            Business meets inspiration
          </span>

          <h2 className="mt-4 font-display text-4xl text-ocean sm:text-5xl lg:text-6xl">
            Curated Meetings & Events
          </h2>

          <p className="mt-3 text-xs font-medium uppercase tracking-[0.25em] text-charcoal/50">
            Swahili Beach Resort
          </p>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[420px] overflow-hidden bg-sand lg:min-h-[650px]">
            <Image
              src="/images/conferences/DSC05195-HDR.jpg"
              alt="Meeting and conference venue at Swahili Beach Resort"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ocean/40 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <span className="text-xs uppercase tracking-[0.2em]">
                Gather. Connect. Create.
              </span>
              <p className="mt-2 font-display text-3xl sm:text-4xl">
                Meetings with a difference.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center py-2 lg:py-8">
            <p className="text-base leading-8 text-charcoal/75">
              Take your business meetings to the next level at{" "}
              <strong className="font-semibold text-ocean">
                Swahili Beach Resort
              </strong>
              , where style, comfort, and productivity come together. Our
              versatile venues are designed to accommodate every type of
              corporate event, from strategy sessions to full-scale conferences.
            </p>

            <div className="my-9 grid gap-6 sm:grid-cols-2">
              {venueFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-ivory text-gold">
                      <Icon size={21} strokeWidth={1.4} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-ocean">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-charcoal/65">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-sm leading-7 text-charcoal/70">
              Each space is thoughtfully equipped with modern amenities and
              flexible layouts, creating an environment that fosters{" "}
              <strong className="font-semibold text-ocean">
                collaboration, creativity, and success.
              </strong>{" "}
              Pair a productive day of meetings with the inspiring views and
              luxurious comforts of our resort, and your conference becomes an
              experience your team will remember.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="mailto:stay@swahilibeach.com"
                className="inline-flex items-center gap-3 bg-ocean px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold"
              >
                Contact us
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/conference"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ocean"
              >
                Explore conference facilities
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
