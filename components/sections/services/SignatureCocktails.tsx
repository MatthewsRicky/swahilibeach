import Image from "next/image";

const cocktails = [
  {
    number: "01",
    name: "Swahili Sunset",
    image: "/icons/cocktails-02.png",
    imageAlt: "Swahili Sunset signature cocktail",
    description:
      "Indulge in a local delicacy as you lounge to the epic sunsets with a fine mix of rum, brandy, orange liqueur and ice.",
    featured: true,
  },
  {
    number: "02",
    name: "Swahili Melon",
    image: "/icons/poolbar-bloody.png",
    imageAlt: "Swahili Melon signature cocktail",
    description:
      "This summer staple is transformed into a refreshing cocktail with a hint of a kick to keep the party by the pool going.",
    featured: false,
  },
  {
    number: "03",
    name: "Dawa Sawa",
    image: "/icons/cocktails-03.png",
    imageAlt: "Dawa Sawa signature cocktail",
    description:
      "Nothing welcomes you to Diani quite like a tall frosty glass of fresh lime juice, honey, soda water and ice.",
    featured: false,
  },
  {
    number: "04",
    name: "Coconut Kiss",
    image: "/icons/cocktails-01-1.png",
    imageAlt: "Coconut Kiss signature cocktail",
    description:
      "The perfect remedy for a hot day, with a cool mixture of pineapple juice, coconut milk and grenadine.",
    featured: false,
  },
];

export default function SignatureCocktails() {
  const featuredCocktail = cocktails[0];
  const otherCocktails = cocktails.slice(1);

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="container">
        {/* Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-eyebrow mb-5 text-gold">
              A taste of Swahili Beach
            </p>

            <h2 className="text-4xl leading-[1.08] font-medium text-ocean sm:text-5xl lg:text-6xl">
              Signature
              <span className="block font-normal italic">cocktails.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-foreground-muted sm:text-base sm:leading-8">
            From tropical refreshments to sunset favourites, discover
            distinctive cocktails inspired by the flavours and atmosphere of the
            Kenyan coast.
          </p>
        </div>

        {/* Cocktail collection */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Featured cocktail */}
          <article className="lg:col-span-6">
            <div className="relative aspect-[5/5] shadow-md shadow-gold/40 overflow-hidden bg-ivory rounded-lg">
              <Image
                src={featuredCocktail.image}
                alt={featuredCocktail.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain transition-transform duration-700 hover:scale-[1.025]"
              />

              <span className="absolute top-5 left-5 bg-gold px-4 py-2 text-[10px] tracking-[0.2em] text-ivory rounded-md uppercase">
                Featured cocktail
              </span>
            </div>

            <div className="mt-7 flex items-start justify-between gap-5">
              <div>
                <p className="text-eyebrow mb-3 text-gold">
                  {featuredCocktail.number} / Signature selection
                </p>

                <h3 className="font-display text-3xl font-medium text-ocean sm:text-4xl">
                  {featuredCocktail.name}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-foreground-muted">
                  {featuredCocktail.description}
                </p>
              </div>
            </div>
          </article>

          {/* Remaining cocktails */}
          <div className="flex flex-col gap-9 lg:col-span-6 lg:gap-10">
            {otherCocktails.map((cocktail) => (
              <article
                key={cocktail.number}
                className="grid grid-cols-5 items-center gap-5 border-b border-charcoal/10 pb-9 last:border-0 last:pb-0 sm:gap-7"
              >
                <div className="relative col-span-2 aspect-[5/5] overflow-hidden bg-ivory rounded-full shadow-md shadow-gold/30">
                  <Image
                    src={cocktail.image}
                    alt={cocktail.imageAlt}
                    fill
                    sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 20vw"
                    className="object-contain transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>

                <div className="col-span-3">
                  <p className="text-[10px] tracking-[0.2em] text-gold">
                    {cocktail.number} / Signature selection
                  </p>

                  <h3 className="mt-3 font-display text-2xl font-medium text-ocean sm:text-3xl">
                    {cocktail.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-foreground-muted">
                    {cocktail.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Closing note */}
        <div className="mt-16 border-t border-charcoal/10 pt-8 text-center">
          <p className="font-display text-2xl italic text-ocean sm:text-3xl">
            A little something to make the moment.
          </p>
        </div>
      </div>
    </section>
  );
}
