import { defaultHeroCtaUrgencyNote } from "@/config/hero-cta-urgency";
import { homepageAuthorityForRegion } from "@/config/homepage-authority";
import {
  homepageSessionPathSplitForRegion,
  homepageStandardsSplitForRegion,
} from "@/config/homepage-standards-split";
import { homepageTattooStylesForRegion } from "@/config/homepage-tattoo-styles";
import type { RegionConfig } from "@/types";

export const globalRegionConfig: RegionConfig = {
  slug: "global",
  domain: "bloodlinetattoo.com",
  regionName: "Global",
  heroHeading: "BLOODLINE TATTOO",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Bloodline%20Tattoo%20Bangkok",
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
  heroCtaUrgencyNote: defaultHeroCtaUrgencyNote,
  /**
   * Dummy booking channels for local / global host testing (same as Bangkok placeholders).
   * Replace before production.
   */
  contact: {
    whatsappNumber: "+66 99 000 0000",
    instagramUrl: "https://www.instagram.com/bloodlinetattoobangkok/",
    messengerUrl: "https://m.me/bloodlinetattoobangkok",
  },
  seo: {
    siteName: "Bloodline Tattoo",
    defaultTitle: "Bloodline Tattoo",
    defaultDescription: "Global brand hub for Bloodline Tattoo.",
  },
  homepageAuthority: homepageAuthorityForRegion("global", "Global"),
  homepageTattooStyles: homepageTattooStylesForRegion("global", "Global"),
  homepageStandardsSplit: homepageStandardsSplitForRegion("global", "Global"),
  homepageSessionPathSplit: homepageSessionPathSplitForRegion("global", "Global"),
};
