"use client";

import { useState } from "react";
import { BlogArticleCard } from "@/components/shared/blog-article-card";
import { Button } from "@/components/ui/button";
import { sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { BlogPostListing } from "@/types/blog";

const BLOG_PAGE_GRID_BATCH_SIZE = 6;

interface BlogPageGridProps {
  posts: readonly BlogPostListing[];
}

/**
 * All post links render in the initial HTML for crawlers; items beyond the batch use `hidden`
 * until the user loads more (progressive disclosure only).
 */
function BlogPageGrid({ posts }: BlogPageGridProps) {
  const [visibleCount, setVisibleCount] = useState(BLOG_PAGE_GRID_BATCH_SIZE);
  const hasMore = visibleCount < posts.length;

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <ul className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {posts.map((post, index) => (
          <li
            key={post.slug}
            className={cn(
              sectionRevealStaggerClass(index, "flex h-full min-w-0"),
              index >= visibleCount && "hidden",
            )}
          >
            <BlogArticleCard post={post} />
          </li>
        ))}
      </ul>

      {hasMore ? (
        <div className="flex justify-center">
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => {
              setVisibleCount((count) => Math.min(count + BLOG_PAGE_GRID_BATCH_SIZE, posts.length));
            }}
          >
            Load more articles
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export { BlogPageGrid, BLOG_PAGE_GRID_BATCH_SIZE };
