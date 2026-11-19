import Image from "next/image";

type EditorialSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  background?: "ivory" | "white";
  points?: string[];
};

export default function EditorialSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  background = "ivory",
  points,
}: EditorialSectionProps) {
  const backgroundClass = background === "white" ? "bg-white" : "bg-ivory";

  return (
    <section className={`section-padding ${backgroundClass}`}>
      <div
        className={`container grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
          reverse ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-sand sm:aspect-[5/4]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-xl py-2 lg:py-8">
          <p className="text-eyebrow text-gold">{eyebrow}</p>

          <h2 className="mt-5 font-display text-4xl leading-tight text-ocean sm:text-5xl lg:text-6xl">
            {title}
          </h2>

          <p className="mt-7 text-base leading-8 text-charcoal/70">
            {description}
          </p>

          {points && points.length > 0 && (
            <ul className="mt-8 space-y-4 border-t border-charcoal/15 pt-7">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex gap-4 text-sm leading-7 text-charcoal/75"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
