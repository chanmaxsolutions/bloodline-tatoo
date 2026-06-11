import clsx from "clsx";
import Link from "next/link";
import { BookAppointmentTrigger } from "@/components/cta";
import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion";
import { PageClosingTrustProofStrip } from "@/components/shared/page-closing-trust-proof-strip";
import { buttonVariants } from "@/components/ui/button";
import {
  pageClosingCtaBandActionsClassName,
  pageClosingCtaBandDescriptionClassName,
  pageClosingCtaBandTitleClassName,
  pageClosingCtaBandUrgencyClassName,
} from "@/lib/page-closing-cta-band";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

/** Same band shell as `pageClosingCtaBandSectionClassName` without section dividers. */
const tattooStyleClosingCtaSectionClassName = cn(
  "bg-surface-strong text-foreground",
  "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
);

interface TattooStyleDetailCtaSectionProps {
  content: ResolvedTattooStyleDetailPage;
  headerCtaLabel: string;
  ctaUrgencyNote?: string;
}

function TattooStyleDetailCtaSection({
  content,
  headerCtaLabel,
  ctaUrgencyNote,
}: TattooStyleDetailCtaSectionProps) {
  const { title: styleTitle, slug: styleSlug } = content;

  return (
    <section
      aria-labelledby="tattoo-style-cta-heading"
      className={tattooStyleClosingCtaSectionClassName}
    >
      <Container size="wide">
        <SectionReveal className="mx-auto flex w-full min-w-0 max-w-5xl flex-col items-center gap-7 text-center md:gap-8">
          <div
            className={sectionRevealItemClass(
              "none",
              "mx-auto flex w-full min-w-0 max-w-2xl flex-col items-center gap-3 text-center md:max-w-4xl md:gap-4",
            )}
          >
            <PageClosingTrustProofStrip />

            <div className="flex w-full flex-col items-center gap-4 md:gap-5">
              <h2
                id="tattoo-style-cta-heading"
                className={clsx("text-heading-display", pageClosingCtaBandTitleClassName)}
              >
                READY TO BOOK YOUR NEXT {styleTitle.toUpperCase()}?
              </h2>
              <p className={pageClosingCtaBandDescriptionClassName}>
                Book a consultation for {styleTitle.toLowerCase()}. Share placement, scale, and
                reference direction. We respond on your studio channel.
              </p>
            </div>
          </div>

          <div className={sectionRevealItemClass("sm", pageClosingCtaBandActionsClassName)}>
            <BookAppointmentTrigger
              variant="primary"
              size="lg"
              tattooStyleSlug={styleSlug}
              className="w-auto max-w-full"
              trackingComponentName="TattooStyleDetailCtaSection"
            >
              {headerCtaLabel}
            </BookAppointmentTrigger>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-auto max-w-full",
              )}
            >
              Contact the studio
            </Link>
          </div>

          {ctaUrgencyNote ? (
            <p className={sectionRevealItemClass("md", pageClosingCtaBandUrgencyClassName)}>
              <span aria-hidden="true" className="mr-0.5 inline">
                *
              </span>
              {ctaUrgencyNote}
            </p>
          ) : null}
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleDetailCtaSection };
