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
    heading: "THE GLOBAL STUDIO STANDARD",
    description:
      "Bloodline runs as a studio house—not a trend shop. **Consultation, sterile discipline, and measured execution** stay consistent across Bangkok, Bali, and Phuket.",
    ...authorityCta,
  },
  bangkok: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE BANGKOK STUDIO STANDARD",
    description:
      "Bloodline Bangkok carries the wider house baseline: **structured consultation**, sterile practice, and premium work paced for permanence—not hype.",
    ...authorityCta,
  },
  bali: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE BALI STUDIO STANDARD",
    description:
      "Bloodline Bali holds the same house process: **clear consultation**, sterile habits, and execution that respects how ink lives on skin long-term.",
    ...authorityCta,
  },
  phuket: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE PHUKET STUDIO STANDARD",
    description:
      "Bloodline Phuket follows the house standard: **consultation-first** sessions, sterile practice, and craft handled with long-term seriousness.",
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
      line: "Field prep and pacing held to the same baseline in every city.",
    },
    {
      tag: "House standard",
      line: "Calm rooms built for focus—from first message to healed work.",
    },
  ],
  bangkok: [
    {
      tag: "Sterile field",
      line: "Gloves, prep, and session discipline kept non-negotiable in-room.",
    },
    {
      tag: "Consultation first",
      line: "Scope, timing, and expectations locked before needles are staged.",
    },
  ],
  bali: [
    { tag: "Measured execution", line: "Stencil integrity and tonal control on every pass." },
    { tag: "Calm room", line: "A focused environment—no chaos, no rushed decisions." },
  ],
  phuket: [
    { tag: "Sterile practice", line: "Controlled field habits from setup through close-out." },
    { tag: "Focused session", line: "Readable pacing so the piece stays exact under restraint." },
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
