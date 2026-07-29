import clsx from "clsx";
import Link from "next/link";
import { BookAppointmentTrigger } from "@/components/cta";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { PageClosingTrustProofStrip } from "@/components/shared/page-closing-trust-proof-strip";
import { buttonVariants } from "@/components/ui/button";
import {
  pageClosingCtaBandActionsClassName,
  pageClosingCtaBandDescriptionClassName,
  pageClosingCtaBandSectionClassName,
  pageClosingCtaBandTitleClassName,
  pageClosingCtaBandUrgencyClassName,
} from "@/lib/page-closing-cta-band";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { PageClosingCtaContent } from "@/types/page-closing-cta";

function splitClosingDescription(description: string): string[] {
  return description
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean);
}

interface PageClosingCtaSectionProps {
  content: PageClosingCtaContent;
  headerCtaLabel: string;
  headingId: string;
  /** Google reviews line above the heading; off only when a page must omit proof. */
  showTrustProofStrip?: boolean;
  /** Optional secondary link to `/contact`. Off for global hub About. */
  showContactLink?: boolean;
  /** Optional line below actions (e.g. appointment / WhatsApp note). */
  ctaUrgencyNote?: string;
  /** Override default bordered `bg-surface` shell (e.g. portfolio closing cap). */
  sectionClassName?: string;
}

function PageClosingCtaSection({
  content,
  headerCtaLabel,
  headingId,
  showTrustProofStrip = true,
  showContactLink = true,
  ctaUrgencyNote,
  sectionClassName,
}: PageClosingCtaSectionProps) {
  return (
    <section
      aria-labelledby={headingId}
      className={cn(pageClosingCtaBandSectionClassName, sectionClassName)}
    >
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
            {showTrustProofStrip ? <PageClosingTrustProofStrip /> : null}
            <div className="flex w-full flex-col items-center gap-4 md:gap-5">
              <h2
                id={headingId}
                className={clsx("text-heading-display", pageClosingCtaBandTitleClassName)}
              >
                {content.heading}
              </h2>
              {(() => {
                const paragraphs = splitClosingDescription(content.description);
                if (paragraphs.length <= 1) {
                  return (
                    <p className={pageClosingCtaBandDescriptionClassName}>
                      {paragraphs[0] ?? content.description}
                    </p>
                  );
                }

                return (
                  <div className="flex w-full flex-col items-center gap-3 md:gap-3.5">
                    {paragraphs.map((paragraph, index) => (
                      <p key={index} className={pageClosingCtaBandDescriptionClassName}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>

          <div className={sectionRevealItemClass("sm", pageClosingCtaBandActionsClassName)}>
            <BookAppointmentTrigger
              variant="primary"
              size="lg"
              className="w-auto max-w-full"
              trackingComponentName="PageClosingCtaSection"
            >
              {headerCtaLabel}
            </BookAppointmentTrigger>
            {showContactLink ? (
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-auto max-w-full",
                )}
              >
                Contact the studio
              </Link>
            ) : null}
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

export { PageClosingCtaSection };
