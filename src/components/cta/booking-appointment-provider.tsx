"use client";

import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookingBrandChannelIcon } from "@/components/shared/channel-brand-glyphs";
import { cn } from "@/lib/utils";
import { bookingModalPayloadForOpen } from "@/lib/booking-modal";
import { trackAppointmentChannelClick, trackAppointmentModalOpen } from "@/lib/gtag";
import type {
  BookingModalChannelLink,
  BookingModalOpenOptions,
  BookingModalPayload,
  BookingModalStudioLink,
} from "@/types/booking-modal";

function bookingNoteBodySegments(text: string): ReactNode {
  return text.split(/(WhatsApp)/i).map((segment, index) => {
    if (/^whatsapp$/i.test(segment)) {
      return (
        <strong key={index} className="font-bold text-muted-foreground/70">
          {segment}
        </strong>
      );
    }
    return (
      <span key={index} className="text-muted-foreground/70">
        {segment}
      </span>
    );
  });
}

function hasBookingModalNote(copy: BookingModalPayload["copy"]): boolean {
  return Boolean(copy.noteLabel?.trim() || copy.noteBody?.trim());
}

interface BookingAppointmentContextValue {
  open: (options?: BookingModalOpenOptions) => void;
}

const BookingAppointmentContext = createContext<BookingAppointmentContextValue | null>(null);

function useBookingAppointmentModal(): BookingAppointmentContextValue {
  const ctx = useContext(BookingAppointmentContext);
  if (!ctx)
    throw new Error("useBookingAppointmentModal must be used within BookingAppointmentProvider");
  return ctx;
}

type ChannelVariant = "facebook" | "instagram" | "whatsapp";

/** Border / surface / motion — shared by links and empty placeholders. */
const channelCardSkin = cn(
  "rounded-xl border border-white/5 bg-surface-strong/90",
  "motion-fast outline-none transition-[border-color,background-color]",
  "hover:border-white/10 hover:bg-surface-strong",
  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated",
);

/** Mobile: compact row (icon → label). `sm+`: centered column tiles. */
const channelLinkLayout = cn(
  "group flex min-h-0 flex-row items-center justify-start gap-3 px-3 py-3",
  "sm:flex-col sm:items-center sm:justify-center sm:gap-3 sm:min-h-[9.75rem] sm:px-3 sm:py-5 md:min-h-[10.25rem]",
);

const packageBase = cn(channelCardSkin, channelLinkLayout);

function ChannelPackage({
  channel,
  channelVariant,
  channelBadge,
  channelBadgeDesktop,
}: {
  channel: BookingModalChannelLink | null;
  channelVariant: ChannelVariant;
  /** Narrow viewports: inline badge before arrow (e.g. WhatsApp). */
  channelBadge?: string;
  /** `sm+`: pill straddling top border (e.g. WhatsApp). */
  channelBadgeDesktop?: string;
}) {
  const icon = <BookingBrandChannelIcon brand={channelVariant} />;

  if (!channel) {
    return (
      <div
        className={cn(
          channelCardSkin,
          "pointer-events-none flex min-h-16 flex-col items-center justify-center gap-2 border-dashed border-border bg-surface-strong/40 px-3 py-4 text-center text-muted-foreground sm:min-h-[9.75rem] sm:py-5 md:min-h-[10.25rem]",
        )}
        aria-hidden="true"
      >
        <span className="font-heading text-xs uppercase tracking-widest">—</span>
      </div>
    );
  }

  const showMobileBadge = Boolean(channelBadge?.trim());
  const showDesktopBadge = Boolean(channelBadgeDesktop?.trim());
  const mobileBadgeText = channelBadge?.trim() ?? "";
  const desktopBadgeText = channelBadgeDesktop?.trim() ?? "";

  const mobileBadgeEl = showMobileBadge ? (
    <span className="max-sm:inline-flex max-sm:shrink-0 rounded-full bg-accent px-2 py-0.5 font-heading text-xs font-semibold uppercase leading-tight tracking-normal text-background shadow-sm sm:hidden">
      {mobileBadgeText}
    </span>
  ) : null;

  const desktopBadgeEl = showDesktopBadge ? (
    <span className="pointer-events-none absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-accent px-2 py-0.5 font-heading text-sm font-semibold uppercase leading-tight tracking-normal text-background shadow-sm sm:inline-flex">
      {desktopBadgeText}
    </span>
  ) : null;

  const channelHref = channel.href;
  const channelLabel = channel.label;

  function handleChannelClick(): void {
    trackAppointmentChannelClick({
      channel: channelVariant,
      destinationUrl: channelHref,
      ctaText: channelLabel,
      componentName: "BookingAppointmentModal",
      entryPoint: "booking_modal",
    });
  }

  return (
    <Link
      href={channelHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleChannelClick}
      className={cn(packageBase, showDesktopBadge && "sm:relative sm:overflow-visible sm:pt-3")}
    >
      <span className="flex shrink-0 items-center justify-center">{icon}</span>
      <div
        className={cn(
          "flex min-w-0 flex-1 flex-row items-center gap-2",
          "sm:flex-col sm:flex-none sm:items-center sm:justify-center sm:gap-2",
        )}
      >
        <span
          className={cn(
            "wrap-break-word text-left font-heading text-lg font-bold uppercase leading-snug tracking-tight text-foreground/88 max-[374px]:leading-tight min-[375px]:text-2xl sm:text-center sm:text-xl md:text-2xl",
            "min-w-0 sm:flex-none",
            showMobileBadge ? "min-w-0 shrink sm:shrink-0" : "min-w-0 max-sm:flex-1",
          )}
        >
          {channelLabel}
        </span>
        {mobileBadgeEl}
      </div>
      <ArrowUpRight
        className="size-5 shrink-0 text-muted-foreground motion-fast group-hover:text-foreground sm:hidden"
        aria-hidden
      />
      {desktopBadgeEl}
    </Link>
  );
}

function StudioRegionTileContent({
  studio,
  isAvailable,
}: {
  studio: BookingModalStudioLink;
  isAvailable: boolean;
}) {
  return (
    <>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center",
          isAvailable ? "text-accent" : "text-muted-foreground/50",
        )}
      >
        <MapPin className="size-6 min-[375px]:size-8 sm:size-10 md:size-11" aria-hidden />
      </span>
      <div className="flex min-w-0 flex-1 flex-row items-center gap-2 sm:flex-col sm:flex-none sm:items-center sm:justify-center sm:gap-2">
        <span
          className={cn(
            "wrap-break-word text-left font-heading text-lg font-bold uppercase leading-snug tracking-tight max-[374px]:leading-tight min-[375px]:text-2xl sm:text-center sm:text-xl md:text-2xl",
            "min-w-0 max-sm:flex-1 sm:flex-none",
            isAvailable ? "text-foreground/88" : "text-muted-foreground",
          )}
        >
          {studio.label}
        </span>
      </div>
      {isAvailable ? (
        <ArrowUpRight
          className="size-5 shrink-0 text-muted-foreground motion-fast group-hover:text-foreground sm:hidden"
          aria-hidden
        />
      ) : null}
    </>
  );
}

function DisabledStudioRegionPackage({
  studio,
  unavailableReason,
}: {
  studio: BookingModalStudioLink;
  unavailableReason: string;
}) {
  const tooltipId = useId();
  const captionId = useId();

  return (
    <div className="flex min-w-0 flex-col gap-2">
      <div className="group relative min-w-0">
        <div
          className={cn(
            packageBase,
            "cursor-not-allowed border-dashed border-border/70 bg-surface-strong/45 outline-none",
            "hover:border-border/70 hover:bg-surface-strong/45",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated",
          )}
          tabIndex={0}
          aria-disabled="true"
          aria-describedby={captionId}
        >
          <StudioRegionTileContent studio={studio} isAvailable={false} />
        </div>
        <div
          id={tooltipId}
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute left-1/2 top-3 z-10 w-max max-w-[min(100%,14rem)] -translate-x-1/2 rounded-md border border-border/80 bg-surface-elevated px-2.5 py-1.5 text-center font-sans text-xs leading-snug text-muted-foreground shadow-sm",
            "invisible opacity-0 transition-[opacity,visibility] motion-fast group-hover:visible group-hover:opacity-100",
            "motion-reduce:transition-none",
          )}
        >
          {unavailableReason}
        </div>
      </div>
      <p
        id={captionId}
        className="text-center font-sans text-xs leading-snug text-muted-foreground/50 md:text-sm"
      >
        {unavailableReason}
      </p>
    </div>
  );
}

function StudioRegionPackage({ studio }: { studio: BookingModalStudioLink }) {
  const isAvailable = studio.isAvailable !== false;
  const unavailableReason = studio.unavailableReason?.trim();

  if (!isAvailable && unavailableReason) {
    return <DisabledStudioRegionPackage studio={studio} unavailableReason={unavailableReason} />;
  }

  return (
    <Link href={studio.href} target="_blank" rel="noopener noreferrer" className={packageBase}>
      <StudioRegionTileContent studio={studio} isAvailable />
    </Link>
  );
}

interface BookingAppointmentProviderProps {
  children: ReactNode;
  payload: BookingModalPayload;
}

function BookingAppointmentProvider({ children, payload }: BookingAppointmentProviderProps) {
  const [open, setOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState<BookingModalOpenOptions | undefined>();

  const openModal = useCallback(
    (options?: BookingModalOpenOptions) => {
      setOpenOptions(options);
      setOpen(true);

      const active = bookingModalPayloadForOpen(payload, options?.tattooStyleSlug);
      trackAppointmentModalOpen({
        componentName: options?.componentName ?? "BookAppointmentTrigger",
        ctaText: options?.ctaText,
        modalLayout: active.layout,
        tattooStyleSlug: options?.tattooStyleSlug,
      });
    },
    [payload],
  );

  const handleOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    if (!next) {
      setOpenOptions(undefined);
    }
  }, []);

  const ctx = useMemo(
    () => ({
      open: openModal,
    }),
    [openModal],
  );

  const activePayload = useMemo(
    () => bookingModalPayloadForOpen(payload, openOptions?.tattooStyleSlug),
    [payload, openOptions?.tattooStyleSlug],
  );

  const isStudioLayout = activePayload.layout === "studio-regions";
  const hasSocialChannels =
    Boolean(activePayload.channels.facebook) ||
    Boolean(activePayload.channels.instagram) ||
    Boolean(activePayload.channels.whatsapp);
  const hasStudioRegions = activePayload.studioRegions.length > 0;
  const hasBookingOptions = isStudioLayout ? hasStudioRegions : hasSocialChannels;

  const showNote = hasBookingModalNote(activePayload.copy);
  const noteBodyContent = activePayload.copy.noteBody
    ? bookingNoteBodySegments(activePayload.copy.noteBody)
    : null;
  const descriptionText = activePayload.copy.body?.trim() ?? "";
  /** Keep the previous modal footprint when description/note copy is omitted. */
  const isCompactCopy = !descriptionText && !showNote;

  return (
    <BookingAppointmentContext.Provider value={ctx}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange} modal="trap-focus">
        <DialogContent
          showCloseButton
          mobileBottomSheet
          closeButtonClassName="right-4 top-4 sm:right-6 sm:top-6"
          className={cn(
            "max-h-[min(88dvh,920px)] w-[min(100vw-1.25rem,48rem)] max-w-[min(100vw-1.25rem,48rem)] gap-0 overflow-y-auto overscroll-contain rounded-xl border-0 bg-surface-strong/90 px-4 py-8 backdrop-blur-xl sm:px-10 sm:py-12 md:px-12 md:py-14",
            "shadow-lg shadow-black/35",
            isCompactCopy &&
              "min-h-[min(70dvh,28rem)] justify-center sm:min-h-[min(72dvh,32.5rem)] md:min-h-[min(70dvh,34rem)]",
          )}
        >
          <DialogHeader className="items-center gap-3 px-0 text-center sm:gap-4 sm:px-2 md:px-4">
            <DialogTitle className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-tight text-foreground/90 sm:text-4xl md:text-5xl md:leading-[0.92]">
              {activePayload.copy.title}
            </DialogTitle>
            {descriptionText ? (
              <DialogDescription className="mx-auto max-w-3xl font-sans text-base leading-relaxed text-muted-foreground/90 md:text-lg md:leading-relaxed">
                {descriptionText}
              </DialogDescription>
            ) : (
              <DialogDescription className="sr-only">
                {isStudioLayout
                  ? "Choose a Bloodline studio to continue booking."
                  : "Choose Instagram, Facebook, or WhatsApp to continue booking."}
              </DialogDescription>
            )}
          </DialogHeader>

          {hasBookingOptions ? (
            <div
              className="mt-7 grid grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-3 sm:gap-4 md:gap-6"
              role="list"
              aria-label={isStudioLayout ? "Bloodline studios" : "Booking channels"}
            >
              {isStudioLayout ? (
                activePayload.studioRegions.map((studio) => (
                  <div key={studio.id} role="listitem" className="min-w-0">
                    <StudioRegionPackage studio={studio} />
                  </div>
                ))
              ) : (
                <>
                  <div role="listitem" className="min-w-0">
                    <ChannelPackage
                      channel={activePayload.channels.instagram}
                      channelVariant="instagram"
                    />
                  </div>
                  <div role="listitem" className="min-w-0">
                    <ChannelPackage
                      channel={activePayload.channels.facebook}
                      channelVariant="facebook"
                    />
                  </div>
                  <div role="listitem" className="min-w-0">
                    <ChannelPackage
                      channel={activePayload.channels.whatsapp}
                      channelVariant="whatsapp"
                      channelBadge={activePayload.copy.whatsappChannelBadge}
                      channelBadgeDesktop={activePayload.copy.whatsappChannelBadgeDesktop}
                    />
                  </div>
                </>
              )}
            </div>
          ) : (
            <p className="mt-9 rounded-xl border border-dashed border-border bg-surface-strong/80 px-4 py-8 text-center font-sans text-sm leading-relaxed text-muted-foreground">
              Booking links for this region are not configured yet.
            </p>
          )}

          {showNote ? (
            <div className="mt-8 border-t border-border pt-7 text-center">
              {activePayload.copy.noteLabel?.trim() ? (
                <p className="font-heading text-sm font-bold uppercase tracking-normal text-foreground/80 md:text-base">
                  {activePayload.copy.noteLabel}
                </p>
              ) : null}
              {noteBodyContent ? (
                <p className="mx-auto mt-3 max-w-3xl px-2 text-balance font-sans text-sm leading-snug tracking-wide max-sm:pb-3">
                  {noteBodyContent}
                </p>
              ) : null}
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </BookingAppointmentContext.Provider>
  );
}

export { BookingAppointmentProvider, useBookingAppointmentModal };
