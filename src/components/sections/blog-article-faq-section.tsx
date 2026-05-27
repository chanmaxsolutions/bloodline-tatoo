import { BlogArticleFaqAccordion } from "@/components/blog/blog-article-faq-accordion";
import { cn } from "@/lib/utils";
import type { BlogFaqItem } from "@/types/blog";

const faqHeadingClassName =
  "font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl";

interface BlogArticleFaqSectionProps {
  items: readonly BlogFaqItem[];
  className?: string;
}

function BlogArticleFaqSection({ items, className }: BlogArticleFaqSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section
      className={cn("flex flex-col gap-5 md:gap-6", className)}
      aria-labelledby="blog-article-faq-heading"
    >
      <h2 id="blog-article-faq-heading" className={faqHeadingClassName}>
        Common questions
      </h2>
      <BlogArticleFaqAccordion items={items} />
    </section>
  );
}

export { BlogArticleFaqSection };
