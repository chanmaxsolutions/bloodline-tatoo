import { BookAppointmentTrigger } from "@/components/cta";
import { SectionReveal } from "@/components/motion";
import { AboutPageYoutubePlayer } from "@/components/sections/about-page-youtube-player";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { pageIntroBandSurfaceGradientClassName } from "@/lib/page-intro-band-gradient";
import { sectionDisplayHeadingClassName } from "@/lib/section-display-heading";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { AboutPageVideo } from "@/types/about-page";
import type { PageIntroBandBackgroundImage } from "@/types/page-intro-band";

const videoEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const videoDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

const videoHeroTitleClassName =
  "text-heading-authority-display w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

interface AboutPageVideoSectionProps {
  video: AboutPageVideo;
  /** When set, section becomes the page H1 (global hub minimized About). */
  headingLevel?: 1 | 2;
  /** Optional full-bleed hero clip behind the band (global hub). */
  backgroundVideoSrc?: string;
  backgroundPoster?: PageIntroBandBackgroundImage;
  /** Primary booking CTA under the player (global hub). */
  ctaLabel?: string;
}

function AboutPageVideoSection({
  video,
  headingLevel = 2,
  backgroundVideoSrc,
  backgroundPoster,
  ctaLabel,
}: AboutPageVideoSectionProps) {
  const hasBackground = Boolean(backgroundVideoSrc && backgroundPoster);

  return (
    <section
      aria-labelledby="about-video-heading"
      className={cn(
        "border-0 text-foreground",
        hasBackground
          ? cn(
              "relative isolate overflow-hidden border-t border-border/50 bg-surface",
              "pt-28 md:pt-36",
              "pb-(--homepage-section-band-padding-y-mobile) lg:pb-(--homepage-section-band-padding-y-desktop)",
            )
          : cn(
              "bg-background",
              "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
            ),
      )}
    >
      {hasBackground && backgroundVideoSrc && backgroundPoster ? (
        <>
          <div className="pointer-events-none absolute inset-0 z-0 min-h-full w-full overflow-hidden">
            <HeroBackgroundVideo
              key={backgroundVideoSrc}
              src={backgroundVideoSrc}
              poster={backgroundPoster.src}
              stillSrc={backgroundPoster.src}
              stillAlt={backgroundPoster.alt}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden className={pageIntroBandSurfaceGradientClassName} />
        </>
      ) : null}

      <Container size="wide" className={cn(hasBackground && "relative z-10")}>
        <SectionReveal className="flex flex-col gap-10 md:gap-12 lg:gap-14">
          <SectionHeading
            align="center"
            eyebrow={video.eyebrow}
            heading={video.heading}
            description={video.description}
            headingId="about-video-heading"
            headingLevel={headingLevel}
            className="mx-auto w-full max-w-4xl"
            eyebrowClassName={sectionRevealItemClass("none", videoEyebrowClassName)}
            titleClassName={sectionRevealItemClass(
              "sm",
              headingLevel === 1 ? videoHeroTitleClassName : sectionDisplayHeadingClassName,
            )}
            descriptionClassName={sectionRevealItemClass("md", videoDescriptionClassName)}
          />

          <div
            className={sectionRevealItemClass(
              "lg",
              "mx-auto flex w-full max-w-4xl flex-col items-center gap-7 md:gap-8",
            )}
          >
            <AboutPageYoutubePlayer
              youtubeVideoId={video.youtubeVideoId}
              embedTitle={video.embedTitle}
            />
            {ctaLabel ? (
              <BookAppointmentTrigger
                variant="primary"
                size="lg"
                className="w-auto max-w-full"
                trackingComponentName="AboutPageVideoSection"
              >
                {ctaLabel}
              </BookAppointmentTrigger>
            ) : null}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { AboutPageVideoSection };
