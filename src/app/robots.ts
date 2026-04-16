import type { MetadataRoute } from "next";

const BASE_URL = "https://tripodbv.nl";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/nl/offerte",
          "/en/quote",
          "/nl/over-ons",
          "/en/about",
          "/nl/team",
          "/en/team",
          "/nl/faq",
          "/en/faq",
          "/nl/blog",
          "/en/blog",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
