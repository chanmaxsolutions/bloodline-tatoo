import Link from "next/link";
import { BookAppointmentTrigger } from "@/components/cta";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { homepageGhostCtaSurfaceClassName } from "@/lib/homepage-ghost-cta";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { AboutPageClosing } from "@/types/about-page";

const closingTitleClassName =
  "text-heading-display w-full max-w-4xl text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

const closingDescriptionClassName =
  "mx-auto max-w-xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty sm:max-w-2xl md:text-xl md:leading-snug";

interface AboutPageClosingSectionProps {
  closing: AboutPageClosing;
  headerCtaLabel: string;
}

function AboutPageClosingSection({ closing, headerCtaLabel }: AboutPageClosingSectionProps) {
  return (
    <section
      aria-labelledby="about-closing-heading"
      className={cn(
        "border-t border-border/50 bg-surface text-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide">
        <SectionReveal className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center md:gap-10">
          <div
            className={sectionRevealItemClass("none", "flex flex-col items-center gap-4 md:gap-5")}
          >
            <h2 id="about-closing-heading" className={closingTitleClassName}>
              {closing.heading}
            </h2>
            <p className={closingDescriptionClassName}>{closing.description}</p>
          </div>

          <div
            className={sectionRevealItemClass(
              "sm",
              "flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4",
            )}
          >
            <BookAppointmentTrigger variant="primary" size="lg" className="w-auto max-w-full">
              {headerCtaLabel}
            </BookAppointmentTrigger>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                homepageGhostCtaSurfaceClassName,
                "w-auto max-w-full",
              )}
            >
              Contact the studio
            </Link>
          </div>

          {closing.exploreLinks.length > 0 ? (
            <nav
              aria-label="Explore Bloodline"
              className={sectionRevealItemClass(
                "md",
                "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-sm text-muted-foreground md:text-base",
              )}
            >
              {closing.exploreLinks.map((link, index) => (
                <span key={link.href} className="inline-flex items-center gap-4">
                  {index > 0 ? (
                    <span aria-hidden className="text-border">
                      ·
                    </span>
                  ) : null}
                  <Link
                    href={link.href}
                    className="font-medium text-foreground/80 underline decoration-white/20 underline-offset-2 outline-none transition-colors motion-fast hover:text-foreground hover:decoration-white/40 focus-visible:ring-2 focus-visible:ring-ring/60"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </nav>
          ) : null}
        </SectionReveal>
      </Container>
    </section>
  );
}

export { AboutPageClosingSection };
