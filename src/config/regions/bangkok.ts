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
  heroHeading: "BANGKOK'S PREMIER APPOINTMENT-ONLY TATTOO STUDIO",
  heroDescription:
    "Bangkok's appointment-only studio for serious custom work. Trusted by international travellers and expats who will not settle for a walk-in shop.",
  googleBusinessProfileUrl: "https://share.google/fGhjPd8n3Pzv9wNxC",
  location: {
    streetAddress: "22/3-4 Sukhumvit 21 Rd, Khlong Toei",
    addressLocality: "Watthana",
    addressRegion: "Bangkok",
    postalCode: "10110",
    addressCountry: "TH",
    telephone: "+66820450006",
    openingHours: ["Mo-Su 09:00-20:00"],
  },
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
  contact: {
    whatsappNumber: "+66820450006",
    instagramUrl: "https://www.instagram.com/bloodlinetattoobangkok/",
    facebookBookUrl: "https://www.facebook.com/bloodlinetattoobangkok",
    messengerUrl: "https://www.facebook.com/bloodlinetattoobangkok",
  },
  seo: {
    siteName: "Bloodline Tattoo Bangkok",
    defaultTitle: "Bloodline Tattoo Bangkok | Appointment-Only Custom Studio",
    defaultDescription:
      "Bloodline Tattoo Bangkok is an appointment-only studio for custom realism, Japanese and portrait work. Trusted by international travellers and Bangkok expats.",
  },
  homepageAuthority: homepageAuthorityForRegion("bangkok"),
  homepageTattooStyles: homepageTattooStylesForRegion("bangkok"),
  homepageStandardsSplit: homepageStandardsSplitForRegion("bangkok", "Bangkok"),
  homepageSessionPathSplit: homepageSessionPathSplitForRegion("bangkok", "Bangkok"),
};
