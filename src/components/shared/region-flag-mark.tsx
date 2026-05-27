import { cn } from "@/lib/utils";
import type { RegionFlagKind } from "@/types/footer-region-switcher";

interface RegionFlagMarkProps {
  flag: RegionFlagKind;
  className?: string;
}

function ThailandFlagSvg() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#A51931" />
      <rect x="0" y="9" width="24" height="6" fill="#F4F5F8" />
      <rect x="0" y="10.25" width="24" height="3.5" fill="#2D2A4A" />
    </svg>
  );
}

function IndonesiaFlagSvg() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" aria-hidden>
      <defs>
        <clipPath id="bloodline-indonesia-flag-clip">
          <circle cx="12" cy="12" r="12" />
        </clipPath>
      </defs>
      <g clipPath="url(#bloodline-indonesia-flag-clip)">
        <rect x="0" y="0" width="24" height="12" fill="#CE1126" />
        <rect x="0" y="12" width="24" height="12" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

/** Circular earth flag — blue field with simplified land masses (not a line-icon globe). */
function EarthFlagSvg() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#1B4F8C" />
      <path
        fill="#3D9E4A"
        d="M6.2 8.4c1.8-1.1 4-1 5.8.2 1.2.8 2.4.3 3.1-.5.8 1.6 2.4 2.8 4.2 3 1.4.2 2.6-.2 3.4-1.1-1.2 2.4-3.8 3.8-6.5 3.5-3.4-.4-6.2-2.8-7.1-5.8-.5 1.2-1.6 2-2.9 1.7Z"
      />
      <path
        fill="#4CAF50"
        d="M15.8 6.2c1.1.9 1.8 2.2 1.6 3.6-.2 1.8-1.8 3.2-3.6 3.4-.9.1-1.7-.1-2.4-.6.7-1.5 2.2-2.5 3.9-2.3 1.2.1 2.2.7 2.8 1.6-.4-1.9.2-3.9 1.6-5.3.5-.5 1.1-.9 1.7-1.2-.6-.2-1.3-.3-2-.2Z"
      />
      <ellipse cx="8.5" cy="15.5" rx="2.8" ry="2.2" fill="#3D9E4A" />
    </svg>
  );
}

function RegionFlagMark({ flag, className }: RegionFlagMarkProps) {
  return (
    <span
      className={cn(
        "flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-surface-strong shadow-sm ring-1 ring-black/20 sm:size-12",
        className,
      )}
      aria-hidden
    >
      {flag === "earth" ? (
        <EarthFlagSvg />
      ) : flag === "thailand" ? (
        <ThailandFlagSvg />
      ) : (
        <IndonesiaFlagSvg />
      )}
    </span>
  );
}

export { RegionFlagMark };
