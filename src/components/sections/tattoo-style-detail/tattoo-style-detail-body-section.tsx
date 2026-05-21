import Image from "next/image";
import Link from "next/link";
import { BookAppointmentTrigger } from "@/components/cta";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import {
  ApproachPointerCard,
  approachSectionMediaClassName,
  approachSectionRadialClassName,
  approachSectionTitleClassName,
} from "@/components/shared/approach-pointer-card";
import { tattooStyleDetailApproachGridClassName } from "@/lib/standards-split-layout";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { homepageGhostCtaSurfaceClassName } from "@/lib/homepage-ghost-cta";
import { tattooStyleBookingCtaLabel } from "@/lib/tattoo-style-booking-cta";
import { cn } from "@/lib/utils";
import { TATTOO_STYLE_PROOF_SECTION_ID } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-proof-section";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

interface TattooStyleDetailBodySectionProps {
  content: ResolvedTattooStyleDetailPage;
}

function TattooStyleDetailBodySection({ content }: TattooStyleDetailBodySectionProps) {
  const approachImage = content.proofImages[0] ?? {
    src: content.heroImageSrc,
    alt: content.heroImageAlt,
  };

  return (
    <section
      aria-labelledby="tattoo-style-approach-heading"
      className={cn(
        "relative overflow-hidden border-t border-border/50 bg-background text-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <div aria-hidden className={approachSectionRadialClassName} />

      <Container size="wide" className="relative flex flex-col gap-12 md:gap-14 lg:gap-16">
        <SectionReveal className={tattooStyleDetailApproachGridClassName}>
          <div
            className={sectionRevealItemClass(
              "none",
              "flex flex-col items-start justify-center gap-6 self-center text-left lg:gap-8 lg:pr-6 xl:pr-10",
            )}
          >
            <SectionHeading
              align="left"
              eyebrow="Approach"
              heading={content.approachHeadline}
              description={content.approachIntro}
              headingId="tattoo-style-approach-heading"
              titleClassName={approachSectionTitleClassName}
              descriptionClassName="w-full max-w-none"
              className="w-full gap-4 justify-items-start text-left md:gap-5"
            />
            <div
              className={sectionRevealItemClass(
                "md",
                "flex w-full flex-wrap items-center justify-start gap-3 sm:gap-4",
              )}
            >
              <BookAppointmentTrigger
                variant="primary"
                size="sm"
                tattooStyleSlug={content.slug}
                className="w-fit max-w-full"
              >
                {tattooStyleBookingCtaLabel(content.title)}
              </BookAppointmentTrigger>
              <Link
                href={`#${TATTOO_STYLE_PROOF_SECTION_ID}`}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  homepageGhostCtaSurfaceClassName,
                  "w-fit",
                )}
              >
                View recent work
              </Link>
            </div>
          </div>

          <div className={sectionRevealItemClass("sm", approachSectionMediaClassName)}>
            <Image
              src={approachImage.src}
              alt={approachImage.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 92vw"
              quality={78}
              className="object-cover object-center"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent"
            />
          </div>
        </SectionReveal>

        <SectionReveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          <div className={sectionRevealStaggerClass(0)}>
            <ApproachPointerCard label="Philosophy" items={content.philosophyBullets} />
          </div>
          <div className={sectionRevealStaggerClass(1)}>
            <ApproachPointerCard label="Ideal for" items={content.idealForBullets} />
          </div>
          <div className={sectionRevealStaggerClass(2, "sm:col-span-2 lg:col-span-1")}>
            <ApproachPointerCard label="Session structure" items={content.sessionBullets} />
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleDetailBodySection };
