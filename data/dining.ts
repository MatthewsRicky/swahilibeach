import type { DiningVenue } from "@/types/dining";

export const diningVenues: DiningVenue[] = [
  {
    number: "01",
    name: "Majilis Restaurant",
    title: "Majilis Restaurant",
    logo: "/images/restaurants/All-logos_page-0002-1024x225.png",
    logoAlt: "Majilis Restaurant logo",
    category: "All-day dining",
    description:
      "Inspired by the Arabic term for a traditionally refined sitting room for distinguished gatherings, Majilis is the resort's main dining hub, offering an exceptional culinary journey from sunrise to sunset. Begin the day with an elaborate continental breakfast featuring Swahili and Indian delicacies, fresh tropical fruits, vibrant juices and live cooking stations preparing made-to-order favourites. In the evening, enjoy nightly themed buffets showcasing global flavours, from authentic Swahili cuisine to Italian classics.",
    image: "/images/hd/1720476004.webp",
    imageAlt: "Majilis Restaurant at Swahili Beach Resort",
    hours: "Breakfast: 7:00 AM – 10:00 AM",
    additionalInfo: "Dinner buffet: 7:00 PM – 10:00 PM",
  },
  {
    number: "02",
    name: "Spice Route",
    title: "Spice Route",
    logo: "/images/restaurants/e882455a-ae2c-4688-93c5-e622f34bcd87-e1741291070597.png",
    logoAlt: "Spice Route Restaurant logo",
    category: "Indian cuisine",
    description:
      "Set within a beautifully designed contemporary space, Spice Route blends cultural elegance with modern style. Its menu draws inspiration from India's rich gastronomic heritage, featuring signature curries, aromatic biryanis, expertly spiced grills and vibrant vegetarian specialities, prepared using authentic techniques and premium ingredients.",
    image: "/images/restaurants/DSC_5875-1-2.jpg",
    imageAlt: "Spice Route Restaurant at Swahili Beach Resort",
    hours: "7:00 PM – 10:00 PM",
    additionalInfo: "Closed Mondays.",
    menuLinks: [
      {
        label: "View Spice Route Menu",
        href: "https://swahilibeach.com/wp-content/uploads/2025/03/Spice-Route-Nov-2024.pdf",
      },
    ],
  },
  {
    number: "03",
    name: "Barharini Beach Bar & Restaurant",
    title: "Barharini Beach Bar & Restaurant",
    logo: "/images/restaurants/All-logos_page-0003.png",
    logoAlt: "Barharini Beach Bar and Restaurant logo",
    category: "Beachfront dining",
    description:
      "Situated on the shores of Diani Beach, Barharini offers a relaxed beachfront setting alongside a menu prepared with fresh, organic ingredients. Enjoy thoughtfully prepared dishes while taking in the coastal atmosphere, whether you're settling in for a leisurely meal or unwinding after a day by the ocean.",
    image: "/images/hd/1-167-scaled-1.jpg",
    imageAlt: "Barharini Beach Bar and Restaurant overlooking Diani Beach",
    hours: "À la carte: 11:00 AM – 10:00 PM",
    menuLinks: [
      {
        label: "View Baharini Menu",
        href: "https://swahilibeach.com/wp-content/uploads/2026/01/barharini-menu-dec25.pdf",
      },
      {
        label: "View Wine Menu",
        href: "https://swahilibeach.com/wp-content/uploads/2026/01/barharini-winelist-2025.pdf",
      },
      {
        label: "View Bevarage Menu",
        href: "https://swahilibeach.com/wp-content/uploads/2026/01/barharini-beverage-menu-25.pdf",
      },
    ],
  },
  {
    number: "04",
    name: "Zanzibar Restaurant",
    title: "Zanzibar Restaurant",
    logo: "/images/restaurants/Zanz-I-Bar-768x244.png",
    logoAlt: "Zanzibar Restaurant logo",
    category: "Pan-Asian dining",
    description:
      "Discover a contemporary take on Swahili Beach culture through a pan-Asian à la carte menu and the distinctive experience of two Teppanyaki tables. Fresh local seafood is sourced daily from Kenyan fishermen, bringing the flavours of the ocean to the table through contemporary preparation and presentation.",
    image:
      "/images/hd/Barharini-Beach-Bar-Restaurant-at-Swahili-Beach-HotelBarharini-Beach-Bar-Restaurant-at-Swahili-Beach-Hotel-2-scaled.jpg",
    imageAlt: "Zanzibar Restaurant at Swahili Beach Resort",
    hours: "7:00 PM – 10:00 PM",
    additionalInfo: "Closed Tuesdays. Two sittings nightly.",
    menuLinks: [
      {
        label: "View Zanzibar Menu",
        href: "https://swahilibeach.com/wp-content/uploads/2025/03/Zanzibar-Menu-Nov-2024.pdf",
      },
    ],
  },
  {
    number: "05",
    name: "The Deck Sunset Bar",
    title: "The Deck Sunset Bar",
    logo: "/images/restaurants/The-Deck.png",
    logoAlt: "The Deck Sunset Bar logo",
    category: "Sundowners & light bites",
    description:
      "A distinctive spot for sundowners, The Deck offers a selection of drinks, including Aperol Spritz, Italian sparkling wines and local beers. Pair your evening drink with a hummus platter featuring roasted butternut, roasted beetroot and classic hummus, or an assorted cheese board with crackers and chutney dips, all while enjoying the sunset.",
    image: "/images/hd/rs41388_ke_mba_h-swahili-029-hd.jpg",
    imageAlt: "The Deck Sunset Bar at Swahili Beach Resort",
    hours: "5:00 PM – 7:30 PM",
    additionalInfo: "A relaxed setting for sunset drinks and snacks.",
    menuLinks: [
      {
        label: "View The Deck Menu",
        href: "https://swahilibeach.com/wp-content/uploads/2025/03/the-deck-Dec-2024.pdf",
      },
    ],
  },
  {
    number: "06",
    name: "Kahawa Coffee Lounge",
    title: "Kahawa Coffee Lounge",
    logo: "/images/restaurants/5a191e53-671b-4c8a-bec9-37d29eec2125.png",
    logoAlt: "Kahawa Coffee Lounge logo",
    category: "Coffee & refreshments",
    description:
      "Kahawa Coffee Lounge is a welcoming retreat for coffee enthusiasts and casual get-togethers. Enjoy freshly brewed coffee prepared to order alongside sweet and savoury snacks. As evening falls, the lounge becomes an elegant tea destination, with live stations serving hot pancakes, fried delicacies, sandwiches and freshly baked pastries.",
    image: "/images/restaurants/kahawa-lounge.jpg",
    imageAlt: "Kahawa Coffee Lounge at Swahili Beach Resort",
    hours: "11:00 AM – 5:00 PM",
    menuLinks: [
      {
        label: "View Kahawa Menu",
        href: "https://swahilibeach.com/wp-content/uploads/2025/03/Kahawa-Lounge-No-2024.pdf",
      },
    ],
  },
];
