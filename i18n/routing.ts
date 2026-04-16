import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["nl", "en"] as const,
  defaultLocale: "nl",
  localePrefix: {
    mode: "always",
  },
  pathnames: {
    "/": "/",
    "/diensten": {
      nl: "/diensten",
      en: "/services",
    },
    "/projecten": {
      nl: "/projecten",
      en: "/projects",
    },
    "/projecten/[slug]": {
      nl: "/projecten/[slug]",
      en: "/projects/[slug]",
    },
    "/over-ons": {
      nl: "/over-ons",
      en: "/about",
    },
    "/team": {
      nl: "/team",
      en: "/team",
    },
    "/faq": {
      nl: "/faq",
      en: "/faq",
    },
    "/blog": {
      nl: "/blog",
      en: "/blog",
    },
    "/offerte": {
      nl: "/offerte",
      en: "/quote",
    },
    "/contact": {
      nl: "/contact",
      en: "/contact",
    },
    "/privacy": {
      nl: "/privacy",
      en: "/privacy",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
