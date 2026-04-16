import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/projects";

const BASE_URL = "https://tripodbv.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { nl: "/", en: "/" },
    { nl: "/diensten", en: "/services" },
    { nl: "/projecten", en: "/projects" },
    { nl: "/contact", en: "/contact" },
    { nl: "/privacy", en: "/privacy" },
  ];

  const projectRoutes = getAllProjectSlugs().map((slug) => ({
    nl: `/projecten/${slug}`,
    en: `/projects/${slug}`,
  }));

  const allRoutes = [...staticRoutes, ...projectRoutes];
  const now = new Date();

  return allRoutes.map((route) => ({
    url: `${BASE_URL}/nl${route.nl === "/" ? "" : route.nl}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route.nl === "/" ? 1.0 : route.nl === "/projecten" || route.nl === "/diensten" ? 0.9 : 0.7,
    alternates: {
      languages: {
        nl: `${BASE_URL}/nl${route.nl === "/" ? "" : route.nl}`,
        en: `${BASE_URL}/en${route.en === "/" ? "" : route.en}`,
      },
    },
  }));
}
