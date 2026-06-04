import { z } from "zod";
import type { BlogCategorySlug, BlogPost } from "@/types/blog";

const regionSlugSchema = z.enum(["global", "bangkok", "bali", "phuket"]);

const blogCategorySlugSchema = z.enum([
  "tattoo-styles",
  "tattoo-guides",
  "aftercare",
  "travel-tattoos",
  "preparation",
  "studio-advice",
]);

const blogPostImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
});

const blogArticleBodyBlockSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("paragraph"),
    text: z.string().min(1),
  }),
  z.object({
    type: z.literal("heading"),
    text: z.string().min(1),
    level: z.union([z.literal(2), z.literal(3)]).optional(),
  }),
  z.object({
    type: z.literal("image"),
    image: blogPostImageSchema,
    caption: z.string().min(1).optional(),
  }),
]);

const blogPostRelatedLinkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

const blogFaqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

const blogPostSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  category: blogCategorySlugSchema,
  publishedAt: z.string().min(1),
  readingTimeMinutes: z.number().int().positive(),
  featuredImage: blogPostImageSchema,
  regions: z.array(regionSlugSchema).min(1),
  featured: z.boolean().optional(),
  body: z.array(blogArticleBodyBlockSchema).min(1),
  quickAnswer: z.string().min(1).optional(),
  faq: z.array(blogFaqItemSchema).min(1).optional(),
  relatedStyles: z.array(blogPostRelatedLinkSchema).optional(),
  relatedServices: z.array(blogPostRelatedLinkSchema).optional(),
});

/** Empty until editorial posts are added. */
const blogCatalogRaw: BlogPost[] = [];

const blogCatalog = z.array(blogPostSchema).parse(blogCatalogRaw);

export const BLOG_CATEGORY_LABELS: Record<BlogCategorySlug, string> = {
  "tattoo-guides": "Tattoo Guides",
  "tattoo-styles": "Tattoo Styles",
  aftercare: "Aftercare",
  "travel-tattoos": "Travel & Tattoo",
  preparation: "Tattoo Ideas",
  "studio-advice": "Studio Advice",
};

export const BLOG_CATEGORY_ORDER: readonly BlogCategorySlug[] = [
  "tattoo-guides",
  "travel-tattoos",
  "preparation",
  "aftercare",
  "tattoo-styles",
  "studio-advice",
];

export { blogCatalog };
