import type { Metadata } from "next";
import { BookOpen, Building2, Compass, Lightbulb } from "lucide-react";

import ResortPageHero from "@/components/sections/resort/ResortPageHero";
import EditorialSection from "@/components/sections/resort/EditorialSection";
import ResortFeatureGrid from "@/components/sections/resort/ResortFeatureGrid";
import ResortPageCta from "@/components/sections/resort/ResortPageCta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story, Swahili-inspired architecture and hospitality of Swahili Beach Resort in Diani, Kenya.",
};

export default function AboutUsPage() {
  return (
    <>
      <ResortPageHero
        eyebrow="Our Story"
        title="Where heritage meets the horizon."
        description="Discover a coastal retreat shaped by Swahili heritage, contemporary design and the natural beauty of Diani Beach."
        image="/images/architecture/highlights-119-1-2.jpg"
        imageAlt="Swahili Beach Resort architecture and cascading pools"
      />

      <EditorialSection
        eyebrow="Our Beginning"
        title="A story shaped by the coast."
        description="History begins in 2012. Swahili Beach Resort brings together the character of the Kenyan coast and a contemporary approach to hospitality. Its identity is inspired by the region's cultural heritage, creating a setting where architecture, atmosphere and the surrounding landscape come together."
        image="/images/architecture/resort-architecture.jpg"
        imageAlt="Architectural details at Swahili Beach Resort"
        background="ivory"
      />

      <ResortFeatureGrid
        eyebrow="The Swahili Experience"
        title="Four ideas at the heart of our identity."
        description="A resort experience shaped by its origins, its approach to innovation, its cultural influences and its coastal setting."
        background="white"
        features={[
          {
            number: "01",
            title: "Story",
            description:
              "Discover the origins of Swahili Beach and the story behind a resort inspired by the Kenyan coast.",
            icon: BookOpen,
          },
          {
            number: "02",
            title: "Innovation",
            description:
              "Modern technology and considered design come together to support comfort while seeking to minimise environmental impact.",
            icon: Lightbulb,
          },
          {
            number: "03",
            title: "Culture",
            description:
              "Swahili and Arabic influences inform an identity where coastal heritage meets contemporary style.",
            icon: Building2,
          },
          {
            number: "04",
            title: "Destination",
            description:
              "A Diani Beach setting that brings together coastal relaxation, cultural discovery and memorable experiences.",
            icon: Compass,
          },
        ]}
      />

      <EditorialSection
        eyebrow="Architecture & Identity"
        title="A distinctive expression of coastal design."
        description="The resort's architectural character draws inspiration from Swahili and Arabic influences. Traditional references and contemporary comforts create an environment with a strong sense of place."
        image="/images/architecture/architectural-details.jpg"
        imageAlt="Swahili-inspired architectural details"
        reverse
        background="ivory"
      />

      <ResortPageCta
        eyebrow="Experience Swahili Beach"
        title="Discover a different side of the Kenyan coast."
        description="Explore the resort's rooms, dining experiences and collection of activities, all set along the shores of Diani Beach."
        image="/images/resort/about-cta.jpg"
        imageAlt="The resort overlooking the Indian Ocean"
        href="/rooms"
        linkLabel="Explore the resort"
      />
    </>
  );
}
