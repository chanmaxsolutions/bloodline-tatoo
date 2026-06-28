import Link from "next/link";
import { Container } from "@/components/layout/container";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { tattooStyleHeroVideoSrc } from "@/config/tattoo-style-hero-video";
import type { ResolvedTattooStyleDetailPage } from "@/types/tattoo-style-detail";
import type { RegionSlug } from "@/types/region";

interface TattooStyleDetailHeroProps {
  content: ResolvedTattooStyleDetailPage;
  region: RegionSlug;
}

/** Short trail label so the breadcrumb does not repeat the full H1 (e.g. "Realistic"). */
function breadcrumbCurrentLabel(title: string): string {
  const shortened = title.replace(/\s+tattoos?$/i, "").trim();
  return shortened.length > 0 ? shortened : title;
}

function TattooStyleDetailHero({ content, region }: TattooStyleDetailHeroProps) {
  const breadcrumbCurrent = breadcrumbCurrentLabel(content.title);
  return (
    <section
      aria-labelledby="tattoo-style-detail-heading"
      className="relative isolate min-h-[min(52vh,440px)] overflow-hidden bg-surface-strong md:min-h-[min(58vh,520px)]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 min-h-full w-full overflow-hidden">
        <HeroBackgroundVideo
          key={content.slug}
          src={tattooStyleHeroVideoSrc(content.slug, region)}
          poster={content.heroImageSrc}
          stillSrc={content.heroImageSrc}
          stillAlt={content.heroImageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(11,11,13,0.15)_0%,rgba(11,11,13,0.72)_58%,rgba(11,11,13,0.94)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-t from-background via-background/50 to-transparent"
      />

      <Container
        size="wide"
        className="relative z-10 flex min-h-[min(52vh,440px)] flex-col items-center justify-end pb-10 pt-28 text-center md:min-h-[min(58vh,520px)] md:pb-14 md:pt-36"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 md:gap-5">
          <nav aria-label="Breadcrumb" className="hero-reveal-motion w-full">
            <ol className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 font-heading text-base font-medium uppercase tracking-normal text-muted-foreground md:text-lg">
              <li>
                <Link
                  href="/tattoo-styles"
                  className="motion-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                >
                  Tattoo styles
                </Link>
              </li>
              <li aria-hidden className="text-muted-foreground/35">
                ·
              </li>
              <li aria-current="page" className="text-foreground/80">
                {breadcrumbCurrent}
              </li>
            </ol>
          </nav>

          <h1
            id="tattoo-style-detail-heading"
            className="hero-reveal-motion hero-reveal-motion-delay-sm text-heading-authority-display w-full max-w-4xl"
          >
            {content.title}
          </h1>
          <p className="hero-reveal-motion hero-reveal-motion-delay-md mx-auto max-w-xl font-sans text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl md:leading-snug">
            {content.lead}
          </p>
        </div>
      </Container>
    </section>
  );
}

export { TattooStyleDetailHero };
