import type { AboutPageIntro, AboutPageTrustStat, AboutPageVideo } from "@/types/about-page";
import type { RegionSlug } from "@/types/region";

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
  if (region === "global") {
    return [
      { label: "Studios across Asia", value: "3" },
      { label: "Google rating", value: "5.0" },
      { label: "Five-star Google reviews", value: "2500+" },
    ];
  }

  return [
    { label: "Google rating", value: "5.0" },
    { label: "Reviews on this page", value: String(curatedReviewCount) },
    { label: "Five-star Google reviews", value: "2500+" },
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
      `${studio} sits in one of the world's most visited creative destinations and holds the same disciplined floor as the wider house. Structured consultation, measured execution and sterile practice on every session.`,
      "Bali attracts people on longer stays, which means more time to consult properly, heal well and return for follow-up work. We work with that rhythm, not against it.",
      "Whether you are a digital nomad, a long-stay traveller or a visitor with a few days, we align on scope and timing first, then execute with care in the room.",
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
