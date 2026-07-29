import { getImageProps } from "next/image";
import { BookAppointmentTrigger } from "@/components/cta";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { pageClosingCtaBandTitleClassName } from "@/lib/page-closing-cta-band";
import { tattooStyleBookingCtaLabel } from "@/lib/tattoo-style-booking-cta";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

/** Uniform scrim only — no radial or linear gradients. */
const approachStatementScrimClassName = "pointer-events-none absolute inset-0 z-1 bg-background/90";

/**
 * Height comes from in-flow content so mobile never clips the heading.
 * Min-height only sets a floor — never a crop.
 */
const approachStatementMediaClassName = cn(
  "relative isolate w-full overflow-hidden rounded-md",
  "min-h-[min(52vh,360px)] lg:min-h-[min(60vh,520px)]",
);

const approachStatementContentClassName =
  "relative z-10 flex flex-col items-center justify-center gap-6 px-4 py-14 text-center sm:px-6 md:gap-8 md:py-16 lg:py-20";

/**
 * Mobile: contain so the wide logo is not cropped.
 * Desktop: cover + fixed for the full-bleed depth effect.
 */
const approachStatementBackgroundClassName = cn(
  "pointer-events-none absolute inset-0 z-0 bg-center bg-no-repeat opacity-40",
  "bg-contain bg-scroll",
  "lg:bg-cover lg:bg-fixed motion-reduce:lg:bg-scroll",
);

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
            className={approachStatementMediaClassName}
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
