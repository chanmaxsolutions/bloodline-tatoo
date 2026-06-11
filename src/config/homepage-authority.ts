import { homepageMediaPaths } from "@/config/homepage-media";
import type { RegionHomepageAuthorityConfig } from "@/types/homepage-authority";
import type { RegionSlug } from "@/types/region";

const authorityCta = {
  ctaLabel: "Inside the studio",
  ctaHref: "/about",
} as const;

const authorityCraftAltByRegion: Record<RegionSlug, string> = {
  global: "Close detail of tattoo work in a controlled Bloodline studio session",
  bangkok:
    "Black and grey realism sleeve with Greek god, winged angel, cathedral architecture, and eye detail at Bloodline Tattoo Bangkok",
  bali: "Black and grey realism portrait sleeve with roses and classical columns on a woman at Bloodline Tattoo Bali",
  phuket:
    "Black and grey realism angel back tattoo with sword, roses, and classical columns at Bloodline Tattoo Phuket",
};

const authorityStudioAltByRegion: Record<RegionSlug, string> = {
  global:
    "Bloodline studio atmosphere and controlled lighting for premium tattoo sessions across Asia",
  bangkok:
    "Black and grey realism back tattoo with Greek god portrait, winged angel, temple, and lightning at Bloodline Tattoo Bangkok",
  bali: "Black and grey realism Spartan warrior and Parthenon full back tattoo in a moody studio at Bloodline Tattoo Bali",
  phuket:
    "Black and grey realism angel full back tattoo with cathedral columns in a cinematic studio at Bloodline Tattoo Phuket",
};

const authorityBySlug: Record<RegionSlug, Omit<RegionHomepageAuthorityConfig, "proofPanels">> = {
  global: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE HOUSE STANDARD ACROSS ASIA",
    description:
      "Bloodline runs across Bangkok, Bali and Phuket as one studio house. Consultation first, sterile discipline and measured execution in every room.",
    ...authorityCta,
  },
  bangkok: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE BANGKOK STUDIO STANDARD",
    description:
      "Bloodline Bangkok runs on structured consultation, sterile practice and premium work built for permanence. Every session is paced with care, not rushed for volume.",
    ...authorityCta,
  },
  bali: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE BALI STUDIO STANDARD",
    description:
      "Bloodline Bali runs on clear consultation, sterile habits and careful execution. We work with the understanding that what goes on your skin stays there for life.",
    ...authorityCta,
  },
  phuket: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE PHUKET STUDIO STANDARD",
    description:
      "Bloodline Phuket runs consultation first, with sterile practice and craft handled with genuine long-term seriousness. Not a walk-in shop. A proper studio.",
    ...authorityCta,
  },
};

const authorityPanelCopyByRegion: Record<
  RegionSlug,
  readonly [{ tag: string; line: string }, { tag: string; line: string }]
> = {
  global: [
    {
      tag: "Sterile field",
      line: "The same prep and pacing discipline in every city, every session.",
    },
    {
      tag: "House standard",
      line: "Calm rooms built for focus, from first message through healed work.",
    },
  ],
  bangkok: [
    {
      tag: "Sterile field",
      line: "Gloves, prep and discipline non-negotiable in every Bangkok session.",
    },
    {
      tag: "Consultation first",
      line: "Scope, timing and expectations agreed before your session begins.",
    },
  ],
  bali: [
    {
      tag: "Measured execution",
      line: "Stencil integrity and tonal control on every pass, every session.",
    },
    {
      tag: "Calm room",
      line: "A calm focused room where consultation and pacing are never rushed.",
    },
  ],
  phuket: [
    {
      tag: "Sterile practice",
      line: "Controlled sterile habits from your arrival through session close-out.",
    },
    {
      tag: "Focused session",
      line: "Measured session pacing so work stays exact from start to finish.",
    },
  ],
};

function authorityProofPanelsForRegion(
  slug: RegionSlug,
): RegionHomepageAuthorityConfig["proofPanels"] {
  const [craftCopy, studioCopy] = authorityPanelCopyByRegion[slug];

  return [
    {
      src: homepageMediaPaths.authorityCraft(slug),
      alt: authorityCraftAltByRegion[slug],
      overlay: "accent",
      tag: craftCopy.tag,
      line: craftCopy.line,
    },
    {
      src: homepageMediaPaths.authorityStudio(slug),
      alt: authorityStudioAltByRegion[slug],
      overlay: "light",
      tag: studioCopy.tag,
      line: studioCopy.line,
    },
  ];
}

function homepageAuthorityForRegion(slug: RegionSlug): RegionHomepageAuthorityConfig {
  return {
    ...authorityBySlug[slug],
    proofPanels: authorityProofPanelsForRegion(slug),
  };
}

export { homepageAuthorityForRegion };
