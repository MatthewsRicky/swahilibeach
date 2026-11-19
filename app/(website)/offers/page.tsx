import type { Metadata } from "next";

import OffersHero from "@/components/sections/offers/OffersHero";
import OffersIntroduction from "@/components/sections/offers/OffersIntroduction";
import OffersCollection from "@/components/sections/offers/OffersCollection";
import OffersEnquiry from "@/components/sections/offers/OffersEnquiry";

export const metadata: Metadata = {
  title: "Special Offers | Swahili Beach Resort",
  description:
    "Discover special offers and curated getaways at Swahili Beach Resort in Diani Beach, Kenya. Explore escapes for couples, friends, and families.",
};

export default function OffersPage() {
  return (
    <>
      <OffersHero />
      <OffersIntroduction />
      <OffersCollection />
      <OffersEnquiry />
    </>
  );
}
