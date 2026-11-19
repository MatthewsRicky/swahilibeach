type EventFeature = {
  number: string;
  title: string;
  description: string;
};

type EventFeatureGridProps = {
  eyebrow: string;
  title: string;
  description?: string;
  features: EventFeature[];
  background?: "ivory" | "white" | "ocean";
};

export default function EventFeatureGrid({
  eyebrow,
  title,
  description,
  features,
  background = "white",
}: EventFeatureGridProps) {
  const isOcean = background === "ocean";

  const backgroundClass =
    background === "ivory"
      ? "bg-ivory"
      : background === "ocean"
        ? "bg-ocean"
        : "bg-white";

  return (
    <section className={`section-padding ${backgroundClass}`}>
      <div className="container">
        <div className="mb-14 max-w-3xl">
          <span className={`text-eyebrow ${isOcean ? "text-gold" : ""}`}>
            {eyebrow}
          </span>

          <h2
            className={`mt-5 font-display text-5xl leading-[1.05] sm:text-6xl ${
              isOcean ? "text-white" : "text-ocean"
            }`}
          >
            {title}
          </h2>

          {description && (
            <p
              className={`mt-6 max-w-2xl text-sm leading-7 ${
                isOcean ? "text-white/70" : "text-charcoal/65"
              }`}
            >
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className={`border-t pt-6 ${
                isOcean ? "border-white/20" : "border-charcoal/15"
              }`}
            >
              <span className="text-xs tracking-[0.18em] text-gold">
                {feature.number}
              </span>

              <h3
                className={`mt-5 font-display text-3xl ${
                  isOcean ? "text-white" : "text-ocean"
                }`}
              >
                {feature.title}
              </h3>

              <p
                className={`mt-4 text-sm leading-7 ${
                  isOcean ? "text-white/70" : "text-charcoal/65"
                }`}
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
