import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
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
}

function HeroSection({
  eyebrow,
  title,
  description,
  media,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  const trustIndicators = [
    "Award-winning artists",
    "Custom tattoo specialists",
    "International hygiene standards",
  ] as const;

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
        className="relative z-10 flex min-h-[100svh] items-center justify-center py-12 max-md:pb-[max(3rem,calc(3rem+env(safe-area-inset-bottom,0px)))] md:py-16 lg:py-20"
      >
        <div className="grid max-w-4xl justify-items-center gap-8 text-center md:gap-10">
          <div className="hero-reveal-motion max-w-full">
            <SectionHeading
              align="center"
              eyebrow={eyebrow}
              heading={title}
              description={description}
              className="max-w-2xl gap-5 md:max-w-4xl"
              eyebrowClassName="text-lg md:text-lg"
              titleClassName="text-5xl leading-[0.95] md:text-7xl md:leading-[0.9] lg:text-8xl"
              descriptionClassName="mx-auto max-w-2xl text-xl leading-7 text-muted-foreground md:text-2xl md:leading-8"
            />
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6">
            <div className="hero-reveal-motion hero-reveal-motion-delay-sm flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Link
                href={primaryCta.href}
                className={buttonVariants({
                  variant: "primary",
                  size: "lg",
                })}
              >
                {primaryCta.label}
              </Link>
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

            <ul className="hero-reveal-motion hero-reveal-motion-delay-md flex max-w-full flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {trustIndicators.map((indicator) => (
                <li
                  key={indicator}
                  className="flex items-center gap-2 font-heading text-lg font-medium uppercase tracking-tight text-foreground md:text-xl"
                >
                  <span
                    aria-hidden="true"
                    className="font-heading text-3xl leading-none text-accent md:text-2xl"
                  >
                    ✓
                  </span>
                  <span>{indicator}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { HeroSection };
