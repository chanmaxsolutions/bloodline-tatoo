import { galleryCatalog, GALLERY_CATEGORY_ORDER } from "@/config/gallery-catalog";
import { galleryPageIntroForRegion } from "@/config/gallery-page";
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

function itemsForRegion(region: RegionSlug): GalleryItem[] {
  return galleryCatalog.filter((item) => isItemVisibleInRegion(item, region));
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
  return [...items].sort((left, right) => {
    if (left.featured && !right.featured) {
      return -1;
    }

    if (!left.featured && right.featured) {
      return 1;
    }

    return 0;
  });
}

function getGalleryPageContent(
  region: RegionSlug,
  categoryParam: string | undefined,
): GalleryPageContent {
  const activeCategory = parseCategoryFilter(categoryParam);
  const visible = itemsForRegion(region);
  const filtered = filterItemsByCategory(visible, activeCategory);

  return {
    intro: galleryPageIntroForRegion(region),
    items: sortPortfolioItems(filtered),
    activeCategory,
  };
}

function isValidGalleryCategoryParam(value: string | undefined): boolean {
  if (!value) {
    return true;
  }

  return parseCategoryFilter(value) !== null;
}

export { getGalleryPageContent, isItemVisibleInRegion, isValidGalleryCategoryParam };
