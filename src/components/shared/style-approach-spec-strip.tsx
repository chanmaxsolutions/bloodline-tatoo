import { standardsProofIconForId, type StandardsProofIconId } from "@/lib/standards-proof-icons";
import { sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { ApproachPointerTriplet } from "@/types/tattoo-style-detail";

const specStripShellClassName =
  "w-full overflow-hidden rounded-xl border border-border/50 bg-surface-strong";

const specStripGridClassName = "grid grid-cols-1 lg:grid-cols-3";

const specStripColumnClassName =
  "flex flex-col gap-4 border-b border-border/50 p-6 last:border-b-0 md:gap-5 md:p-7 lg:border-r lg:border-b-0 lg:last:border-r-0";

const specStripLabelClassName =
  "font-heading text-2xl font-bold uppercase leading-none tracking-tight text-foreground md:text-3xl";

const specStripIconWrapClassName =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-surface-elevated text-accent md:size-12";

const specStripBulletClassName =
  "font-sans text-base leading-relaxed text-pretty text-muted-foreground md:text-base md:leading-relaxed";

interface StyleApproachSpecRow {
  label: string;
  items: ApproachPointerTriplet;
  iconId: StandardsProofIconId;
}

const styleApproachSpecRows: readonly [
  Omit<StyleApproachSpecRow, "items">,
  Omit<StyleApproachSpecRow, "items">,
  Omit<StyleApproachSpecRow, "items">,
] = [
  { label: "Philosophy", iconId: "pen-tool" },
  { label: "Ideal for", iconId: "shield-check" },
  { label: "Session structure", iconId: "clipboard-list" },
];

const defaultStyleApproachSpecLabels = [
  "Philosophy",
  "Ideal for",
  "Session structure",
] as const satisfies readonly [string, string, string];

interface StyleApproachSpecStripProps {
  philosophyBullets: ApproachPointerTriplet;
  idealForBullets: ApproachPointerTriplet;
  sessionBullets: ApproachPointerTriplet;
  columnLabels?: readonly [string, string, string];
}

function StyleApproachSpecStrip({
  philosophyBullets,
  idealForBullets,
  sessionBullets,
  columnLabels,
}: StyleApproachSpecStripProps) {
  const bulletGroups = [philosophyBullets, idealForBullets, sessionBullets] as const;
  const labels = columnLabels ?? defaultStyleApproachSpecLabels;

  return (
    <div className={specStripShellClassName}>
      <ul className={cn(specStripGridClassName, "m-0 list-none p-0")}>
        {styleApproachSpecRows.map((row, index) => {
          const Icon = standardsProofIconForId(row.iconId);
          const items = bulletGroups[index];
          const label = labels[index];

          return (
            <li key={label} className={sectionRevealStaggerClass(index, specStripColumnClassName)}>
              <div className="flex items-center gap-4">
                <div className={specStripIconWrapClassName} aria-hidden>
                  <Icon className="size-5 md:size-6" strokeWidth={1.75} />
                </div>
                <p className={cn(specStripLabelClassName, "min-w-0 text-pretty")}>{label}</p>
              </div>
              <ul className="m-0 flex list-none flex-col gap-3 p-0 md:gap-3.5">
                {items.map((line, lineIndex) => (
                  <li key={lineIndex} className={specStripBulletClassName}>
                    {line}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { StyleApproachSpecStrip };
