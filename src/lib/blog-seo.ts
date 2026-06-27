import type { Metadata } from "next";
import type { BlogCategoryHubIntro, BlogCategorySlug, BlogPageIntro, BlogPost } from "@/types/blog";
import type { RegionConfig } from "@/types";
import { pageIntroBackgroundFor } from "@/config/page-intro-band";
import { BLOG_CATEGORY_LABELS } from "@/config/blog-categories";
import { getBlogCategoryPath } from "@/lib/blog-category-paths";
import { toIso8601ReadingDuration } from "@/lib/blog-reading-time";
import { absoluteRegionalUrl } from "@/lib/schema";
import type { RegionSlug } from "@/types/region";

const META_DESCRIPTION_MAX_LENGTH = 160;

function truncateMetaDescription(text: string, maxLength = META_DESCRIPTION_MAX_LENGTH): string {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const sliced = normalized.slice(0, maxLength - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  const trimmed = lastSpace > 60 ? sliced.slice(0, lastSpace) : sliced;

  return `${trimmed.trimEnd()}…`;
}

function getBlogSocialImage(region: RegionConfig): { url: string; alt: string } {
  const introBackground = pageIntroBackgroundFor("blog");

  return {
    url: absoluteRegionalUrl(region, introBackground.src),
    alt: introBackground.alt,
  };
}

function buildBlogOpenGraph(
  region: RegionConfig,
  input: {
    title: string;
    description: string;
    canonical: string;
    type: "website" | "article";
    image?: { url: string; alt: string };
    publishedTime?: string;
  },
): Metadata["openGraph"] {
  const images = input.image ? [{ url: input.image.url, alt: input.image.alt }] : undefined;

  return {
    title: input.title,
    description: input.description,
    url: input.canonical,
    siteName: region.seo.siteName,
    type: input.type,
    locale: "en",
    ...(images ? { images } : {}),
    ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
  };
}

function buildBlogTwitter(input: {
  title: string;
  description: string;
  imageUrl?: string;
}): Metadata["twitter"] {
  return {
    card: "summary_large_image",
    title: input.title,
    description: input.description,
    ...(input.imageUrl ? { images: [input.imageUrl] } : {}),
  };
}

function buildBlogIndexMetadata(region: RegionSlug, regionConfig: RegionConfig): Metadata {
  const intro =
    region === "global"
      ? {
          title: `Tattoo Blog | ${regionConfig.seo.siteName}`,
          description:
            "Tattoo guides, aftercare, travel planning, and studio advice from Bloodline across Bangkok, Bali, and Phuket.",
        }
      : {
          title: `Tattoo Blog in ${regionConfig.regionName} | ${regionConfig.seo.siteName}`,
          description: truncateMetaDescription(
            `Tattoo guides, aftercare, and session planning for Bloodline ${regionConfig.regionName}.`,
          ),
        };

  const canonicalPath = "/tattoo-blog";
  const canonical = absoluteRegionalUrl(regionConfig, canonicalPath);
  const socialImage = getBlogSocialImage(regionConfig);

  return {
    title: intro.title,
    description: intro.description,
    alternates: { canonical },
    openGraph: buildBlogOpenGraph(regionConfig, {
      title: intro.title,
      description: intro.description,
      canonical,
      type: "website",
      image: socialImage,
    }),
    twitter: buildBlogTwitter({
      title: intro.title,
      description: intro.description,
      imageUrl: socialImage.url,
    }),
  };
}

function getBlogArticleMetadataTitle(post: BlogPost, region: RegionConfig): string {
  const headline = post.metaTitle?.trim() || post.title;
  return `${headline} | ${region.seo.siteName}`;
}

function buildBlogArticleMetadata(post: BlogPost, region: RegionConfig): Metadata {
  const title = getBlogArticleMetadataTitle(post, region);
  const description = truncateMetaDescription(post.description);
  const canonicalPath = `/tattoo-blog/${post.slug}`;
  const canonical = absoluteRegionalUrl(region, canonicalPath);
  const imageUrl = absoluteRegionalUrl(region, post.featuredImage.src);
  const articleSection = BLOG_CATEGORY_LABELS[post.category];

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: buildBlogOpenGraph(region, {
      title,
      description,
      canonical,
      type: "article",
      image: { url: imageUrl, alt: post.featuredImage.alt },
      publishedTime: post.publishedAt,
    }),
    twitter: buildBlogTwitter({
      title,
      description,
      imageUrl,
    }),
    other: {
      "article:section": articleSection,
      "article:published_time": post.publishedAt,
    },
  };
}

function buildBlogCategoryMetadata(
  category: BlogCategorySlug,
  intro: BlogCategoryHubIntro,
  region: RegionSlug,
  regionConfig: RegionConfig,
  options?: { indexable?: boolean },
): Metadata {
  const title = `${intro.heading} | ${regionConfig.seo.siteName}`;
  const description = truncateMetaDescription(
    intro.quickIntro.trim().length > 0
      ? `${intro.description} ${intro.quickIntro}`.trim()
      : intro.description,
  );
  const canonicalPath = getBlogCategoryPath(category);
  const canonical = absoluteRegionalUrl(regionConfig, canonicalPath);
  const socialImage = getBlogSocialImage(regionConfig);
  const indexable = options?.indexable ?? true;

  return {
    title,
    description,
    alternates: { canonical },
    ...(indexable ? {} : { robots: { index: false, follow: true } }),
    openGraph: buildBlogOpenGraph(regionConfig, {
      title,
      description,
      canonical,
      type: "website",
      image: socialImage,
    }),
    twitter: buildBlogTwitter({
      title,
      description,
      imageUrl: socialImage.url,
    }),
  };
}

function buildBlogArticleNotFoundMetadata(slug: string, region: RegionConfig): Metadata {
  const title = `Article | ${region.seo.siteName}`;
  const description = region.seo.defaultDescription;
  const canonical = absoluteRegionalUrl(region, `/tattoo-blog/${slug}`);

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: false, follow: false },
  };
}

export {
  buildBlogArticleMetadata,
  buildBlogArticleNotFoundMetadata,
  buildBlogCategoryMetadata,
  buildBlogIndexMetadata,
  truncateMetaDescription,
};
