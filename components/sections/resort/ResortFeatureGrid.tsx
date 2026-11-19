import type { LucideIcon } from "lucide-react";

type Feature = {
  number?: string;
  title: string;
  description: string;
  icon?: LucideIcon;
};

type ResortFeatureGridProps = {
  eyebrow: string;
  title: string;
  description?: string;
  features: Feature[];
  background?: "ivory" | "white" | "ocean";
};

export default function ResortFeatureGrid({
  eyebrow,
  title,
  description,
  features,
  background = "white",
}: ResortFeatureGridProps) {
  const backgroundClass = {
    ivory: "bg-ivory",
    white: "bg-white",
    ocean: "bg-ocean text-white",
  }[background];

  const mutedText =
    background === "ocean" ? "text-white/65" : "text-charcoal/65";
  const headingText = background === "ocean" ? "text-white" : "text-ocean";
  const borderClass =
    background === "ocean" ? "border-white/15" : "border-charcoal/15";

  return (
    <section className={`section-padding ${backgroundClass}`}>
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-eyebrow text-gold">{eyebrow}</p>

          <h2
            className={`mt-5 font-display text-4xl sm:text-5xl lg:text-6xl ${headingText}`}
          >
            {title}
          </h2>

          {description && (
            <p className={`mt-6 text-base leading-8 ${mutedText}`}>
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={`border-t ${borderClass} px-6 py-9 first:border-t sm:px-8 lg:py-11 ${
                  index % 3 !== 0 ? "lg:border-l" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  {Icon && (
                    <Icon size={25} strokeWidth={1.3} className="text-gold" />
                  )}
                  {feature.number && (
                    <span className={`font-display text-2xl ${mutedText}`}>
                      {feature.number}
                    </span>
                  )}
                </div>

                <h3
                  className={`mt-8 font-display text-2xl sm:text-3xl ${headingText}`}
                >
                  {feature.title}
                </h3>

                <p className={`mt-4 text-sm leading-7 ${mutedText}`}>
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
