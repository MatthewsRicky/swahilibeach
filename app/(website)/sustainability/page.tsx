import type { Metadata } from "next";
import { Fish, HeartHandshake, Leaf, Recycle } from "lucide-react";

import ResortPageHero from "@/components/sections/resort/ResortPageHero";
import EditorialSection from "@/components/sections/resort/EditorialSection";
import ResortFeatureGrid from "@/components/sections/resort/ResortFeatureGrid";
import ResortPageCta from "@/components/sections/resort/ResortPageCta";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Discover Swahili Beach Resort's environmental initiatives, coral restoration work, responsible sourcing and community programmes.",
};

export default function SustainabilityPage() {
  return (
    <>
      <ResortPageHero
        eyebrow="Luxury With Purpose"
        title="Protecting nature. Empowering communities."
        description="A commitment to preserving the coastal environment and supporting the communities that make Diani such a special destination."
        image="/images/sustainability/sustainability-hero.jpg"
        imageAlt="The natural coastal environment around Diani Beach"
      />

      <EditorialSection
        eyebrow="Our Commitment"
        title="A more thoughtful way to experience the coast."
        description="Sustainability is an important part of Swahili Beach Resort's approach to hospitality. Through environmental initiatives and community partnerships, the resort aims to help protect Diani Beach's natural environment while contributing to the well-being of the people who call this region home."
        image="/images/sustainability/coastal-environment.jpg"
        imageAlt="Coastal landscape and marine environment"
        background="ivory"
      />

      <ResortFeatureGrid
        eyebrow="Our Focus"
        title="Four areas of meaningful action."
        description="From the ocean to the local community, our sustainability initiatives address different aspects of responsible hospitality."
        background="white"
        features={[
          {
            number: "01",
            title: "Marine Conservation",
            description:
              "Supporting coral reef restoration and the protection of marine ecosystems along the Diani coastline.",
            icon: Fish,
          },
          {
            number: "02",
            title: "Responsible Sourcing",
            description:
              "A farm-to-table approach that brings seasonal ingredients from the resort's farm and trusted local suppliers to the table.",
            icon: Leaf,
          },
          {
            number: "03",
            title: "Waste Reduction",
            description:
              "Reducing plastic waste through the elimination of single-use plastics and the use of alternatives such as paper straws and reusable glass water bottles.",
            icon: Recycle,
          },
          {
            number: "04",
            title: "Community Support",
            description:
              "Working with community-driven initiatives and organisations to support people and families in the surrounding region.",
            icon: HeartHandshake,
          },
        ]}
      />

      <EditorialSection
        eyebrow="ReefoDivers"
        title="Helping restore the reefs beneath the waves."
        description="ReefoDivers is Swahili Beach Resort's in-house coral reef restoration project. The initiative has established six coral depth gradients and twelve coral tree nurseries, which are maintained and monitored as the coral grows. Once mature, the coral is transplanted onto artificial reef structures to support natural reef regeneration. The long-term ambition is to expand the initiative across the Diani-Chale Marine Reserve in collaboration with local communities and stakeholders."
        image="/images/sustainability/reefodivers-coral.jpg"
        imageAlt="Coral restoration and marine conservation"
        background="ivory"
        points={[
          "Six established coral depth gradients.",
          "Twelve coral tree nurseries.",
          "Ongoing maintenance and monitoring of coral growth.",
          "Plans to expand restoration work across the Diani-Chale Marine Reserve.",
        ]}
      />

      <EditorialSection
        eyebrow="Farm to Table"
        title="A closer connection to the food we serve."
        description="The resort's Farm to Table concept highlights seasonal ingredients sourced from its own farm and trusted local partners. This approach supports local suppliers while bringing fresh produce into the dining experience. Guests interested in the farm can enquire about arranging a visit through the Guest Relations Desk."
        image="/images/sustainability/farm-to-table.jpg"
        imageAlt="Fresh seasonal ingredients and farm produce"
        reverse
        background="white"
      />

      <EditorialSection
        eyebrow="A Greener Future"
        title="Thoughtful changes, everyday impact."
        description="Swahili Beach Resort states that it has eliminated single-use plastics across the property. Alternatives include paper straws and reusable glass water bottles. These changes form part of its wider effort to reduce waste and protect the surrounding coastal environment."
        image="/images/sustainability/plastic-free.jpg"
        imageAlt="Reusable glass water bottles and sustainable alternatives"
        background="ivory"
      />

      <EditorialSection
        eyebrow="People & Community"
        title="Hospitality that reaches beyond our walls."
        description="The resort supports community-driven initiatives including Leg It 4 a Cause, Action in Focus and its collaboration with Born Again Children's Home. These programmes support causes ranging from prosthetic limbs and mental health support to food drives and assistance for vulnerable children."
        image="/images/sustainability/community-support.jpg"
        imageAlt="Community engagement and local support"
        reverse
        background="white"
      />

      <ResortPageCta
        eyebrow="Luxury Sustainability"
        title="Be part of a more thoughtful journey."
        description="Discover how the resort brings environmental care and community support into its approach to coastal hospitality."
        image="/images/sustainability/sustainability-cta.jpg"
        imageAlt="Aerial view of the Diani coastline"
        href="/contact-us"
        linkLabel="Get in touch"
      />
    </>
  );
}
