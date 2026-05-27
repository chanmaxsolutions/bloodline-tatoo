import Link from "next/link";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { BlogArticleCard } from "@/components/shared/blog-article-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { homepageGhostCtaSurfaceClassName } from "@/lib/homepage-ghost-cta";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { BlogPostListing } from "@/types/blog";

const blogRelatedHeadingId = "blog-related-heading";

const blogRelatedEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const blogRelatedTitleClassName =
  "text-heading-authority-display w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const blogRelatedDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

interface BlogArticleRelatedSectionProps {
  posts: readonly BlogPostListing[];
  categoryLabel: string;
  categoryHref: string;
}

function BlogArticleRelatedSection({
  posts,
  categoryLabel,
  categoryHref,
}: BlogArticleRelatedSectionProps) {
  return (
    <section
      aria-labelledby={blogRelatedHeadingId}
      className="border-0 bg-surface py-10 md:py-12 lg:py-14"
    >
      <Container size="wide">
        <SectionReveal className="flex flex-col gap-10 md:gap-12">
          <SectionHeading
            align="center"
            eyebrow="Keep reading"
            heading={`More in ${categoryLabel}`}
            description={
              posts.length > 0
                ? "Continue with related guides from the same topic."
                : "Explore more articles in this topic on the Bloodline blog."
            }
            headingId={blogRelatedHeadingId}
            className="mx-auto w-full max-w-4xl"
            eyebrowClassName={sectionRevealItemClass("none", blogRelatedEyebrowClassName)}
            titleClassName={sectionRevealItemClass("sm", blogRelatedTitleClassName)}
            descriptionClassName={sectionRevealItemClass("md", blogRelatedDescriptionClassName)}
          />

          {posts.length > 0 ? (
            <ul className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {posts.map((post, index) => (
                <li
                  key={post.slug}
                  className={sectionRevealStaggerClass(index, "flex h-full min-w-0")}
                >
                  <BlogArticleCard post={post} />
                </li>
              ))}
            </ul>
          ) : null}

          <div className={sectionRevealItemClass("lg", "flex justify-center")}>
            <Link
              href={categoryHref}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                homepageGhostCtaSurfaceClassName,
              )}
            >
              View all {categoryLabel.toLowerCase()} articles
            </Link>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { BlogArticleRelatedSection };
