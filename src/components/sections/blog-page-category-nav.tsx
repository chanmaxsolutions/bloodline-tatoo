import Link from "next/link";
import { BLOG_CATEGORY_LABELS } from "@/config/blog-catalog";
import { getBlogCategoryHref } from "@/lib/blog-category";
import { cn } from "@/lib/utils";
import type { BlogCategorySlug } from "@/types/blog";

const categoryNavClassName = "flex flex-wrap items-center justify-center gap-2 md:gap-2.5";

const categoryLinkBaseClassName = cn(
  "inline-flex items-center justify-center rounded-full border px-4 py-2 font-sans text-sm font-medium motion-fast",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

function categoryLinkClassName(isActive: boolean): string {
  return cn(
    categoryLinkBaseClassName,
    isActive
      ? "border-accent/50 bg-accent/10 text-accent"
      : "border-border/50 bg-transparent text-muted-foreground hover:border-white/15 hover:text-foreground",
  );
}

interface BlogPageCategoryNavProps {
  categories: readonly BlogCategorySlug[];
  activeCategory: BlogCategorySlug | null;
}

function BlogPageCategoryNav({ categories, activeCategory }: BlogPageCategoryNavProps) {
  return (
    <nav aria-label="Filter articles by category" className={categoryNavClassName}>
      <Link
        href={getBlogCategoryHref(null)}
        className={categoryLinkClassName(activeCategory === null)}
      >
        All
      </Link>
      {categories.map((category) => (
        <Link
          key={category}
          href={getBlogCategoryHref(category)}
          className={categoryLinkClassName(activeCategory === category)}
          aria-current={activeCategory === category ? "true" : undefined}
        >
          {BLOG_CATEGORY_LABELS[category]}
        </Link>
      ))}
    </nav>
  );
}

export { BlogPageCategoryNav };
