import type { MetadataRoute } from "next";
import { getBlogPostsForRegion } from "@/lib/blog";
import { getBlogCategoryPath, getBlogCategorySlugsForRegion } from "@/lib/blog-category";
import { filterPostsByCategory } from "@/lib/blog-internals";
import { getRequestRegionContext } from "@/lib/request-region";
import { absoluteRegionalUrl } from "@/lib/schema";

function latestPublishedAt(posts: readonly { publishedAt: string }[]): Date {
  const timestamps = posts.map((post) => new Date(post.publishedAt).getTime());
  return new Date(Math.max(...timestamps));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { region, regionConfig } = await getRequestRegionContext();
  const posts = getBlogPostsForRegion(region);
  const categorySlugs = getBlogCategorySlugsForRegion(region);
  const blogIndexUrl = absoluteRegionalUrl(regionConfig, "/tattoo-blog");
  const indexLastModified = posts.length > 0 ? latestPublishedAt(posts) : new Date();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteRegionalUrl(regionConfig, `/tattoo-blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categorySlugs.map((category) => {
    const categoryPosts = filterPostsByCategory(posts, category);

    return {
      url: absoluteRegionalUrl(regionConfig, getBlogCategoryPath(category)),
      lastModified: categoryPosts.length > 0 ? latestPublishedAt(categoryPosts) : indexLastModified,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    };
  });

  return [
    {
      url: blogIndexUrl,
      lastModified: indexLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...categoryEntries,
    ...blogEntries,
  ];
}
