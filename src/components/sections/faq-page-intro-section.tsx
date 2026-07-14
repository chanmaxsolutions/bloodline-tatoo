import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { SectionHeading } from "@/components/shared/section-heading";
import { pageIntroBandSurfaceGradientClassName } from "@/lib/page-intro-band-gradient";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { FaqPageIntro } from "@/lib/faq-page";
import type { PageIntroBandBackgroundImage } from "@/types/page-intro-band";

const faqHeroEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const faqHeroTitleClassName =
  "text-heading-authority-display w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const faqHeroDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

const faqIntroBottomSpacingClassName = "pb-10 md:pb-12 lg:pb-14";

interface FaqPageIntroSectionProps {
  intro: FaqPageIntro;
  introBackgroundPoster: PageIntroBandBackgroundImage;
  introBackgroundVideoSrc: string;
}

function FaqPageIntroSection({
  intro,
  introBackgroundPoster,
  introBackgroundVideoSrc,
}: FaqPageIntroSectionProps) {
  return (
    <section
      aria-labelledby="faq-page-heading"
      className={cn(
        "relative isolate overflow-hidden border-t border-border/50 bg-surface text-foreground",
        "pt-28 md:pt-36",
        faqIntroBottomSpacingClassName,
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0 min-h-full w-full overflow-hidden">
        <HeroBackgroundVideo
          key={introBackgroundVideoSrc}
          src={introBackgroundVideoSrc}
          poster={introBackgroundPoster.src}
          stillSrc={introBackgroundPoster.src}
          stillAlt={introBackgroundPoster.alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
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
            headingId="faq-page-heading"
            headingLevel={1}
            className="mx-auto w-full max-w-4xl"
            eyebrowClassName={sectionRevealItemClass("none", faqHeroEyebrowClassName)}
            titleClassName={sectionRevealItemClass("sm", faqHeroTitleClassName)}
            descriptionClassName={sectionRevealItemClass("md", faqHeroDescriptionClassName)}
          />
        </SectionReveal>
      </Container>
    </section>
  );
}

export { FaqPageIntroSection };
