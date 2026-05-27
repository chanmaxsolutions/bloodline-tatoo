import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { BlogArticleCard } from "@/components/shared/blog-article-card";
import {
  blogFeaturedBentoGridClassName,
  blogFeaturedBentoSecondaryStackClassName,
} from "@/lib/blog-page-featured-layout";
import { sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { BlogPostListing } from "@/types/blog";

interface BlogPageFeaturedSectionProps {
  posts: BlogPostListing[];
}

function BlogPageFeaturedSection({ posts }: BlogPageFeaturedSectionProps) {
  if (posts.length === 0) {
    return null;
  }

  const [leadPost, ...secondaryPosts] = posts;
  const stackedPosts = secondaryPosts.slice(0, 2);
  const useBento = Boolean(leadPost && stackedPosts.length > 0);

  return (
    <section aria-label="Featured articles" className="bg-surface pb-6 md:pb-8">
      <Container size="wide">
        <SectionReveal>
          {useBento ? (
            <ul className={blogFeaturedBentoGridClassName}>
              <li
                className={sectionRevealStaggerClass(
                  0,
                  "flex h-full min-h-0 lg:min-h-[min(560px,68vh)]",
                )}
              >
                <BlogArticleCard post={leadPost} variant="bentoLead" />
              </li>
              <li
                className={sectionRevealStaggerClass(
                  1,
                  cn(
                    blogFeaturedBentoSecondaryStackClassName,
                    stackedPosts.length === 1 && "lg:grid-rows-1",
                  ),
                )}
              >
                {stackedPosts.map((post, index) => (
                  <div
                    key={post.slug}
                    className={sectionRevealStaggerClass(
                      index + 2,
                      "flex h-full min-h-0 lg:min-h-[240px]",
                    )}
                  >
                    <BlogArticleCard post={post} variant="bentoSecondary" />
                  </div>
                ))}
              </li>
            </ul>
          ) : (
            <ul className="grid grid-cols-1 items-stretch gap-5 md:gap-6">
              {posts.map((post, index) => (
                <li
                  key={post.slug}
                  className={sectionRevealStaggerClass(index, "flex h-full min-w-0")}
                >
                  <BlogArticleCard post={post} variant="featured" />
                </li>
              ))}
            </ul>
          )}
        </SectionReveal>
      </Container>
    </section>
  );
}

export { BlogPageFeaturedSection };
