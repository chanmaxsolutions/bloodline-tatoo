import { GALLERY_CATEGORY_ORDER } from "@/config/gallery-catalog";
import { getGalleryCatalogFromProofs } from "@/lib/gallery-catalog-data";
import { galleryPageIntroForRegionAndCategory } from "@/config/gallery-page";
import { sortGalleryItemsForPortfolio } from "@/lib/sort-gallery-items";
import type { GalleryCategorySlug, GalleryItem, GalleryPageContent } from "@/types/gallery";
import type { RegionSlug } from "@/types/region";

function isItemVisibleInRegion(item: GalleryItem, region: RegionSlug): boolean {
  return item.regions.includes(region);
}

function parseCategoryFilter(value: string | undefined): GalleryCategorySlug | null {
  if (!value) {
    return null;
  }

  const match = GALLERY_CATEGORY_ORDER.find((category) => category === value);
  return match ?? null;
}

async function itemsForRegion(region: RegionSlug): Promise<GalleryItem[]> {
  const catalog = await getGalleryCatalogFromProofs();
  return catalog.filter((item) => isItemVisibleInRegion(item, region));
}

function filterItemsByCategory(
  items: GalleryItem[],
  category: GalleryCategorySlug | null,
): GalleryItem[] {
  if (!category) {
    return items;
  }

  return items.filter((item) => item.category === category);
}

function sortPortfolioItems(items: readonly GalleryItem[]): GalleryItem[] {
  return sortGalleryItemsForPortfolio(items);
}

async function getGalleryPageContent(
  region: RegionSlug,
  regionName: string,
  categoryParam: string | undefined,
): Promise<GalleryPageContent> {
  const activeCategory = parseCategoryFilter(categoryParam);
  const visible = await itemsForRegion(region);
  const filtered = filterItemsByCategory(visible, activeCategory);

  return {
    intro: galleryPageIntroForRegionAndCategory(region, regionName, activeCategory),
    items: sortPortfolioItems(filtered),
    activeCategory,
  };
}

async function galleryCategoriesForRegion(region: RegionSlug): Promise<GalleryCategorySlug[]> {
  const items = await itemsForRegion(region);
  const categories = new Set(items.map((item) => item.category));
  return GALLERY_CATEGORY_ORDER.filter((category) => categories.has(category));
}

function isValidGalleryCategoryParam(value: string | undefined): boolean {
  if (!value) {
    return true;
  }

  return parseCategoryFilter(value) !== null;
}

export {
  galleryCategoriesForRegion,
  getGalleryPageContent,
  isItemVisibleInRegion,
  isValidGalleryCategoryParam,
};
