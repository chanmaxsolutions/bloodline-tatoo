import type { RegionHomepageAuthorityConfig } from "@/types/homepage-authority";
import type { RegionSlug } from "@/types/region";

const authorityCta = {
  ctaLabel: "Inside the studio",
  ctaHref: "/about",
} as const;

const craftPanelBase = {
  src: "/images/homepage-authority/institution-craft.jpg",
  alt: "Close detail of tattoo work in a controlled Bloodline studio session",
  overlay: "accent" as const,
};

const studioPanelBase = {
  src: "/hero-poster.jpg",
  alt: "Bloodline studio atmosphere and controlled lighting for premium tattoo sessions",
  overlay: "light" as const,
};

const authorityBySlug: Record<RegionSlug, RegionHomepageAuthorityConfig> = {
  global: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE GLOBAL STUDIO STANDARD",
    description:
      "Bloodline runs as a studio house—not a trend shop. **Consultation, sterile discipline, and measured execution** stay consistent across Bangkok, Bali, and Phuket.",
    proofPanels: [
      {
        ...craftPanelBase,
        tag: "Sterile field",
        line: "Field prep and pacing held to the same baseline in every city.",
      },
      {
        ...studioPanelBase,
        tag: "House standard",
        line: "Calm rooms built for focus—from first message to healed work.",
      },
    ],
    ...authorityCta,
  },
  bangkok: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE BANGKOK STUDIO STANDARD",
    description:
      "Bloodline Bangkok carries the wider house baseline: **structured consultation**, sterile practice, and premium work paced for permanence—not hype.",
    proofPanels: [
      {
        ...craftPanelBase,
        tag: "Sterile field",
        line: "Gloves, prep, and session discipline kept non-negotiable in-room.",
      },
      {
        ...studioPanelBase,
        tag: "Consultation first",
        line: "Scope, timing, and expectations locked before needles are staged.",
      },
    ],
    ...authorityCta,
  },
  bali: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE BALI STUDIO STANDARD",
    description:
      "Bloodline Bali holds the same house process: **clear consultation**, sterile habits, and execution that respects how ink lives on skin long-term.",
    proofPanels: [
      {
        ...craftPanelBase,
        tag: "Measured execution",
        line: "Stencil integrity and tonal control on every pass.",
      },
      {
        ...studioPanelBase,
        tag: "Calm room",
        line: "A focused environment—no chaos, no rushed decisions.",
      },
    ],
    ...authorityCta,
  },
  phuket: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE PHUKET STUDIO STANDARD",
    description:
      "Bloodline Phuket follows the house standard: **consultation-first** sessions, sterile practice, and craft handled with long-term seriousness.",
    proofPanels: [
      {
        ...craftPanelBase,
        tag: "Sterile practice",
        line: "Controlled field habits from setup through close-out.",
      },
      {
        ...studioPanelBase,
        tag: "Focused session",
        line: "Readable pacing so the piece stays exact under restraint.",
      },
    ],
    ...authorityCta,
  },
};

function homepageAuthorityForRegion(slug: RegionSlug): RegionHomepageAuthorityConfig {
  return authorityBySlug[slug];
}

export { homepageAuthorityForRegion };
