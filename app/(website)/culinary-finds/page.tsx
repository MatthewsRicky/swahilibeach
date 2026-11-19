import type { Metadata } from "next";

import CulinaryHero from "@/components/sections/dining/CulinaryHero";
import CulinaryIntroduction from "@/components/sections/dining/CulinaryIntroduction";
import DiningVenues from "@/components/sections/dining/DiningVenues";
import CulinaryCta from "@/components/sections/dining/CulinaryCta";
import CulinaryFAQ from "@/components/sections/dining/CulinarFAQ";

export const metadata: Metadata = {
  title: "Culinary Finds | Restaurants & Dining",
  description:
    "Explore the restaurants, beachfront bars and distinctive dining experiences at Swahili Beach Resort in Diani Beach, Kenya.",
};

export default function CulinaryFindsPage() {
  return (
    <>
      <CulinaryHero />
      <CulinaryIntroduction />
      <DiningVenues />
      <CulinaryCta />
      <CulinaryFAQ />

    </>
  );
}
