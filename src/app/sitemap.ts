import type { MetadataRoute } from "next";
import { tattooStyleSlugsForRegion } from "@/config/region-tattoo-style-availability";
import { getBlogPostsForRegion } from "@/lib/blog";
import { getBlogCategoryPath, getBlogCategorySlugsForRegion } from "@/lib/blog-category";
import { filterPostsByCategory } from "@/lib/blog-internals";
import { getRequestRegionContext } from "@/lib/request-region";
import { absoluteRegionalUrl } from "@/lib/schema";
import type { RegionConfig } from "@/types";
import type { RegionSlug } from "@/types/region";

const STATIC_SITEMAP_PATHS = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/tattoo-styles", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/gallery", priority: 0.75, changeFrequency: "weekly" as const },
  { path: "/reviews", priority: 0.75, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
] as const;

function latestPublishedAt(posts: readonly { publishedAt: string }[]): Date {
  const timestamps = posts.map((post) => new Date(post.publishedAt).getTime());
  return new Date(Math.max(...timestamps));
}

function staticSitemapEntries(
  regionConfig: RegionConfig,
  lastModified: Date,
): MetadataRoute.Sitemap {
  return STATIC_SITEMAP_PATHS.map(({ path, priority, changeFrequency }) => ({
    url: absoluteRegionalUrl(regionConfig, path),
    lastModified,
    changeFrequency,
    priority,
  }));
}

function tattooStyleSitemapEntries(
  region: RegionSlug,
  regionConfig: RegionConfig,
  lastModified: Date,
): MetadataRoute.Sitemap {
  return tattooStyleSlugsForRegion(region).map((slug) => ({
    url: absoluteRegionalUrl(regionConfig, `/tattoo-styles/${slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { region, regionConfig } = await getRequestRegionContext();
  const posts = getBlogPostsForRegion(region);
  const categorySlugs = getBlogCategorySlugsForRegion(region);
  const siteLastModified = new Date();
  const blogIndexLastModified = posts.length > 0 ? latestPublishedAt(posts) : siteLastModified;

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
      lastModified:
        categoryPosts.length > 0 ? latestPublishedAt(categoryPosts) : blogIndexLastModified,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    };
  });

  return [
    ...staticSitemapEntries(regionConfig, siteLastModified),
    ...tattooStyleSitemapEntries(region, regionConfig, siteLastModified),
    {
      url: absoluteRegionalUrl(regionConfig, "/tattoo-blog"),
      lastModified: blogIndexLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...categoryEntries,
    ...blogEntries,
  ];
}
