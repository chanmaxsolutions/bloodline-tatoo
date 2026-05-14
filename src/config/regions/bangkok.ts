import { homepageAuthorityForRegion } from "@/config/homepage-authority";
import {
  homepageSessionPathSplitForRegion,
  homepageStandardsSplitForRegion,
} from "@/config/homepage-standards-split";
import { homepageTattooStylesForRegion } from "@/config/homepage-tattoo-styles";
import type { RegionConfig } from "@/types";

export const bangkokRegionConfig: RegionConfig = {
  slug: "bangkok",
  domain: "bloodlinetattoobangkok.com",
  regionName: "Bangkok",
  heroHeading: "PREMIUM TATTOO STUDIO IN BANGKOK",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Bloodline%20Tattoo%20Bangkok",
  branding: {
    logoWordmark: "BLOODLINE BANGKOK",
    logoMonogram: "BL",
    logoPath: "/logos/bloodline-bangkok.png",
    faviconPath: "/favicons/bloodline-bangkok.png",
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
    siteName: "Bloodline Tattoo Bangkok",
    defaultTitle: "Premium Tattoo Studio in Bangkok | Bloodline Tattoo",
    defaultDescription: "Regional Bloodline Tattoo foundation configuration for Bangkok.",
  },
  homepageAuthority: homepageAuthorityForRegion("bangkok", "Bangkok"),
  homepageTattooStyles: homepageTattooStylesForRegion("bangkok", "Bangkok"),
  homepageStandardsSplit: homepageStandardsSplitForRegion("bangkok", "Bangkok"),
  homepageSessionPathSplit: homepageSessionPathSplitForRegion("bangkok", "Bangkok"),
};
