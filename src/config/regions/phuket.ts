import { homepageAuthorityForRegion } from "@/config/homepage-authority";
import { homepageTattooStylesForRegion } from "@/config/homepage-tattoo-styles";
import type { RegionConfig } from "@/types";

export const phuketRegionConfig: RegionConfig = {
  slug: "phuket",
  domain: "bloodlinetattoophuket.com",
  regionName: "Phuket",
  heroHeading: "PREMIUM TATTOO STUDIO IN PHUKET",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Bloodline%20Tattoo%20Phuket",
  branding: {
    logoWordmark: "BLOODLINE PHUKET",
    logoMonogram: "BL",
    logoPath: "/logos/bloodline-phuket.png",
    faviconPath: "/favicons/bloodline-phuket.png",
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
    siteName: "Bloodline Tattoo Phuket",
    defaultTitle: "Premium Tattoo Studio in Phuket | Bloodline Tattoo",
    defaultDescription: "Regional Bloodline Tattoo foundation configuration for Phuket.",
  },
  homepageAuthority: homepageAuthorityForRegion("phuket", "Phuket"),
  homepageTattooStyles: homepageTattooStylesForRegion("phuket", "Phuket"),
};
