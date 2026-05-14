import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { buildGlobalHeroTrustProofChips } from "@/config/global-hero-trust-proof";
import { Container } from "@/components/layout/container";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { SectionHeading } from "@/components/shared/section-heading";
import { HeroTrustBrandMark } from "@/components/shared/hero-trust-brand-mark";
import { BookAppointmentTrigger } from "@/components/cta";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  /** Optional small label above the title (omit when trust strip carries context). */
  eyebrow?: string;
  title: ReactNode;
  description: string;
  /** Regional Google Maps / Business listing URL for the Google trust chip. */
  googleBusinessProfileUrl: string;
  media: {
    src?: string;
    videoSrc?: string;
    alt: string;
    poster?: string;
  };
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  /** Optional line under CTAs (from region config; scarcity / booking channel). */
  ctaUrgencyNote?: string;
}

function HeroSection({
  eyebrow,
  title,
  description,
  googleBusinessProfileUrl,
  media,
  primaryCta,
  secondaryCta,
  ctaUrgencyNote,
}: HeroSectionProps) {
  const trustChips = buildGlobalHeroTrustProofChips(googleBusinessProfileUrl);

  const trustLinkClassName = cn(
    "inline-flex max-w-none rounded-md outline-offset-4 transition-opacity duration-300 ease-out",
    "hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-strong",
  );

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-surface-strong supports-[height:100dvh]:min-h-[100dvh]">
      <div className="pointer-events-none absolute inset-0 z-0 min-h-[100svh] w-full overflow-hidden supports-[height:100dvh]:min-h-[100dvh]">
        {!media.videoSrc && media.src ? (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        ) : null}

        {media.videoSrc ? (
          <HeroBackgroundVideo
            key={media.videoSrc}
            src={media.videoSrc}
            poster={media.poster}
            stillSrc={media.poster ?? media.src ?? "/fallback.png"}
            stillAlt={media.alt}
            className={cn(
              "absolute object-cover object-center",
              "left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 max-md:min-h-[100%] max-md:min-w-[100%]",
              "md:inset-0 md:left-0 md:top-0 md:h-full md:w-full md:min-h-0 md:min-w-0 md:translate-x-0 md:translate-y-0",
            )}
          />
        ) : null}
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(27,27,32,0.08)_0%,rgba(27,27,32,0.58)_64%,rgba(27,27,32,0.86)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(27,27,32,0.24)_0%,rgba(27,27,32,0.46)_45%,rgba(27,27,32,0.9)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_right,rgba(27,27,32,0.56)_0%,rgba(27,27,32,0.14)_28%,rgba(27,27,32,0.14)_72%,rgba(27,27,32,0.56)_100%)]"
      />

      <Container
        size="wide"
        className="relative z-10 flex min-h-[100svh] supports-[height:100dvh]:min-h-[100dvh] items-center justify-center pt-32 pb-14 max-md:pb-[max(3rem,calc(3rem+env(safe-area-inset-bottom,0px)))] md:pt-44 md:pb-20 lg:pt-56 lg:pb-24"
      >
        <div className="grid w-full min-w-0 max-w-5xl justify-items-center gap-7 text-center md:gap-8">
          <div className="mx-auto flex w-full min-w-0 max-w-2xl flex-col items-center gap-3 text-center md:max-w-4xl md:gap-4">
            <ul
              aria-label="Trust and audience proof"
              className={cn(
                "hero-reveal-motion list-none",
                "flex w-full max-w-full flex-nowrap items-center justify-center gap-4 overflow-x-auto py-0.5 sm:gap-6 md:gap-8",
                "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              )}
            >
              {trustChips.map((chip) => {
                const metrics = (
                  <span className="whitespace-nowrap font-sans text-sm leading-snug text-foreground sm:text-[0.9375rem] md:text-base md:leading-snug">
                    <span className="inline-flex items-center gap-1">
                      <span className="font-heading font-semibold text-foreground">
                        {chip.accent}
                      </span>
                      {chip.rest ? (
                        <span className="font-heading font-semibold text-foreground">
                          {chip.rest}
                        </span>
                      ) : null}
                    </span>
                    {chip.suffix ? (
                      <span className="text-muted-foreground">{chip.suffix}</span>
                    ) : null}
                  </span>
                );

                const cluster = (
                  <span className="flex items-center gap-2.5 sm:gap-3">
                    <HeroTrustBrandMark brand={chip.brand} className="size-6 sm:size-7" />
                    {metrics}
                  </span>
                );

                return (
                  <li
                    key={chip.id}
                    className={cn(
                      "shrink-0 items-center",
                      chip.id === "google" ? "flex" : "hidden md:flex",
                    )}
                  >
                    {chip.href && chip.linkAriaLabel ? (
                      <Link
                        href={chip.href}
                        aria-label={chip.linkAriaLabel}
                        rel="noopener noreferrer"
                        target="_blank"
                        className={trustLinkClassName}
                      >
                        {cluster}
                      </Link>
                    ) : (
                      cluster
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="hero-reveal-motion hero-reveal-motion-delay-sm w-full max-w-full">
              <SectionHeading
                align="center"
                eyebrow={eyebrow}
                heading={title}
                description={description}
                className="w-full gap-5"
                eyebrowClassName={eyebrow ? "text-lg md:text-lg" : undefined}
                titleClassName="text-5xl leading-[0.95] md:text-7xl md:leading-[0.9] lg:text-8xl"
                descriptionClassName="mx-auto max-w-2xl text-xl leading-7 text-muted-foreground md:text-2xl md:leading-8"
              />
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5">
            <div className="hero-reveal-motion hero-reveal-motion-delay-md flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <BookAppointmentTrigger variant="primary" size="lg">
                {primaryCta.label}
              </BookAppointmentTrigger>
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "border border-border-strong bg-background/35 text-muted-foreground hover:bg-background/55 hover:text-foreground",
                  )}
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
            {ctaUrgencyNote ? (
              <p className="hero-reveal-motion hero-reveal-motion-delay-lg max-w-lg text-balance px-2 font-sans text-sm leading-snug tracking-wide text-muted-foreground">
                <span aria-hidden="true" className="mr-0.5 inline">
                  *
                </span>
                {ctaUrgencyNote}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { HeroSection };
