import { BLOG_CATEGORY_ORDER } from "@/config/blog-categories";
import type { BlogCategorySlug } from "@/types/blog";

function isBlogCategorySlug(value: string): value is BlogCategorySlug {
  return (BLOG_CATEGORY_ORDER as readonly string[]).includes(value);
}

function getBlogCategoryPath(category: BlogCategorySlug): string {
  return `/tattoo-blog/category/${category}`;
}

function getBlogCategoryHref(category: BlogCategorySlug | null): string {
  return category ? getBlogCategoryPath(category) : "/tattoo-blog";
}

export { getBlogCategoryHref, getBlogCategoryPath, isBlogCategorySlug };
