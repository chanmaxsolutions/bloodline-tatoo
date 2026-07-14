import type { AboutPageIntro, AboutPageTrustStat, AboutPageVideo } from "@/types/about-page";
import type { RegionSlug } from "@/types/region";
import { resolveGoogleBusinessTrustStats } from "@/lib/google-business-proof";

const ABOUT_STUDIO_STORY_YOUTUBE_VIDEO_ID = "4t9BxBku6wI";

function aboutIntroForRegion(region: RegionSlug, regionName: string): AboutPageIntro {
  if (region === "global") {
    return {
      eyebrow: "Inside the studio",
      heading: "A STUDIO HOUSE BUILT ON ONE STANDARD",
      description:
        "Bloodline runs across Bangkok, Bali and Phuket on one baseline. Consultation first, sterile discipline and custom work built to hold on skin for life.",
    };
  }

  if (region === "bali") {
    return {
      eyebrow: "Inside the studio",
      heading: "THE BLOODLINE STANDARD",
      description:
        "Bloodline Tattoo Bali runs on a family feel and an organised floor. Consultation first, dedicated staff throughout and every session executed with the care that permanent work deserves.",
    };
  }

  return {
    eyebrow: "Inside the studio",
    heading: `PREMIUM TATTOO STUDIO IN ${regionName.toUpperCase()}`,
    description: `Bloodline ${regionName} runs on calm rooms, measured pacing and craft treated as permanence. Consultation first, sterile practice and execution held with genuine long-term precision.`,
  };
}

function aboutTrustStatsForRegion(
  region: RegionSlug,
  curatedReviewCount: number,
): readonly AboutPageTrustStat[] {
  if (region === "bali") {
    return [];
  }

  const googleTrust = resolveGoogleBusinessTrustStats(region);

  if (region === "global") {
    return [
      { label: "Studios across Asia", value: "3" },
      { label: googleTrust.rating.label, value: googleTrust.rating.value },
      { label: googleTrust.reviewCount.label, value: googleTrust.reviewCount.value },
    ];
  }

  return [
    { label: googleTrust.rating.label, value: googleTrust.rating.value },
    { label: "Reviews on this page", value: String(curatedReviewCount) },
    { label: googleTrust.reviewCount.label, value: googleTrust.reviewCount.value },
  ];
}

function aboutStoryParagraphsForRegion(region: RegionSlug, regionName: string): readonly string[] {
  if (region === "global") {
    return [
      "Bloodline was built for clients who want more than trend-driven tattoo culture. Every studio aligns on placement, scale and reference direction before a session is staged.",
      "Across Bangkok, Bali and Phuket you get calm rooms, precise process and sterile practice. The city changes. The standard does not.",
      "You are not booking a fast chair. You are entering a studio house where scope, pacing and aftercare are treated as part of the work.",
    ];
  }

  const studio = `Bloodline ${regionName}`;

  if (region === "bali") {
    return [
      "Step inside Bloodline Bali and you'll feel it immediately, this isn't like other studios. The space is generous, the energy is calm and every detail has been considered. We believe the environment you work in sets the standard you work to. Build something beautiful, and the people inside it rise to meet it.",
      "Three floors of space for every artist and a dedicated support team whose only focus is making sure you're looked after from the moment you arrive. Whether that's walking you through the process, keeping you comfortable during a long session or making sure every little detail is taken care of, it's all handled, so you can just be present for the experience.",
      "When serious artists work alongside each other in a space built for the craft, something special happens. The energy is collaborative, the standard is shared and every person in the room is there because they genuinely love what they do.",
      "A place that looks the part, feels like home and produces work that speaks for itself.",
    ];
  }

  if (region === "phuket") {
    return [
      `${studio} operates in Thailand's most visited resort destination and holds the same disciplined floor as the wider house. Structured consultation, sterile practice and measured execution on every session.`,
      "Phuket has no shortage of walk-in tattoo shops. Bloodline Phuket is not one of them. We run appointment only, with full consultation before anything is committed.",
      "Whether you are on holiday or living on the island, we align on scope and timing first. You leave knowing exactly what was done and how to protect it while it heals.",
    ];
  }

  return [
    `${studio} sits in the heart of Bangkok and operates on the same disciplined floor as the wider house. Structured consultation, measured execution and sterile practice on every session.`,
    "Clients come for the work and return for the consistency. Calm process, serious standards and a room that stays focused from the first message through to the final detail.",
    "Whether you are based in Bangkok or travelling through, we align on scope and timing first, then execute with care in the room.",
  ];
}

function aboutVideoForRegion(region: RegionSlug, regionName: string): AboutPageVideo {
  const base = {
    youtubeVideoId: ABOUT_STUDIO_STORY_YOUTUBE_VIDEO_ID,
    embedTitle: "Bloodline Tattoo studio story",
  };

  if (region === "global") {
    return {
      ...base,
      eyebrow: "Studio story",
      heading: "THE STORY BEHIND THE STUDIO HOUSE",
      description:
        "Watch how Bloodline formed across Bangkok, Bali and Phuket. Consultation first, sterile discipline and work built to hold on skin for life.",
    };
  }

  if (region === "bali") {
    return {
      ...base,
      eyebrow: "Studio story",
      heading: "THE STORY BEHIND THE STUDIO",
      description: `The same philosophy behind every Bloodline studio. See how the house was built and why the standard stays the same from city to city.`,
    };
  }

  return {
    ...base,
    eyebrow: "Studio story",
    heading: "THE HOUSE BEHIND THE ROOM",
    description: `The same philosophy behind every Bloodline studio. See how the house was built and why the standard stays the same from city to city.`,
  };
}

function aboutClosingForRegion(region: RegionSlug, regionName: string) {
  if (region === "global") {
    return {
      heading: "READY TO BOOK YOUR NEXT SESSION?",
      description:
        "Choose your studio and message us on WhatsApp. We align on placement, scale and timing before anything is committed.",
    };
  }

  return {
    heading: `READY TO BOOK YOUR ${regionName.toUpperCase()} SESSION?`,
    description: `Tell us what you have in mind. We align on placement, scale and timing before the session is locked in.`,
  };
}

function aboutPageContentForRegion(
  region: RegionSlug,
  regionName: string,
  curatedReviewCount: number,
) {
  return {
    intro: aboutIntroForRegion(region, regionName),
    trustStats: aboutTrustStatsForRegion(region, curatedReviewCount),
    storyParagraphs: aboutStoryParagraphsForRegion(region, regionName),
    video: aboutVideoForRegion(region, regionName),
    closing: aboutClosingForRegion(region, regionName),
  };
}

export { aboutPageContentForRegion };
