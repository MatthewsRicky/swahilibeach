import Image from "next/image";
import Link from "next/link";

type ResortPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function ResortPageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: ResortPageHeroProps) {
  return (
    <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-ocean">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

      <div className="container relative z-10 pb-16 pt-40 text-white sm:pb-20 lg:pb-28">
        <div className="mb-8 flex items-center gap-3 text-xs tracking-[0.2em] text-white/70">
          <Link href="/" className="transition-colors hover:text-gold">
            HOME
          </Link>
          <span>/</span>
          <span className="text-gold">{eyebrow.toUpperCase()}</span>
        </div>

        <p className="text-eyebrow text-gold">{eyebrow}</p>

        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] sm:text-6xl lg:text-8xl">
          {title}
        </h1>

        <p className="mt-7 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}
