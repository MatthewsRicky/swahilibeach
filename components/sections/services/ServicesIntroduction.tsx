import Image from "next/image";

export default function ServicesIntroduction() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-eyebrow mb-5 text-gold">Beyond your stay</p>

            <h2 className="max-w-lg text-4xl leading-[1.08] font-medium text-ocean sm:text-5xl lg:text-6xl">
              The little moments make the experience.
            </h2>

            <div className="mt-7 h-px w-16 bg-gold" />

            <p className="mt-7 text-base leading-8 text-foreground-muted">
              Swahili Beach Resort offers a blend of cultural richness and
              modern comfort, making it an exceptional destination for
              relaxation and recreation. Here, every guest is treated to a
              unique experience with world-class amenities designed to cater to
              diverse tastes and preferences.
            </p>

            <p className="mt-5 text-base leading-8 text-foreground-muted">
              Blending rich Swahili heritage with contemporary elegance, the
              resort brings together cascading pools, a serene spa, dining
              experiences and activities along the shores of Diani Beach.
            </p>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/architecture/highlights-119-1-2.jpg"
                alt="A view across the resort grounds"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden w-44 border border-gold/50 bg-ivory p-5 sm:block md:-left-8 md:w-52 md:p-7">
              <p className="font-display text-4xl leading-none text-ocean md:text-5xl">
                Diani
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-foreground-muted">
                The Kenyan coast
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
