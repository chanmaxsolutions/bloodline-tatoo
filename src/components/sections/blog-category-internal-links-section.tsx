import Link from "next/link";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { BlogPostRelatedLink } from "@/types/blog";

const sectionHeadingClassName =
  "font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl";

const linkChipClassName = cn(
  "inline-flex items-center justify-center rounded-full border border-border/50 bg-surface-elevated/90 px-4 py-2.5",
  "font-heading text-base font-medium uppercase tracking-normal text-foreground motion-fast",
  "hover:border-white/15 hover:text-accent",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

interface BlogCategoryInternalLinksSectionProps {
  relatedStyleLinks: readonly BlogPostRelatedLink[];
  regionalLinks: readonly BlogPostRelatedLink[];
  headerCtaLabel: string;
  headerCtaHref: string;
}

function BlogCategoryInternalLinksSection({
  relatedStyleLinks,
  regionalLinks,
  headerCtaLabel,
  headerCtaHref,
}: BlogCategoryInternalLinksSectionProps) {
  return (
    <section
      aria-labelledby="blog-category-links-heading"
      className="border-t border-border/50 bg-surface py-10 md:py-12 lg:py-14"
    >
      <Container size="wide">
        <SectionReveal className="mx-auto flex w-full max-w-3xl flex-col gap-8 md:gap-10">
          {relatedStyleLinks.length > 0 ? (
            <div className={sectionRevealItemClass("sm", "flex flex-col gap-4 md:gap-5")}>
              <h2 id="blog-category-links-heading" className={sectionHeadingClassName}>
                Related tattoo styles
              </h2>
              <ul className="flex flex-wrap gap-2.5 md:gap-3">
                {relatedStyleLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkChipClassName}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className={sectionRevealItemClass("md", "flex flex-col gap-4 md:gap-5")}>
            <h2 className={sectionHeadingClassName}>Continue exploring</h2>
            <ul className="flex flex-wrap gap-2.5 md:gap-3">
              {regionalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkChipClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={sectionRevealItemClass("lg", "flex justify-center")}>
            <Link
              href={headerCtaHref}
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              {headerCtaLabel}
            </Link>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { BlogCategoryInternalLinksSection };
