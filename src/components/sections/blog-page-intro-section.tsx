import Image from "next/image";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { pageIntroBandSurfaceGradientClassName } from "@/lib/page-intro-band-gradient";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { BlogPageIntro } from "@/types/blog";
import type { PageIntroBandBackgroundImage } from "@/types/page-intro-band";

const blogPageEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const blogPageTitleClassName =
  "text-heading-authority-display w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const blogPageDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

const blogPageIntroBottomSpacingClassName = "pb-8 md:pb-10 lg:pb-12";

interface BlogPageIntroSectionProps {
  intro: BlogPageIntro;
  introBackgroundImage: PageIntroBandBackgroundImage;
}

function BlogPageIntroSection({ intro, introBackgroundImage }: BlogPageIntroSectionProps) {
  return (
    <section
      aria-labelledby="tattoo-blog-index-heading"
      className={cn(
        "relative isolate overflow-hidden border-t border-border/50 bg-surface text-foreground",
        "pt-28 md:pt-36",
        blogPageIntroBottomSpacingClassName,
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
            eyebrow={intro.eyebrow}
            heading={intro.heading}
            description={intro.description}
            headingLevel={1}
            headingId="tattoo-blog-index-heading"
            className="mx-auto w-full max-w-4xl"
            eyebrowClassName={sectionRevealItemClass("none", blogPageEyebrowClassName)}
            titleClassName={sectionRevealItemClass("sm", blogPageTitleClassName)}
            descriptionClassName={sectionRevealItemClass("md", blogPageDescriptionClassName)}
          />
        </SectionReveal>
      </Container>
    </section>
  );
}

export { BlogPageIntroSection };
