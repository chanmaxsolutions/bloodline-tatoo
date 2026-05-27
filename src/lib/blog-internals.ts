import { blogCatalog, BLOG_CATEGORY_ORDER } from "@/config/blog-catalog";
import type { BlogCategorySlug, BlogPost, BlogPostListing } from "@/types/blog";
import type { RegionSlug } from "@/types/region";

function isPostVisibleInRegion(post: BlogPost, region: RegionSlug): boolean {
  return post.regions.includes(region);
}

function toBlogListing(post: BlogPost): BlogPostListing {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    category: post.category,
    publishedAt: post.publishedAt,
    readingTimeMinutes: post.readingTimeMinutes,
    featuredImage: post.featuredImage,
    featured: post.featured,
  };
}

function postsForRegion(region: RegionSlug): BlogPost[] {
  return blogCatalog.filter((post) => isPostVisibleInRegion(post, region));
}

function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

function filterPostsByCategory(posts: readonly BlogPost[], category: BlogCategorySlug): BlogPost[] {
  return posts.filter((post) => post.category === category);
}

function getCategoriesInRegion(region: RegionSlug): readonly BlogCategorySlug[] {
  const visible = postsForRegion(region);
  return BLOG_CATEGORY_ORDER.filter((category) =>
    visible.some((post) => post.category === category),
  );
}

export {
  filterPostsByCategory,
  getCategoriesInRegion,
  isPostVisibleInRegion,
  postsForRegion,
  sortPostsByDate,
  toBlogListing,
};
