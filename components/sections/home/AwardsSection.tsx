import Container from "@/components/ui/Container";
import FadeUp from "@/components/animations/FadeUp";
import { Compass, Heart, Leaf, Sparkles } from "lucide-react";

const awardImages = [
  {
    src: "https://swahilibeach.com/wp-content/uploads/2025/01/winner-certificate-2023-1-1.jpg",
    alt: "Swahili Beach Resort award winner certificate 2023",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2025/02/winner-badge-Golden-Tree-1-e1740179965998.png",
    alt: "International Travel Awards 2024 winner badge",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2025/01/1-1-1-1.png",
    alt: "Swahili Beach Resort award recognition",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2025/01/winner-badge-2023-1-1.png",
    alt: "Luxury resort winner badge 2023",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2025/02/winner-certificate-Best-Regional-Resort-2024.png",
    alt: "Best Regional Resort 2024 award certificate",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2025/02/africas-leading-beach-resort-2024-winner-shield.png",
    alt: "Africa's Leading Beach Resort 2024 winner shield",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2026/01/bestresortspa2025.webp",
    alt: "Best Resort Spa 2025 award badge",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2025/02/WTA-Africas-best-Resort.png",
    alt: "World Travel Awards Africa's Best Resort recognition",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2026/01/2025-Personalised-Hotel-Winner-Logo87.webp",
    alt: "2025 personalised hotel winner award",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2026/01/2025-Personalised-Spa-Winner-Logo24.webp",
    alt: "2025 personalised spa winner award",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2025/02/Silver-Eco-Award-1.png",
    alt: "Silver Eco Tourism Award badge",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2025/06/winner-color-vert.jpg",
    alt: "Luxury hospitality winner award badge",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2025/02/WTA-Stage-4.png",
    alt: "World Travel Awards voting stage four graphic",
  },
  {
    src: "https://swahilibeach.com/wp-content/uploads/2025/02/WTA-Stage-3.png",
    alt: "World Travel Awards voting stage three graphic",
  },
];

const highlights = [
  {
    number: "01",
    icon: Compass,
    title: "A World of Experiences Awaits",
    paragraphs: [
      <>
        Whether you're an adventurer, a wellness enthusiast, or a couple in
        search of romance, Swahili Beach offers unforgettable{" "}
        <a
          href="/activities/"
          className="font-semibold text-ocean underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
        >
          activities
        </a>{" "}
        for every mood and moment. Discover vibrant marine life through scuba
        diving, experience skydiving in Diani, or explore the beautiful Kenyan
        coastline.
      </>,
      <>
        Those seeking serenity can indulge in a rejuvenating spa treatment,
        unwind by the cascading pools, or savour authentic flavours at our
        world-class{" "}
        <a
          href="/restaurant/"
          className="font-semibold text-ocean underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
        >
          restaurants
        </a>
        , where every dish is a journey through coastal and continental
        cuisines.
      </>,
    ],
  },
  {
    number: "02",
    icon: Heart,
    title: "Celebrate Love, Life, and Legacy",
    paragraphs: [
      <>
        Swahili Beach is more than just a resort — it's a destination for
        moments that matter. From intimate beachfront ceremonies to grand
        celebrations, our setting makes it an unforgettable destination for{" "}
        <a
          href="/wedding/"
          className="font-semibold text-ocean underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
        >
          weddings
        </a>
        . Our team brings personal attention to every occasion.
      </>,
      <>
        Planning a business retreat or corporate gathering? Our{" "}
        <a
          href="/conference/"
          className="font-semibold text-ocean underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
        >
          conference facilities
        </a>{" "}
        offer an elegant setting for productive meetings and events.
      </>,
    ],
  },
  {
    number: "03",
    icon: Leaf,
    title: "Luxury with Purpose",
    paragraphs: [
      <>
        We believe in{" "}
        <a
          href="/luxury-sustainability/"
          className="font-semibold text-ocean underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
        >
          luxury sustainability
        </a>{" "}
        — offering exceptional comfort while protecting the environment and
        empowering local communities. From responsible resource management to
        cultural preservation, we believe in creating a positive legacy for
        Diani.
      </>,
    ],
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Your Slice of Paradise Awaits",
    paragraphs: [
      <>
        Whether you're dreaming of a romantic escape, a family holiday, or an
        adventurous getaway, Swahili Beach invites you to experience Kenya's
        coastal magic. Discover a five-star destination where every sunrise
        brings a new story and every sunset lingers in memory.
      </>,
      <>
        Start your journey and discover your{" "}
        <a
          href="/slice-of-paradise/"
          className="font-semibold text-ocean underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
        >
          slice of paradise
        </a>
        . For bookings, enquiries, or special requests, visit our{" "}
        <a
          href="/contact-us/"
          className="font-semibold text-ocean underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
        >
          contact page
        </a>
        .
      </>,
    ],
  },
];

export default function AwardsSection() {
  return (
    <section className="overflow-hidden bg-ivory">
      {/* Awards introduction */}
      <div className="py-24 md:py-32">
        <Container>
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                Winner · Our Awards
              </span>

              <h2 className="mt-5 font-display text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
                A legacy of excellence.
                <span className="block italic text-gold">
                  Recognised worldwide.
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-charcoal/65 md:text-base">
                Swahili Beach continues to receive international recognition for
                excellence across the resort, its spa, and dining experiences.
                From prestigious hospitality accolades to environmental
                recognition, these awards celebrate the quality, dedication, and
                distinctive character of our destination on the Diani Coast.
              </p>
            </div>
          </FadeUp>

          {/* Asymmetrical awards composition */}
          <div className="mx-auto mt-20 max-w-6xl space-y-12 md:space-y-16">
            {/* Top row — three prominent recognitions */}
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
              {awardImages.slice(0, 3).map((award, index) => (
                <FadeUp key={award.src} delay={index * 0.08}>
                  <a
                    href={award.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${award.alt}`}
                    className="group flex h-32 w-36 items-center justify-center md:h-40 md:w-48"
                  >
                    <img
                      src={award.src}
                      alt={award.alt}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </a>
                </FadeUp>
              ))}
            </div>

            {/* Middle row — the largest collection */}
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-8 md:gap-x-12 md:gap-y-12">
              {awardImages.slice(3, 10).map((award, index) => (
                <FadeUp key={award.src} delay={index * 0.05}>
                  <a
                    href={award.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${award.alt}`}
                    className={`group flex items-center justify-center ${
                      index % 3 === 0
                        ? "h-36 w-32 md:h-48 md:w-44"
                        : "h-28 w-28 md:h-36 md:w-36"
                    }`}
                  >
                    <img
                      src={award.src}
                      alt={award.alt}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </a>
                </FadeUp>
              ))}
            </div>

            {/* Bottom row — a quieter finish */}
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
              {awardImages.slice(10, 12).map((award, index) => (
                <FadeUp key={award.src} delay={index * 0.07}>
                  <a
                    href={award.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${award.alt}`}
                    className="group flex h-28 w-28 items-center justify-center md:h-36 md:w-36"
                  >
                    <img
                      src={award.src}
                      alt={award.alt}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </a>
                </FadeUp>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-[11px] tracking-wide text-charcoal/45">
            A selection of international hospitality and sustainability
            recognitions.
          </p>
        </Container>
      </div>

      {/* Supporting editorial content */}
      <div className="border-t border-charcoal/10 bg-white py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-5xl">
            <FadeUp>
              <div className="mb-16 max-w-2xl">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
                  More than a destination
                </span>

                <h2 className="mt-5 font-display text-4xl leading-tight text-charcoal md:text-5xl">
                  Discover everything that makes a stay extraordinary.
                </h2>
              </div>
            </FadeUp>

            {/* Award ceremony photographs */}
            <div className="mb-20 grid items-center gap-8 md:grid-cols-2 md:gap-12">
              {awardImages.slice(12, 14).map((award, index) => (
                <FadeUp key={award.src} delay={index * 0.12}>
                  <figure className={index === 1 ? "md:mt-20" : ""}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-ivory">
                      <img
                        src={award.src}
                        alt={award.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>

                    <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-charcoal/50">
                      Celebrating international recognition
                    </figcaption>
                  </figure>
                </FadeUp>
              ))}
            </div>

            <div className="divide-y divide-charcoal/10">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <FadeUp key={item.number}>
                    <article className="grid gap-6 py-10 md:grid-cols-[100px_1fr] md:gap-10 md:py-14">
                      <div className="flex items-start gap-4 md:flex-col md:gap-5">
                        <span className="font-display text-2xl text-gold">
                          {item.number}
                        </span>

                        <Icon
                          size={24}
                          strokeWidth={1.3}
                          className="text-charcoal/55"
                        />
                      </div>

                      <div>
                        <h3 className="font-display text-3xl text-charcoal md:text-4xl">
                          {item.title}
                        </h3>

                        <div className="mt-5 grid gap-5 text-sm leading-8 text-charcoal/65 md:grid-cols-2 md:gap-8 md:text-base">
                          {item.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </article>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
