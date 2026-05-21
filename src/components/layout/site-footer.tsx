import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { FooterRegionSwitcher } from "@/components/layout/footer-region-switcher";
import { getRegionConfig } from "@/lib/region";
import { navigationItemsForRegion } from "@/lib/tattoo-style-navigation";
import { cn } from "@/lib/utils";
import type { HeaderNavItem } from "@/config/navigation";
import type { RegionSlug } from "@/types/region";

/** Matches footer link scale; accent color only. */
const footerColumnTitleClassName =
  "font-heading text-lg font-bold uppercase leading-none tracking-tight text-accent md:text-xl";

/** Matches related-style card titles, scaled for footer navigation. */
const footerLinkClassName =
  "font-heading text-lg font-bold uppercase leading-none tracking-tight text-muted-foreground motion-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:text-xl";

const footerLegalClassName =
  "font-sans text-sm leading-snug text-muted-foreground/85 md:text-base md:leading-relaxed";

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
    <div className="flex flex-col gap-4 md:gap-6">
      <p className={footerColumnTitleClassName}>{title}</p>
      <ul className="m-0 flex list-none flex-col gap-3 p-0 md:gap-5">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={footerLinkClassName}>
              {item.label}
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

  return (
    <footer className="border-t border-border bg-surface text-foreground">
      <Container size="wide" className="pt-16 pb-10 md:pt-20 md:pb-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="col-span-2 flex flex-col items-center gap-4 text-center lg:col-span-4 lg:items-start lg:text-left">
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

          <div className="min-w-0 lg:col-span-2">
            <FooterNavColumn title="Explore" items={explore} />
          </div>

          <div className="min-w-0 lg:col-span-2">
            <FooterNavColumn title="Studio" items={studio} />
          </div>

          <div className="col-span-2 border-t border-border/50 pt-8 sm:border-0 sm:pt-0 lg:col-span-4 lg:border-0 lg:pt-0">
            <FooterRegionSwitcher currentRegion={region} layout="column" />
          </div>
        </div>
      </Container>

      <div className="border-t border-border/30 bg-footer-legal">
        <Container
          size="wide"
          className="flex flex-col items-center gap-2 py-3 text-center md:flex-row md:items-center md:justify-between md:py-3.5 md:text-left"
        >
          <p className={footerLegalClassName}>
            © {footerYear} {regionConfig.seo.siteName}. All rights reserved.
          </p>
          <p className={cn(footerLegalClassName, "text-center md:text-right")}>
            Premium tattoo studios across Asia.
          </p>
        </Container>
      </div>
    </footer>
  );
}

export { SiteFooter };
