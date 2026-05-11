"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/motion";
import { buttonVariants } from "@/components/ui/button";
import { splitDescriptionEmphasis } from "@/lib/split-description-emphasis";
import { cn } from "@/lib/utils";
import type { RegionHomepageAuthorityConfig } from "@/types/homepage-authority";

interface AuthoritySectionProps {
  content: RegionHomepageAuthorityConfig;
}

/** Matches `SectionHeading` eyebrow treatment */
const authorityEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const descriptionClassName =
  "font-sans text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-snug";

const emphasisClassName = "font-semibold text-foreground";

function AuthoritySection({ content }: AuthoritySectionProps) {
  /** Stagger tuned to `revealFirm` duration (~0.72s) so each line reads as a sequence. */
  const step = 0.11;
  const headingDelay = step;
  const descriptionDelay = step * 2;
  const ctaDelay = step * 3;

  return (
    <section
      id="homepage-authority"
      aria-labelledby="homepage-authority-heading"
      className={cn(
        "relative overflow-hidden bg-gradient-authority text-foreground",
        "pt-(--section-space-y-tight) pb-0",
        "lg:pt-(--section-space-y) lg:pb-0",
      )}
    >
      <Container size="wide" className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center md:gap-5">
          <Reveal
            as="p"
            mode="firm"
            delay={0}
            amount={0.12}
            viewportMargin="0px 0px 20% 0px"
            className={authorityEyebrowClassName}
          >
            {content.eyebrow}
          </Reveal>
          <Reveal
            as="h2"
            id="homepage-authority-heading"
            mode="firm"
            delay={headingDelay}
            amount={0.12}
            viewportMargin="0px 0px 20% 0px"
            className="text-heading-display text-5xl leading-[0.95] md:text-6xl md:leading-[0.93] lg:text-7xl lg:leading-[0.9] text-foreground"
          >
            {content.heading}
          </Reveal>
          <Reveal
            mode="firm"
            delay={descriptionDelay}
            amount={0.12}
            viewportMargin="0px 0px 20% 0px"
          >
            <p className={descriptionClassName}>
              {splitDescriptionEmphasis(content.description).map((segment, index) =>
                segment.emphasis ? (
                  <strong key={index} className={emphasisClassName}>
                    {segment.text}
                  </strong>
                ) : (
                  <span key={index}>{segment.text}</span>
                ),
              )}
            </p>
          </Reveal>
          <Reveal mode="firm" delay={ctaDelay} amount={0.12} viewportMargin="0px 0px 20% 0px">
            <div className="flex justify-center">
              <Link
                href={content.ctaHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full border-border-strong bg-transparent sm:w-auto",
                )}
              >
                {content.ctaLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export { AuthoritySection };
