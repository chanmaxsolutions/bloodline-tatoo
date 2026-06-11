import { homepageMediaPaths } from "@/config/homepage-media";
import type { RegionHomepageStandardsSplitConfig } from "@/types/homepage-standards-split";
import type { RegionSlug } from "@/types/region";

const standardsSplitAltByRegion: Record<RegionSlug, string> = {
  global:
    "Close detail of premium tattoo execution in a controlled Bloodline studio session across Asia",
  bangkok:
    "Black and grey realism sleeve with Greek god, winged angel, cathedral architecture, and eye detail at Bloodline Tattoo Bangkok",
  bali: "Black and grey realism portrait sleeve with roses and classical columns on a woman at Bloodline Tattoo Bali",
  phuket:
    "Black and grey realism angel back tattoo with sword, roses, and classical columns at Bloodline Tattoo Phuket",
};

const sessionPathAltByRegion: Record<RegionSlug, string> = {
  global:
    "Bloodline studio atmosphere and controlled lighting for premium tattoo sessions across Bangkok, Bali, and Phuket",
  bangkok:
    "Black and grey realism back tattoo with Greek god portrait, winged angel, temple, and lightning at Bloodline Tattoo Bangkok",
  bali: "Black and grey realism Spartan warrior and Parthenon full back tattoo in a moody studio at Bloodline Tattoo Bali",
  phuket:
    "Black and grey realism angel full back tattoo with cathedral columns in a cinematic studio at Bloodline Tattoo Phuket",
};

function homepageStandardsSplitForRegion(
  slug: RegionSlug,
  regionName: string,
): RegionHomepageStandardsSplitConfig {
  const studio = slug === "global" ? "Bloodline" : `Bloodline ${regionName}`;

  if (slug === "global") {
    return {
      bandSurface: "elevated",
      eyebrow: "Studio standard",
      heading: "PREMIUM STANDARD. SERIOUS CRAFT.",
      intro:
        "The house runs on consultation first, sterile practice and execution held with genuine discipline across every studio.",
      pointerLabels: ["Studio foundation", "Execution discipline", "Across studios"],
      pointerIcons: ["building-2", "pen-tool", "globe"],
      bullets: [
        `${studio} is built as a studio house. Consultation before commitment, measured pacing and craft discipline that does not follow trends.`,
        "The same execution standards across every city. Sterile field habits, stencil integrity and a calm room so the work stays exact on every pass.",
        "Bangkok, Bali and Phuket operate on one floor. Permanence treated with seriousness, not speed.",
      ],
      cta: { label: "About the studio", href: "/about" },
      media: {
        src: homepageMediaPaths.standardsSplit(slug),
        alt: standardsSplitAltByRegion[slug],
      },
    };
  }

  return {
    bandSurface: "elevated",
    eyebrow: "Studio standard",
    heading: "PREMIUM WORK. DISCIPLINED ROOM.",
    intro: `How ${regionName} sessions are run. Structured consultation, measured pacing and craft discipline that does not follow trends.`,
    pointerLabels: ["Room baseline", "Custom execution", "House gravity"],
    pointerIcons: ["shield-check", "pen-tool", "building-2"],
    bullets: [
      `${studio} runs on a clear baseline. Structured consultation, sterile practice and execution held with genuine discipline, not hype.`,
      "Custom work is built with intent. Stencil discipline, tonal control and careful pacing keep the process steady while the piece comes together.",
      "The standard you feel here is the same across every Bloodline studio. Only the city changes.",
    ],
    cta: { label: "About the studio", href: "/about" },
    media: {
      src: homepageMediaPaths.standardsSplit(slug),
      alt: standardsSplitAltByRegion[slug],
    },
  };
}

function homepageSessionPathSplitForRegion(
  slug: RegionSlug,
  regionName: string,
): RegionHomepageStandardsSplitConfig {
  const studio = slug === "global" ? "Bloodline" : `Bloodline ${regionName}`;

  if (slug === "global") {
    return {
      mediaSide: "start",
      proofVariants: ["dark", "light", "accent"],
      eyebrow: "SESSION PATH",
      heading: "MESSAGE TO HEALED WORK",
      intro:
        "One consultation process across Bangkok, Bali and Phuket. Clear from first message through final heal, with no vague steps between studios.",
      pointerLabels: ["Cross-studio consult", "Timing on the desk", "Aftercare included"],
      pointerIcons: ["message-square", "clock", "heart-pulse"],
      bullets: [
        `${studio} runs one consultation process across Bangkok, Bali and Phuket. Expectations are aligned before you travel.`,
        "Scope, session length, sterile prep and pacing are all confirmed before your session day. Nothing is left vague.",
        "Aftercare is part of the work. Clear steps so your healing protects the line weight and tone we built.",
      ],
      cta: { label: "Book consultation", href: "/contact" },
      media: {
        src: homepageMediaPaths.sessionPath(slug),
        alt: sessionPathAltByRegion[slug],
      },
    };
  }

  const sessionPathIntroByRegion: Record<Exclude<RegionSlug, "global">, string> = {
    bangkok:
      "Consultation, agreed scope, then execution in the chair. Each stage is clear before you commit. Placement, pacing and recovery are all set before session day.",
    bali: "Consult first, agree on placement and pacing, then measured work in the room. The process stays clear from first message through to full healing.",
    phuket:
      "Consultation, scope and session day run in clear sequence. No surprises once you are in the chair. Everything is agreed before the session begins.",
  };

  return {
    mediaSide: "start",
    proofVariants: ["dark", "light", "accent"],
    eyebrow: "SESSION PATH",
    heading: "CONSULT TO HEALED WORK",
    intro: sessionPathIntroByRegion[slug],
    pointerLabels: ["Consult first", "Scope locked", "Session day"],
    pointerIcons: ["message-square", "clipboard-list", "shield-check"],
    bullets: [
      `${studio} runs consult first. Scope, timing and sterile prep are all agreed before the session is committed.`,
      "You know placement, session length and recovery expectations before anything is staged. No vague deposit games.",
      "Session day is calm. Disciplined field habits, controlled pacing and a close-out brief that protects the line weight and tone of your work.",
    ],
    cta: { label: "Book consultation", href: "/contact" },
    media: {
      src: homepageMediaPaths.sessionPath(slug),
      alt: sessionPathAltByRegion[slug],
    },
  };
}

export { homepageSessionPathSplitForRegion, homepageStandardsSplitForRegion };
