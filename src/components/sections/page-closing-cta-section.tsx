import clsx from "clsx";
import Link from "next/link";
import { BookAppointmentTrigger } from "@/components/cta";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
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
}

function PageClosingCtaSection({ content, headerCtaLabel, headingId }: PageClosingCtaSectionProps) {
  return (
    <section aria-labelledby={headingId} className={pageClosingCtaBandSectionClassName}>
      <Container size="wide">
        <SectionReveal className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center md:gap-10">
          <div
            className={sectionRevealItemClass("none", "flex flex-col items-center gap-4 md:gap-5")}
          >
            <h2
              id={headingId}
              className={clsx("text-heading-display", pageClosingCtaBandTitleClassName)}
            >
              {content.heading}
            </h2>
            <p className={pageClosingCtaBandDescriptionClassName}>{content.description}</p>
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
