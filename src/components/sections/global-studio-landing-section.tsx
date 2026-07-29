import Image from "next/image";
import { getImageProps } from "next/image";
import { Container } from "@/components/layout/container";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { RegionFlagMark } from "@/components/shared/region-flag-mark";
import { JsonLd } from "@/components/seo/json-ld";
import {
  globalStudioLandingBrand,
  globalStudioLandingDestinations,
  globalStudioLandingHeadline,
  globalStudioLandingNote,
  globalStudioLandingSupport,
} from "@/config/global-studio-landing";
import { homepageHeroVideoSrc, homepageMediaPaths } from "@/config/homepage-media";
import { regionPublicUrl } from "@/lib/region-public-url";
import { buildWebSiteSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import type { RegionConfig } from "@/types";

const brandClassName =
  "font-heading text-5xl font-bold uppercase tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl";

const headlineClassName =
  "font-heading text-2xl font-bold uppercase tracking-tight text-accent sm:text-3xl md:text-4xl";

const supportClassName =
  "mx-auto max-w-xl font-sans text-base leading-relaxed text-muted-foreground text-pretty md:text-lg md:leading-snug";

const studioCardClassName = cn(
  "group flex min-h-28 flex-1 flex-col items-center justify-center gap-3 rounded-lg border border-border/50",
  "bg-surface-elevated/80 px-5 py-5 text-center motion-fast outline-none",
  "hover:border-accent/40 hover:bg-surface-elevated",
  "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  "sm:min-h-32 sm:px-6 sm:py-6",
);

interface GlobalStudioLandingSectionProps {
  regionConfig: RegionConfig;
}

function GlobalStudioLandingSection({ regionConfig }: GlobalStudioLandingSectionProps) {
  const posterSrc = homepageMediaPaths.heroPoster("global");
  const videoSrc = homepageHeroVideoSrc("global");
  const structuredData = [buildWebSiteSchema(regionConfig)];

  const {
    props: {
      src: heroPosterPreloadSrc,
      srcSet: heroPosterPreloadSrcSet,
      sizes: heroPosterPreloadSizes,
    },
  } = getImageProps({
    alt: "",
    src: posterSrc,
    width: 1920,
    height: 1080,
    sizes: "100vw",
    priority: true,
  });

  return (
    <div className="min-w-0 bg-background">
      <JsonLd data={structuredData} />
      <link
        rel="preload"
        as="image"
        href={heroPosterPreloadSrc}
        imageSrcSet={heroPosterPreloadSrcSet}
        imageSizes={heroPosterPreloadSizes}
        fetchPriority="high"
      />

      <section
        className={cn(
          "relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-surface-strong",
          "supports-[height:100dvh]:min-h-[100dvh]",
        )}
        aria-labelledby="global-studio-landing-heading"
      >
        <div className="pointer-events-none absolute inset-0 z-0 min-h-[100svh] w-full overflow-hidden supports-[height:100dvh]:min-h-[100dvh]">
          <Image
            src={posterSrc}
            alt=""
            aria-hidden
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <HeroBackgroundVideo
            src={videoSrc}
            poster={posterSrc}
            stillSrc={posterSrc}
            stillAlt=""
            className="absolute inset-0 z-[1] h-full w-full object-cover object-center"
            priorityPoster={false}
            serverPosterLayer
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/70 via-background/75 to-background/90"
        />

        <Container
          size="narrow"
          className="relative z-10 flex flex-1 flex-col justify-center pt-28 pb-10 md:pt-32 md:pb-14"
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center md:gap-10">
            <div className="flex flex-col items-center gap-4 md:gap-5">
              <p className={brandClassName}>{globalStudioLandingBrand}</p>
              <h1 id="global-studio-landing-heading" className={headlineClassName}>
                {globalStudioLandingHeadline}
              </h1>
              <p className={supportClassName}>{globalStudioLandingSupport}</p>
            </div>

            <ul
              className="grid w-full gap-3 sm:grid-cols-3 sm:gap-4"
              aria-label="Bloodline studio locations"
            >
              {globalStudioLandingDestinations.map((studio) => (
                <li key={studio.slug} className="flex">
                  <a href={regionPublicUrl(studio.slug, "/")} className={studioCardClassName}>
                    <RegionFlagMark flag={studio.flag} className="size-10 sm:size-11" />
                    <span className="flex flex-col items-center gap-1.5">
                      <span className="font-heading text-xl font-bold uppercase tracking-tight text-foreground motion-fast group-hover:text-accent sm:text-2xl">
                        {studio.label}
                      </span>
                      <span className="font-sans text-sm leading-snug text-muted-foreground sm:text-base">
                        {studio.line}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="font-heading text-sm font-medium uppercase tracking-normal text-muted-foreground/55 md:text-base">
              {globalStudioLandingNote}
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}

export { GlobalStudioLandingSection };
