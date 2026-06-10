"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui";
import type { HeaderNavItem } from "@/config/navigation";

interface MobileMenuOverlayProps {
  isOpen: boolean;
  navigationItems: HeaderNavItem[];
  cta: {
    label: string;
    href: string;
  };
  onClose: () => void;
  onBookAppointment: () => void;
}

function MobileMenuOverlay({
  isOpen,
  navigationItems,
  cta,
  onClose,
  onBookAppointment,
}: MobileMenuOverlayProps) {
  const [isStylesOpen, setIsStylesOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col px-6 pt-8 pb-10">
        <div className="mb-10 flex items-center justify-between">
          <p className="font-heading text-base font-medium uppercase tracking-normal text-accent md:text-lg">
            Navigation
          </p>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close menu">
            CLOSE
          </Button>
        </div>

        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-between">
          <ul className="grid gap-5">
            {navigationItems.map((item) => {
              if (item.label === "Tattoo Styles" && item.children?.length) {
                return (
                  <li key={item.href} className="grid gap-3">
                    <div className="flex items-center justify-between gap-4">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-heading-display text-3xl text-foreground motion-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="inline-flex shrink-0 items-center justify-center rounded-xs p-2 text-muted-foreground motion-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                        aria-expanded={isStylesOpen}
                        aria-label={`${isStylesOpen ? "Collapse" : "Expand"} ${item.label} list`}
                        onClick={() => setIsStylesOpen((prev) => !prev)}
                      >
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={cn(
                            "size-5 motion-fast",
                            isStylesOpen ? "rotate-180" : "rotate-0",
                          )}
                        />
                      </button>
                    </div>
                    {isStylesOpen ? (
                      <ul className="grid gap-2 pl-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className="text-heading-section text-xl font-semibold tracking-tight text-muted-foreground motion-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-heading-display text-3xl text-foreground motion-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pt-10">
            <button
              type="button"
              className={buttonVariants({ variant: "primary", size: "lg", className: "w-full" })}
              onClick={() => {
                onBookAppointment();
                onClose();
              }}
            >
              {cta.label}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export { MobileMenuOverlay };
