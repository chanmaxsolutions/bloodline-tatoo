import type { BlogFaqItem } from "@/types/blog";

interface BlogArticleSeoExtension {
  quickAnswer?: string;
  faq?: readonly BlogFaqItem[];
}

/**
 * SEO/AEO fields keyed by slug — keeps catalog body-focused and eases future MDX frontmatter migration.
 * Empty until posts exist in blog-catalog.
 */
const blogArticleSeoExtensionsBySlug: Record<string, BlogArticleSeoExtension> = {};

function getBlogArticleSeoExtension(slug: string): BlogArticleSeoExtension | undefined {
  return blogArticleSeoExtensionsBySlug[slug];
}

export { blogArticleSeoExtensionsBySlug, getBlogArticleSeoExtension };
export type { BlogArticleSeoExtension };
