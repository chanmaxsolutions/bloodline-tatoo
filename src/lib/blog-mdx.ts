import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import { cache } from "react";
import { blogMdxComponents } from "@/components/blog/blog-mdx-components";
import { parseBlogPostFrontmatter } from "@/lib/blog-frontmatter";
import { resolveBlogPost } from "@/lib/blog-display";
import { normalizeReadingMinutes } from "@/lib/blog-reading-time";
import type { BlogPost, CompiledBlogPost } from "@/types/blog";

const BLOG_CONTENT_DIR = path.join(process.cwd(), "src/content/tattoo-blog");

function isPublishableMdxFile(filename: string): boolean {
  return filename.endsWith(".mdx") && !filename.startsWith("_");
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.mdx$/, "");
}

function listMdxFilenames(): string[] {
  if (!fs.existsSync(BLOG_CONTENT_DIR)) {
    return [];
  }

  return fs.readdirSync(BLOG_CONTENT_DIR).filter(isPublishableMdxFile);
}

function readMdxSource(slug: string): { raw: string; filename: string } | null {
  const filename = `${slug}.mdx`;
  const filePath = path.join(BLOG_CONTENT_DIR, filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return {
    raw: fs.readFileSync(filePath, "utf8"),
    filename,
  };
}

function parseBlogPostMetaFromFile(filename: string): BlogPost {
  const filePath = path.join(BLOG_CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const slug = slugFromFilename(filename);
  const parsed = parseBlogPostFrontmatter(data);

  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in ${filename}: ${parsed.error.issues.map((issue) => issue.message).join("; ")}`,
    );
  }

  const readingTimeMinutes =
    parsed.data.readingTimeMinutes ?? normalizeReadingMinutes(readingTime(content).minutes || 1);

  return {
    slug,
    ...parsed.data,
    readingTimeMinutes,
  };
}

const getAllBlogPostMeta = cache((): BlogPost[] => {
  return listMdxFilenames().map(parseBlogPostMetaFromFile);
});

const getCompiledBlogPost = cache(async (slug: string): Promise<CompiledBlogPost | null> => {
  const source = readMdxSource(slug);

  if (!source) {
    return null;
  }

  const { data, content } = matter(source.raw);
  const parsed = parseBlogPostFrontmatter(data);

  if (!parsed.success) {
    throw new Error(
      `Invalid frontmatter in ${source.filename}: ${parsed.error.issues.map((issue) => issue.message).join("; ")}`,
    );
  }

  const readingTimeMinutes =
    parsed.data.readingTimeMinutes ?? normalizeReadingMinutes(readingTime(content).minutes || 1);

  const meta: BlogPost = {
    slug,
    ...parsed.data,
    readingTimeMinutes,
  };

  const { content: mdxContent } = await compileMDX({
    source: content,
    components: blogMdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkUnwrapImages],
      },
    },
  });

  return {
    ...resolveBlogPost(meta),
    content: mdxContent,
  };
});

export { getAllBlogPostMeta, getCompiledBlogPost, listMdxFilenames };
