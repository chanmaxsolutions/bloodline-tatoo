"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui";
import { useBookingAppointmentModal } from "@/components/cta";
import { Container } from "@/components/layout/container";
import { MobileMenuOverlay } from "@/components/layout/mobile-menu-overlay";
import type { HeaderNavItem } from "@/config/navigation";
import { handleSameRouteNavClick } from "@/lib/same-route-nav";
import { prefetchHeaderNavItemRoutes } from "@/lib/prefetch-nav-routes";

interface HeaderClientProps {
  logoWordmark: string;
  logoMonogram: string;
  logoPath: string;
  desktopNavigationItems: HeaderNavItem[];
  mobileNavigationItems: HeaderNavItem[];
  cta: {
    label: string;
    href: string;
  };
}

function HeaderClient({
  logoWordmark,
  logoMonogram,
  logoPath,
  desktopNavigationItems,
  mobileNavigationItems,
  cta,
}: HeaderClientProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDesktopDropdownHref, setOpenDesktopDropdownHref] = useState<string | null>(null);
  const [trackedPathname, setTrackedPathname] = useState(pathname);
  const { open: openBookingModal } = useBookingAppointmentModal();

  if (trackedPathname !== pathname) {
    setTrackedPathname(pathname);
    setOpenDesktopDropdownHref(null);
  }

  useEffect(() => {
    function onScroll(): void {
      setIsScrolled(window.scrollY > 16);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onEscape(event: KeyboardEvent): void {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [isMenuOpen]);

  function openDesktopDropdown(item: HeaderNavItem): void {
    setOpenDesktopDropdownHref(item.href);
    prefetchHeaderNavItemRoutes(router.prefetch, item);
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b motion-standard transition-[background-color,border-color,backdrop-filter]",
          isScrolled || isMenuOpen
            ? "border-border/30 bg-surface/80 backdrop-blur-sm"
            : "border-transparent bg-transparent",
        )}
      >
        <Container size="wide">
          <div className="flex min-h-[90px] items-center justify-between gap-6">
            <Link
              href="/"
              aria-label="Bloodline home"
              className="relative flex h-[65px] w-24 shrink-0 items-center text-foreground motion-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:h-[72px] md:w-28"
              onClick={(event) => {
                handleSameRouteNavClick(event, pathname, "/");
              }}
            >
              <Image
                src={logoPath}
                alt={logoWordmark}
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 96px, 112px"
                priority
              />
              <span className="sr-only">{logoMonogram}</span>
            </Link>

            <div className="ml-auto hidden items-center gap-8 xl:flex">
              <nav aria-label="Desktop" className="flex items-center gap-7">
                {desktopNavigationItems.map((item) => {
                  if (item.children?.length && item.hasFutureDropdown) {
                    const isDropdownOpen = openDesktopDropdownHref === item.href;

                    return (
                      <div
                        key={item.href}
                        className="group/nav-item relative after:pointer-events-auto after:absolute after:top-full after:left-0 after:h-3 after:w-full after:content-['']"
                        onMouseEnter={() => {
                          openDesktopDropdown(item);
                        }}
                        onMouseLeave={() => setOpenDesktopDropdownHref(null)}
                        onFocusCapture={() => {
                          openDesktopDropdown(item);
                        }}
                        onBlurCapture={(event) => {
                          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                            setOpenDesktopDropdownHref(null);
                          }
                        }}
                      >
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1 font-heading text-lg leading-none font-semibold uppercase tracking-tight text-muted-foreground motion-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:text-2xl"
                          aria-expanded={isDropdownOpen}
                          aria-haspopup="true"
                          onClick={(event) => {
                            handleSameRouteNavClick(event, pathname, item.href);
                          }}
                        >
                          {item.label}
                          <ChevronDownIcon
                            aria-hidden="true"
                            className={cn(
                              "mt-0.5 size-4 text-muted-foreground/80 motion-fast",
                              isDropdownOpen && "rotate-180",
                            )}
                          />
                        </Link>
                        <div
                          className={cn(
                            "absolute top-full left-0 z-30 w-full min-w-56 pt-3 motion-fast",
                            isDropdownOpen
                              ? "pointer-events-auto opacity-100"
                              : "pointer-events-none opacity-0",
                          )}
                        >
                          <div className="rounded-sm border border-border/90 bg-surface-elevated px-4 py-3">
                            <ul className="grid gap-2">
                              {item.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    prefetch={true}
                                    className="inline-flex font-heading text-lg font-semibold uppercase tracking-tight text-muted-foreground motion-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 2xl:text-xl"
                                    onClick={(event) => {
                                      handleSameRouteNavClick(event, pathname, child.href);
                                      setOpenDesktopDropdownHref(null);
                                    }}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="inline-flex items-center font-heading text-lg leading-none font-semibold uppercase tracking-tight text-muted-foreground motion-fast hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 md:text-2xl"
                      onClick={(event) => {
                        handleSameRouteNavClick(event, pathname, item.href);
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <button
                type="button"
                className={buttonVariants({ variant: "primary", size: "sm" })}
                onClick={() =>
                  openBookingModal({
                    componentName: "SiteHeader",
                    ctaText: cta.label,
                  })
                }
              >
                {cta.label}
              </button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="xl:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-overlay"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuIcon className="size-5" />
              MENU
            </Button>
          </div>
        </Container>
      </header>

      <div id="mobile-menu-overlay">
        <MobileMenuOverlay
          isOpen={isMenuOpen}
          navigationItems={mobileNavigationItems}
          cta={cta}
          onClose={() => setIsMenuOpen(false)}
          onBookAppointment={() =>
            openBookingModal({
              componentName: "MobileMenuOverlay",
              ctaText: cta.label,
            })
          }
        />
      </div>
    </>
  );
}

export { HeaderClient };
