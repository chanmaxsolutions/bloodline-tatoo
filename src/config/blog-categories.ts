import type { BlogCategorySlug } from "@/types/blog";

export const BLOG_CATEGORY_LABELS: Record<BlogCategorySlug, string> = {
  "tattoo-guides": "Tattoo Guides",
  "tattoo-styles": "Tattoo Styles",
  aftercare: "Aftercare",
  "travel-tattoos": "Travel & Tattoo",
  preparation: "Tattoo Ideas",
  "studio-advice": "Studio Advice",
};

export const BLOG_CATEGORY_ORDER: readonly BlogCategorySlug[] = [
  "tattoo-guides",
  "travel-tattoos",
  "preparation",
  "aftercare",
  "tattoo-styles",
  "studio-advice",
];
