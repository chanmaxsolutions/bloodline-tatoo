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
    "Specialising in large-scale custom tattoos.\n\nProudly tattooing Phuket since 2015.",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/place/Bloodline+Tattoo+Patong+Phuket/@7.893357,98.296677,17z/data=!3m1!4b1!4m6!3m5!1s0x30503abca0572a7d:0x281da2ad7840f277!8m2!3d7.893357!4d98.296677",
  location: {
    streetAddress: "54/2 Soi Patong Resort, Thanon Bangla",
    addressLocality: "Patong",
    addressRegion: "Phuket",
    postalCode: "83150",
    addressCountry: "TH",
    telephone: "+66954289430",
    openingHours: ["Mo-Su 10:00-19:00"],
    geo: {
      latitude: 7.893357,
      longitude: 98.296677,
    },
  },
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
