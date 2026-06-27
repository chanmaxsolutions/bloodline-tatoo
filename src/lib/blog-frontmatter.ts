import { z } from "zod";

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

const blogPostRelatedLinkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

const blogFaqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

const blogPostFrontmatterSchema = z.object({
  title: z.string().min(1),
  /** Shorter SERP title when the on-page H1 is long. Metadata uses `{metaTitle} | {siteName}`. */
  metaTitle: z.string().min(1).optional(),
  description: z.string().min(1),
  category: blogCategorySlugSchema,
  publishedAt: z.string().min(1),
  readingTimeMinutes: z.number().int().positive().optional(),
  featuredImage: blogPostImageSchema,
  regions: z.array(regionSlugSchema).min(1),
  featured: z.boolean().optional(),
  quickAnswer: z.string().min(1).optional(),
  faq: z.array(blogFaqItemSchema).min(1).optional(),
  relatedStyles: z.array(blogPostRelatedLinkSchema).optional(),
  relatedServices: z.array(blogPostRelatedLinkSchema).optional(),
});

type BlogPostFrontmatter = z.infer<typeof blogPostFrontmatterSchema>;

function parseBlogPostFrontmatter(data: unknown) {
  return blogPostFrontmatterSchema.safeParse(data);
}

export {
  blogCategorySlugSchema,
  blogPostFrontmatterSchema,
  parseBlogPostFrontmatter,
  regionSlugSchema,
};
export type { BlogPostFrontmatter };
