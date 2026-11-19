import type { Metadata } from "next";

import EventHero from "@/components/sections/events/EventHero";
import EventEditorial from "@/components/sections/events/EventEditorial";
import EventFeatureGrid from "@/components/sections/events/EventFeatureGrid";
import EventCTA from "@/components/sections/events/EventCTA";

export const metadata: Metadata = {
  title: "Weddings | Swahili Beach Resort",
  description:
    "Celebrate your wedding at Swahili Beach Resort in Diani. Discover beachfront settings, personalised planning, elegant accommodation, and coastal experiences.",
};

export default function WeddingsPage() {
  return (
    <>
      <EventHero
        breadcrumb="Weddings"
        eyebrow="A celebration of love"
        title="Where your forever begins."
        description="Celebrate your story against the beauty of the Kenyan coast. From intimate beachfront ceremonies to memorable destination celebrations, discover a setting made for moments that last."
        image="/images/weddings/weddingphotos-71-scaled.jpg"
        imageAlt="Romantic beachfront wedding setting at Swahili Beach Resort"
      />

      <EventEditorial
        eyebrow="Your day, your story"
        title="A setting as special as the occasion."
        description="Imagine exchanging vows on the soft white sands of Diani Beach, with the Indian Ocean as your backdrop. Surrounded by coastal beauty, Swahili-inspired architecture, and warm hospitality, Swahili Beach Resort offers a distinctive setting for your wedding celebration."
        image="/images/weddings/IMG_3840-2048x775.jpg"
        imageAlt="Beach wedding ceremony overlooking the Indian Ocean"
      />

      <EventFeatureGrid
        eyebrow="Celebrate your way"
        title="A beautiful beginning to every celebration."
        description="Whether you picture a quiet ceremony by the sea or a larger gathering with family and friends, the resort's coastal setting offers a memorable backdrop."
        features={[
          {
            number: "01",
            title: "Beachfront ceremonies",
            description:
              "Exchange vows beside the Indian Ocean, with the shoreline and coastal scenery creating a naturally beautiful setting.",
          },
          {
            number: "02",
            title: "Receptions & celebrations",
            description:
              "Bring your guests together for a celebration shaped around your preferences, from the atmosphere to the dining experience.",
          },
          {
            number: "03",
            title: "Personalised planning",
            description:
              "Work with the wedding team to discuss the details of your day, including décor, flowers, music, catering, and photography.",
          },
        ]}
        background="white"
      />

      <EventEditorial
        eyebrow="Made around you"
        title="Every detail has a part to play."
        description="Every love story is different. The resort's wedding team works with couples to understand their vision and discuss the details that bring it together. From floral design and music to cuisine and photography, the planning process is shaped around the celebration you have in mind."
        image="/images/weddings/highlights-119-2-scaled.jpg"
        imageAlt="Wedding reception dining and floral details"
        reverse
        background="ivory"
      />

      <EventEditorial
        eyebrow="Stay a little longer"
        title="A celebration shared beyond the day."
        description="Make the occasion a coastal escape for you and your guests. Swahili Beach Resort offers a collection of rooms and suites, restaurants, cascading pools, and spa experiences, giving friends and family more opportunities to relax and enjoy their time together."
        image="/images/rooms/penthouse.jpg"
        imageAlt="Luxury resort accommodation surrounded by tropical gardens"
        link={{
          label: "Explore rooms and suites",
          href: "/rooms",
        }}
        background="white"
      />

      <EventFeatureGrid
        eyebrow="Beyond the wedding day"
        title="More moments to make together."
        description="Turn your wedding into a shared getaway, with opportunities for guests to discover more of Diani and enjoy the resort."
        features={[
          {
            number: "01",
            title: "Relax and unwind",
            description:
              "Enjoy time by the pools, on the beach, or at the resort's spa.",
          },
          {
            number: "02",
            title: "Discover Diani",
            description:
              "Explore coastal activities, local culture, and experiences around Diani Beach.",
          },
          {
            number: "03",
            title: "Gather around the table",
            description:
              "Bring family and friends together over the resort's selection of dining experiences.",
          },
        ]}
        background="ivory"
      />

      <EventCTA
        eyebrow="Begin your wedding story"
        title="Let's make it a day to remember."
        description="Tell our weddings and events team a little about your plans. They can help you explore the possibilities and prepare a personalised proposal for your celebration."
        buttonLabel="Enquire about your wedding"
        href="mailto:weddingsandevents@swahilibeach.com?subject=Wedding%20Enquiry"
        email="weddingsandevents@swahilibeach.com"
      />
    </>
  );
}
