import { SectionReveal } from "@/components/motion";
import { standardsProofIconForId, type StandardsProofIconId } from "@/lib/standards-proof-icons";
import { sectionRevealStaggerClass } from "@/lib/section-reveal-classes";
import { cn } from "@/lib/utils";
import type { StandardsProofVariant } from "@/types/homepage-standards-split";

const standardsProofBoxBaseClassName = "flex h-full flex-col gap-5 rounded-xl p-6 md:gap-6 md:p-7";

const standardsProofIconWrapBaseClassName =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-md border md:size-12";

const standardsProofColumnLabelClassName =
  "font-heading text-2xl font-bold uppercase leading-none tracking-tight md:text-3xl";

const standardsProofColumnBodyClassName = "font-sans text-base leading-relaxed text-pretty";

const defaultProofVariants: readonly [
  StandardsProofVariant,
  StandardsProofVariant,
  StandardsProofVariant,
] = ["accent", "light", "dark"];

const standardsProofVariantStyles: Record<
  StandardsProofVariant,
  { box: string; icon: string; label: string; body: string }
> = {
  accent: {
    box: "bg-accent",
    icon: "border-accent-foreground/15 bg-accent-foreground/10 text-accent-foreground",
    label: "text-accent-foreground",
    body: "text-accent-foreground/80",
  },
  light: {
    box: "bg-foreground",
    icon: "border-background/15 bg-background/10 text-background",
    label: "text-background",
    body: "text-background/75",
  },
  dark: {
    box: "bg-surface-strong",
    icon: "border-white/10 bg-surface-elevated text-accent",
    label: "text-foreground",
    body: "text-muted-foreground",
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
