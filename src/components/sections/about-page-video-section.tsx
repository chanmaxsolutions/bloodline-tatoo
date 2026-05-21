import { SectionReveal } from "@/components/motion";
import { AboutPageYoutubePlayer } from "@/components/sections/about-page-youtube-player";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionDisplayHeadingClassName } from "@/lib/section-display-heading";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { AboutPageVideo } from "@/types/about-page";

const videoEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const videoDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug";

interface AboutPageVideoSectionProps {
  video: AboutPageVideo;
}

function AboutPageVideoSection({ video }: AboutPageVideoSectionProps) {
  return (
    <section
      aria-labelledby="about-video-heading"
      className={cn(
        "border-t border-border/50 bg-background text-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide">
        <SectionReveal className="flex flex-col gap-10 md:gap-12 lg:gap-14">
          <SectionHeading
            align="center"
            eyebrow={video.eyebrow}
            heading={video.heading}
            description={video.description}
            headingId="about-video-heading"
            className="mx-auto w-full max-w-4xl"
            eyebrowClassName={sectionRevealItemClass("none", videoEyebrowClassName)}
            titleClassName={sectionRevealItemClass("sm", sectionDisplayHeadingClassName)}
            descriptionClassName={sectionRevealItemClass("md", videoDescriptionClassName)}
          />

          <div className={sectionRevealItemClass("lg", "mx-auto w-full max-w-4xl")}>
            <AboutPageYoutubePlayer
              youtubeVideoId={video.youtubeVideoId}
              embedTitle={video.embedTitle}
            />
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { AboutPageVideoSection };
