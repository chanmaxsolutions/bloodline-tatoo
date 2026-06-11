import Image from "next/image";
import Link from "next/link";
import { SectionReveal } from "@/components/motion";
import { Container } from "@/components/layout/container";
import { homepageGhostCtaClassName } from "@/lib/homepage-ghost-cta";
import { homepageAuthorityBandClassName } from "@/lib/homepage-section-surfaces";
import { sectionDisplayHeadingPresetClassName } from "@/lib/section-display-heading";
import { sectionRevealItemClass, sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { splitDescriptionEmphasis } from "@/lib/split-description-emphasis";
import { cn } from "@/lib/utils";
import type {
  HomepageAuthorityProofOverlay,
  HomepageAuthorityProofPanel,
  RegionHomepageAuthorityConfig,
} from "@/types/homepage-authority";

interface AuthoritySectionProps {
  content: RegionHomepageAuthorityConfig;
}

const authorityGridClassName =
  "grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-[1.8fr_1.1fr_1.1fr] lg:items-stretch lg:gap-6";

const authorityEyebrowClassName =
  "font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg";

const authorityHeadingClassName = sectionDisplayHeadingPresetClassName("text-center lg:text-left");

const authorityCopyColumnClassName = cn(
  "flex min-w-0 flex-col items-center justify-center gap-5 text-center",
  "sm:col-span-2 lg:col-span-1 lg:items-start lg:gap-6 lg:text-left lg:pr-2 xl:pr-4",
);

const authorityMobileCtaRowClassName = "flex w-full justify-center pt-1 sm:col-span-2 lg:hidden";

const descriptionClassName =
  "font-sans text-base leading-relaxed text-muted-foreground text-pretty md:text-lg md:leading-snug";

const emphasisClassName = "font-semibold text-foreground";

const authorityProofPanelClassName =
  "relative aspect-5/4 max-h-[min(40vh,280px)] w-full overflow-hidden rounded-xl sm:aspect-auto sm:max-h-none sm:min-h-[300px] lg:h-full lg:min-h-[min(56vh,520px)]";

/** Matches `TattooStyleTile` title scale. */
const authorityProofTitleClassName =
  "font-heading text-2xl font-bold uppercase leading-none tracking-tight md:text-3xl";

/** Matches `TattooStyleTile` description scale. */
const authorityProofLineClassName =
  "min-h-[2.75rem] font-sans text-base leading-relaxed text-pretty md:min-h-[3.25rem]";

/** Softer top wash, solid bottom for caption contrast. */
const authorityProofOverlayClassName: Record<HomepageAuthorityProofOverlay, string> = {
  accent:
    "pointer-events-none absolute inset-0 bg-linear-to-b from-accent/34 via-accent/84 to-accent",
  light: "pointer-events-none absolute inset-0 bg-linear-to-b from-white/30 via-white/88 to-white",
};

const authorityProofTitleClassNameByOverlay: Record<HomepageAuthorityProofOverlay, string> = {
  accent: cn(authorityProofTitleClassName, "text-accent-foreground"),
  light: cn(authorityProofTitleClassName, "text-background"),
};

const authorityProofLineClassNameByOverlay: Record<HomepageAuthorityProofOverlay, string> = {
  accent: cn(authorityProofLineClassName, "text-accent-foreground/70"),
  light: cn(authorityProofLineClassName, "text-background/75"),
};

function splitAuthorityDescription(description: string): string[] {
  return description
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean);
}

interface AuthorityProofPanelProps {
  panel: HomepageAuthorityProofPanel;
  staggerIndex: number;
}

function AuthorityProofPanel({ panel, staggerIndex }: AuthorityProofPanelProps) {
  return (
    <div className={sectionRevealStaggerClass(staggerIndex, "min-w-0")}>
      <figure className={authorityProofPanelClassName}>
        <Image
          src={panel.src}
          alt={panel.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          quality={78}
          className="object-cover object-center"
        />
        <div aria-hidden className={authorityProofOverlayClassName[panel.overlay]} />
        <figcaption className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 p-5 md:gap-2.5 md:p-6">
          <p className={authorityProofTitleClassNameByOverlay[panel.overlay]}>{panel.tag}</p>
          <p className={authorityProofLineClassNameByOverlay[panel.overlay]}>{panel.line}</p>
        </figcaption>
      </figure>
    </div>
  );
}

function AuthoritySectionCta({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className={homepageGhostCtaClassName()}>
      {label}
    </Link>
  );
}

function AuthoritySection({ content }: AuthoritySectionProps) {
  const descriptionParagraphs = splitAuthorityDescription(content.description);

  return (
    <section
      id="homepage-authority"
      aria-labelledby="homepage-authority-heading"
      className={cn(
        "relative overflow-hidden text-foreground",
        homepageAuthorityBandClassName,
        "py-(--homepage-section-band-padding-y-mobile) lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <Container size="wide" className="relative z-10">
        <SectionReveal className={authorityGridClassName}>
          <div className={sectionRevealItemClass("none", authorityCopyColumnClassName)}>
            <p className={authorityEyebrowClassName}>{content.eyebrow}</p>
            <h2 id="homepage-authority-heading" className={authorityHeadingClassName}>
              {content.heading}
            </h2>
            <div className="flex w-full flex-col gap-4 md:gap-5">
              {descriptionParagraphs.map((paragraph, index) => (
                <p key={index} className={descriptionClassName}>
                  {splitDescriptionEmphasis(paragraph).map((segment, segIndex) =>
                    segment.emphasis ? (
                      <strong key={segIndex} className={emphasisClassName}>
                        {segment.text}
                      </strong>
                    ) : (
                      <span key={segIndex}>{segment.text}</span>
                    ),
                  )}
                </p>
              ))}
            </div>
            <div className="hidden pt-1 lg:block">
              <AuthoritySectionCta href={content.ctaHref} label={content.ctaLabel} />
            </div>
          </div>

          {content.proofPanels.map((panel, index) => (
            <AuthorityProofPanel key={panel.src} panel={panel} staggerIndex={index + 1} />
          ))}

          <div className={sectionRevealItemClass("none", authorityMobileCtaRowClassName)}>
            <AuthoritySectionCta href={content.ctaHref} label={content.ctaLabel} />
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { AuthoritySection };
