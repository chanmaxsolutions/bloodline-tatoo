import "server-only";

import { BLOG_CATEGORY_ORDER } from "@/config/blog-categories";
import { blogPageIntroForRegion } from "@/config/blog-page";
import { getAllBlogPostMeta } from "@/lib/blog-mdx";
import {
  getCategoriesInRegion,
  isPostVisibleInRegion,
  postsForRegion,
  sortPostsByDate,
  toBlogListing,
} from "@/lib/blog-internals";
import type { BlogCategorySlug, BlogPageContent, BlogPost, BlogPostListing } from "@/types/blog";
import type { RegionSlug } from "@/types/region";

const toListing = toBlogListing;

function parseCategoryFilter(value: string | undefined): BlogCategorySlug | null {
  if (!value) {
    return null;
  }

  const match = BLOG_CATEGORY_ORDER.find((category) => category === value);
  return match ?? null;
}

function getBlogPageContent(region: RegionSlug): BlogPageContent {
  const visible = sortPostsByDate(postsForRegion(region));
  const featuredSlugs = new Set<string>();
  const featuredPosts: BlogPostListing[] = [];

  for (const post of visible.filter((entry) => entry.featured)) {
    if (featuredPosts.length >= 3) {
      break;
    }
    featuredPosts.push(toListing(post));
    featuredSlugs.add(post.slug);
  }

  for (const post of visible) {
    if (featuredPosts.length >= 3) {
      break;
    }
    if (featuredSlugs.has(post.slug)) {
      continue;
    }
    featuredPosts.push(toListing(post));
    featuredSlugs.add(post.slug);
  }

  const gridPosts = visible.filter((post) => !featuredSlugs.has(post.slug)).map(toListing);

  return {
    intro: blogPageIntroForRegion(region),
    featuredPosts,
    gridPosts,
    activeCategory: null,
    categories: getCategoriesInRegion(region),
  };
}

function getAllBlogSlugs(): string[] {
  return getAllBlogPostMeta().map((post) => post.slug);
}

function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPostMeta().find((post) => post.slug === slug);
}

function getBlogPostsForRegion(region: RegionSlug): readonly BlogPost[] {
  return sortPostsByDate(postsForRegion(region));
}

function getRelatedBlogPosts(post: BlogPost, region: RegionSlug, limit = 3): BlogPostListing[] {
  return sortPostsByDate(postsForRegion(region))
    .filter((candidate) => candidate.slug !== post.slug)
    .filter((candidate) => candidate.category === post.category)
    .slice(0, limit)
    .map(toListing);
}

export {
  getAllBlogSlugs,
  getBlogPageContent,
  getBlogPostBySlug,
  getBlogPostsForRegion,
  getRelatedBlogPosts,
  isPostVisibleInRegion,
  parseCategoryFilter,
};

export { getBlogCategoryHref } from "@/lib/blog-category-paths";
export { getBlogArticleBreadcrumbTrail } from "@/lib/blog-format";
