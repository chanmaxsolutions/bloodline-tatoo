import Image from "next/image";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { pageIntroBandSurfaceGradientClassName } from "@/lib/page-intro-band-gradient";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { PageIntroBandBackgroundImage } from "@/types/page-intro-band";

const hubEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const hubTitleClassName =
  "text-heading-authority-display w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const hubDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

const hubIntroBottomSpacingClassName = "pb-8 md:pb-10 lg:pb-12";

interface BlogCategoryHubIntroSectionProps {
  /** Same eyebrow as main blog index — not the category name. */
  blogEyebrow: string;
  /** Regional/category headline from hub config (e.g. BANGKOK TATTOO GUIDES). */
  heading: string;
  description: string;
  introBackgroundImage: PageIntroBandBackgroundImage;
  headingId: string;
}

/**
 * Matches the main blog index intro band (centered, cinematic).
 * Eyebrow = "Tattoo blog"; heading = category-specific copy from config.
 * Breadcrumbs stay in JSON-LD only — not shown in the UI.
 */
function BlogCategoryHubIntroSection({
  blogEyebrow,
  heading,
  description,
  introBackgroundImage,
  headingId,
}: BlogCategoryHubIntroSectionProps) {
  return (
    <section
      aria-labelledby={headingId}
      className={cn(
        "relative isolate overflow-hidden border-t border-border/50 bg-surface text-foreground",
        "pt-28 md:pt-36",
        hubIntroBottomSpacingClassName,
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={introBackgroundImage.src}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={72}
          className="object-cover object-center"
        />
      </div>
      <div aria-hidden className={pageIntroBandSurfaceGradientClassName} />

      <Container size="wide" className="relative z-10">
        <SectionReveal>
          <SectionHeading
            align="center"
            eyebrow={blogEyebrow}
            heading={heading}
            description={description}
            headingId={headingId}
            headingLevel={1}
            className="mx-auto w-full max-w-4xl"
            eyebrowClassName={sectionRevealItemClass("none", hubEyebrowClassName)}
            titleClassName={sectionRevealItemClass("sm", hubTitleClassName)}
            descriptionClassName={sectionRevealItemClass("md", hubDescriptionClassName)}
          />
        </SectionReveal>
      </Container>
    </section>
  );
}

export { BlogCategoryHubIntroSection };
