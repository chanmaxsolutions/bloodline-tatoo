import { homepageFeaturedTattooStyleSlugsForRegion } from "@/config/region-tattoo-style-availability";
import type { RegionHomepageTattooStylesConfig } from "@/types/tattoo-style";
import type { RegionSlug } from "@/types/region";

const catalogCta = {
  label: "View all tattoo styles",
  href: "/tattoo-styles",
} as const;

/**
 * Per-region homepage tattoo-style band.
 * Homepage grid uses `homepageFeaturedTattooStyleSlugsForRegion` (4 max); full menu on `/tattoo-styles`.
 */
const tattooStylesBySlug: Record<RegionSlug, RegionHomepageTattooStylesConfig> = {
  global: {
    intro: {
      eyebrow: "TATTOO STYLES",
      heading: "DIRECTIONS ACROSS THE HOUSE",
      description:
        "Core styles run across every Bloodline studio. Some lanes are city-specific. Open a direction to see consultation flow, placement logic and work held to house standard.",
    },
    featuredSlugs: homepageFeaturedTattooStyleSlugsForRegion("global"),
    catalogCta,
  },
  bangkok: {
    intro: {
      eyebrow: "TATTOO STYLES",
      heading: "BANGKOK STYLE DIRECTIONS",
      description:
        "Each style below runs on the same Bangkok baseline. Consult first, sterile practice and measured execution. See process, placement and healed proof before you book.",
    },
    featuredSlugs: homepageFeaturedTattooStyleSlugsForRegion("bangkok"),
    catalogCta,
  },
  bali: {
    intro: {
      eyebrow: "TATTOO STYLES",
      heading: "BALI STYLE DIRECTIONS",
      description:
        "Realism, portrait, Japanese and healed work, each running on the same Bali baseline. Open a style to see consultation flow, placement options and proof from the room.",
    },
    featuredSlugs: homepageFeaturedTattooStyleSlugsForRegion("bali"),
    catalogCta,
  },
  phuket: {
    intro: {
      eyebrow: "TATTOO STYLES",
      heading: "PHUKET STYLE DIRECTIONS",
      description:
        "Realism, portrait, Japanese and colour, each held to the same Phuket standard. Open a style to see consultation flow, placement options and work from the studio.",
    },
    featuredSlugs: homepageFeaturedTattooStyleSlugsForRegion("phuket"),
    catalogCta,
  },
};

function homepageTattooStylesForRegion(slug: RegionSlug): RegionHomepageTattooStylesConfig {
  return tattooStylesBySlug[slug];
}

export { homepageTattooStylesForRegion };
