import { defaultHeroCtaUrgencyNote } from "@/config/hero-cta-urgency";
import { homepageAuthorityForRegion } from "@/config/homepage-authority";
import {
  homepageSessionPathSplitForRegion,
  homepageStandardsSplitForRegion,
} from "@/config/homepage-standards-split";
import { homepageTattooStylesForRegion } from "@/config/homepage-tattoo-styles";
import type { RegionConfig } from "@/types";

export const phuketRegionConfig: RegionConfig = {
  slug: "phuket",
  domain: "bloodlinetattoophuket.com",
  regionName: "Phuket",
  heroHeading: "PHUKET'S PREMIER APPOINTMENT-ONLY TATTOO STUDIO",
  heroDescription:
    "Phuket's appointment-only studio for serious custom work. Sterile practice, full consultation and none of the walk-in rush you find everywhere else.",
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
  heroCtaUrgencyNote: defaultHeroCtaUrgencyNote,
  contact: {
    whatsappNumber: "+66954289430",
    instagramUrl: "https://www.instagram.com/bloodlinetattoophuket/",
    facebookBookUrl: "https://www.facebook.com/bloodlinetattoophuket/",
    messengerUrl: "https://www.facebook.com/bloodlinetattoophuket/",
  },
  seo: {
    siteName: "Bloodline Tattoo Phuket",
    defaultTitle: "Bloodline Tattoo Phuket | Appointment-Only Custom Studio",
    defaultDescription:
      "Bloodline Tattoo Phuket is an appointment-only studio for custom realism, Japanese and portrait work. Sterile practice and full consultation for every session.",
  },
  homepageAuthority: homepageAuthorityForRegion("phuket"),
  homepageTattooStyles: homepageTattooStylesForRegion("phuket"),
  homepageStandardsSplit: homepageStandardsSplitForRegion("phuket", "Phuket"),
  homepageSessionPathSplit: homepageSessionPathSplitForRegion("phuket", "Phuket"),
};
