import { cn } from "@/lib/utils";

const quickAnswerBoxClassName =
  "rounded-xl border border-border/40 bg-surface-elevated/90 px-5 py-5 md:px-6 md:py-6";

const quickAnswerLabelClassName =
  "font-heading text-base font-semibold uppercase tracking-normal text-accent md:text-lg";

const quickAnswerTextClassName =
  "mt-3 font-sans text-base leading-relaxed text-foreground/90 text-pretty md:text-lg md:leading-snug";

interface BlogQuickAnswerProps {
  answer: string;
  className?: string;
}

function BlogQuickAnswer({ answer, className }: BlogQuickAnswerProps) {
  return (
    <aside
      id="quick-answer"
      className={cn(quickAnswerBoxClassName, className)}
      aria-label="Quick answer"
    >
      <p className={quickAnswerLabelClassName}>Quick answer</p>
      <p className={quickAnswerTextClassName}>{answer}</p>
    </aside>
  );
}

export { BlogQuickAnswer };
