import type { Metadata } from "next";

import RoomsHero from "@/components/sections/rooms/RoomsHero";
import RoomsIntroduction from "@/components/sections/rooms/RoomsIntroduction";
import RoomsCollection from "@/components/sections/rooms/RoomsCollection";
import RoomsFAQ from "@/components/sections/rooms/RoomsFAQ";
import RoomsCta from "@/components/sections/rooms/RoomsCTA";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Explore the rooms and suites at Swahili Beach Resort, Diani Beach. Discover refined accommodation designed for comfort, space and relaxation.",
};

export default function RoomsPage() {
  return (
    <>
      <RoomsHero />
      <RoomsIntroduction />
      <RoomsCollection />
      <RoomsFAQ />
      <RoomsCta />
    </>
  );
}
