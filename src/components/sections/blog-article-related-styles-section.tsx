import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BlogPostRelatedLink } from "@/types/blog";

const sectionHeadingClassName =
  "font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl";

const styleChipClassName = cn(
  "inline-flex items-center justify-center rounded-full border border-border/50 bg-surface-elevated/90 px-4 py-2.5",
  "font-heading text-base font-medium uppercase tracking-normal text-foreground motion-fast",
  "hover:border-white/15 hover:text-accent",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

interface BlogArticleRelatedStylesSectionProps {
  styles: readonly BlogPostRelatedLink[];
  className?: string;
}

function BlogArticleRelatedStylesSection({
  styles,
  className,
}: BlogArticleRelatedStylesSectionProps) {
  if (styles.length === 0) {
    return null;
  }

  return (
    <section
      className={cn("flex flex-col gap-4 md:gap-5", className)}
      aria-labelledby="blog-related-styles-heading"
    >
      <h2 id="blog-related-styles-heading" className={sectionHeadingClassName}>
        Explore related styles
      </h2>
      <ul className="flex flex-wrap gap-2.5 md:gap-3">
        {styles.map((style) => (
          <li key={style.href}>
            <Link href={style.href} className={styleChipClassName}>
              {style.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export { BlogArticleRelatedStylesSection };
