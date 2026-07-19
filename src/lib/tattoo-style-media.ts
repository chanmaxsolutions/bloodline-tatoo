import { getBambooStudioMediaAlt } from "@/config/tattoo-style-bamboo-media";
import { getChicanoStudioMediaAlt } from "@/config/tattoo-style-chicano-media";
import { getColourStudioMediaAlt } from "@/config/tattoo-style-colour-media";
import { getHealedStudioMediaAlt } from "@/config/tattoo-style-healed-media";
import { getJapaneseStudioMediaAlt } from "@/config/tattoo-style-japanese-media";
import { getPortraitStudioMediaAlt } from "@/config/tattoo-style-portrait-media";
import { getMandalaStudioMediaAlt } from "@/config/tattoo-style-mandala-media";
import { getRealismStudioMediaAlt } from "@/config/tattoo-style-realism-media";
import {
  resolveTattooStyleStudioFallbackOrder,
  type TattooStyleStudioRegion,
} from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";
import type { TattooStyleSlug } from "@/types/tattoo-style";
import type { RegionSlug } from "@/types/region";

/** Tiles shown in the style detail proof grid (2×4 desktop). */
const TATTOO_STYLE_PROOF_GALLERY_TILE_COUNT = 8;

const tattooStyleImageRoot = "/images/tattoo-styles";

/**
 * Dated card filename overrides (bust `/_next/image` cache after a swap).
 * Default remains `card.webp` when unset.
 */
const tattooStyleCardFileOverrideByStudio: Partial<
  Record<TattooStyleSlug, Partial<Record<TattooStyleStudioRegion, string>>>
> = {
  portrait: {
    phuket: "card-20250719-home.webp",
  },
  colour: {
    phuket: "card-20250719-home.webp",
  },
};

function tattooStyleHeroSrc(slug: TattooStyleSlug, studio: TattooStyleStudioRegion): string {
  return `${tattooStyleImageRoot}/${slug}/${studio}/hero.webp`;
}

function tattooStyleApproachSrc(slug: TattooStyleSlug, studio: TattooStyleStudioRegion): string {
  return `${tattooStyleImageRoot}/${slug}/${studio}/approach.webp`;
}

function tattooStyleCardSrc(slug: TattooStyleSlug, studio: TattooStyleStudioRegion): string {
  const file = tattooStyleCardFileOverrideByStudio[slug]?.[studio] ?? "card.webp";
  return `${tattooStyleImageRoot}/${slug}/${studio}/${file}`;
}

function resolvePrimaryTattooStyleStudio(
  slug: TattooStyleSlug,
  region: RegionSlug,
): TattooStyleStudioRegion {
  const order = resolveTattooStyleStudioFallbackOrder(slug, region);
  const primary = order[0];

  if (!primary) {
    throw new Error(`No studio image folders configured for tattoo style: ${slug}`);
  }

  return primary;
}

function resolveTattooStyleMediaAlt(
  slug: TattooStyleSlug,
  studio: TattooStyleStudioRegion,
  slot: "heroAlt" | "approachAlt" | "cardAlt",
  fallbackAlt: string,
): string {
  if (slug === "bamboo") {
    return getBambooStudioMediaAlt(studio, slot);
  }

  if (slug === "realism") {
    return getRealismStudioMediaAlt(studio, slot);
  }

  if (slug === "chicano") {
    return getChicanoStudioMediaAlt(studio, slot);
  }

  if (slug === "colour") {
    return getColourStudioMediaAlt(studio, slot);
  }

  if (slug === "healed") {
    return getHealedStudioMediaAlt(studio, slot);
  }

  if (slug === "japanese") {
    return getJapaneseStudioMediaAlt(studio, slot);
  }

  if (slug === "portrait") {
    return getPortraitStudioMediaAlt(studio, slot);
  }

  if (slug === "mandala") {
    return getMandalaStudioMediaAlt(studio, slot);
  }

  return fallbackAlt;
}

function resolveTattooStyleHeroImage(
  slug: TattooStyleSlug,
  region: RegionSlug,
  fallbackAlt: string,
): TattooStyleDetailProofImage {
  const studio = resolvePrimaryTattooStyleStudio(slug, region);
  return {
    src: tattooStyleHeroSrc(slug, studio),
    alt: resolveTattooStyleMediaAlt(slug, studio, "heroAlt", fallbackAlt),
  };
}

function resolveTattooStyleApproachImage(
  slug: TattooStyleSlug,
  region: RegionSlug,
  fallbackAlt: string,
): TattooStyleDetailProofImage {
  const studio = resolvePrimaryTattooStyleStudio(slug, region);
  return {
    src: tattooStyleApproachSrc(slug, studio),
    alt: resolveTattooStyleMediaAlt(slug, studio, "approachAlt", fallbackAlt),
  };
}

function resolveTattooStyleCardImage(
  slug: TattooStyleSlug,
  region: RegionSlug,
  fallbackAlt: string,
): TattooStyleDetailProofImage {
  const studio = resolvePrimaryTattooStyleStudio(slug, region);
  return {
    src: tattooStyleCardSrc(slug, studio),
    alt: resolveTattooStyleMediaAlt(slug, studio, "cardAlt", fallbackAlt),
  };
}

function pickRandomProofImages(
  pool: readonly TattooStyleDetailProofImage[],
  count: number,
): readonly TattooStyleDetailProofImage[] {
  if (pool.length === 0) return [];
  if (pool.length <= count) return pool;

  const shuffled = [...pool];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const current = shuffled[index];
    const swap = shuffled[swapIndex];
    if (current !== undefined && swap !== undefined) {
      shuffled[index] = swap;
      shuffled[swapIndex] = current;
    }
  }

  return shuffled.slice(0, count);
}

function resolveTattooStyleProofGalleryImages(
  pool: readonly TattooStyleDetailProofImage[] | undefined,
  legacyImages: readonly TattooStyleDetailProofImage[] | undefined,
  catalogFallback: TattooStyleDetailProofImage,
): readonly TattooStyleDetailProofImage[] {
  const source =
    pool && pool.length > 0
      ? pool
      : legacyImages && legacyImages.length > 0
        ? legacyImages
        : [catalogFallback];

  return pickRandomProofImages(source, TATTOO_STYLE_PROOF_GALLERY_TILE_COUNT);
}

export {
  pickRandomProofImages,
  resolvePrimaryTattooStyleStudio,
  resolveTattooStyleApproachImage,
  resolveTattooStyleCardImage,
  resolveTattooStyleHeroImage,
  resolveTattooStyleProofGalleryImages,
  tattooStyleApproachSrc,
  tattooStyleCardSrc,
  tattooStyleHeroSrc,
  TATTOO_STYLE_PROOF_GALLERY_TILE_COUNT,
  tattooStyleImageRoot,
};
