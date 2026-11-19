import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { activityCategories } from "@/data/activities";

export default function ActivityDirectory() {
  return (
    <section className="bg-ivory">
      {activityCategories.map((category, index) => (
        <div
          key={category.id}
          id={category.id}
          className={`section-padding ${
            index % 2 === 0 ? "bg-ivory" : "bg-white"
          }`}
        >
          <div className="container">
            <div className="mb-14 grid items-end gap-8 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-eyebrow text-gold">{category.eyebrow}</p>

                <h2 className="mt-5 font-display text-4xl text-ocean sm:text-5xl lg:text-6xl">
                  {category.title}
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-8 text-charcoal/70 lg:justify-self-end">
                {category.description}
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand lg:sticky lg:top-28 lg:h-[620px]">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>

              <div className="border-t border-charcoal/15">
                {category.activities.map((activity) => (
                  <article
                    key={activity.number}
                    className="grid grid-cols-[42px_1fr] gap-4 border-b border-charcoal/15 py-6 sm:grid-cols-[54px_1fr] sm:gap-6 sm:py-7"
                  >
                    <span className="pt-1 font-display text-xl text-gold">
                      {activity.number}
                    </span>

                    <div>
                      <h3 className="font-display text-2xl text-ocean sm:text-3xl">
                        {activity.name}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-charcoal/65">
                        {activity.description}
                      </p>
                    </div>
                  </article>
                ))}

                <Link
                  href="mailto:gro@swahilibeach.com"
                  className="mt-8 inline-flex items-center gap-3 text-xs tracking-[0.15em] text-ocean transition-colors hover:text-gold"
                >
                  ENQUIRE ABOUT AN ACTIVITY
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
