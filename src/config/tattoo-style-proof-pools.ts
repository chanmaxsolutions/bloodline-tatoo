import { getBambooProofPoolForStudio } from "@/config/tattoo-style-bamboo-media";
import { getChicanoProofPoolForStudio } from "@/config/tattoo-style-chicano-media";
import { getColourProofPoolForStudio } from "@/config/tattoo-style-colour-media";
import { getHealedProofPoolForStudio } from "@/config/tattoo-style-healed-media";
import { getJapaneseProofPoolForStudio } from "@/config/tattoo-style-japanese-media";
import { getPortraitProofPoolForStudio } from "@/config/tattoo-style-portrait-media";
import { getMandalaProofPoolForStudio } from "@/config/tattoo-style-mandala-media";
import { getRealismProofPoolForStudio } from "@/config/tattoo-style-realism-media";
import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";
import type { TattooStyleSlug } from "@/types/tattoo-style";
import type { RegionSlug } from "@/types/region";
import {
  resolveTattooStyleStudioFallbackOrder,
  tattooStyleStudioRegionsForSlug,
} from "@/config/tattoo-style-image-regions";

function getTattooStyleProofPoolForStudio(
  slug: TattooStyleSlug,
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (slug === "bamboo") {
    return getBambooProofPoolForStudio(studio);
  }

  if (slug === "realism") {
    return getRealismProofPoolForStudio(studio);
  }

  if (slug === "chicano") {
    return getChicanoProofPoolForStudio(studio);
  }

  if (slug === "colour") {
    return getColourProofPoolForStudio(studio);
  }

  if (slug === "healed") {
    return getHealedProofPoolForStudio(studio);
  }

  if (slug === "japanese") {
    return getJapaneseProofPoolForStudio(studio);
  }

  if (slug === "portrait") {
    return getPortraitProofPoolForStudio(studio);
  }

  if (slug === "mandala") {
    return getMandalaProofPoolForStudio(studio);
  }

  return [];
}

function getTattooStyleProofPoolForRegion(
  slug: TattooStyleSlug,
  region: RegionSlug,
): readonly TattooStyleDetailProofImage[] {
  if (region === "global") {
    const merged: TattooStyleDetailProofImage[] = [];

    for (const studio of tattooStyleStudioRegionsForSlug(slug)) {
      for (const image of getTattooStyleProofPoolForStudio(slug, studio)) {
        merged.push(image);
      }
    }

    return merged;
  }

  /** Regional SEO: proof captions must match the domain studio — no cross-city pool merge. */
  const order = resolveTattooStyleStudioFallbackOrder(slug, region);

  for (const studio of order) {
    const studioPool = getTattooStyleProofPoolForStudio(slug, studio);

    if (studioPool.length > 0) {
      return studioPool;
    }
  }

  return [];
}

function getTattooStyleProofPool(
  slug: TattooStyleSlug,
  region: RegionSlug,
): readonly TattooStyleDetailProofImage[] {
  const regional = getTattooStyleProofPoolForRegion(slug, region);

  if (regional.length > 0) {
    return regional;
  }

  /** Empty registered pools — allow future per-style flat fallback in config. */
  for (const studio of tattooStyleStudioRegionsForSlug(slug)) {
    const studioPool = getTattooStyleProofPoolForStudio(slug, studio);
    if (studioPool.length > 0) {
      return studioPool;
    }
  }

  return [];
}

export {
  getTattooStyleProofPool,
  getTattooStyleProofPoolForRegion,
  getTattooStyleProofPoolForStudio,
};
