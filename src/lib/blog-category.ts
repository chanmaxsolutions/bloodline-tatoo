import { BLOG_CATEGORY_LABELS, BLOG_CATEGORY_ORDER } from "@/config/blog-catalog";
import {
  getBlogCategoryHubIntro,
  getBlogCategoryRelatedStyleLinks,
} from "@/config/blog-category-hubs";
import type { BlogArticleBreadcrumbStep } from "@/types/blog";
import {
  filterPostsByCategory,
  getCategoriesInRegion,
  postsForRegion,
  sortPostsByDate,
  toBlogListing,
} from "@/lib/blog-internals";
import type { BlogCategoryPageContent, BlogCategorySlug } from "@/types/blog";
import type { RegionSlug } from "@/types/region";

function isBlogCategorySlug(value: string): value is BlogCategorySlug {
  return (BLOG_CATEGORY_ORDER as readonly string[]).includes(value);
}

function getBlogCategoryPath(category: BlogCategorySlug): string {
  return `/tattoo-blog/category/${category}`;
}

function getBlogCategoryHref(category: BlogCategorySlug | null): string {
  return category ? getBlogCategoryPath(category) : "/tattoo-blog";
}

function getRegionalHubLinks(region: RegionSlug): readonly { label: string; href: string }[] {
  const links: { label: string; href: string }[] = [
    { label: "All blog articles", href: "/tattoo-blog" },
    { label: "Tattoo styles", href: "/tattoo-styles" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  if (region === "global") {
    return links;
  }

  return [{ label: "About the studio", href: "/about" }, ...links];
}

function getBlogCategoryPageContent(
  region: RegionSlug,
  category: BlogCategorySlug,
): BlogCategoryPageContent {
  const visible = sortPostsByDate(postsForRegion(region));
  const posts = filterPostsByCategory(visible, category).map(toBlogListing);

  return {
    category,
    categoryLabel: BLOG_CATEGORY_LABELS[category],
    intro: getBlogCategoryHubIntro(category, region),
    posts,
    categories: getCategoriesInRegion(region),
    relatedStyleLinks: getBlogCategoryRelatedStyleLinks(category),
    regionalLinks: getRegionalHubLinks(region),
  };
}

function getBlogCategoryBreadcrumbSteps(
  category: BlogCategorySlug,
): readonly BlogArticleBreadcrumbStep[] {
  const categoryLabel = BLOG_CATEGORY_LABELS[category];
  const categoryPath = getBlogCategoryPath(category);

  return [
    { label: "Home", path: "/" },
    { label: "Blog", path: "/tattoo-blog" },
    { label: categoryLabel, path: categoryPath },
  ];
}

function getBlogCategorySlugsForRegion(region: RegionSlug): readonly BlogCategorySlug[] {
  return getCategoriesInRegion(region);
}

export {
  getBlogCategoryBreadcrumbSteps,
  getBlogCategoryHref,
  getBlogCategoryPageContent,
  getBlogCategoryPath,
  getBlogCategorySlugsForRegion,
  getRegionalHubLinks,
  isBlogCategorySlug,
};
