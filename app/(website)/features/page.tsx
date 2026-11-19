import type { Metadata } from "next";
import {
  HeartHandshake,
  Lightbulb,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import ResortPageHero from "@/components/sections/resort/ResortPageHero";
import EditorialSection from "@/components/sections/resort/EditorialSection";
import ResortFeatureGrid from "@/components/sections/resort/ResortFeatureGrid";
import ResortPageCta from "@/components/sections/resort/ResortPageCta";
import ExperienceFAQ from "@/components/sections/experiences/ExperienceFAQ";
import { featuresFAQs } from "@/data/features-faqs";

export const metadata: Metadata = {
  title: "Features of Swahili Beach",
  description:
    "Discover what makes Swahili Beach Resort distinctive, from Swahili-inspired architecture and culinary experiences to its spa, hospitality and community initiatives.",
};

export default function FeaturesPage() {
  return (
    <>
      <ResortPageHero
        eyebrow="The Swahili Difference"
        title="A character all of its own."
        description="Discover the details that define Swahili Beach Resort — distinctive architecture, memorable dining, a tranquil spa and hospitality shaped by the warmth of its people."
        image="/images/features/Peter-and-Mwashuke.png"
        imageAlt="Distinctive architecture and pools at Swahili Beach Resort"
      />

      <EditorialSection
        eyebrow="More Than a Place to Stay"
        title="A resort shaped by culture and character."
        description="Swahili Beach Resort is known for its distinctive design and architecture, culinary experiences and warm hospitality. Inspired by the cultural heritage of the Kenyan coast, the resort brings together traditional influences and contemporary comfort to create an experience with a strong sense of place."
        image="/images/architecture/59021254-1147772736.jpg"
        imageAlt="Swahili-inspired architecture at the resort"
        background="ivory"
      />

      <EditorialSection
        eyebrow="A Taste of the Coast"
        title="Distinctive dining, inspired by many flavours."
        description="Dining is an important part of the Swahili Beach experience. Across its restaurants and lounges, guests can explore Swahili specialities, Indian cuisine, international favourites and pan-Asian dishes. Each venue brings its own atmosphere and culinary identity to the resort."
        image="/images/restaurants/resto-1.png"
        imageAlt="A dining experience at Swahili Beach Resort"
        reverse
        background="white"
      />

      <div className="bg-ivory py-12 sm:py-16">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-eyebrow text-gold">Explore Our Dining</p>
              <h2 className="mt-4 font-display text-4xl text-ocean sm:text-5xl">
                A table for every occasion.
              </h2>
            </div>

            <a
              href="/culinary-finds"
              className="text-xs tracking-[0.15em] text-ocean transition-colors hover:text-gold"
            >
              DISCOVER CULINARY FINDS ↗
            </a>
          </div>
        </div>
      </div>

      <EditorialSection
        eyebrow="A Place to Reconnect"
        title="A tranquil retreat above the ocean."
        description="Set on a dramatic cliff overlooking the Indian Ocean, the Swahili Beach Club & Spa offers a peaceful setting for relaxation and rejuvenation. Its treatment spaces provide an environment for guests to slow down, restore balance and enjoy time dedicated to well-being."
        image="/images/spa/spa-1.png"
        imageAlt="The spa overlooking the Indian Ocean"
        background="white"
      />

      <EditorialSection
        eyebrow="The People Behind the Experience"
        title="True hospitality begins with people."
        description="At Swahili Beach Resort, the team is central to the guest experience. Through attentive service, genuine warmth and a personal approach to hospitality, staff help create the welcoming atmosphere that guests remember long after their stay."
        image="/images/features/Betty-Chef-1-768x769.jpg"
        imageAlt="Swahili Beach Resort hospitality team"
        reverse
        background="ivory"
      />

      <ResortFeatureGrid
        eyebrow="Our People & Philosophy"
        title="A culture built around exceptional service."
        description="The resort's management philosophy centres on creating a positive working environment and empowering team members to deliver memorable guest experiences."
        background="white"
        features={[
          {
            number: "01",
            title: "Ladies and Gentlemen Serving Ladies and Gentlemen",
            description:
              "A service philosophy built around mutual respect, professionalism and genuine hospitality.",
            icon: Users,
          },
          {
            number: "02",
            title: "Have Fun with Guests at Work",
            description:
              "Encouraging warmth, positive interactions and a welcoming atmosphere throughout the guest experience.",
            icon: HeartHandshake,
          },
          {
            number: "03",
            title: "Every Day You Are on Stage",
            description:
              "Recognising that every interaction contributes to how guests experience the resort.",
            icon: Lightbulb,
          },
          {
            number: "04",
            title: "Continuous Development",
            description:
              "Ongoing training and monthly performance incentives help recognise and encourage outstanding service.",
            icon: UtensilsCrossed,
          },
        ]}
      />

      <EditorialSection
        eyebrow="Beyond the Resort"
        title="A commitment that reaches into the community."
        description="Swahili Beach Resort's involvement extends beyond hospitality. Management and staff participate in conservation and community-based programmes, including support for a local children's home and food distribution initiatives. These efforts reflect the belief that meaningful hospitality also involves contributing to the surrounding community."
        image="/images/restaurants/Food-Drop-Nov-1.jpg"
        imageAlt="Community support initiatives"
        background="ivory"
      />

      <ResortPageCta
        eyebrow="Experience Swahili Beach"
        title="Discover what makes every stay different."
        description="Explore the resort's distinctive experiences, thoughtful details and warm coastal hospitality."
        image="/images/hd/package-images-swahili-beach.jpg"
        imageAlt="The resort's architecture and cascading pools"
        href="/rooms"
        linkLabel="Explore rooms & suites"
      />
      <ExperienceFAQ
        eyebrow="A little more to know"
        title="Frequently asked questions"
        description="Discover more about the experiences, hospitality, and details that make a stay at Swahili Beach Resort distinctive."
        items={featuresFAQs}
      />
    </>
  );
}
