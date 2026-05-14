import { defaultHeroCtaUrgencyNote } from "@/config/hero-cta-urgency";
import { homepageAuthorityForRegion } from "@/config/homepage-authority";
import {
  homepageSessionPathSplitForRegion,
  homepageStandardsSplitForRegion,
} from "@/config/homepage-standards-split";
import { homepageTattooStylesForRegion } from "@/config/homepage-tattoo-styles";
import type { RegionConfig } from "@/types";

export const baliRegionConfig: RegionConfig = {
  slug: "bali",
  domain: "bloodlinetattoobali.com",
  regionName: "Bali",
  heroHeading: "PREMIUM TATTOO STUDIO IN BALI",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Bloodline%20Tattoo%20Bali",
  branding: {
    logoWordmark: "BLOODLINE BALI",
    logoMonogram: "BL",
    logoPath: "/logos/bloodline-bali.png",
    faviconPath: "/favicons/bloodline-bali.png",
  },
  headerCta: {
    label: "BOOK APPOINTMENT",
    href: "#",
  },
  heroCtaUrgencyNote: defaultHeroCtaUrgencyNote,
  contact: {
    whatsappNumber: "",
    instagramUrl: "",
    messengerUrl: "",
  },
  seo: {
    siteName: "Bloodline Tattoo Bali",
    defaultTitle: "Premium Tattoo Studio in Bali | Bloodline Tattoo",
    defaultDescription: "Regional Bloodline Tattoo foundation configuration for Bali.",
  },
  homepageAuthority: homepageAuthorityForRegion("bali", "Bali"),
  homepageTattooStyles: homepageTattooStylesForRegion("bali", "Bali"),
  homepageStandardsSplit: homepageStandardsSplitForRegion("bali", "Bali"),
  homepageSessionPathSplit: homepageSessionPathSplitForRegion("bali", "Bali"),
};
