import type { AboutPageIntro, AboutPageTrustStat, AboutPageVideo } from "@/types/about-page";
import type { RegionSlug } from "@/types/region";

const ABOUT_STUDIO_STORY_YOUTUBE_VIDEO_ID = "4t9BxBku6wI";

function aboutIntroForRegion(region: RegionSlug, regionName: string): AboutPageIntro {
  if (region === "global") {
    return {
      eyebrow: "Inside the studio",
      heading: "A STUDIO HOUSE, NOT A HYPE SHOP",
      description:
        "Bloodline runs across Bangkok, Bali, and Phuket on one baseline: consultation first, sterile discipline, and custom work built to hold on skin. This is who we are and how every room operates.",
    };
  }

  return {
    eyebrow: "Inside the studio",
    heading: `PREMIUM TATTOO STUDIO IN ${regionName.toUpperCase()}`,
    description: `Bloodline ${regionName} runs on calm rooms, measured pacing, and craft treated as permanence. Structured consultation, sterile practice, and execution held with long-term precision.`,
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
      "Bloodline was built for clients who want **more than trend-driven tattoo culture**. Every studio aligns on placement, scale, and reference direction before a session is staged.",
      "Across Bangkok, Bali, and Phuket, you get **calm rooms, precise process, and sterile practice**. The city changes. The standard does not.",
      "You are not booking a fast chair. You are entering a studio house where scope, pacing, and aftercare are treated as part of the tattoo.",
    ];
  }

  const studio = `Bloodline ${regionName}`;
  return [
    `${studio} operates with the same disciplined floor as the wider house: **structured consultation, measured execution, and sterile practice**.`,
    "Clients come for the work and return for the consistency: **calm process, serious standards**, and a room that stays focused from first message to final detail.",
    "Whether you are local or visiting, we align on scope and timing first, then execute with restraint in the room.",
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
      heading: "HOW BLOODLINE WAS BUILT",
      description:
        "Watch how the studio house formed across Bangkok, Bali, and Phuket—consultation first, sterile discipline, and work built to hold on skin.",
    };
  }

  return {
    ...base,
    eyebrow: "Studio story",
    heading: "THE HOUSE BEHIND THE ROOM",
    description: `The same philosophy that runs Bloodline ${regionName}. See how the wider studio house was built and why the standard does not change city to city.`,
  };
}

function aboutClosingForRegion(region: RegionSlug, regionName: string) {
  if (region === "global") {
    return {
      heading: "READY TO BOOK YOUR NEXT SESSION?",
      description:
        "Choose your studio and message us on WhatsApp. We align on placement, scale, and timing before the room commits to the work.",
    };
  }

  return {
    heading: `READY TO BOOK YOUR ${regionName.toUpperCase()} SESSION?`,
    description: `Tell us what you want tattooed in ${regionName}. We align on placement, scale, and timing before the session is locked in.`,
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
