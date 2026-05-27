import type { TattooStyleSlug } from "@/types/tattoo-style";
import type { RegionSlug } from "@/types/region";

/** Physical image folders exist per studio — not on `global`. */
const tattooStyleStudioRegions = ["bangkok", "bali", "phuket"] as const;

type TattooStyleStudioRegion = (typeof tattooStyleStudioRegions)[number];

/**
 * Which studios may have image packs for each style.
 * Mirrors `region-tattoo-style-availability` (studio-only; no `global` folder).
 */
const tattooStyleStudioRegionsBySlug: Record<TattooStyleSlug, readonly TattooStyleStudioRegion[]> =
  {
    realism: tattooStyleStudioRegions,
    portrait: tattooStyleStudioRegions,
    japanese: tattooStyleStudioRegions,
    colour: tattooStyleStudioRegions,
    mandala: tattooStyleStudioRegions,
    chicano: tattooStyleStudioRegions,
    bamboo: ["bangkok", "phuket"],
    healed: ["bali"],
  };

function tattooStyleStudioRegionsForSlug(
  slug: TattooStyleSlug,
): readonly TattooStyleStudioRegion[] {
  return tattooStyleStudioRegionsBySlug[slug];
}

/** Primary studio for assets, then siblings with packs for the same style (for fallbacks). */
function resolveTattooStyleStudioFallbackOrder(
  slug: TattooStyleSlug,
  region: RegionSlug,
): readonly TattooStyleStudioRegion[] {
  const studios = tattooStyleStudioRegionsForSlug(slug);

  if (region === "global") {
    return studios;
  }

  const primary = region as TattooStyleStudioRegion;

  if (!studios.includes(primary)) {
    return studios;
  }

  return [primary, ...studios.filter((studio) => studio !== primary)];
}

export {
  resolveTattooStyleStudioFallbackOrder,
  tattooStyleStudioRegions,
  tattooStyleStudioRegionsBySlug,
  tattooStyleStudioRegionsForSlug,
};

export type { TattooStyleStudioRegion };
