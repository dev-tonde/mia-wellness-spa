import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    siteConfig.links.homePage,
    siteConfig.links.aboutPage,
    siteConfig.links.servicesPage,
    siteConfig.links.bookingPage,
    siteConfig.links.faqPage,
    siteConfig.links.contactPage,
  ];

  return routes.map((route) => ({
    url: route === "/" ? siteConfig.business.baseUrl : `${siteConfig.business.baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
