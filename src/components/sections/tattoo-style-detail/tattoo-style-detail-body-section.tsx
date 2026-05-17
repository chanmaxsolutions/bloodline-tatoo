import Image from "next/image";
import Link from "next/link";
import { BookAppointmentTrigger } from "@/components/cta";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { homepageGhostCtaSurfaceClassName } from "@/lib/homepage-ghost-cta";
import { tattooStyleBookingCtaLabel } from "@/lib/tattoo-style-booking-cta";
import { cn } from "@/lib/utils";
import { TATTOO_STYLE_PROOF_SECTION_ID } from "@/components/sections/tattoo-style-detail/tattoo-style-detail-proof-section";
import type {
  ApproachPointerTriplet,
  ResolvedTattooStyleDetailPage,
} from "@/types/tattoo-style-detail";

interface TattooStyleDetailBodySectionProps {
  content: ResolvedTattooStyleDetailPage;
}

/** Matches `HomepageStandardsSplitSection` display title scale. */
const approachTitleClassName =
  "w-full max-w-none text-balance text-4xl leading-[0.95] tracking-tight text-foreground md:text-5xl md:leading-[0.93] lg:text-6xl lg:leading-[0.92]";

/** Full-width intro within the approach text column. */
const approachIntroClassName = "w-full max-w-none";

/** Matches `TattooStyleTile` overlay title on the homepage styles grid. */
const cardHeadingClassName =
  "font-heading text-2xl font-bold uppercase leading-none tracking-tight text-foreground";

const approachBoxClassName =
  "flex h-full flex-col gap-5 rounded-xl border border-border/50 bg-surface-elevated p-6 md:gap-6 md:p-7";

/** Matches `HomepageStandardsSplitSection` proof-line list item text. */
const standardsBulletTextClassName =
  "font-sans text-base leading-relaxed text-foreground/90 md:text-lg md:leading-relaxed";

/** Matches `HomepageStandardsSplitSection` accent checkmark. */
const standardsCheckmarkClassName =
  "mt-0.5 shrink-0 font-heading text-3xl leading-none text-accent md:text-2xl";

interface ApproachPointerCardProps {
  label: string;
  items: ApproachPointerTriplet;
}

function ApproachPointerCard({ label, items }: ApproachPointerCardProps) {
  return (
    <article className={approachBoxClassName}>
      <h3 className={cardHeadingClassName}>{label}</h3>
      <ul className="m-0 flex flex-1 list-none flex-col gap-4 p-0 md:gap-5">
        {items.map((line, index) => (
          <li key={index} className="flex items-start gap-3 md:gap-4">
            <span aria-hidden className={standardsCheckmarkClassName}>
              ✓
            </span>
            <span className={cn(standardsBulletTextClassName, "text-pretty")}>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_12%_0%,color-mix(in_oklab,var(--surface-elevated)_55%,transparent),transparent_72%)]"
      />

      <Container size="wide" className="relative flex flex-col gap-12 md:gap-14 lg:gap-16">
        <SectionReveal className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)] lg:gap-12 xl:gap-16">
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
              titleClassName={approachTitleClassName}
              descriptionClassName={approachIntroClassName}
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

          <div
            className={sectionRevealItemClass(
              "sm",
              "relative min-h-[min(52vh,400px)] w-full overflow-hidden rounded-md border border-white/5 lg:min-h-[min(60vh,520px)]",
            )}
          >
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
