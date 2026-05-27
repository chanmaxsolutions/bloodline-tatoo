import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { approachSectionMediaClassName } from "@/components/shared/approach-pointer-card";
import {
  sectionDisplayHeadingClassName,
  sectionDisplayHeadingPresetClassName,
} from "@/lib/section-display-heading";
import {
  homepageApproachBandContainerClassName,
  homepageApproachBandPaddingClassName,
  resolveHomepageStandardsSplitBandClassName,
} from "@/lib/homepage-section-surfaces";
import {
  StandardsProofColumns,
  defaultPointerIcons,
} from "@/components/shared/standards-proof-columns";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { homepageGhostCtaClassName } from "@/lib/homepage-ghost-cta";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import {
  homepageSessionPathApproachGridClassName,
  homepageStandardsApproachGridClassName,
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
   * `approach` — hero column + media, then editorial proof columns (homepage standards).
   * `editorial` — text-led column + fixed media width.
   * `balanced` — even 50/50 columns (session path band).
   */
  layout?: "approach" | "balanced" | "editorial";
}

function HomepageStandardsSplitApproachLayout({
  content,
  headingId,
}: {
  content: RegionHomepageStandardsSplitConfig;
  headingId: string;
}) {
  const labels = content.pointerLabels ?? ["Standard", "Execution", "Discipline"];
  const iconIds = content.pointerIcons ?? defaultPointerIcons;
  const columns = content.bullets.slice(0, 3).map((line, index) => ({
    label: labels[index] ?? `Point ${index + 1}`,
    line,
    iconId: iconIds[index] ?? defaultPointerIcons[index] ?? "shield-check",
  }));
  const isMediaStart = content.mediaSide === "start";

  const headingColumnClassName = cn(
    "flex flex-col items-center justify-center gap-6 self-center text-center lg:gap-8 lg:items-start lg:text-left",
    isMediaStart ? "order-1 lg:order-2 lg:pl-6 xl:pl-10" : "order-1 lg:order-1 lg:pr-6 xl:pr-10",
  );

  const headingSectionClassName =
    "w-full gap-4 justify-items-center text-center md:gap-5 lg:justify-items-start lg:text-left";

  const headingTitleClassName = cn(sectionDisplayHeadingClassName, "text-center lg:text-left");

  const mediaColumnClassName = cn(
    approachSectionMediaClassName,
    "border-0 shadow-none drop-shadow-none [&_img]:shadow-none [&_img]:drop-shadow-none",
    isMediaStart ? "order-2 lg:order-1" : "order-2 lg:order-2",
  );

  const mobileCtaRowClassName = "flex w-full justify-center lg:hidden";

  const headingColumn = (
    <div className={sectionRevealItemClass("none", headingColumnClassName)}>
      <SectionHeading
        align="left"
        eyebrow={content.eyebrow}
        heading={content.heading}
        description={content.intro}
        headingId={headingId}
        titleClassName={headingTitleClassName}
        descriptionClassName="w-full max-w-none"
        className={headingSectionClassName}
      />
      <div className="hidden pt-1 lg:block">
        <Link href={content.cta.href} className={homepageGhostCtaClassName()}>
          {content.cta.label}
        </Link>
      </div>
    </div>
  );

  const mediaColumn = (
    <div className={sectionRevealItemClass("sm", mediaColumnClassName)}>
      <Image
        src={content.media.src}
        alt={content.media.alt}
        fill
        sizes="(min-width: 1024px) 60vw, 92vw"
        quality={78}
        className="object-cover object-center shadow-none drop-shadow-none"
      />
    </div>
  );

  return (
    <Container size="wide" className={homepageApproachBandContainerClassName}>
      <SectionReveal
        className={
          isMediaStart
            ? homepageSessionPathApproachGridClassName
            : homepageStandardsApproachGridClassName
        }
      >
        {isMediaStart ? (
          <>
            {mediaColumn}
            {headingColumn}
          </>
        ) : (
          <>
            {headingColumn}
            {mediaColumn}
          </>
        )}
      </SectionReveal>

      <StandardsProofColumns columns={columns} proofVariants={content.proofVariants} />

      <div className={sectionRevealItemClass("none", mobileCtaRowClassName)}>
        <Link href={content.cta.href} className={homepageGhostCtaClassName()}>
          {content.cta.label}
        </Link>
      </div>
    </Container>
  );
}

function HomepageStandardsSplitSection({
  content,
  sectionId = "homepage-standards-split",
  layout = "balanced",
}: HomepageStandardsSplitSectionProps) {
  const headingId = `${sectionId}-heading`;
  const mediaSide = content.mediaSide ?? "start";
  const bandSurfaceClassName = resolveHomepageStandardsSplitBandClassName(content.bandSurface);
  const isMediaEnd = mediaSide === "end";
  const isEditorial = layout === "editorial";
  const isApproach = layout === "approach";

  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      className={cn(
        "scroll-mt-28 text-foreground md:scroll-mt-32",
        bandSurfaceClassName,
        isApproach && "relative overflow-hidden",
        isApproach
          ? homepageApproachBandPaddingClassName
          : "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      {isApproach ? (
        <HomepageStandardsSplitApproachLayout content={content} headingId={headingId} />
      ) : (
        <Container size="wide">
          <SectionReveal
            className={
              isEditorial
                ? standardsSplitEditorialGridClassName
                : standardsSplitBalancedGridClassName
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
                className="object-cover object-center shadow-none drop-shadow-none"
              />
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
                className={sectionRevealItemClass("sm", sectionDisplayHeadingPresetClassName())}
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
      )}
    </section>
  );
}

export { HomepageStandardsSplitSection };
