import type { RegionHomepageAuthorityConfig } from "@/types/homepage-authority";
import type { RegionSlug } from "@/types/region";

const authorityCta = {
  ctaLabel: "Inside the studio",
  ctaHref: "/about",
} as const;

const authorityBySlug: Record<RegionSlug, RegionHomepageAuthorityConfig> = {
  global: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE GLOBAL STUDIO STANDARD",
    description: `Bloodline was built for clients seeking more than trend-driven tattoo culture. Every studio operates through disciplined consultation, measured execution, and standards designed to protect the integrity of the work.

Across Bangkok, Bali, and Phuket, the expectation remains the same: calm rooms, precise process, sterile practice, and artistry treated with long-term seriousness. The location changes. The baseline does not.`,
    ...authorityCta,
  },
  bangkok: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE BANGKOK STUDIO STANDARD",
    description: `Bloodline Bangkok operates with the same disciplined approach carried across the wider house: structured consultation, measured execution, sterile practice, and premium artistry handled with long-term precision.

Clients come for the work, but return for the consistency — calm process, serious standards, and an environment designed to keep the experience focused from first consultation to final detail.`,
    ...authorityCta,
  },
  bali: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE BALI STUDIO STANDARD",
    description: `Bloodline Bali maintains the same disciplined studio foundation trusted across the wider house: structured consultation, measured execution, sterile practice, and premium artistry approached with intention.

Beyond the atmosphere is a process built for clarity, consistency, and long-term quality — where every session is handled with patience, precision, and respect for permanence.`,
    ...authorityCta,
  },
  phuket: {
    eyebrow: "CRAFT DISCIPLINE",
    heading: "THE PHUKET STUDIO STANDARD",
    description: `Bloodline Phuket follows the same disciplined studio standards carried across the wider house: structured consultation, measured execution, sterile practice, and premium artistry treated with serious care.

The experience is designed to feel calm, focused, and controlled — allowing every piece to be approached with precision, consistency, and long-term confidence.`,
    ...authorityCta,
  },
};

function homepageAuthorityForRegion(slug: RegionSlug): RegionHomepageAuthorityConfig {
  return authorityBySlug[slug];
}

export { homepageAuthorityForRegion };
