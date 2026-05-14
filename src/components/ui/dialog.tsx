"use client";

import * as React from "react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import { Button, dialogCloseButtonClass } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({ className, ...props }: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-background/80 motion-fast outline-none data-open:animate-in data-open:fade-in-0 data-open:duration-200 data-closed:animate-out data-closed:fade-out-0 data-closed:duration-300 data-open:ease-[cubic-bezier(0.16,1,0.3,1)] data-closed:ease-[cubic-bezier(0.16,1,0.3,1)]",
        className,
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  closeButtonPlacement = "inside",
  closeButtonClassName,
  /** Narrow viewports: bottom-anchored sheet + slide up/down (desktop stays centered modal). */
  mobileBottomSheet = false,
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean;
  /**
   * `inside` — top-right of the modal panel (absolute).
   * `viewport` — top-right of the window (`fixed`); stays in the dialog subtree for focus management.
   */
  closeButtonPlacement?: "inside" | "viewport";
  closeButtonClassName?: string;
  mobileBottomSheet?: boolean;
}) {
  const closePositionClass =
    closeButtonPlacement === "viewport"
      ? "fixed right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] sm:right-6 sm:top-6"
      : "absolute right-3 top-3";

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-[51] flex w-[min(calc(100vw-1.5rem),100%)] max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg border border-border bg-surface-elevated p-6 text-foreground motion-standard outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-[0.99] data-open:duration-200 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-[0.99] data-closed:duration-300 data-open:ease-[cubic-bezier(0.16,1,0.3,1)] data-closed:ease-[cubic-bezier(0.16,1,0.3,1)]",
          mobileBottomSheet &&
            cn(
              "max-sm:inset-x-0 max-sm:bottom-0 max-sm:top-auto max-sm:left-0 max-sm:right-0 max-sm:translate-x-0 max-sm:translate-y-0 max-sm:max-h-[min(92dvh,900px)] max-sm:pb-[max(0px,env(safe-area-inset-bottom))]",
              "max-sm:data-open:slide-in-from-bottom max-sm:data-open:duration-300 max-sm:data-open:ease-[cubic-bezier(0.16,1,0.3,1)] max-sm:data-open:zoom-in-100",
              "max-sm:data-closed:slide-out-to-bottom max-sm:data-closed:duration-250 max-sm:data-closed:zoom-out-100",
              "motion-reduce:max-sm:data-open:duration-150 motion-reduce:max-sm:data-closed:duration-150",
            ),
          className,
          mobileBottomSheet &&
            "max-sm:w-full max-sm:max-w-none max-sm:rounded-b-none max-sm:rounded-t-xl",
        )}
        {...props}
      >
        {children}
        {showCloseButton ? (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className={cn(
              dialogCloseButtonClass,
              "z-[60] text-foreground motion-fast",
              closePositionClass,
              closeButtonClassName,
            )}
          >
            <XIcon className="size-5 md:size-[1.375rem]" aria-hidden />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        ) : null}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="dialog-header" className={cn("flex flex-col gap-2", className)} {...props} />
  );
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end", className)}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline" size="sm" />}>
          Close
        </DialogPrimitive.Close>
      )}
    </div>
  );
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-heading-section text-base", className)}
      {...props}
    />
  );
}

function DialogDescription({ className, ...props }: DialogPrimitive.Description.Props) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-body-readable text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
