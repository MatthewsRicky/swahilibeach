import Image from "next/image";

export default function CulinaryIntroduction() {
  return (
    <section className="section-padding overflow-hidden bg-ivory">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-xl">
            <span className="text-eyebrow text-gold">The art of dining</span>

            <h2 className="mt-5 font-display text-4xl leading-tight text-ocean sm:text-5xl lg:text-6xl">
              Every meal is a journey.
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-8 text-charcoal/75">
              <p>
                Experience the finest restaurants in Diani Beach at Swahili
                Beach Resort, where every meal is a culinary journey. Our resort
                combines luxury accommodation with exceptional dining, offering
                a range of flavours from Swahili cuisine to international
                classics.
              </p>

              <p>
                From the all-day dining experience at Majilis to the Indian
                cuisine of Spice Route, beachfront dining at Barharini and
                pan-Asian experiences at Zanzibar, every venue brings its own
                character to the table.
              </p>

              <p>
                Whether you're enjoying a leisurely coffee, a relaxed beachfront
                lunch or an evening of distinctive flavours, discover dining
                experiences that complement your stay on the Kenyan coast.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden bg-sand">
              <Image
                src="/images/restaurants/Chef-John-768x769.jpg"
                alt="An elegant dining setting at Swahili Beach Resort"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

            <div className="absolute -bottom-5 -left-5 hidden h-36 w-36 border border-gold/60 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
