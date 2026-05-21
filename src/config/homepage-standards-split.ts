import type { RegionHomepageStandardsSplitConfig } from "@/types/homepage-standards-split";
import type { RegionSlug } from "@/types/region";

const standardsMedia = {
  src: "/images/homepage-authority/institution-craft.jpg",
  alt: "Close detail of tattoo work in a controlled Bloodline studio session",
} as const;

const sessionPathMedia = {
  src: "/hero-poster.jpg",
  alt: "Bloodline studio atmosphere and controlled lighting for premium tattoo sessions",
} as const;

function homepageStandardsSplitForRegion(
  slug: RegionSlug,
  regionName: string,
): RegionHomepageStandardsSplitConfig {
  const studio = slug === "global" ? "Bloodline" : `Bloodline ${regionName}`;

  if (slug === "global") {
    return {
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
      media: standardsMedia,
    };
  }

  return {
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
    media: standardsMedia,
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
      bandSurface: "surface",
      eyebrow: "Session path",
      heading: "FROM FIRST MESSAGE TO FINAL HEAL",
      intro:
        "One consultation architecture from first message through healing—expectations stay legible at every step.",
      pointerLabels: ["Cross-studio consult", "Timing on the desk", "Aftercare included"],
      pointerIcons: ["message-square", "clock", "heart-pulse"],
      bullets: [
        `${studio} carries one consultation architecture across Bangkok, Bali, and Phuket—expectations align before you travel.`,
        "The desk keeps timing legible: scope, session length, sterile-field prep, and pacing you can plan around.",
        "Aftercare ships as part of the work—clear steps so healing protects line weight and tonal control.",
      ],
      cta: { label: "Book consultation", href: "/contact" },
      media: sessionPathMedia,
    };
  }

  return {
    mediaSide: "start",
    proofVariants: ["dark", "light", "accent"],
    bandSurface: "surface",
    eyebrow: "Session path",
    heading: "A STRAIGHT LINE TO INK",
    intro: "A straight line from first message to healed work—no vague steps, no deposit theatre.",
    pointerLabels: ["Consult first", "Scope locked", "Calm session day"],
    pointerIcons: ["message-square", "clipboard-list", "shield-check"],
    bullets: [
      `${studio} keeps the path readable: consult first, agreement on scope and time, then the room commits to execution.`,
      "No vague deposit theatre—you understand placement, session cadence, and recovery before needles are staged.",
      "Session day stays calm: controlled pacing, disciplined field habits, and a close-out brief that protects the piece.",
    ],
    cta: { label: "Book consultation", href: "/contact" },
    media: sessionPathMedia,
  };
}

export { homepageSessionPathSplitForRegion, homepageStandardsSplitForRegion };
