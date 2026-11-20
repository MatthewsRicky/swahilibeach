import type { MetadataRoute } from "next";

const siteUrl = "https://swahilibeach.com";

const routes = [
  "",
  "/about-us",
  "/rooms",
  "/services",
  "/culinary-finds",
  "/offers",
  "/weddings",
  "/conference",
  "/things-to-do",
  "/features",
  "/sustainability",
  "/location",
  "/diani-beach",
  "/contact-us",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
