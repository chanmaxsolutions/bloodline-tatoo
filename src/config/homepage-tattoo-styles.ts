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
      heading: "STYLE AS CRAFT",
      description:
        "Style is craft, not a menu. Studios share a core set; some lanes are location-specific. Open any direction below.",
    },
    featuredSlugs: homepageFeaturedTattooStyleSlugsForRegion("global"),
    catalogCta,
  },
  bangkok: {
    intro: {
      eyebrow: "TATTOO STYLES",
      heading: "STYLE AS CRAFT",
      description:
        "Style is craft, not a menu. Open any direction below for process, placement, and work to our Bangkok standard.",
    },
    featuredSlugs: homepageFeaturedTattooStyleSlugsForRegion("bangkok"),
    catalogCta,
  },
  bali: {
    intro: {
      eyebrow: "TATTOO STYLES",
      heading: "STYLE AS CRAFT",
      description:
        "Style is craft, not a menu. Open any direction below for process, placement, and execution at our Bali studio.",
    },
    featuredSlugs: homepageFeaturedTattooStyleSlugsForRegion("bali"),
    catalogCta,
  },
  phuket: {
    intro: {
      eyebrow: "TATTOO STYLES",
      heading: "STYLE AS CRAFT",
      description:
        "Style is craft, not a menu. Open any direction below for process, placement, and work held to Phuket standard.",
    },
    featuredSlugs: homepageFeaturedTattooStyleSlugsForRegion("phuket"),
    catalogCta,
  },
};

function homepageTattooStylesForRegion(slug: RegionSlug): RegionHomepageTattooStylesConfig {
  return tattooStylesBySlug[slug];
}

export { homepageTattooStylesForRegion };
