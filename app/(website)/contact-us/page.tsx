import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import BookingAction from "@/components/booking/BookingAction";
import ContactEnquirySection from "@/components/sections/contact/ContactEnquirySection";

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit the resort",
    value: "Beach Road, Diani Beach, Kenya",
    href: "https://www.google.com/maps/search/?api=1&query=Swahili+Beach+Resort+Diani+Kenya",
    linkLabel: "Get directions",
  },
  {
    icon: Phone,
    label: "Call the resort",
    value: "+254 111 050 140",
    href: "tel:+254111050140",
    linkLabel: "Call us",
  },
  {
    icon: Mail,
    label: "Reservations",
    value: "stay@swahilibeach.com",
    href: "mailto:stay@swahilibeach.com",
    linkLabel: "Send an email",
  },
  {
    icon: CalendarDays,
    label: "Weddings & events",
    value: "weddingsandevents@swahilibeach.com",
    href: "mailto:weddingsandevents@swahilibeach.com",
    linkLabel: "Send an email",
  },
];

const enquiryOptions = [
  {
    number: "01",
    title: "Your stay",
    description:
      "Planning a coastal escape? Tell us about your preferred dates, accommodation and travel arrangements.",
    label: "Enquire about a stay",
    type: "stay" as const,
  },
  {
    number: "02",
    title: "Dining & experiences",
    description:
      "Discover the resort's restaurants, spa experiences and activities, and let our team help with your plans.",
    label: "Enquire about experiences",
    type: "dining" as const,
  },
  {
    number: "03",
    title: "Weddings & celebrations",
    description:
      "Share your ideas for a special occasion by the coast. Our team can help you explore the possibilities.",
    label: "Plan an occasion",
    type: "wedding" as const,
  },
  {
    number: "04",
    title: "Meetings & conferences",
    description:
      "Discuss your meeting or conference requirements, including your preferred date and group size.",
    label: "Enquire about an event",
    type: "conference" as const,
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate flex min-h-[620px] items-end overflow-hidden bg-ocean sm:min-h-[700px]">
        <Image
          src="/images/hd/pool.jpg"
          alt="The swimming pool at Swahili Beach Resort overlooking the coast"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ocean via-ocean/35 to-ocean/10" />

        <div className="container relative z-10 mx-auto w-full pb-20 pt-40 sm:pb-28 lg:pb-32">
          <div className="max-w-4xl">
            <p className="text-eyebrow text-gold">
              Swahili Beach Resort · Diani, Kenya
            </p>

            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-8xl">
              Let&apos;s stay
              <br />
              <span className="italic text-gold">connected.</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-white/75 sm:text-base">
              Whether you are planning a relaxing escape, arranging a special
              celebration or simply looking for more information, we would be
              delighted to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <BookingAction
                context={{
                  type: "general",
                  source: "Contact page hero",
                }}
                className="inline-flex items-center gap-5 bg-gold px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-ocean"
              >
                Send an enquiry
                <ArrowUpRight size={16} />
              </BookingAction>

              <a
                href="#contact-details"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/80 transition-colors hover:text-gold"
              >
                Explore contact details
                <ArrowDown size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction and contact details */}
      <section id="contact-details" className="bg-ivory py-24 sm:py-32">
        <div className="container mx-auto">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-eyebrow text-gold">We&apos;re within reach</p>

              <h2 className="mt-6 max-w-lg font-display text-4xl leading-tight text-ocean sm:text-5xl">
                A conversation is where every great journey begins.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-charcoal/65">
                Get in touch with our team for assistance with your stay,
                reservations, celebrations or any questions about the resort. We
                look forward to helping you plan your time on the Kenyan coast.
              </p>

              <div className="mt-10 flex items-start gap-4 border-t border-ocean/15 pt-7">
                <Sparkles
                  size={20}
                  strokeWidth={1.3}
                  className="mt-1 shrink-0 text-gold"
                />
                <p className="max-w-sm text-sm leading-7 text-charcoal/65">
                  Not sure who to contact? Send us a general enquiry and our
                  team can help direct you.
                </p>
              </div>

              <BookingAction
                context={{
                  type: "general",
                  source: "Contact page contact details",
                }}
                className="mt-8 inline-flex items-center gap-3 border-b border-gold pb-2 text-xs uppercase tracking-[0.16em] text-ocean transition-colors hover:text-gold"
              >
                Contact our team
                <ArrowUpRight size={15} />
              </BookingAction>
            </div>

            <div className="grid gap-0 sm:grid-cols-2">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className={`border-ocean/15 py-8 ${
                      index < 2 ? "border-b" : ""
                    } ${index % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8"}`}
                  >
                    <div className="flex size-11 items-center justify-center border border-gold/50 text-gold">
                      <Icon size={19} strokeWidth={1.3} />
                    </div>

                    <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-charcoal/45">
                      {detail.label}
                    </p>

                    <p className="mt-3 break-words font-display text-xl text-ocean sm:text-2xl">
                      {detail.value}
                    </p>

                    <a
                      href={detail.href}
                      target={
                        detail.href.startsWith("https://")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        detail.href.startsWith("https://")
                          ? "noreferrer"
                          : undefined
                      }
                      className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-gold transition-colors hover:text-ocean"
                    >
                      {detail.linkLabel}
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry options */}
      <ContactEnquirySection />

      {/* Location */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px]">
              <Image
                src="/images/hd/pool.jpg"
                alt="Swahili Beach Resort in Diani Beach"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:py-10">
              <p className="text-eyebrow text-gold">Find your way to us</p>

              <h2 className="mt-6 font-display text-4xl leading-tight text-ocean sm:text-5xl">
                Your coastal escape awaits in Diani.
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-charcoal/65">
                Set along the beautiful coastline of Diani Beach, Swahili Beach
                Resort welcomes you to discover the Kenyan coast.
              </p>

              <div className="mt-9 flex items-start gap-4">
                <MapPin
                  size={21}
                  strokeWidth={1.3}
                  className="mt-1 shrink-0 text-gold"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-charcoal/45">
                    Resort address
                  </p>
                  <p className="mt-2 font-display text-2xl text-ocean">
                    Beach Road, Diani Beach
                  </p>
                  <p className="mt-1 text-sm text-charcoal/55">Kenya</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Swahili+Beach+Resort+Diani+Kenya"
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-4 bg-ocean px-7 py-4 text-xs uppercase tracking-[0.16em] text-white transition-colors hover:bg-gold"
              >
                Open directions
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-ocean py-24 sm:py-32">
        <Image
          src="/images/hd/pool.jpg"
          alt="A relaxing moment at Swahili Beach Resort"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-ocean/85" />

        <div className="container relative z-10 mx-auto text-center">
          <p className="text-eyebrow text-gold">
            We look forward to hearing from you
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-7xl">
            Let&apos;s make your time in Diani memorable.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/70">
            Share your plans with us and let our team help you take the next
            step towards your Swahili Beach experience.
          </p>

          <BookingAction
            context={{
              type: "general",
              source: "Contact page final CTA",
            }}
            className="mt-10 inline-flex items-center gap-5 bg-gold px-8 py-4 text-xs uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-ocean"
          >
            Make an enquiry
            <ArrowUpRight size={16} />
          </BookingAction>
        </div>
      </section>
    </main>
  );
}
