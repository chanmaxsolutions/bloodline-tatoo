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
      heading: "PREMIUM STANDARD. ZERO THEATRE.",
      intro:
        "The house runs on consultation-first discipline, sterile-field habits, and execution held under restraint—not theatre.",
      pointerLabels: ["Institutional floor", "Execution discipline", "Across studios"],
      pointerIcons: ["building-2", "pen-tool", "globe"],
      bullets: [
        `${studio} is built as a studio house: consultation before commitment, measured pacing, and craft discipline that does not flex for trends.`,
        "Internationally held execution standards—sterile field habits, stencil integrity, and a calm room so the work stays exact on every pass.",
        "The same institutional floor in Bangkok, Bali, and Phuket: permanence treated with seriousness, not volume speed.",
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
    intro: `How ${regionName} sessions are run: structured consultation, measured pacing, and craft discipline that does not flex for trends.`,
    pointerLabels: ["Room baseline", "Custom execution", "House gravity"],
    pointerIcons: ["shield-check", "pen-tool", "building-2"],
    bullets: [
      `${studio} runs on a non-negotiable baseline: structured consultation, sterile-field discipline, and execution held under restraint—not hype.`,
      "Custom work is staged with intent: stencil discipline, tonal control, and pacing that keeps uncertainty out of the room while the piece is built.",
      "You should feel the same premium gravity here as the wider house—only the city changes.",
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
        "One consultation architecture across Bangkok, Bali, and Phuket—legible from first message through final heal. No vague steps between studios.",
      pointerLabels: ["Cross-studio consult", "Timing on the desk", "Aftercare included"],
      pointerIcons: ["message-square", "clock", "heart-pulse"],
      bullets: [
        `${studio} carries one consultation architecture across Bangkok, Bali, and Phuket—expectations align before you travel.`,
        "The desk keeps timing legible: scope, session length, sterile-field prep, and pacing you can plan around.",
        "Aftercare ships as part of the work—clear steps so healing protects line weight and tonal control.",
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
      "Consultation, locked scope, then execution in-chair—each stage readable before you commit. Placement, pacing, and recovery expectations are set early.",
    bali: "Consult first, agreement on placement and session pacing, then measured work in-room. The path stays clear from first message through healing.",
    phuket:
      "Consultation, scope, and session day run in sequence—no deposit theatre, no surprises once you are in the chair. Expectations are locked before needles are staged.",
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
      `${studio} runs consult first—scope, timing, and sterile-field prep agreed before the room commits to execution.`,
      "You know placement, session cadence, and recovery expectations before needles are staged—no vague deposit games.",
      "Session day stays calm: disciplined field habits, controlled pacing, and a close-out brief that protects line weight and tone.",
    ],
    cta: { label: "Book consultation", href: "/contact" },
    media: {
      src: homepageMediaPaths.sessionPath(slug),
      alt: sessionPathAltByRegion[slug],
    },
  };
}

export { homepageSessionPathSplitForRegion, homepageStandardsSplitForRegion };
