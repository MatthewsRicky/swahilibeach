import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type EventEditorialProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  link?: {
    label: string;
    href: string;
  };
  background?: "ivory" | "white";
};

export default function EventEditorial({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  link,
  background = "ivory",
}: EventEditorialProps) {
  return (
    <section
      className={`section-padding ${
        background === "white" ? "bg-white" : "bg-ivory"
      }`}
    >
      <div
        className={`container grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative aspect-[5/4] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-xl">
          <span className="text-eyebrow">{eyebrow}</span>

          <h2 className="mt-5 font-display text-5xl leading-[1.05] text-ocean sm:text-6xl">
            {title}
          </h2>

          <p className="mt-7 text-sm leading-8 text-charcoal/70 sm:text-base">
            {description}
          </p>

          {link && (
            <Link
              href={link.href}
              className="mt-8 inline-flex items-center gap-4 border-b border-gold pb-3 text-xs font-medium tracking-[0.15em] text-ocean transition-colors hover:text-gold"
            >
              {link.label.toUpperCase()}
              <ArrowUpRight size={16} strokeWidth={1.4} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
