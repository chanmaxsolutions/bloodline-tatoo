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
  heroDescription:
    "Precision artistry and elevated studio standards for clients seeking premium tattoo experiences across modern Asia.",
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
  homepageAuthority: homepageAuthorityForRegion("global"),
  homepageTattooStyles: homepageTattooStylesForRegion("global"),
  homepageStandardsSplit: homepageStandardsSplitForRegion("global", "Global"),
  homepageSessionPathSplit: homepageSessionPathSplitForRegion("global", "Global"),
};
