import Link from "next/link";
import { BookAppointmentTrigger } from "@/components/cta";
import { SectionReveal } from "@/components/motion";
import { buttonVariants } from "@/components/ui/button";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";

const blogEmptyTitleClassName =
  "text-heading-authority-display max-w-3xl text-balance text-3xl leading-[0.95] tracking-tight text-foreground md:text-4xl md:leading-[0.93] lg:text-5xl";

const blogEmptyDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

interface BlogPageEmptyStateProps {
  headerCtaLabel: string;
  /** When set (category hub), copy references the active topic. */
  categoryLabel?: string;
}

function BlogPageEmptyState({ headerCtaLabel, categoryLabel }: BlogPageEmptyStateProps) {
  const heading = categoryLabel
    ? `No ${categoryLabel.toLowerCase()} articles yet`
    : "Articles publishing soon";

  const description = categoryLabel
    ? "We are building Bloodline editorial for this topic. Message the studio on WhatsApp for session guidance in the meantime."
    : "Guides on styles, travel planning, and aftercare are on the way. Message us on WhatsApp if you need session direction before articles go live.";

  return (
    <SectionReveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-7 text-center md:gap-8">
      <div className={sectionRevealItemClass("none", "flex flex-col items-center gap-4 md:gap-5")}>
        <h2 className={blogEmptyTitleClassName}>{heading}</h2>
        <p className={blogEmptyDescriptionClassName}>{description}</p>
      </div>

      <div
        className={sectionRevealItemClass(
          "sm",
          "flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center",
        )}
      >
        <BookAppointmentTrigger
          variant="primary"
          size="lg"
          className="w-auto max-w-full"
          trackingComponentName="BlogPageEmptyState"
        >
          {headerCtaLabel}
        </BookAppointmentTrigger>
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-auto max-w-full")}
        >
          Contact the studio
        </Link>
      </div>
    </SectionReveal>
  );
}

export { BlogPageEmptyState };
