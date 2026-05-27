"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  footerSocialConnectModalCopy,
  footerSocialConnectTitle,
  footerSocialTriggerLabels,
} from "@/config/footer-social-connect";
import { footerRegionSwitcherLabel, regionFlagBySlug } from "@/config/footer-region-switcher";
import { RegionFlagMark } from "@/components/shared/region-flag-mark";
import { FooterBrandChannelIcon } from "@/components/shared/channel-brand-glyphs";
import { buildSocialChannelsForRegionSlug, studioRegionOrder } from "@/lib/booking-modal";
import {
  footerColumnStackClassName,
  footerColumnTitleClassName,
  footerListClassName,
  footerListItemClassName,
  footerListRowClassName,
  footerListRowIconShellClassName,
  footerListRowLabelClassName,
  footerTriggerClassName,
} from "@/lib/footer-styles";
import { cn } from "@/lib/utils";
import type { BookingModalChannelLink, BookingModalChannels } from "@/types/booking-modal";
import type { RegionSlug } from "@/types/region";

type StudioRegionSlug = (typeof studioRegionOrder)[number];
type SocialChannelKey = keyof typeof footerSocialTriggerLabels;

function FooterSocialBrandIcon({ channel }: { channel: SocialChannelKey }) {
  return (
    <span className={footerListRowIconShellClassName} aria-hidden>
      <FooterBrandChannelIcon brand={channel} />
    </span>
  );
}

interface FooterSocialConnectProps {
  currentRegion: RegionSlug;
}

interface FooterSocialNavItemConfig {
  key: SocialChannelKey;
  label: string;
  href?: string;
}

function isStudioRegion(region: RegionSlug): region is StudioRegionSlug {
  return region === "bangkok" || region === "bali" || region === "phuket";
}

function channelDisplayLabel(label: string): string {
  return label.replace(/^BOOK ON /i, "").trim();
}

function FooterSocialNavLink({
  channel,
  label,
  href,
}: {
  channel: SocialChannelKey;
  label: string;
  href: string;
}) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={footerListRowClassName}>
      <FooterSocialBrandIcon channel={channel} />
      <span className={footerListRowLabelClassName}>{label}</span>
    </Link>
  );
}

function FooterSocialNavTrigger({
  channel,
  label,
  onOpen,
}: {
  channel: SocialChannelKey;
  label: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(footerListRowClassName, footerTriggerClassName)}
    >
      <FooterSocialBrandIcon channel={channel} />
      <span className={footerListRowLabelClassName}>{label}</span>
    </button>
  );
}

function FooterSocialChannelRow({
  channel,
  brand,
}: {
  channel: BookingModalChannelLink;
  brand: SocialChannelKey;
}) {
  return (
    <Link
      href={channel.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center justify-between gap-3 rounded-lg border border-border/40 bg-surface-elevated/90 px-4 py-3 motion-fast",
        "hover:border-white/10 hover:bg-surface-elevated",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-strong",
      )}
    >
      <span className="inline-flex min-w-0 items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center">
          <FooterBrandChannelIcon brand={brand} />
        </span>
        <span className="font-heading text-base font-bold uppercase leading-none tracking-tight text-foreground md:text-lg">
          {channelDisplayLabel(channel.label)}
        </span>
      </span>
      <ArrowUpRight
        className="size-4 shrink-0 text-muted-foreground motion-fast group-hover:text-foreground"
        aria-hidden
      />
    </Link>
  );
}

function buildFooterSocialNavItems(channels: BookingModalChannels): FooterSocialNavItemConfig[] {
  const items: FooterSocialNavItemConfig[] = [];

  if (channels.instagram) {
    items.push({
      key: "instagram",
      label: footerSocialTriggerLabels.instagram,
      href: channels.instagram.href,
    });
  }

  if (channels.facebook) {
    items.push({
      key: "facebook",
      label: footerSocialTriggerLabels.facebook,
      href: channels.facebook.href,
    });
  }

  if (channels.whatsapp) {
    items.push({
      key: "whatsapp",
      label: footerSocialTriggerLabels.whatsapp,
      href: channels.whatsapp.href,
    });
  }

  return items;
}

function FooterSocialConnectColumn({ children }: { children: ReactNode }) {
  return (
    <div className={footerColumnStackClassName}>
      <p className={footerColumnTitleClassName}>{footerSocialConnectTitle}</p>
      <ul className={footerListClassName}>{children}</ul>
    </div>
  );
}

function FooterSocialConnectRegional({ region }: { region: StudioRegionSlug }) {
  const navItems = useMemo(
    () => buildFooterSocialNavItems(buildSocialChannelsForRegionSlug(region)),
    [region],
  );

  if (navItems.length === 0) {
    return null;
  }

  return (
    <FooterSocialConnectColumn>
      {navItems.map((item) => (
        <li key={item.key} className={footerListItemClassName}>
          <FooterSocialNavLink channel={item.key} label={item.label} href={item.href!} />
        </li>
      ))}
    </FooterSocialConnectColumn>
  );
}

function FooterSocialConnectGlobal() {
  const [open, setOpen] = useState(false);
  const [selectedStudio, setSelectedStudio] = useState<StudioRegionSlug>(studioRegionOrder[0]);

  const channels = useMemo(
    () => buildSocialChannelsForRegionSlug(selectedStudio),
    [selectedStudio],
  );

  const modalChannelRows = useMemo(() => {
    const rows: { channel: BookingModalChannelLink; brand: SocialChannelKey }[] = [];

    if (channels.instagram) {
      rows.push({ channel: channels.instagram, brand: "instagram" });
    }

    if (channels.facebook) {
      rows.push({ channel: channels.facebook, brand: "facebook" });
    }

    if (channels.whatsapp) {
      rows.push({ channel: channels.whatsapp, brand: "whatsapp" });
    }

    return rows;
  }, [channels]);

  const openModal = () => {
    setSelectedStudio(studioRegionOrder[0]);
    setOpen(true);
  };

  const globalTriggers: SocialChannelKey[] = ["instagram", "facebook", "whatsapp"];

  return (
    <>
      <FooterSocialConnectColumn>
        {globalTriggers.map((key) => (
          <li key={key} className={footerListItemClassName}>
            <FooterSocialNavTrigger
              channel={key}
              label={footerSocialTriggerLabels[key]}
              onOpen={openModal}
            />
          </li>
        ))}
      </FooterSocialConnectColumn>

      <Dialog open={open} onOpenChange={setOpen} modal="trap-focus">
        <DialogContent
          showCloseButton
          mobileBottomSheet
          className={cn(
            "max-h-[min(88dvh,720px)] w-[min(100vw-1.25rem,32rem)] max-w-[min(100vw-1.25rem,32rem)] gap-0 overflow-y-auto overscroll-contain rounded-xl border-0 bg-surface-strong/90 px-4 py-8 backdrop-blur-xl sm:px-8 sm:py-10",
            "shadow-lg shadow-black/35",
          )}
        >
          <DialogHeader className="items-center gap-3 px-0 text-center">
            <DialogTitle className="font-heading text-2xl font-bold uppercase leading-[0.95] tracking-tight text-foreground md:text-3xl">
              {footerSocialConnectModalCopy.title}
            </DialogTitle>
            <DialogDescription className="font-sans text-base leading-relaxed text-muted-foreground">
              {footerSocialConnectModalCopy.body}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-7 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="font-heading text-sm font-bold uppercase tracking-normal text-accent md:text-base">
                {footerSocialConnectModalCopy.studioLabel}
              </p>
              <ul
                className="m-0 grid list-none grid-cols-3 gap-2 p-0 sm:gap-3"
                aria-label="Bloodline studio locations"
              >
                {studioRegionOrder.map((slug) => {
                  const isActive = slug === selectedStudio;

                  return (
                    <li key={slug}>
                      <button
                        type="button"
                        onClick={() => setSelectedStudio(slug)}
                        aria-pressed={isActive}
                        className={cn(
                          "flex w-full flex-col items-center gap-2 rounded-lg border px-2 py-3 motion-fast outline-none",
                          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-strong",
                          isActive
                            ? "border-accent/40 bg-surface-elevated text-foreground"
                            : "border-border/40 bg-surface-elevated/60 text-muted-foreground hover:border-white/10 hover:text-foreground",
                        )}
                      >
                        <RegionFlagMark
                          flag={regionFlagBySlug[slug]}
                          className="size-8 sm:size-9"
                        />
                        <span className="font-heading text-xs font-bold uppercase leading-none tracking-tight sm:text-sm">
                          {footerRegionSwitcherLabel(slug)}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {modalChannelRows.length > 0 ? (
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0" aria-label="Social channels">
                {modalChannelRows.map((row) => (
                  <li key={row.channel.label}>
                    <FooterSocialChannelRow channel={row.channel} brand={row.brand} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="rounded-lg border border-dashed border-border px-4 py-6 text-center font-sans text-sm text-muted-foreground">
                Social links for this studio are not configured yet.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function FooterSocialConnect({ currentRegion }: FooterSocialConnectProps) {
  if (currentRegion === "global") {
    return <FooterSocialConnectGlobal />;
  }

  if (isStudioRegion(currentRegion)) {
    return <FooterSocialConnectRegional region={currentRegion} />;
  }

  return null;
}

export { FooterSocialConnect };
