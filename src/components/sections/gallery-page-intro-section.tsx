import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { galleryPageIntroBottomSpacingClassName } from "@/lib/gallery-page-layout";
import { pageIntroBandSurfaceGradientClassName } from "@/lib/page-intro-band-gradient";
import { cn } from "@/lib/utils";
import type { GalleryPageIntro } from "@/types/gallery";
import type { PageIntroBandBackgroundImage } from "@/types/page-intro-band";

const galleryPageEyebrowClassName =
  "hero-reveal-motion font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const galleryPageTitleClassName =
  "hero-reveal-motion hero-reveal-motion-delay-sm text-heading-authority-display w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const galleryPageDescriptionClassName =
  "hero-reveal-motion hero-reveal-motion-delay-md mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

interface GalleryPageIntroSectionProps {
  intro: GalleryPageIntro;
  introBackgroundImage: PageIntroBandBackgroundImage;
}

function GalleryPageIntroSection({ intro, introBackgroundImage }: GalleryPageIntroSectionProps) {
  return (
    <section
      aria-labelledby="portfolio-index-heading"
      className={cn(
        "relative isolate overflow-hidden bg-surface text-foreground",
        "pt-28 md:pt-36",
        galleryPageIntroBottomSpacingClassName,
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={introBackgroundImage.src}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-center"
        />
      </div>
      <div aria-hidden className={pageIntroBandSurfaceGradientClassName} />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          align="center"
          headingLevel={1}
          eyebrow={intro.eyebrow}
          heading={intro.heading}
          description={intro.description}
          headingId="portfolio-index-heading"
          className="mx-auto w-full max-w-4xl"
          eyebrowClassName={galleryPageEyebrowClassName}
          titleClassName={galleryPageTitleClassName}
          descriptionClassName={galleryPageDescriptionClassName}
        />
      </Container>
    </section>
  );
}

export { GalleryPageIntroSection };
