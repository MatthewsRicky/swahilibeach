import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin, Plane, Route } from "lucide-react";

import ResortPageHero from "@/components/sections/resort/ResortPageHero";
import EditorialSection from "@/components/sections/resort/EditorialSection";
import ResortFeatureGrid from "@/components/sections/resort/ResortFeatureGrid";
import ResortPageCta from "@/components/sections/resort/ResortPageCta";

const resortCoordinates = {
  latitude: -4.292059964419558,
  longitude: 39.58662135572927,
};

const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${resortCoordinates.latitude},${resortCoordinates.longitude}`;

const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${resortCoordinates.latitude},${resortCoordinates.longitude}&z=16&output=embed`;

export const metadata: Metadata = {
  title: "Our Location",
  description:
    "Find Swahili Beach Resort on Beach Road, Diani Beach, Kenya. Explore the resort's coastal setting and travel information.",
};

export default function LocationPage() {
  return (
    <>
      <ResortPageHero
        eyebrow="Find Us"
        title="A coastal escape, perfectly placed."
        description="Set along the shores of Diani Beach on Kenya's South Coast, Swahili Beach Resort offers a setting surrounded by coastal beauty and the Indian Ocean."
        image="/images/resort/location-hero.jpg"
        imageAlt="Aerial view of Diani Beach and the Indian Ocean"
      />

      <EditorialSection
        eyebrow="Our Setting"
        title="Where the coastline becomes your escape."
        description="Located on Beach Road in Diani Beach, Swahili Beach Resort sits along one of Kenya's best-known coastal destinations. The setting brings together the Indian Ocean, white sandy shores and the character of the Kenyan coast."
        image="/images/resort/location-aerial.jpg"
        imageAlt="Diani Beach coastline viewed from above"
        background="ivory"
      />

      <ResortFeatureGrid
        eyebrow="Getting Here"
        title="Your journey to the South Coast."
        description="Whether you are arriving by air or travelling from Mombasa, the resort is accessible through the main South Coast travel connections."
        background="white"
        features={[
          {
            number: "01",
            title: "By Air",
            description:
              "Ukunda Airstrip serves the Diani area and is a nearby arrival option for guests travelling by air.",
            icon: Plane,
          },
          {
            number: "02",
            title: "From Mombasa",
            description:
              "The resort is a short drive from Mombasa, making it accessible for guests arriving through the city.",
            icon: Route,
          },
          {
            number: "03",
            title: "Our Address",
            description:
              "Swahili Beach Resort, Beach Road, Diani Beach, Kenya.",
            icon: MapPin,
          },
        ]}
      />

      <section className="section-padding bg-ivory">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-eyebrow text-gold">Visit Swahili Beach</p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-ocean sm:text-5xl">
                Find your way to the coast.
              </h2>

              <p className="mt-6 text-base leading-8 text-charcoal/70">
                Plan your journey to Swahili Beach Resort. For assistance with
                transfers, arrival arrangements or directions, contact the
                resort ahead of your visit.
              </p>

              <div className="mt-9 border-y border-charcoal/15 py-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 shrink-0 text-gold" size={21} />

                  <div>
                    <p className="text-xs tracking-[0.16em] text-charcoal/50">
                      RESORT ADDRESS
                    </p>

                    <p className="mt-2 text-base text-ocean">
                      Beach Road, Diani Beach, Kenya
                    </p>

                    <p className="mt-2 text-xs text-charcoal/50">
                      {resortCoordinates.latitude},{" "}
                      {resortCoordinates.longitude}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-ocean px-6 py-4 text-xs tracking-[0.15em] text-white transition-colors hover:bg-gold"
                >
                  GET DIRECTIONS
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 border border-ocean px-6 py-4 text-xs tracking-[0.15em] text-ocean transition-colors hover:bg-ocean hover:text-white"
                >
                  CONTACT THE RESORT
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/3] min-h-[320px] overflow-hidden bg-sand">
              <iframe
                src={googleMapsEmbedUrl}
                title="Map showing the location of Swahili Beach Resort in Diani Beach"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <ResortPageCta
        eyebrow="Plan Your Stay"
        title="The coast is closer than you think."
        description="Speak with our team about your visit, arrival arrangements and upcoming stay."
        image="/images/resort/location-cta.jpg"
        imageAlt="Swahili Beach Resort and its coastal surroundings"
        href="/contact-us"
        linkLabel="Contact the resort"
      />
    </>
  );
}
