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
  heroHeading: "BALI'S MOST SOUGHT-AFTER TATTOO STUDIO",
  heroDescription:
    "Appointment-only. Custom work built around you. Your idea, the right artist, the time to do it properly.",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/place/Bloodline+Tattoo+Bali+-+Kuta/@-8.7170141,115.1743688,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd246b9a8ffb7f3:0xd0e55e454585581a!8m2!3d-8.7170141!4d115.1743688",
  location: {
    streetAddress: "Jln Legian No.180",
    addressLocality: "Kuta",
    addressRegion: "Bali",
    postalCode: "80361",
    addressCountry: "ID",
    telephone: "+6281138801222",
    openingHours: ["Mo-Su 09:00-19:00"],
    geo: {
      latitude: -8.7170141,
      longitude: 115.1743688,
    },
  },
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
