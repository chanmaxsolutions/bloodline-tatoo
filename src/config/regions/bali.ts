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
  heroHeading: "BALI'S PREMIER APPOINTMENT-ONLY TATTOO STUDIO",
  heroDescription:
    "Bali's appointment-only studio for considered custom work. Calm rooms, careful consultation and the time to do the work properly.",
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
    whatsappNumber: "+6281138801222",
    instagramUrl: "https://www.instagram.com/bloodlinetattoobali/",
    facebookBookUrl: "https://www.facebook.com/Bloodlinetattoobali/",
    messengerUrl: "https://www.facebook.com/Bloodlinetattoobali/",
  },
  seo: {
    siteName: "Bloodline Tattoo Bali",
    defaultTitle: "Bloodline Tattoo Bali | Appointment-Only Custom Studio",
    defaultDescription:
      "Bloodline Tattoo Bali is an appointment-only studio for custom realism, Japanese and portrait work. Calm rooms and careful consultation for every client.",
  },
  homepageAuthority: homepageAuthorityForRegion("bali"),
  homepageTattooStyles: homepageTattooStylesForRegion("bali"),
  homepageStandardsSplit: homepageStandardsSplitForRegion("bali", "Bali"),
  homepageSessionPathSplit: homepageSessionPathSplitForRegion("bali", "Bali"),
};
