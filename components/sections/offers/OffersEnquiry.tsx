import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function OffersEnquiry() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 text-gold sm:py-32">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <span className="text-eyebrow text-gold/70">
              Your next escape starts here
            </span>

            <h2 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl text-ocean">
              Have something
              <br />
              special in mind?
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-ocean/70 sm:text-base">
              Speak with our team about an offer, ask about availability, or let
              us help you plan your next stay at Swahili Beach Resort.
            </p>
          </div>

          <Link
            href="mailto:stay@swahilibeach.com?subject=Special%20Offers%20Enquiry"
            className="inline-flex w-fit items-center gap-5 border-b border-gold pb-3 text-xs font-medium tracking-[0.16em] text-gold transition-colors hover:text-gold"
          >
            MAKE AN ENQUIRY
            <ArrowUpRight size={17} strokeWidth={1.4} />
          </Link>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full border border-white/10 sm:h-[30rem] sm:w-[30rem]"
      />
    </section>
  );
}
