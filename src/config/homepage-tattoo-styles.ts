import type { RegionHomepageTattooStylesConfig, TattooStyleSlug } from "@/types/tattoo-style";
import type { RegionSlug } from "@/types/region";

const defaultFeaturedSlugs: readonly TattooStyleSlug[] = [
  "japanese",
  "realism",
  "fine-line",
  "blackwork",
];

/**
 * Homepage tattoo-style band: intro copy + which catalog slugs to surface.
 * Regions can diverge later (reorder, omit, or swap slugs) without touching tile UI.
 */
function homepageTattooStylesForRegion(
  slug: RegionSlug,
  regionName: string,
): RegionHomepageTattooStylesConfig {
  const place = slug === "global" ? "Bloodline" : `Bloodline ${regionName}`;

  return {
    intro: {
      eyebrow: "Tattoo styles",
      heading: "CHOOSE THE LANGUAGE OF THE WORK.",
      description: `${place} treats style as craft identity—not a menu label. Each direction below opens a dedicated lane: how we think, how we stage the body, and what disciplined execution looks like in that language.`,
    },
    featuredSlugs: defaultFeaturedSlugs,
    catalogCta: {
      label: "View all tattoo styles",
      href: "/tattoo-styles",
    },
  };
}

export { defaultFeaturedSlugs, homepageTattooStylesForRegion };
