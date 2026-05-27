import type { RegionSlug } from "@/types/region";

export type BlogCategorySlug =
  | "tattoo-styles"
  | "tattoo-guides"
  | "aftercare"
  | "travel-tattoos"
  | "preparation"
  | "studio-advice";

export interface BlogPostImage {
  src: string;
  alt: string;
}

interface BlogArticleParagraphBlock {
  type: "paragraph";
  text: string;
}

interface BlogArticleHeadingBlock {
  type: "heading";
  text: string;
  level?: 2 | 3;
}

interface BlogArticleImageBlock {
  type: "image";
  image: BlogPostImage;
  caption?: string;
}

type BlogArticleBodyBlock =
  | BlogArticleParagraphBlock
  | BlogArticleHeadingBlock
  | BlogArticleImageBlock;

export type {
  BlogArticleBodyBlock,
  BlogArticleHeadingBlock,
  BlogArticleImageBlock,
  BlogArticleParagraphBlock,
};

export interface BlogPostRelatedLink {
  label: string;
  href: string;
}

export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategorySlug;
  publishedAt: string;
  readingTimeMinutes: number;
  featuredImage: BlogPostImage;
  regions: readonly RegionSlug[];
  featured?: boolean;
  body: readonly BlogArticleBodyBlock[];
  /** 40–80 word direct answer for AEO / AI extraction. Falls back to description when omitted. */
  quickAnswer?: string;
  faq?: readonly BlogFaqItem[];
  relatedStyles?: readonly BlogPostRelatedLink[];
  relatedServices?: readonly BlogPostRelatedLink[];
}

/** Article fields resolved at render time (defaults applied). */
export interface ResolvedBlogPost extends BlogPost {
  quickAnswer: string;
}

export interface BlogPostListing {
  slug: string;
  title: string;
  description: string;
  category: BlogCategorySlug;
  publishedAt: string;
  readingTimeMinutes: number;
  featuredImage: BlogPostImage;
  featured?: boolean;
}

export interface BlogPageIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface BlogPageContent {
  intro: BlogPageIntro;
  featuredPosts: BlogPostListing[];
  gridPosts: BlogPostListing[];
  activeCategory: BlogCategorySlug | null;
  categories: readonly BlogCategorySlug[];
}

export interface BlogCategoryHubIntro {
  eyebrow: string;
  heading: string;
  description: string;
  quickIntro: string;
}

export interface BlogCategoryPageContent {
  category: BlogCategorySlug;
  categoryLabel: string;
  intro: BlogCategoryHubIntro;
  posts: readonly BlogPostListing[];
  categories: readonly BlogCategorySlug[];
  relatedStyleLinks: readonly BlogPostRelatedLink[];
  regionalLinks: readonly BlogPostRelatedLink[];
}

export interface BlogArticleBreadcrumbStep {
  label: string;
  path: string;
}

export interface BlogArticleBreadcrumbTrail {
  /** Full trail for BreadcrumbList JSON-LD (includes the article). */
  schemaSteps: readonly BlogArticleBreadcrumbStep[];
  /** Shorter visible trail — ends at category; the H1 is the article title. */
  navSteps: readonly BlogArticleBreadcrumbStep[];
}
