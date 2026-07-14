import type { BlogFaqItem, BlogPageIntro, BlogPost, BlogPostListing } from "@/types/blog";
import type { RegionConfig } from "@/types";
import type { RegionSlug } from "@/types/region";
import { googleBusinessProofByStudio } from "@/config/google-business-proof";
import { BLOG_CATEGORY_LABELS } from "@/config/blog-categories";
import { toIso8601ReadingDuration } from "@/lib/blog-reading-time";
import { getGoogleBusinessProofMetrics, STUDIO_REGIONS } from "@/lib/google-business-proof";
import { getRegionConfig } from "@/lib/region";

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

interface FaqSchemaItem {
  question: string;
  answer: string;
}

export function buildFaqPageSchema(
  faq: readonly FaqSchemaItem[] | readonly BlogFaqItem[],
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

function buildSameAsLinks(region: RegionConfig): string[] {
  return [
    ...new Set(
      [
        region.contact.instagramUrl,
        region.contact.facebookBookUrl,
        region.googleBusinessProfileUrl,
      ].filter((value): value is string => Boolean(value && value.trim().length > 0)),
    ),
  ];
}

function buildAggregateRatingSchema(reviewCount: number, rating: number): Record<string, unknown> {
  return {
    "@type": "AggregateRating",
    ratingValue: rating.toFixed(1),
    reviewCount,
    bestRating: "5",
    worstRating: "1",
  };
}

function studioAddressCountry(regionSlug: Exclude<RegionSlug, "global">): string {
  return regionSlug === "bali" ? "ID" : "TH";
}

function buildStudioTattooParlorNode(
  regionSlug: Exclude<RegionSlug, "global">,
): Record<string, unknown> {
  const studio = getRegionConfig(regionSlug);
  const metrics = googleBusinessProofByStudio[regionSlug];
  const sameAs = buildSameAsLinks(studio);
  const logoUrl = absoluteRegionalUrl(studio, studio.branding.logoPath);
  const location = studio.location;
  const telephone = location?.telephone || studio.contact.whatsappNumber;

  return {
    "@type": "TattooParlor",
    name: studio.seo.siteName,
    url: absoluteRegionalUrl(studio, "/"),
    description: studio.seo.defaultDescription,
    image: logoUrl,
    logo: logoUrl,
    ...(telephone ? { telephone } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    priceRange: "$$",
    address: location
      ? {
          "@type": "PostalAddress",
          streetAddress: location.streetAddress,
          addressLocality: location.addressLocality,
          addressRegion: location.addressRegion,
          postalCode: location.postalCode,
          addressCountry: location.addressCountry,
        }
      : {
          "@type": "PostalAddress",
          addressLocality: studio.regionName,
          addressCountry: studioAddressCountry(regionSlug),
        },
    ...(location?.openingHours && location.openingHours.length > 0
      ? { openingHours: [...location.openingHours] }
      : {}),
    aggregateRating: buildAggregateRatingSchema(metrics.reviewCount, metrics.rating),
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

/**
 * Studio entity graph for AI + local SEO.
 * Regional domains emit TattooParlor; global emits Organization with studio departments.
 * Street-level NAP is omitted until verified addresses live in region config.
 */
export function buildStudioEntitySchema(
  region: RegionConfig,
  regionSlug: RegionSlug,
): Record<string, unknown> {
  const pageUrl = absoluteRegionalUrl(region, "/");
  const logoUrl = absoluteRegionalUrl(region, region.branding.logoPath);
  const metrics = getGoogleBusinessProofMetrics(regionSlug);

  if (regionSlug === "global") {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: region.seo.siteName,
      url: pageUrl,
      description: region.seo.defaultDescription,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
      image: logoUrl,
      aggregateRating: buildAggregateRatingSchema(metrics.reviewCount, metrics.rating),
      department: STUDIO_REGIONS.map((studioSlug) => buildStudioTattooParlorNode(studioSlug)),
    };
  }

  return {
    "@context": "https://schema.org",
    ...buildStudioTattooParlorNode(regionSlug),
  };
}

/** @deprecated Prefer buildStudioEntitySchema — kept for callers mid-migration. */
export function buildTattooParlorSchema(
  region: RegionConfig,
  regionSlug: RegionSlug = region.slug,
): Record<string, unknown> {
  return buildStudioEntitySchema(region, regionSlug);
}

export function buildWebSiteSchema(region: RegionConfig): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: region.seo.siteName,
    url: absoluteRegionalUrl(region, "/"),
    description: region.seo.defaultDescription,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: region.seo.siteName,
      url: absoluteRegionalUrl(region, "/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteRegionalUrl(region, region.branding.logoPath),
      },
    },
  };
}
