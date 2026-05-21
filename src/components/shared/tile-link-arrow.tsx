import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TileLinkArrowProps {
  className?: string;
}

function TileLinkArrow({ className }: TileLinkArrowProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-surface-strong/80",
        "transition-[border-color,background-color] group-hover:border-accent/40 group-hover:bg-accent group-hover:text-accent-foreground",
        className,
      )}
    >
      <ArrowUpRight className="size-4.5" strokeWidth={2.25} />
    </span>
  );
}

export { TileLinkArrow };
