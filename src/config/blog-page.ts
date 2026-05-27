import type { PageClosingCtaContent } from "@/types/page-closing-cta";
import type { BlogPageIntro } from "@/types/blog";
import type { RegionSlug } from "@/types/region";

const blogPageIntroByRegion: Record<RegionSlug, BlogPageIntro> = {
  global: {
    eyebrow: "Tattoo blog",
    heading: "GUIDES FOR TRAVELERS & COLLECTORS",
    description:
      "Practical education on styles, healing, studio standards, and planning a session across Bloodline in Bangkok, Bali, and Phuket.",
  },
  bangkok: {
    eyebrow: "Tattoo blog",
    heading: "BANGKOK TATTOO GUIDES",
    description:
      "Session planning, style direction, and aftercare written for clients booking Bloodline Bangkok — without generic travel-blog noise.",
  },
  bali: {
    eyebrow: "Tattoo blog",
    heading: "BALI TATTOO GUIDES",
    description:
      "Humidity, healing, and trip timing for tattoos at Bloodline Bali. Clear guidance before you lock dates on the island.",
  },
  phuket: {
    eyebrow: "Tattoo blog",
    heading: "PHUKET TATTOO GUIDES",
    description:
      "Placement, sun exposure, and session prep for Bloodline Phuket. Built for travelers who want studio-grade execution, not souvenir ink.",
  },
};

function blogPageIntroForRegion(region: RegionSlug): BlogPageIntro {
  return blogPageIntroByRegion[region];
}

function blogPageClosingForRegion(region: RegionSlug, regionName: string): PageClosingCtaContent {
  if (region === "global") {
    return {
      heading: "READY TO PLAN YOUR NEXT SESSION?",
      description:
        "Pick your studio, then message us on WhatsApp with placement, scale, and reference direction. We align on timing before the room commits.",
    };
  }

  return {
    heading: `READY TO BOOK YOUR NEXT ${regionName.toUpperCase()} SESSION?`,
    description: `Have a style or placement in mind? Message Bloodline ${regionName} on WhatsApp with references and travel dates. We confirm feasibility before you fly.`,
  };
}

export { blogPageClosingForRegion, blogPageIntroForRegion };
