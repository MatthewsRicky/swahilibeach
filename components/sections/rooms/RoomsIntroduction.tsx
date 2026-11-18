import {
  Armchair,
  Tv,
  Refrigerator,
  ShieldCheck,
  Wifi,
  Coffee,
  Wind,
  Fan,
  Sparkles,
} from "lucide-react";

import FadeUp from "@/components/animations/FadeUp";

const features = [
  { label: "Swahili furniture", icon: Armchair },
  { label: "Flat screen TVs", icon: Tv },
  { label: "Mini bar fridges", icon: Refrigerator },
  { label: "Electronic safes", icon: ShieldCheck },
  { label: "Wi-Fi", icon: Wifi },
  { label: "Tea and coffee facilities", icon: Coffee },
  { label: "Air conditioning", icon: Wind },
  { label: "Overhead fans", icon: Fan },
  { label: "Hair dryers", icon: Sparkles },
];

export default function RoomsIntroduction() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <p className="text-eyebrow mb-5 text-gold">A place to unwind</p>

            <h2 className="font-display text-4xl font-medium leading-tight text-charcoal md:text-5xl lg:text-6xl">
              Comfort, space and the art of relaxation.
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-sm leading-8 text-foreground-muted md:text-base">
              Swahili Beach Resort offers a refined collection of rooms and
              suites designed for comfort, space, and relaxation in the heart of
              Diani Beach. From well-appointed Standard and family-friendly
              Superior Rooms to expansive Club and Executive Suites, each option
              features private balconies, elegant interiors, and modern
              amenities. Select room categories also enjoy exclusive Club
              privileges, enhanced concierge services, and access to premium
              experiences – ensuring a luxurious and memorable stay for every
              guest.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className="mt-16 border-y border-charcoal/10 py-10 md:mt-20 md:py-12">
            <div className="mb-9 text-center">
              <p className="text-eyebrow text-gold">Thoughtful details</p>
              <h3 className="mt-3 font-display text-3xl text-charcoal md:text-4xl">
                Room Features
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
              {features.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <Icon size={21} strokeWidth={1.4} />
                  </div>

                  <span className="text-xs font-medium tracking-wide text-charcoal md:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
