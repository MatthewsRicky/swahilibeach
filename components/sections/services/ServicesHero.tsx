import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative isolate flex min-h-[480px] items-end overflow-hidden bg-ocean md:min-h-[560px] lg:min-h-[640px]">
      <Image
        src="/images/architecture/59021254-1147772736.jpg"
        alt="The pools and architecture of Swahili Beach Resort"
        fill
        priority
        quality={90}
        sizes= "100w, 42vw"
        className="object-contain"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/35 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-charcoal/10" />

      <div className="container relative z-10 pb-14 pt-32 md:pb-20 lg:pb-24">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/80">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="h-px w-6 bg-gold" />
            <span className="text-white">Services</span>
          </div>

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-gold md:text-sm">
            The Swahili experience
          </p>

          <h1 className="max-w-2xl text-5xl leading-[0.98] font-medium tracking-tight text-white sm:text-6xl lg:text-8xl">
            A world of
            <span className="block italic font-normal">experiences.</span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/85 md:text-base md:leading-8">
            From moments of quiet relaxation to days filled with discovery,
            experience the thoughtful touches that make every stay memorable.
          </p>
        </div>
      </div>
    </section>
  );
}
