import type { Metadata } from "next";
import { Anchor, Compass, Fish, Mountain, Palmtree, Waves } from "lucide-react";

import ResortPageHero from "@/components/sections/resort/ResortPageHero";
import EditorialSection from "@/components/sections/resort/EditorialSection";
import ResortFeatureGrid from "@/components/sections/resort/ResortFeatureGrid";
import ResortPageCta from "@/components/sections/resort/ResortPageCta";

export const metadata: Metadata = {
  title: "Discover Diani",
  description:
    "Discover Diani Beach, Kenya — its coastline, marine experiences, Swahili heritage and adventures beyond the shore.",
};

export default function DianiBeachPage() {
  return (
    <>
      <ResortPageHero
        eyebrow="Discover Diani"
        title="A destination with its own rhythm."
        description="Explore the natural beauty, coastal culture and unforgettable experiences of Diani Beach, where the Indian Ocean sets the pace."
        image="/images/hd/I-love-Diani-sign-Diani-Beach-Kenya-TortoisePathcom-6-jpeg.webp"
        imageAlt="White sandy beach and turquoise waters of Diani"
      />

      <EditorialSection
        eyebrow="The Kenyan Coast"
        title="A little more than a beach escape."
        description="Diani Beach brings together white sandy shores, turquoise Indian Ocean waters and a rich coastal identity. From quiet moments by the sea to marine adventures and cultural discovery, the destination offers plenty of ways to experience the Kenyan coast."
        image="/images/hd/Diani-Beach.jpg"
        imageAlt="The white sandy coastline of Diani Beach"
        background="ivory"
      />

      <ResortFeatureGrid
        eyebrow="Explore Diani"
        title="Let the coast lead the way."
        description="Discover experiences that bring you closer to the ocean, the surrounding landscape and the character of the region."
        background="white"
        features={[
          {
            number: "01",
            title: "Scuba Diving",
            description:
              "Explore the underwater world off Diani Beach and discover the marine life that makes the Indian Ocean such a compelling destination.",
            icon: Fish,
          },
          {
            number: "02",
            title: "Traditional Dhows",
            description:
              "Experience the coast from the water aboard a traditional dhow, with opportunities to enjoy the ocean and its changing light.",
            icon: Anchor,
          },
          {
            number: "03",
            title: "Beach Bars",
            description:
              "Slow down by the shore, enjoy a refreshing drink and take in the colours of a Diani sunset.",
            icon: Palmtree,
          },
          {
            number: "04",
            title: "Safari & Nature",
            description:
              "Venture inland towards the landscapes of Shimba Hills for a different perspective on the South Coast.",
            icon: Mountain,
          },
          {
            number: "05",
            title: "Ocean Experiences",
            description:
              "Enjoy the coastline at your own pace, from peaceful beach walks to time spent exploring the water.",
            icon: Waves,
          },
          {
            number: "06",
            title: "Coastal Discovery",
            description:
              "Connect with the region's Swahili heritage and discover the traditions and culture that shape life along the coast.",
            icon: Compass,
          },
        ]}
      />

      <EditorialSection
        eyebrow="Beyond The Shore"
        title="Discover a different side of the coast."
        description="Diani's appeal extends beyond its beaches. The surrounding region offers opportunities to explore coastal landscapes, encounter local culture and experience nature away from the shoreline. Ask the resort's Guest Relations team about excursions and activities available during your stay."
        image="/images/hd/OIP-4220949851.jpg"
        imageAlt="Natural landscapes around Kenya's South Coast"
        reverse
        background="ivory"
      />

      <section className="relative overflow-hidden bg-ocean">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <div className="absolute inset-0 bg-[url('/images/diani/diani-sunset.jpg')] bg-cover bg-center" />
          </div>

          <div className="flex items-center px-6 py-16 sm:px-12 lg:px-20">
            <div className="max-w-xl">
              <p className="text-eyebrow text-gold">The Diani Feeling</p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Some places stay with you long after you leave.
              </h2>

              <p className="mt-6 text-sm leading-8 text-white/70 sm:text-base">
                The warmth of the coast, the rhythm of the ocean and the
                character of its people make Diani a destination worth
                experiencing at your own pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ResortPageCta
        eyebrow="Your Diani Escape"
        title="Make the coast part of your story."
        description="Experience Diani from the comfort of Swahili Beach Resort. Our team can help you discover the experiences waiting beyond your stay."
        image="/images/hd/pool.jpg"
        imageAlt="A beautiful Diani Beach sunset"
        href="/contact-us"
        linkLabel="Plan your visit"
      />
    </>
  );
}
