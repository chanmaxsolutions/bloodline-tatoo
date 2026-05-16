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
import { cn } from "@/lib/utils";
import { bookingModalPayloadForOpen } from "@/lib/booking-modal";
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
  const icon =
    channelVariant === "facebook" ? (
      <FacebookGlyph className="size-6 min-[375px]:size-8 sm:size-10 md:size-11" />
    ) : channelVariant === "instagram" ? (
      <InstagramGlyph className="size-6 min-[375px]:size-8 sm:size-10 md:size-11" />
    ) : (
      <WhatsAppGlyph className="size-6 min-[375px]:size-8 sm:size-10 md:size-11" />
    );

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

  return (
    <Link
      href={channel.href}
      target="_blank"
      rel="noopener noreferrer"
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
          {channel.label}
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

/** Meta / Facebook brand blue */
function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg className={cn("shrink-0", className)} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#1877F2"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

/** Instagram brand gradient (official spectrum). */
function InstagramGlyph({ className }: { className?: string }) {
  const rawId = useId();
  const gradId = `booking-ig-${rawId.replace(/:/g, "")}`;

  return (
    <svg className={cn("shrink-0", className)} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="25%" stopColor="#F77737" />
          <stop offset="50%" stopColor="#E1306C" />
          <stop offset="75%" stopColor="#C13584" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradId})`}
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  );
}

/** WhatsApp brand green */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={cn("shrink-0", className)} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#25D366"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

interface BookingAppointmentProviderProps {
  children: ReactNode;
  payload: BookingModalPayload;
}

function BookingAppointmentProvider({ children, payload }: BookingAppointmentProviderProps) {
  const [open, setOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState<BookingModalOpenOptions | undefined>();

  const openModal = useCallback((options?: BookingModalOpenOptions) => {
    setOpenOptions(options);
    setOpen(true);
  }, []);

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

  const noteBodyContent = bookingNoteBodySegments(activePayload.copy.noteBody);

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
          )}
        >
          <DialogHeader className="items-center gap-3 px-0 text-center sm:gap-4 sm:px-2 md:px-4">
            <DialogTitle className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-tight text-foreground/90 sm:text-4xl md:text-5xl md:leading-[0.92]">
              {activePayload.copy.title}
            </DialogTitle>
            <DialogDescription className="mx-auto max-w-3xl font-sans text-base leading-relaxed text-muted-foreground/90 md:text-lg md:leading-relaxed">
              {activePayload.copy.body}
            </DialogDescription>
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

          <div className="mt-8 border-t border-border pt-7 text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-normal text-foreground/80 md:text-base">
              {activePayload.copy.noteLabel}
            </p>
            <p className="mx-auto mt-3 max-w-3xl px-2 text-balance font-sans text-sm leading-snug tracking-wide max-sm:pb-3">
              {noteBodyContent}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </BookingAppointmentContext.Provider>
  );
}

export { BookingAppointmentProvider, useBookingAppointmentModal };
