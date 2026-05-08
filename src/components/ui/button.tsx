import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-xs border border-transparent font-heading text-2xl leading-none font-semibold uppercase tracking-tight motion-fast outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 md:text-2xl [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-foreground hover:brightness-95",
        secondary: "bg-surface-elevated text-foreground border-border hover:bg-surface-strong",
        outline: "bg-background text-foreground border-border hover:bg-surface",
        ghost: "bg-transparent text-foreground hover:bg-surface",
      },
      size: {
        sm: "h-11 px-4 md:h-12",
        md: "h-12 px-5 md:h-12",
        lg: "h-14 px-6 md:h-14",
        icon: "size-10 md:size-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
