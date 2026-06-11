import { getImageProps } from "next/image";
import { BookAppointmentTrigger } from "@/components/cta";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { approachSectionMediaClassName } from "@/components/shared/approach-pointer-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { pageClosingCtaBandTitleClassName } from "@/lib/page-closing-cta-band";
import { tattooStyleBookingCtaLabel } from "@/lib/tattoo-style-booking-cta";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

/** Uniform scrim only — no radial or linear gradients. */
const approachStatementScrimClassName = "pointer-events-none absolute inset-0 z-1 bg-background/80";

const approachStatementContentClassName =
  "relative z-10 flex min-h-[min(52vh,400px)] flex-col items-center justify-center gap-6 px-4 py-16 text-center sm:px-6 md:gap-8 md:py-20 lg:min-h-[min(60vh,520px)] lg:py-24";

/** Fixed attachment on md+ for depth while scrolling; scroll attachment on small screens (iOS-safe). */
const approachStatementBackgroundClassName =
  "pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-scroll motion-reduce:bg-scroll md:bg-fixed";

interface TattooStyleApproachStatementSectionProps {
  content: ResolvedTattooStyleDetailPage;
}

function approachStatementBackgroundStyle(src: string, alt: string) {
  const {
    props: { src: optimizedSrc },
  } = getImageProps({
    alt,
    src,
    width: 1920,
    height: 1080,
    quality: 78,
  });

  return { backgroundImage: `url("${optimizedSrc}")` };
}

function TattooStyleApproachStatementSection({
  content,
}: TattooStyleApproachStatementSectionProps) {
  const backgroundStyle = approachStatementBackgroundStyle(
    content.approachImageSrc,
    content.approachImageAlt,
  );

  return (
    <section
      aria-labelledby="tattoo-style-approach-heading"
      className="bg-background text-foreground"
    >
      <Container
        size="wide"
        className={cn(
          "pt-[calc(var(--homepage-section-band-padding-y-mobile)*0.5)] pb-(--homepage-section-band-padding-y-mobile)",
          "lg:pt-[calc(var(--homepage-section-band-padding-y-desktop)*0.5)] lg:pb-(--homepage-section-band-padding-y-desktop)",
        )}
      >
        <SectionReveal>
          <div
            className={cn(approachSectionMediaClassName, "isolate border-0")}
            role="img"
            aria-label={content.approachImageAlt}
          >
            <div
              aria-hidden
              className={approachStatementBackgroundClassName}
              style={backgroundStyle}
            />
            <div aria-hidden className={approachStatementScrimClassName} />

            <div className={approachStatementContentClassName}>
              <SectionHeading
                align="center"
                heading={content.approachHeadline}
                description={content.approachIntro}
                headingId="tattoo-style-approach-heading"
                titleClassName={sectionRevealItemClass("none", pageClosingCtaBandTitleClassName)}
                descriptionClassName={sectionRevealItemClass("sm", "mx-auto max-w-xl md:max-w-2xl")}
                className="w-full items-center gap-4 md:gap-5"
              />
              <div className={sectionRevealItemClass("md", "flex w-full justify-center")}>
                <BookAppointmentTrigger
                  variant="primary"
                  size="lg"
                  tattooStyleSlug={content.slug}
                  className="w-fit max-w-full"
                  trackingComponentName="TattooStyleApproachStatementSection"
                >
                  {tattooStyleBookingCtaLabel(content.title)}
                </BookAppointmentTrigger>
              </div>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleApproachStatementSection };
