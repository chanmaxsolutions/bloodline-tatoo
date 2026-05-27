import type { BlogFaqItem, BlogPageIntro, BlogPost, BlogPostListing } from "@/types/blog";
import type { RegionConfig } from "@/types";
import { BLOG_CATEGORY_LABELS } from "@/config/blog-catalog";
import { toIso8601ReadingDuration } from "@/lib/blog-reading-time";

export interface SchemaBreadcrumbItem {
  name: string;
  path: string;
}

export function absoluteRegionalUrl(region: RegionConfig, path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, `https://${region.domain}`).toString();
}

export function buildBreadcrumbListSchema(
  items: readonly SchemaBreadcrumbItem[],
  region: RegionConfig,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteRegionalUrl(region, item.path),
    })),
  };
}

export function buildFaqPageSchema(
  faq: readonly BlogFaqItem[],
  pageUrl: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    url: pageUrl,
  };
}

function buildBlogPublisherSchema(region: RegionConfig): Record<string, unknown> {
  return {
    "@type": "Organization",
    name: region.seo.siteName,
    url: absoluteRegionalUrl(region, "/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteRegionalUrl(region, region.branding.logoPath),
    },
  };
}

export function buildBlogIndexBlogSchema(
  intro: BlogPageIntro,
  region: RegionConfig,
): Record<string, unknown> {
  const pageUrl = absoluteRegionalUrl(region, "/tattoo-blog");

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${region.seo.siteName} Tattoo Blog`,
    headline: intro.heading,
    description: intro.description,
    url: pageUrl,
    inLanguage: "en",
    publisher: buildBlogPublisherSchema(region),
  };
}

export function buildBlogPostingSchema(
  post: BlogPost,
  region: RegionConfig,
): Record<string, unknown> {
  const canonicalPath = `/tattoo-blog/${post.slug}`;
  const pageUrl = absoluteRegionalUrl(region, canonicalPath);
  const imageUrl = absoluteRegionalUrl(region, post.featuredImage.src);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    image: [imageUrl],
    url: pageUrl,
    inLanguage: "en",
    articleSection: BLOG_CATEGORY_LABELS[post.category],
    timeRequired: toIso8601ReadingDuration(post.readingTimeMinutes),
    isAccessibleForFree: true,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    author: {
      "@type": "Organization",
      name: region.seo.siteName,
      url: absoluteRegionalUrl(region, "/"),
    },
    publisher: buildBlogPublisherSchema(region),
  };
}

export function buildBlogCategoryItemListSchema(
  posts: readonly BlogPostListing[],
  region: RegionConfig,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: absoluteRegionalUrl(region, `/tattoo-blog/${post.slug}`),
    })),
  };
}

export function buildBlogCategoryCollectionPageSchema(
  name: string,
  description: string,
  pagePath: string,
  region: RegionConfig,
): Record<string, unknown> {
  const pageUrl = absoluteRegionalUrl(region, pagePath);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: pageUrl,
    isPartOf: {
      "@type": "Blog",
      name: region.seo.siteName,
      url: absoluteRegionalUrl(region, "/tattoo-blog"),
    },
  };
}

export function buildTattooParlorSchema(region: RegionConfig): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: region.seo.siteName,
    url: absoluteRegionalUrl(region, "/"),
  };
}
