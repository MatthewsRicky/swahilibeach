import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ResortPageCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href?: string;
  linkLabel?: string;
};

export default function ResortPageCta({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  href = "/contact-us",
  linkLabel = "Get in touch",
}: ResortPageCtaProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ocean py-24 sm:py-32">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-ocean/80" />

      <div className="container relative z-10 mx-auto max-w-4xl text-center text-white">
        <p className="text-eyebrow text-gold">{eyebrow}</p>

        <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-7xl">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
          {description}
        </p>

        <Link
          href={href}
          className="mt-9 inline-flex items-center gap-4 border border-gold px-7 py-4 text-xs tracking-[0.16em] text-white transition-colors hover:bg-gold"
        >
          {linkLabel}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
