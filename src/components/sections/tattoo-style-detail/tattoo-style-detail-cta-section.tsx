import Image from "next/image";
import { BookAppointmentTrigger } from "@/components/cta";
import { Container } from "@/components/layout/container";
import { SectionReveal } from "@/components/motion";
import { HeroTrustProofStrip } from "@/components/shared/hero-trust-proof-strip";
import { sectionRevealItemClass } from "@/lib/section-reveal-classes";
import { tattooStyleBookingCtaLabel } from "@/lib/tattoo-style-booking-cta";
import { cn } from "@/lib/utils";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";

/** Matches homepage hero title scale. */
const ctaBandTitleClassName =
  "text-heading-display w-full max-w-3xl text-balance text-5xl leading-[0.95] tracking-tight text-accent-foreground md:text-7xl md:leading-[0.9] lg:max-w-4xl lg:text-8xl";

/** Matches homepage hero description scale on the lime band. */
const ctaBandDescriptionClassName =
  "mx-auto max-w-2xl font-sans text-xl leading-7 text-accent-foreground text-pretty md:text-2xl md:leading-8";

/** Primary action on lime band — dark fill so it does not disappear on the accent overlay. */
const ctaBandPrimaryClassName =
  "w-auto max-w-full border-background bg-background text-foreground hover:brightness-95";

/** Matches homepage hero urgency line, adapted for on-accent band. */
const ctaBandUrgencyClassName =
  "max-w-lg text-balance px-2 font-sans text-sm font-medium leading-snug tracking-wide text-accent-foreground";

/** Uniform lime field — higher mix reduces photo luminance spikes behind small type. */
const ctaBandAccentOverlayClassName =
  "pointer-events-none absolute inset-0 z-[1] bg-[color-mix(in_oklab,var(--accent)_90%,transparent)]";

/** Slight base wash so overlay reads consistent edge-to-edge. */
const ctaBandPhotoScrimClassName =
  "pointer-events-none absolute inset-0 z-[1] bg-accent-foreground/12";

interface TattooStyleDetailCtaSectionProps {
  content: ResolvedTattooStyleDetailPage;
  ctaUrgencyNote?: string;
}

function TattooStyleDetailCtaSection({
  content,
  ctaUrgencyNote,
}: TattooStyleDetailCtaSectionProps) {
  const { title: styleTitle, slug: styleSlug, heroImageSrc } = content;

  return (
    <section
      aria-labelledby="tattoo-style-cta-heading"
      className={cn(
        "relative isolate min-h-[min(52vh,520px)] overflow-hidden border-t border-accent-foreground/10 text-accent-foreground",
        "py-(--homepage-section-band-padding-y-mobile) lg:min-h-[min(56vh,580px)] lg:py-(--homepage-section-band-padding-y-desktop)",
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={heroImageSrc}
          alt=""
          fill
          sizes="100vw"
          quality={72}
          className="object-cover object-center"
        />
      </div>
      <div aria-hidden className={ctaBandPhotoScrimClassName} />
      <div aria-hidden className={ctaBandAccentOverlayClassName} />

      <Container size="wide" className="relative z-10 flex flex-col justify-center">
        <SectionReveal className="mx-auto grid w-full min-w-0 max-w-5xl justify-items-center gap-7 text-center md:gap-8">
          <div
            className={sectionRevealItemClass(
              "none",
              "mx-auto flex w-full min-w-0 max-w-2xl flex-col items-center gap-5 text-center md:max-w-4xl md:gap-6",
            )}
          >
            <HeroTrustProofStrip tone="on-accent" />

            <div className="flex w-full flex-col items-center gap-4 md:gap-5">
              <h2 id="tattoo-style-cta-heading" className={ctaBandTitleClassName}>
                READY TO BOOK YOUR {styleTitle.toUpperCase()}?
              </h2>
              <p className={ctaBandDescriptionClassName}>
                Book a consultation for {styleTitle.toLowerCase()}. Share placement, scale, and
                reference direction. We respond on your studio channel.
              </p>
            </div>
          </div>

          <div
            className={sectionRevealItemClass(
              "sm",
              "mx-auto flex w-full max-w-3xl flex-col items-center gap-5",
            )}
          >
            <BookAppointmentTrigger
              variant="outline"
              size="lg"
              tattooStyleSlug={styleSlug}
              className={ctaBandPrimaryClassName}
            >
              {tattooStyleBookingCtaLabel(styleTitle)}
            </BookAppointmentTrigger>
            {ctaUrgencyNote ? (
              <p className={ctaBandUrgencyClassName}>
                <span aria-hidden="true" className="mr-0.5 inline">
                  *
                </span>
                {ctaUrgencyNote}
              </p>
            ) : null}
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}

export { TattooStyleDetailCtaSection };
