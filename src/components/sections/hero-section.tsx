import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/shared/motion";
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
    <section className="relative min-h-[100svh] overflow-hidden bg-surface-strong">
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
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={media.poster}
        >
          <source src={media.videoSrc} />
        </video>
      ) : null}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.58)_64%,rgba(0,0,0,0.86)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.46)_45%,rgba(0,0,0,0.9)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.56)_0%,rgba(0,0,0,0.14)_28%,rgba(0,0,0,0.14)_72%,rgba(0,0,0,0.56)_100%)]"
      />

      <Container
        size="wide"
        className="relative z-10 flex min-h-[100svh] items-center justify-center py-12 md:py-16 lg:py-20"
      >
        <div className="grid max-w-4xl justify-items-center gap-8 text-center md:gap-10">
          <Reveal mode="default">
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
          </Reveal>

          <Reveal mode="soft" delay={0.08}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-4">
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
          </Reveal>

          <Reveal mode="soft" delay={0.16}>
            <ul className="mt-3 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 md:mt-3">
              {trustIndicators.map((indicator) => (
                <li
                  key={indicator}
                  className="flex items-center gap-2 font-heading text-base font-medium uppercase tracking-tight text-muted-foreground md:text-xl"
                >
                  <span
                    aria-hidden="true"
                    className="font-heading text-2xl leading-none text-accent/85 md:text-2xl"
                  >
                    ✓
                  </span>
                  <span>{indicator}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export { HeroSection };
