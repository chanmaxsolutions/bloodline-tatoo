import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { BlogPageEmptyState } from "@/components/sections/blog-page-empty-state";
import { BlogPageGrid } from "@/components/sections/blog-page-grid";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { BlogPostListing } from "@/types/blog";

interface BlogPageGridSectionProps {
  posts: BlogPostListing[];
  showEmptyState?: boolean;
  headerCtaLabel: string;
  /** Active category hub label when the grid is filtered to one topic. */
  emptyStateCategoryLabel?: string;
}

function BlogPageGridSection({
  posts,
  showEmptyState = false,
  headerCtaLabel,
  emptyStateCategoryLabel,
}: BlogPageGridSectionProps) {
  const isEmpty = posts.length === 0 && showEmptyState;

  return (
    <section
      aria-label="All articles"
      className={cn(
        "relative overflow-hidden bg-surface text-foreground",
        isEmpty ? "py-14 md:py-20 lg:py-24" : "pb-10 md:pb-12 lg:pb-14",
      )}
    >
      <Container size="wide" className="relative">
        {isEmpty ? (
          <BlogPageEmptyState
            headerCtaLabel={headerCtaLabel}
            categoryLabel={emptyStateCategoryLabel}
          />
        ) : (
          <SectionReveal>
            <div className={sectionRevealItemClass("lg")}>
              <BlogPageGrid posts={posts} />
            </div>
          </SectionReveal>
        )}
      </Container>
    </section>
  );
}

export { BlogPageGridSection };
