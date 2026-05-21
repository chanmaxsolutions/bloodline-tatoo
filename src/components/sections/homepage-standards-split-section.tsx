import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import {
  standardsSplitBalancedGridClassName,
  standardsSplitBalancedMediaClassName,
  standardsSplitEditorialGridClassName,
  standardsSplitEditorialMediaClassName,
} from "@/lib/standards-split-layout";
import { cn } from "@/lib/utils";
import type { RegionHomepageStandardsSplitConfig } from "@/types/homepage-standards-split";

interface HomepageStandardsSplitSectionProps {
  content: RegionHomepageStandardsSplitConfig;
  /** Stable DOM id and `aria-labelledby` target; default matches first homepage split band. */
  sectionId?: string;
  /**
   * `editorial` — text-led column + fixed media width (tattoo style detail / about).
   * `balanced` — even 50/50 columns (homepage default).
   */
  layout?: "balanced" | "editorial";
}

function HomepageStandardsSplitSection({
  content,
  sectionId = "homepage-standards-split",
  layout = "balanced",
}: HomepageStandardsSplitSectionProps) {
  const headingId = `${sectionId}-heading`;
  const mediaSide = content.mediaSide ?? "start";
  const bandSurface = content.bandSurface ?? "default";
  const isMediaEnd = mediaSide === "end";
  const isEditorial = layout === "editorial";

  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      className={cn(
        "scroll-mt-28 border-t border-border/50 text-foreground md:scroll-mt-32",
        bandSurface === "surface" ? "bg-surface" : "bg-background",
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide">
        <SectionReveal
          className={
            isEditorial ? standardsSplitEditorialGridClassName : standardsSplitBalancedGridClassName
          }
        >
          <div
            className={sectionRevealItemClass(
              "none",
              cn(
                isEditorial
                  ? standardsSplitEditorialMediaClassName
                  : standardsSplitBalancedMediaClassName,
                isMediaEnd ? "order-2" : "order-1",
              ),
            )}
          >
            <Image
              src={content.media.src}
              alt={content.media.alt}
              fill
              sizes={
                isEditorial ? "(min-width: 1024px) 40vw, 92vw" : "(min-width: 1024px) 46vw, 100vw"
              }
              quality={isEditorial ? 78 : 75}
              className="object-cover object-center"
            />
            {isEditorial ? (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/30 via-transparent to-transparent"
              />
            ) : null}
          </div>
          <div
            className={cn(
              "flex min-w-0 flex-col gap-6 lg:gap-8",
              isMediaEnd ? "order-1" : "order-2",
              isEditorial && "lg:pr-6 xl:pr-10",
            )}
          >
            <h2
              id={headingId}
              className={sectionRevealItemClass(
                "sm",
                "text-heading-display text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]",
              )}
            >
              {content.heading}
            </h2>
            <ul className="flex flex-col gap-4 md:gap-5">
              {content.bullets.map((line, index) => (
                <li
                  key={index}
                  className={sectionRevealStaggerClass(
                    index + 1,
                    "flex items-start gap-3 md:gap-4",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 font-heading text-3xl leading-none text-accent md:text-2xl"
                  >
                    ✓
                  </span>
                  <span className="font-sans text-base leading-relaxed text-foreground/90 md:text-lg md:leading-relaxed">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
            <div className={sectionRevealItemClass("lg", "pt-1")}>
              <Link
                href={content.cta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full border-border-strong bg-transparent sm:inline-flex sm:w-auto",
                )}
              >
                {content.cta.label}
              </Link>
            </div>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { HomepageStandardsSplitSection };
