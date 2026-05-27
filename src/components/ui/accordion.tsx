import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-border", className)}
      {...props}
    />
  );
}

interface AccordionTriggerProps extends AccordionPrimitive.Trigger.Props {
  hideIndicator?: boolean;
}

function AccordionTrigger({
  className,
  children,
  hideIndicator = false,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="flex w-full">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger flex w-full flex-1 items-start justify-between gap-4 py-4 text-left text-heading-section text-lg md:text-xl motion-fast outline-none hover:text-accent focus-visible:ring-2 focus-visible:ring-ring/50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
        {hideIndicator ? null : (
          <ChevronDownIcon
            data-slot="accordion-trigger-icon"
            className="pointer-events-none size-4 shrink-0 text-muted-foreground motion-fast group-aria-expanded/accordion-trigger:rotate-180"
          />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

interface AccordionContentProps extends AccordionPrimitive.Panel.Props {
  /** Classes for the animated height wrapper inside the panel. */
  innerClassName?: string;
}

function AccordionContent({
  className,
  innerClassName,
  children,
  ...props
}: AccordionContentProps) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "text-body-readable h-(--accordion-panel-height) pb-4 data-ending-style:h-0 data-starting-style:h-0",
          innerClassName,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
