import type { Metadata } from "next";

import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesIntroduction from "@/components/sections/services/ServicesIntroduction";
import ServicesExperiences from "@/components/sections/services/ServicesExperiences";
import SignatureCocktails from "@/components/sections/services/SignatureCocktails";
import CuratedActivitiesSection from "@/components/sections/services/CuratedActivitiesSection";
import MeetingsEventsSection from "@/components/sections/services/MeeringsEventsSection";
import ServicesFAQ from "@/components/sections/services/ServicesFAQ";

export const metadata: Metadata = {
  title: "Resort Services & Amenities",
  description:
    "Discover the spa, pools, dining, activities and experiences at Swahili Beach Resort in Diani Beach, Kenya.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesIntroduction />
      <ServicesExperiences />
      <SignatureCocktails />
      <CuratedActivitiesSection />
      <MeetingsEventsSection />
      <ServicesFAQ />
    </>
  );
}
