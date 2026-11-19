import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ActivitiesEnquiry() {
  return (
    <>
      <section className="section-padding bg-ocean text-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-gold">Your Next Experience</p>

            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Let us help you discover Diani.
            </h2>

            <p className="mt-6 text-sm leading-8 text-white/70 sm:text-base">
              Our Guest Relations team can assist with enquiries and
              arrangements for the activities available during your stay. Ask us
              about the experiences listed here and other activities you may
              wish to explore.
            </p>
          </div>

          <Link
            href="mailto:gro@swahilibeach.com"
            className="inline-flex w-fit items-center gap-4 border border-gold px-7 py-5 text-xs tracking-[0.15em] transition-colors hover:bg-gold"
          >
            <Mail size={17} />
            CONTACT GUEST RELATIONS
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container">
          <div className="max-w-4xl">
            <p className="text-eyebrow text-gold">Important Information</p>

            <h2 className="mt-4 font-display text-3xl text-ocean">
              Activity disclaimer
            </h2>

            <p className="mt-5 text-sm leading-8 text-charcoal/65">
              All activities are organised and operated by independent
              third-party providers. Swahili Beach Resort does not assume
              responsibility or liability for the services rendered, including
              safety, quality or changes in availability. Participation is at
              your own discretion and risk. Guests are advised to enquire
              directly with the relevant service providers about their insurance
              coverage and safety measures before participating.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
