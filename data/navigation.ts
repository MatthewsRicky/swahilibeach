export type NavigationItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
};

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "The Resort",
    href: "/about-us",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Our Location", href: "/location" },
      { label: "Discover Diani", href: "/diani-beach" },
    ],
  },
  {
    label: "Stay",
    href: "/rooms",
    children: [{ label: "Rooms & Suites", href: "/rooms" }],
  },
  {
    label: "Dining",
    href: "/culinary-finds",
    children: [{ label: "Culinary Finds", href: "/culinary-finds" }],
  },
  {
    label: "Experiences",
    href: "/things-to-do",
    children: [
      { label: "Things to Do", href: "/things-to-do" },
      { label: "Resort Services", href: "/services" },
      { label: "Features", href: "/features" },
    ],
  },
  {
    label: "Offers",
    href: "/offers",
  },
  {
    label: "Weddings & Events",
    href: "/weddings",
    children: [
      { label: "Weddings", href: "/weddings" },
      { label: "Conferences", href: "/conference" },
    ],
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
];
