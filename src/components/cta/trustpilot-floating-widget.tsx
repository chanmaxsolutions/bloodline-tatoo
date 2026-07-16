"use client";

import Image from "next/image";
import { useCallback, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const STORAGE_PREFIX = "bloodline-trustpilot-widget-collapsed";
const WIDGET_CHANGE_EVENT = "bloodline-trustpilot-widget-change";

interface TrustpilotFloatingWidgetProps {
  regionSlug: string;
  evaluateUrl: string;
}

type TrustpilotWidgetPreference = "collapsed" | "expanded" | null;

const trustpilotGreenIconClassName =
  "[filter:brightness(0)_saturate(100%)_invert(54%)_sepia(89%)_saturate(431%)_hue-rotate(115deg)_brightness(95%)_contrast(101%)]";

function readStoredPreference(storageKey: string): TrustpilotWidgetPreference {
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "1") {
      return "collapsed";
    }

    if (stored === "0") {
      return "expanded";
    }

    return null;
  } catch {
    return null;
  }
}

function notifyWidgetChange(storageKey: string) {
  window.dispatchEvent(new CustomEvent(WIDGET_CHANGE_EVENT, { detail: storageKey }));
}

function useTrustpilotWidgetPreference(
  storageKey: string,
): [TrustpilotWidgetPreference, (collapsed: boolean) => void] {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      function handleChange(event: Event) {
        if (event instanceof CustomEvent && event.detail === storageKey) {
          onStoreChange();
        }
      }

      window.addEventListener(WIDGET_CHANGE_EVENT, handleChange);
      return () => window.removeEventListener(WIDGET_CHANGE_EVENT, handleChange);
    },
    [storageKey],
  );

  const getSnapshot = useCallback(() => readStoredPreference(storageKey), [storageKey]);
  const preference = useSyncExternalStore(subscribe, getSnapshot, () => null);

  const setCollapsed = useCallback(
    (collapsed: boolean) => {
      try {
        window.localStorage.setItem(storageKey, collapsed ? "1" : "0");
      } catch {
        // Ignore storage failures.
      }

      notifyWidgetChange(storageKey);
    },
    [storageKey],
  );

  return [preference, setCollapsed];
}

function TrustpilotIcon({
  className,
  variant,
}: {
  className?: string;
  variant: "green" | "white";
}) {
  return (
    <Image
      src="/trustpilot-svgrepo-com.svg"
      alt=""
      width={18}
      height={18}
      className={cn(
        "size-[18px] shrink-0",
        variant === "green" ? trustpilotGreenIconClassName : "brightness-0 invert",
        className,
      )}
      aria-hidden="true"
    />
  );
}

/** Matches Trustpilot Review Collector CTA: white bar, green border, centered label + icon. */
export function TrustpilotFloatingWidget({
  regionSlug,
  evaluateUrl,
}: TrustpilotFloatingWidgetProps) {
  const storageKey = `${STORAGE_PREFIX}:${regionSlug}`;
  const [preference, setCollapsed] = useTrustpilotWidgetPreference(storageKey);

  const usesResponsiveDefault = preference === null;
  const showCollapsed = preference === "collapsed" || usesResponsiveDefault;
  const showExpanded = preference === "expanded" || usesResponsiveDefault;

  const containerClassName = cn(
    "fixed z-30",
    "bottom-[max(1rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))]",
  );

  return (
    <>
      {showCollapsed ? (
        <div className={cn(containerClassName, usesResponsiveDefault && "sm:hidden")}>
          <button
            type="button"
            onClick={() => setCollapsed(false)}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full bg-[#00b67a] text-white",
              "shadow-[0_4px_16px_rgba(0,0,0,0.22)] transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#00a36d]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b67a] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
            aria-label="Show Review us on Trustpilot"
          >
            <TrustpilotIcon variant="white" className="size-5" />
          </button>
        </div>
      ) : null}

      {showExpanded ? (
        <div className={cn(containerClassName, usesResponsiveDefault && "hidden sm:block")}>
          <div className="group relative pt-1.5 pr-1.5">
            <a
              href={evaluateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex h-11 w-fit items-center justify-center gap-1 rounded-[2px] border border-[#00b67a] bg-white px-3",
                "font-sans text-[15px] font-semibold leading-none tracking-tight text-[#191919]",
                "transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#e8e8e8]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b67a] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
              aria-label="Review Bloodline on Trustpilot (opens in a new tab)"
            >
              <span className="tracking-tight">Review us on</span>
              <TrustpilotIcon variant="green" />
              <span className="tracking-tight">Trustpilot</span>
            </a>

            <button
              type="button"
              onClick={() => setCollapsed(true)}
              className={cn(
                "absolute right-0 top-0 inline-flex size-[18px] items-center justify-center rounded-full border border-[#00b67a]/35 bg-white text-[#8a8a8a]",
                "pointer-events-none opacity-0 transition-opacity duration-200",
                "group-hover:pointer-events-auto group-hover:opacity-100",
                "group-focus-within:pointer-events-auto group-focus-within:opacity-100",
                "focus-visible:pointer-events-auto focus-visible:opacity-100",
                "hover:border-[#00b67a]/60 hover:text-[#191919]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b67a]",
                "max-sm:pointer-events-auto max-sm:opacity-55",
              )}
              aria-label="Minimize Trustpilot review invitation"
            >
              <svg viewBox="0 0 24 24" className="size-2.5" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M5 12h14v1.5H5z" />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
