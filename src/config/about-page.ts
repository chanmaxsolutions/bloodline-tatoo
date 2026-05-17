import { homepageStandardsSplitForRegion } from "@/config/homepage-standards-split";
import type { AboutPageIntro, AboutPageClosing, AboutPageExploreLink } from "@/types/about-page";
import type { RegionSlug } from "@/types/region";

function aboutIntroForRegion(region: RegionSlug, regionName: string): AboutPageIntro {
  if (region === "global") {
    return {
      eyebrow: "Inside the studio",
      heading: "A STUDIO HOUSE, NOT A HYPE SHOP",
      description: [
        "Bloodline was built for clients who want **more than trend-driven tattoo culture**. Every studio runs through disciplined consultation, measured execution, and standards designed to protect the work on skin.",
        "Across Bangkok, Bali, and Phuket, the expectation stays the same: **calm rooms, precise process, and sterile practice**. The location changes. The baseline does not.",
      ].join("\n\n"),
      cta: { label: "View portfolio", href: "/gallery" },
    };
  }

  const studio = `Bloodline ${regionName}`;
  return {
    eyebrow: "Inside the studio",
    heading: `PREMIUM TATTOO STUDIO IN ${regionName.toUpperCase()}`,
    description: [
      `${studio} runs with **structured consultation, measured execution, and sterile practice**. Premium work is handled with long-term precision, not session volume.`,
      "Whether you are local or visiting, the path stays clear: align on scope and timing, execute with restraint in the room, and leave with aftercare that protects line weight and tone.",
    ].join("\n\n"),
    cta: { label: "View portfolio", href: "/gallery" },
  };
}

function aboutExploreLinks(): readonly AboutPageExploreLink[] {
  return [
    { label: "Reviews", href: "/reviews" },
    { label: "Portfolio", href: "/gallery" },
    { label: "Tattoo styles", href: "/tattoo-styles" },
  ];
}

function aboutClosingForRegion(region: RegionSlug, regionName: string): AboutPageClosing {
  if (region === "global") {
    return {
      heading: "READY TO BOOK?",
      description:
        "Choose your studio and message us on WhatsApp. We align on placement, scale, and timing before the room commits to the work.",
      exploreLinks: aboutExploreLinks(),
    };
  }

  return {
    heading: "READY TO BOOK?",
    description: `Tell us what you want tattooed in ${regionName}. We align on placement, scale, and timing before the session is locked in.`,
    exploreLinks: aboutExploreLinks(),
  };
}

function aboutPageContentForRegion(region: RegionSlug, regionName: string) {
  return {
    intro: aboutIntroForRegion(region, regionName),
    standardsSplit: {
      ...homepageStandardsSplitForRegion(region, regionName),
      cta: { label: "View portfolio", href: "/gallery" },
      bandSurface: "default" as const,
    },
    closing: aboutClosingForRegion(region, regionName),
  };
}

export { aboutPageContentForRegion };
