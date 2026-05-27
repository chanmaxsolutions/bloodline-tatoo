import { sectionDisplayHeadingClassName } from "@/lib/section-display-heading";
import { cn } from "@/lib/utils";

/** Matches homepage section band H2 scale — use with `text-heading-display` on the `h2`. */
const approachSectionTitleClassName = sectionDisplayHeadingClassName;

const approachPointerCardHeadingClassName =
  "font-heading text-2xl font-bold uppercase leading-none tracking-tight text-foreground md:text-3xl";

const approachPointerCardBoxClassName =
  "flex h-full flex-col gap-5 rounded-xl border border-border/50 bg-surface-elevated/90 p-6 md:gap-6 md:p-7";

const approachPointerItemTextClassName =
  "font-sans text-base leading-relaxed text-foreground/90 md:text-lg md:leading-relaxed";

const approachPointerCheckmarkClassName =
  "mt-0.5 shrink-0 font-heading text-3xl leading-none text-accent md:text-2xl";

const approachSectionRadialClassName =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_12%_0%,color-mix(in_oklab,var(--surface-elevated)_55%,transparent),transparent_72%)]";

const approachSectionMediaClassName =
  "relative aspect-5/4 max-h-[min(40vh,280px)] w-full overflow-hidden rounded-md border border-border/50 shadow-none lg:aspect-auto lg:max-h-none lg:min-h-[min(60vh,520px)] [&_img]:shadow-none [&_img]:drop-shadow-none";

interface ApproachPointerCardProps {
  label: string;
  items: readonly string[];
}

function ApproachPointerCard({ label, items }: ApproachPointerCardProps) {
  return (
    <article className={approachPointerCardBoxClassName}>
      <h3 className={approachPointerCardHeadingClassName}>{label}</h3>
      <ul className="m-0 flex flex-1 list-none flex-col gap-4 p-0 md:gap-5">
        {items.map((line, index) => (
          <li key={index} className="flex items-start gap-3 md:gap-4">
            <span aria-hidden className={approachPointerCheckmarkClassName}>
              ✓
            </span>
            <span className={cn(approachPointerItemTextClassName, "text-pretty")}>{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export {
  ApproachPointerCard,
  approachPointerCardBoxClassName,
  approachPointerCheckmarkClassName,
  approachPointerItemTextClassName,
  approachSectionMediaClassName,
  approachSectionRadialClassName,
  approachSectionTitleClassName,
};
