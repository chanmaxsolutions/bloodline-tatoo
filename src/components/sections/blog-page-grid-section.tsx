import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { BlogPageGrid } from "@/components/sections/blog-page-grid";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { BlogPostListing } from "@/types/blog";

interface BlogPageGridSectionProps {
  posts: BlogPostListing[];
  showEmptyState?: boolean;
}

function BlogPageGridSection({ posts, showEmptyState = false }: BlogPageGridSectionProps) {
  return (
    <section
      aria-label="All articles"
      className={cn(
        "relative overflow-hidden bg-surface text-foreground",
        "pb-10 md:pb-12 lg:pb-14",
      )}
    >
      <Container size="wide" className="relative">
        {posts.length === 0 && showEmptyState ? (
          <p className="text-center font-sans text-lg text-muted-foreground">
            No articles match this category yet. Try another topic or message us on WhatsApp for
            session guidance.
          </p>
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
