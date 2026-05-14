import { defaultHeroCtaUrgencyNote } from "@/config/hero-cta-urgency";
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
  heroCtaUrgencyNote: defaultHeroCtaUrgencyNote,
  /**
   * Dummy booking channels for Bangkok UI testing only.
   * Replace with real studio WhatsApp / IG / Messenger before production.
   */
  contact: {
    whatsappNumber: "+66 99 000 0000",
    instagramUrl: "https://www.instagram.com/bloodlinetattoobangkok/",
    messengerUrl: "https://m.me/bloodlinetattoobangkok",
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
