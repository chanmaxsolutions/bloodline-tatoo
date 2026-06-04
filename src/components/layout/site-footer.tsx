import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { FooterBackgroundVideo } from "@/components/layout/footer-background-video";
import { FooterRegionSwitcher } from "@/components/layout/footer-region-switcher";
import { FooterSocialConnect } from "@/components/layout/footer-social-connect";
import { homepageHeroVideoSrc, homepageMediaPaths } from "@/config/homepage-media";
import { getRegionConfig } from "@/lib/region";
import {
  footerColumnStackClassName,
  footerColumnTitleClassName,
  footerListClassName,
  footerListItemClassName,
  footerListRowClassName,
  footerListRowLabelClassName,
} from "@/lib/footer-styles";
import { navigationItemsForRegion } from "@/lib/tattoo-style-navigation";
import { cn } from "@/lib/utils";
import type { HeaderNavItem } from "@/config/navigation";
import type { RegionSlug } from "@/types/region";

const footerLegalClassName =
  "font-sans text-sm leading-snug text-muted-foreground/85 md:text-base md:leading-relaxed";

/** Full-footer wash over video; legal band stacks an extra layer below. */
const footerBaseOverlayClassName =
  "pointer-events-none absolute inset-0 z-[1] bg-surface-elevated/95";
const footerLegalOverlayClassName = "pointer-events-none absolute inset-0 z-[1] bg-background/95";

interface SiteFooterProps {
  region: RegionSlug;
}

function partitionFooterNavigation(items: HeaderNavItem[]): {
  explore: HeaderNavItem[];
  studio: HeaderNavItem[];
} {
  const studioHrefs = new Set(["/about", "/contact", "/reviews"]);
  const explore: HeaderNavItem[] = [];
  const studio: HeaderNavItem[] = [];

  for (const item of items) {
    if (studioHrefs.has(item.href)) {
      studio.push(item);
    } else {
      explore.push(item);
    }
  }

  return { explore, studio };
}

function FooterNavColumn({ title, items }: { title: string; items: HeaderNavItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className={footerColumnStackClassName}>
      <p className={footerColumnTitleClassName}>{title}</p>
      <ul className={footerListClassName}>
        {items.map((item) => (
          <li key={item.href} className={footerListItemClassName}>
            <Link href={item.href} className={footerListRowClassName}>
              <span className={footerListRowLabelClassName}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SiteFooter({ region }: SiteFooterProps) {
  const regionConfig = getRegionConfig(region);
  const navigationItems = navigationItemsForRegion(region);
  const { explore, studio } = partitionFooterNavigation(navigationItems);
  const footerYear = new Date().getFullYear();
  const footerVideoSrc = homepageHeroVideoSrc(region);
  const footerPosterSrc = homepageMediaPaths.heroPoster(region);
  const footerStillAlt = `${regionConfig.seo.siteName} studio atmosphere`;

  return (
    <footer className="relative isolate overflow-hidden border-t border-border/15 text-foreground">
      <div className="pointer-events-none absolute inset-0 z-0 min-h-full w-full overflow-hidden">
        <FooterBackgroundVideo
          videoSrc={footerVideoSrc}
          poster={footerPosterSrc}
          stillAlt={footerStillAlt}
        />
      </div>
      <div aria-hidden className={footerBaseOverlayClassName} />

      <div className="relative z-10 flex flex-col">
        <Container size="wide" className="pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-[40fr_15fr_15fr_15fr_15fr] lg:gap-8 xl:gap-10">
            <div className="col-span-2 flex flex-col items-center gap-4 text-center lg:col-span-1 lg:items-start lg:text-left">
              <Link
                href="/"
                aria-label={`${regionConfig.branding.logoWordmark} home`}
                className="relative mx-auto flex h-[65px] w-24 shrink-0 items-center motion-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 lg:mx-0 md:h-[72px] md:w-28"
              >
                <Image
                  src={regionConfig.branding.logoPath}
                  alt=""
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 96px, 112px"
                />
                <span className="sr-only">{regionConfig.branding.logoMonogram}</span>
              </Link>
              <p className="max-w-md font-sans text-base leading-relaxed text-muted-foreground text-pretty md:text-lg md:leading-relaxed">
                {regionConfig.heroDescription}
              </p>
            </div>

            <div className="min-w-0">
              <FooterNavColumn title="Explore" items={explore} />
            </div>

            <div className="min-w-0">
              <FooterNavColumn title="Studio" items={studio} />
            </div>

            <div className="min-w-0">
              <FooterSocialConnect currentRegion={region} />
            </div>

            <div className="min-w-0">
              <FooterRegionSwitcher currentRegion={region} layout="column" />
            </div>
          </div>
        </Container>

        <div className="relative border-t border-border/15">
          <div aria-hidden className={footerLegalOverlayClassName} />
          <Container
            size="wide"
            className="relative z-10 flex flex-col items-center gap-2 py-3 text-center md:flex-row md:items-center md:justify-between md:py-3.5 md:text-left"
          >
            <p className={footerLegalClassName}>
              © {footerYear} {regionConfig.seo.siteName}. All rights reserved.
            </p>
            <p className={cn(footerLegalClassName, "text-center md:text-right")}>
              Premium tattoo studios across Asia.
            </p>
          </Container>
        </div>
      </div>
    </footer>
  );
}

export { SiteFooter };
