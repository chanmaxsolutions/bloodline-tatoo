import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex h-6 w-fit shrink-0 items-center justify-center rounded-md border px-2.5 text-[0.7rem] font-semibold uppercase tracking-wide whitespace-nowrap motion-fast focus-visible:ring-2 focus-visible:ring-ring/50",
  {
    variants: {
      variant: {
        subtle: "bg-surface-elevated border-border text-muted-foreground",
        accent: "bg-accent border-transparent text-accent-foreground",
        outline: "bg-transparent border-border text-foreground",
      },
    },
    defaultVariants: {
      variant: "subtle",
    },
  },
);

function Badge({
  className,
  variant = "subtle",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props,
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants };
