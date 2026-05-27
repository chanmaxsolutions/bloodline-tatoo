import type { GalleryItem } from "@/types/gallery";

/**
 * Portfolio order: featured first, then lowest sortOrder, then newest uploadedAt.
 */
function sortGalleryItemsForPortfolio(items: readonly GalleryItem[]): GalleryItem[] {
  return [...items].sort((left, right) => {
    if (left.featured && !right.featured) {
      return -1;
    }

    if (!left.featured && right.featured) {
      return 1;
    }

    if (left.sortOrder !== right.sortOrder) {
      return left.sortOrder - right.sortOrder;
    }

    if (left.uploadedAt !== right.uploadedAt) {
      return right.uploadedAt.localeCompare(left.uploadedAt);
    }

    return left.id.localeCompare(right.id);
  });
}

export { sortGalleryItemsForPortfolio };
