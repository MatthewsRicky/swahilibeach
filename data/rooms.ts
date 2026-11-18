// data/rooms.ts

import type { Room } from "@/types/room";

export const rooms: Room[] = [
  {
    name: "Standard Room",
    slug: "standard-room",
    priceFrom: 280,
    description:
      "A comfortable and elegant retreat featuring refined Swahili furnishings and modern amenities.",
    image: "/images/rooms/standard.png",
    imageAlt: "Spacious luxury guest room with private balcony",
  },
  {
    name: "Superior Room",
    slug: "superior-room",
    priceFrom: 300,
    description:
      "An inviting accommodation option designed for additional comfort and relaxation.",
    image: "/images/rooms/superior.png",
    imageAlt: "Swahili Beach Resort luxury guest room with canopy bed",
  },
  {
    name: "Club Rooms",
    slug: "club-rooms",
    priceFrom: 430,
    description:
      "An enhanced stay with access to exclusive Club privileges and premium experiences.",
    image: "/images/rooms/club.png",
    imageAlt: "Club Room at Swahili Beach Resort",
  },
  {
    name: "Executive Suite",
    slug: "executive-suite",
    priceFrom: 500,
    description:
      "An expansive suite offering an elevated accommodation experience.",
    image: "/images/rooms/executive.png",
    imageAlt: "Executive Suite at Swahili Beach Resort",
  },
  {
    name: "Penthouse",
    slug: "penthouse",
    priceFrom: 500,
    description:
      "A spacious premium accommodation option at Swahili Beach Resort.",
    image: "/images/rooms/penthouse.jpg",
    imageAlt: "Penthouse accommodation at Swahili Beach Resort",
  },
];

export const roomFeatures = [
  "Swahili furniture",
  "Flat screen TVs",
  "Mini bar fridges",
  "Electronic safes",
  "Wi-Fi",
  "Tea and coffee facilities",
  "Air conditioning",
  "Overhead fans",
  "Hair dryers",
];
