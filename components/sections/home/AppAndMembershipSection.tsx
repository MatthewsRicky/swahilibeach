import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Smartphone } from "lucide-react";

import Container from "@/components/ui/Container";
import FadeUp from "@/components/animations/FadeUp";

const memberships = [
  {
    name: "African Travel and Tourism Association",
    image: "https://swahilibeach.com/wp-content/uploads/2025/05/atta.png",
    href: "https://atta.travel/",
    width: 180,
  },
  {
    name: "SITE Global",
    image: "https://swahilibeach.com/wp-content/uploads/2025/05/s-logo.png",
    href: "https://www.siteglobal.com/",
    width: 150,
  },
];

const appStores = [
  {
    name: "Google Play",
    image:
      "https://swahilibeach.com/wp-content/uploads/2025/01/Mobile-app-store-badge.png",
  },
  {
    name: "App Store",
    image:
      "https://swahilibeach.com/wp-content/uploads/2025/01/Mobile-app-store-badge-1.png",
  },
];

const appDownloadUrl = "https://onelink.to/swahilibeachresort";

export default function AppAndMembershipSection() {
  return (
    <section className="overflow-hidden bg-white">
      {/* Memberships and recognition */}
      <div className="border-b border-charcoal/10 py-16 md:py-20">
        <Container>
          <FadeUp>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Our affiliations
              </span>

              <h2 className="mt-3 font-display text-3xl text-ocean md:text-4xl">
                Proud to be a member.
              </h2>
            </div>
          </FadeUp>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {memberships.map((membership, index) => (
              <FadeUp key={membership.name} delay={index * 0.1}>
                <Link
                  href={membership.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Learn more about ${membership.name}`}
                  className="group flex h-24 w-40 items-center justify-center md:w-48"
                >
                  <Image
                    src={membership.image}
                    alt={membership.name}
                    width={membership.width}
                    height={500}
                    unoptimized
                    className="max-h-60 w-auto max-w-full object-contain opacity-75 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </Link>
              </FadeUp>
            ))}
          </div>
        </Container>
      </div>

      {/* Mobile app promotion */}
      <div className="relative overflow-hidden bg-ivory py-20 md:py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <FadeUp>
              <div className="max-w-xl">
                <div className="mb-7 flex size-12 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Smartphone size={22} strokeWidth={1.5} />
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Your resort, at your fingertips
                </span>

                <h2 className="mt-5 font-display text-4xl leading-[1.08] text-ocean md:text-5xl lg:text-6xl">
                  Download Our App & Discover Swahili Beach.
                </h2>

                <p className="mt-7 max-w-lg text-sm leading-8 text-charcoal/70 md:text-base">
                  Download and check in before you arrive. Book restaurants and
                  the Spa, and discover more about what awaits you for your
                  upcoming visit to Swahili Beach Resort.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  {appStores.map((store) => (
                    <Link
                      key={store.name}
                      href={appDownloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Get the Swahili Beach Resort app on ${store.name}`}
                      className="block transition-transform duration-300 hover:-translate-y-1"
                    >
                      <Image
                        src={store.image}
                        alt={`Get it on ${store.name}`}
                        width={180}
                        height={60}
                        unoptimized
                        className="h-12 w-auto object-contain md:h-14"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="relative mx-auto w-full max-w-[620px] lg:-mr-8">
                <Image
                  src="/images/WhatsApp-Image-2025-02-18-at-13.33.34_65275f1c-1.png"
                  alt="Swahili Beach Resort mobile app displayed on multiple smartphones"
                  width={752}
                  height={970}
                  sizes="(max-width: 1024px) 90vw, 600px"
                  className="h-auto w-full object-contain"
                />
              </div>
            </FadeUp>
          </div>
        </Container>
      </div>
    </section>
  );
}
