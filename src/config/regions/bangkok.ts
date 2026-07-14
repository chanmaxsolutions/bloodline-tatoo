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
  googleBusinessProfileUrl:
    "https://www.google.com/maps/place/Bloodline+Tattoo+Bangkok/@13.739781,100.562007,17z/data=!3m1!4b1!4m6!3m5!1s0x30e29f292108dad7:0xe5573420299d57a1!8m2!3d13.739781!4d100.562007",
  location: {
    streetAddress: "22/3-4 Sukhumvit 21 Rd, Khlong Toei",
    addressLocality: "Watthana",
    addressRegion: "Bangkok",
    postalCode: "10110",
    addressCountry: "TH",
    telephone: "+66820450006",
    openingHours: ["Mo-Su 09:00-20:00"],
    geo: {
      latitude: 13.739781,
      longitude: 100.562007,
    },
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
