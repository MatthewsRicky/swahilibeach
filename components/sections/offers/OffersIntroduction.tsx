export default function OffersIntroduction() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
          <div>
            <span className="text-eyebrow">Special offers</span>

            <h2 className="mt-5 font-display text-5xl leading-[1.05] text-ocean sm:text-6xl">
              Make your
              <br />
              next escape
              <br />
              exceptional.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-8 text-charcoal/75">
              A celebration with friends, a weekend away, or a memorable family
              break — discover special offers designed to make your time at
              Swahili Beach Resort even more rewarding.
            </p>

            <p className="mt-5 text-sm leading-7 text-charcoal/60">
              Explore the offers below and contact our team for details,
              availability, and booking arrangements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
