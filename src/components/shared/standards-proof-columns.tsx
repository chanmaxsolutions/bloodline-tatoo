import { SectionReveal } from "@/components/motion";
import { standardsProofIconForId, type StandardsProofIconId } from "@/lib/standards-proof-icons";
import { sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { StandardsProofVariant } from "@/types/homepage-standards-split";

const standardsProofBoxBaseClassName = "flex h-full flex-col gap-5 rounded-xl p-6 md:gap-6 md:p-7";

const standardsProofIconWrapBaseClassName =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-full border md:size-12";

const standardsProofColumnLabelClassName =
  "font-heading text-2xl font-bold uppercase leading-none tracking-tight md:text-3xl";

/** Matches homepage standards proof column body (single-line blocks). */
const standardsProofColumnBodyClassName = "font-sans text-base leading-relaxed text-pretty";

const defaultProofVariants: readonly [
  StandardsProofVariant,
  StandardsProofVariant,
  StandardsProofVariant,
] = ["accent", "light", "dark"];

const standardsProofVariantStyles: Record<
  StandardsProofVariant,
  { box: string; icon: string; label: string; body: string; supporting: string }
> = {
  accent: {
    box: "bg-accent",
    icon: "border-accent-foreground/15 bg-accent-foreground/10 text-accent-foreground",
    label: "text-accent-foreground",
    body: "text-accent-foreground/80",
    supporting: "text-accent-foreground/70",
  },
  light: {
    box: "bg-foreground",
    icon: "border-background/15 bg-background/10 text-background",
    label: "text-background",
    body: "text-background/75",
    supporting: "text-background/65",
  },
  dark: {
    box: "bg-surface-strong",
    icon: "border-white/10 bg-surface-elevated text-accent",
    label: "text-foreground",
    body: "text-muted-foreground",
    supporting: "text-muted-foreground/90",
  },
};

const defaultPointerIcons: readonly [
  StandardsProofIconId,
  StandardsProofIconId,
  StandardsProofIconId,
] = ["shield-check", "pen-tool", "building-2"];

interface StandardsProofColumn {
  label: string;
  line: string;
  iconId: StandardsProofIconId;
  /** Secondary lines below the lead (e.g. remaining approach bullets). */
  supportingLines?: readonly string[];
}

interface StandardsProofColumnsProps {
  columns: readonly StandardsProofColumn[];
  proofVariants?: readonly [StandardsProofVariant, StandardsProofVariant, StandardsProofVariant];
}

function StandardsProofColumns({
  columns,
  proofVariants = defaultProofVariants,
}: StandardsProofColumnsProps) {
  return (
    <SectionReveal>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {columns.map((column, index) => {
          const Icon = standardsProofIconForId(column.iconId);
          const variant = proofVariants[index] ?? "accent";
          const styles = standardsProofVariantStyles[variant];

          return (
            <li
              key={column.label}
              className={sectionRevealStaggerClass(
                index,
                index === 2 ? "sm:col-span-2 lg:col-span-1" : undefined,
              )}
            >
              <article className={cn(standardsProofBoxBaseClassName, styles.box)}>
                <div className={cn(standardsProofIconWrapBaseClassName, styles.icon)} aria-hidden>
                  <Icon className="size-5 md:size-6" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col gap-2 md:gap-2.5">
                  <p className={cn(standardsProofColumnLabelClassName, styles.label)}>
                    {column.label}
                  </p>
                  <p className={cn(standardsProofColumnBodyClassName, styles.body)}>
                    {column.line}
                  </p>
                  {column.supportingLines && column.supportingLines.length > 0 ? (
                    <ul className="m-0 flex list-none flex-col gap-2 p-0 pt-1 md:gap-2.5 md:pt-1.5">
                      {column.supportingLines.map((line, lineIndex) => (
                        <li
                          key={lineIndex}
                          className={cn(standardsProofColumnBodyClassName, styles.supporting)}
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </SectionReveal>
  );
}

export { StandardsProofColumns, defaultPointerIcons, defaultProofVariants };
export type { StandardsProofColumn };
