import type { GalleryCategorySlug } from "@/types/gallery";
import type { TattooStyleSlug } from "@/types/tattoo-style";

const tattooStyleToGalleryCategory: Record<TattooStyleSlug, GalleryCategorySlug> = {
  realism: "realistic",
  portrait: "portrait",
  japanese: "japanese",
  colour: "colour",
  mandala: "mandala",
  chicano: "chicano",
  bamboo: "bamboo",
  healed: "healed",
};

function getPortfolioHrefForTattooStyle(slug: TattooStyleSlug): string {
  const category = tattooStyleToGalleryCategory[slug];
  return `/portfolio?category=${category}`;
}

export { getPortfolioHrefForTattooStyle, tattooStyleToGalleryCategory };
