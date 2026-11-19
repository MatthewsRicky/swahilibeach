import Image from "next/image";
import Link from "next/link";

type EventHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumb: string;
};

export default function EventHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumb,
}: EventHeroProps) {
  return (
    <section className="relative flex min-h-[600px] items-end overflow-hidden bg-ocean sm:min-h-[700px] lg:min-h-[780px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 via-ocean/35 to-ocean/10" />

      <div className="container relative z-10 w-full pb-16 pt-40 text-white sm:pb-20 lg:pb-28">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-xs tracking-wide text-white/70"
        >
          <Link href="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <span className="mx-3">/</span>
          <span className="text-white">{breadcrumb}</span>
        </nav>

        <span className="text-eyebrow text-gold">{eyebrow}</span>

        <h1 className="mt-5 max-w-5xl font-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
          {title}
        </h1>

        <p className="mt-7 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}
