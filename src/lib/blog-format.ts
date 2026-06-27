import { BLOG_CATEGORY_LABELS } from "@/config/blog-categories";
import { getBlogCategoryHref } from "@/lib/blog-category-paths";
import type { BlogArticleBreadcrumbStep, BlogArticleBreadcrumbTrail, BlogPost } from "@/types/blog";

function formatBlogPublishedDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoDate));
}

/** Short trail label so breadcrumbs do not repeat the full article H1. */
function blogBreadcrumbArticleLabel(title: string, maxLength = 52): string {
  if (title.length <= maxLength) {
    return title;
  }

  return `${title.slice(0, maxLength - 1).trimEnd()}…`;
}

function getBlogArticleBreadcrumbTrail(post: BlogPost): BlogArticleBreadcrumbTrail {
  const categoryLabel = BLOG_CATEGORY_LABELS[post.category];
  const categoryPath = getBlogCategoryHref(post.category);
  const articlePath = `/tattoo-blog/${post.slug}`;
  const articleLabel = blogBreadcrumbArticleLabel(post.title);

  const ancestors: readonly BlogArticleBreadcrumbStep[] = [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/tattoo-blog" },
    { label: categoryLabel, path: categoryPath },
  ];

  return {
    navSteps: ancestors,
    schemaSteps: [...ancestors, { label: articleLabel, path: articlePath }],
  };
}

export { formatBlogPublishedDate, getBlogArticleBreadcrumbTrail };
