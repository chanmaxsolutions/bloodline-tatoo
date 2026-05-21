import clsx from "clsx";
import Link from "next/link";
import { BookAppointmentTrigger } from "@/components/cta";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { HeroTrustProofStrip } from "@/components/shared/hero-trust-proof-strip";
import { buttonVariants } from "@/components/ui/button";
import {
  pageClosingCtaBandActionsClassName,
  pageClosingCtaBandDescriptionClassName,
  pageClosingCtaBandSectionClassName,
  pageClosingCtaBandTitleClassName,
} from "@/lib/page-closing-cta-band";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { PageClosingCtaContent } from "@/types/page-closing-cta";

interface PageClosingCtaSectionProps {
  content: PageClosingCtaContent;
  headerCtaLabel: string;
  headingId: string;
  /** Hero-style Google / social proof chips above the heading (homepage closing band). */
  showTrustProofStrip?: boolean;
}

function PageClosingCtaSection({
  content,
  headerCtaLabel,
  headingId,
  showTrustProofStrip = false,
}: PageClosingCtaSectionProps) {
  return (
    <section aria-labelledby={headingId} className={pageClosingCtaBandSectionClassName}>
      <Container size="wide">
        <SectionReveal className="mx-auto flex w-full min-w-0 max-w-5xl flex-col items-center gap-7 text-center md:gap-8">
          <div
            className={sectionRevealItemClass(
              "none",
              cn(
                "mx-auto flex w-full min-w-0 max-w-2xl flex-col items-center text-center md:max-w-4xl",
                showTrustProofStrip ? "gap-3 md:gap-4" : "gap-4 md:gap-5",
              ),
            )}
          >
            {showTrustProofStrip ? <HeroTrustProofStrip className="w-full max-w-full" /> : null}
            <div className="flex w-full flex-col items-center gap-4 md:gap-5">
              <h2
                id={headingId}
                className={clsx("text-heading-display", pageClosingCtaBandTitleClassName)}
              >
                {content.heading}
              </h2>
              <p className={pageClosingCtaBandDescriptionClassName}>{content.description}</p>
            </div>
          </div>

          <div className={sectionRevealItemClass("sm", pageClosingCtaBandActionsClassName)}>
            <BookAppointmentTrigger variant="primary" size="lg" className="w-auto max-w-full">
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
        </SectionReveal>
      </Container>
    </section>
  );
}

export { PageClosingCtaSection };
