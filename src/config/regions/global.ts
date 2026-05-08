import type { RegionConfig } from "@/types";

export const globalRegionConfig: RegionConfig = {
  slug: "global",
  domain: "bloodlinetattoo.com",
  regionName: "Global",
  heroHeading: "BLOODLINE TATTOO",
  branding: {
    logoWordmark: "BLOODLINE",
    logoMonogram: "BL",
    logoPath: "/logos/bloodline-global.png",
    faviconPath: "/favicons/bloodline-global.png",
  },
  headerCta: {
    label: "BOOK APPOINTMENT",
    href: "#",
  },
  contact: {
    whatsappNumber: "",
    instagramUrl: "",
    messengerUrl: "",
  },
  seo: {
    siteName: "Bloodline Tattoo",
    defaultTitle: "Bloodline Tattoo",
    defaultDescription: "Global brand hub for Bloodline Tattoo.",
  },
};
