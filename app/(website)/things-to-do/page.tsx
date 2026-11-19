import type { Metadata } from "next";

import ResortPageHero from "@/components/sections/resort/ResortPageHero";
import EditorialSection from "@/components/sections/resort/EditorialSection";
import ActivityDirectory from "@/components/sections/experiences/ActivityDirectory";
import ActivitiesEnquiry from "@/components/sections/experiences/ActivitiesEnquiry";
import ResortPageCta from "@/components/sections/resort/ResortPageCta";


export const metadata: Metadata = {
  title: "Things to Do",
  description:
    "Discover activities and adventures at Swahili Beach Resort in Diani, from coastal excursions and cultural experiences to water sports and diving.",
};

export default function ThingsToDoPage() {
  return (
    <>
      <ResortPageHero
        eyebrow="Explore & Experience"
        title="Make every moment an adventure."
        description="Discover a world of adventure, relaxation and unforgettable experiences. From exploring the coastline to discovering the underwater world, Diani offers something for every kind of traveller."
        image="/images/hd/Baobab-1.png"
        imageAlt="Coastal adventures and activities in Diani Beach"
      />

      <EditorialSection
        eyebrow="A World of Experiences"
        title="Adventure, discovery and time well spent."
        description="Whether you're planning a romantic escape, a family holiday or an adventure along Kenya's coastline, there's plenty to explore beyond your stay. Discover local culture, natural landscapes and the Indian Ocean through a collection of experiences arranged by independent activity providers."
        image="/images/hd/Diani-Beach.jpg"
        imageAlt="Guests enjoying an experience along the Kenyan coast"
        background="ivory"
      />

      <ActivityDirectory />

      <EditorialSection
        eyebrow="Discover the Destination"
        title="There's more to Diani than the shoreline."
        description="From beachside sundowners and traditional dhow sailing to wildlife excursions and marine adventures, Diani offers many ways to experience the South Coast. Discover the destination and find inspiration for your next adventure."
        image="/images/hd/product-diani-crystal-clear-water-1538059905.jpg"
        imageAlt="The coastline of Diani Beach"
        reverse
        background="white"
      />

      <ActivitiesEnquiry />

      <ResortPageCta
        eyebrow="Your Coastal Escape"
        title="Stay a little longer. Discover a little more."
        description="Make Swahili Beach Resort your base for exploring Diani and the experiences of Kenya's South Coast."
        image="/images/hd/SWAHILI-BEACH-12-rest.jpg"
        imageAlt="Diani Beach at sunset"
        href="/diani-beach"
        linkLabel="Discover Diani"
      />
    </>
  );
}
