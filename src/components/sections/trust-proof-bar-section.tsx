import { SectionShell } from "@/components/sections/section-shell";
import { cn } from "@/lib/utils";

interface TrustProofItem {
  label: string;
  value: string;
}

interface TrustProofBarSectionProps {
  items: TrustProofItem[];
}

function TrustProofBarSection({ items }: TrustProofBarSectionProps) {
  return (
    <SectionShell
      spacing="none"
      containerSize="wide"
      className="border-t border-border/50 bg-surface-strong py-3 md:py-5"
      aria-label="Studio trust metrics"
    >
      <ul
        className={cn(
          "mx-auto grid max-w-5xl divide-y divide-border/45 sm:grid-cols-3 sm:divide-x sm:divide-y-0",
          "gap-0",
        )}
      >
        {items.map((item) => (
          <li
            key={item.label}
            className="flex flex-col items-center justify-center gap-1 px-4 py-3.5 text-center sm:py-5 md:py-6"
            aria-label={`${item.label}: ${item.value}`}
          >
            <p
              className={cn(
                "font-heading text-5xl font-bold leading-[0.95] tracking-tight text-foreground",
                "sm:text-6xl md:text-7xl lg:text-8xl",
              )}
              aria-hidden
            >
              {item.value}
            </p>
            <p className="text-balance font-heading text-base font-medium uppercase tracking-normal text-muted-foreground md:text-lg">
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

export { TrustProofBarSection };
export type { TrustProofItem };
