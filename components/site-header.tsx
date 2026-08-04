"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  BatteryCharging,
  ChevronDown,
  Gauge,
  HandCoins,
  Menu,
  Network,
  X
} from "lucide-react";

import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { WxpeLogo } from "@/components/wxpe-logo";

const solutionMenuItems = [
  {
    title: "Battery Energy Storage",
    description: "Storage for cost control and resilient site operation.",
    href: "/solutions#battery-storage",
    icon: BatteryCharging
  },
  {
    title: "Solar Hybrid & Microgrid",
    description: "Integrated solar, storage and site-level power systems.",
    href: "/solutions#solar-hybrid",
    icon: Network
  },
  {
    title: "EMS & Energy Optimization",
    description: "Intelligent monitoring, dispatch and energy control.",
    href: "/solutions#digital-energy-management",
    icon: Gauge
  },
  {
    title: "Energy-as-a-Service",
    description: "Flexible deployment and long-term operating support.",
    href: "/solutions#energy-deployment",
    icon: HandCoins
  }
] as const;

const menuEase = [0.22, 1, 0.36, 1] as const;

const mobileMenuVariants = {
  closed: {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
    transition: { duration: 0.42, ease: menuEase }
  },
  open: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transition: { duration: 0.56, ease: menuEase }
  }
} as const;

const reducedMobileMenuVariants = {
  closed: { opacity: 0, transition: { duration: 0.1 } },
  open: { opacity: 1, transition: { duration: 0.12 } }
} as const;

const mobileMenuListVariants = {
  closed: {
    transition: {
      staggerChildren: 0.035,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.05
    }
  }
} as const;

const mobileMenuItemVariants = {
  closed: {
    opacity: 0,
    y: 18,
    transition: { duration: 0.3, ease: menuEase }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.46, ease: menuEase }
  }
} as const;

export function SiteHeader() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [currentHash, setCurrentHash] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash);

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const body = document.body;
    const root = document.documentElement;
    const scrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    const previousScrollbarCompensation = root.style.getPropertyValue(
      "--mobile-scrollbar-compensation"
    );
    const previousBodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width
    };

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    root.style.setProperty(
      "--mobile-scrollbar-compensation",
      `${scrollbarWidth}px`
    );

    const closeMenu = () => setMobileMenuOpen(false);
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    window.addEventListener("popstate", closeMenu);
    window.addEventListener("resize", handleResize);

    const focusFrame = window.requestAnimationFrame(() => {
      mobileMenuButtonRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("popstate", closeMenu);
      window.removeEventListener("resize", handleResize);
      body.style.overflow = previousBodyStyles.overflow;
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.width = previousBodyStyles.width;
      if (previousScrollbarCompensation) {
        root.style.setProperty(
          "--mobile-scrollbar-compensation",
          previousScrollbarCompensation
        );
      } else {
        root.style.removeProperty("--mobile-scrollbar-compensation");
      }
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileMenuOpen(false);
        window.requestAnimationFrame(() => mobileMenuButtonRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const menuLinks = Array.from(
        mobileMenuNavRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []
      );
      const firstLink = menuLinks[0];
      const lastLink = menuLinks.at(-1);
      const activeElement = document.activeElement;

      if (!firstLink || !lastLink) {
        event.preventDefault();
        mobileMenuButtonRef.current?.focus();
        return;
      }

      if (event.shiftKey && activeElement === mobileMenuButtonRef.current) {
        event.preventDefault();
        lastLink.focus();
      } else if (!event.shiftKey && activeElement === mobileMenuButtonRef.current) {
        event.preventDefault();
        firstLink.focus();
      } else if (event.shiftKey && activeElement === firstLink) {
        event.preventDefault();
        mobileMenuButtonRef.current?.focus();
      } else if (!event.shiftKey && activeElement === lastLink) {
        event.preventDefault();
        mobileMenuButtonRef.current?.focus();
      } else if (
        activeElement !== mobileMenuButtonRef.current &&
        !mobileMenuNavRef.current?.contains(activeElement)
      ) {
        event.preventDefault();
        mobileMenuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  function isActive(href: string) {
    if (href.startsWith("/#")) {
      return pathname === "/" && currentHash === href.slice(1);
    }

    return pathname === href;
  }

  const navLinkClass = (active: boolean) =>
    cn(
      "relative border-b pb-1 text-[0.8125rem] transition-colors xl:text-sm",
      active
        ? "border-foreground/45 font-semibold text-foreground"
        : "border-transparent font-medium text-muted-foreground hover:text-foreground"
    );

  function closeMobileMenu(restoreFocus = false) {
    setMobileMenuOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => mobileMenuButtonRef.current?.focus());
    }
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] border-b transition-[background-color,border-color,box-shadow] duration-300 lg:border-border lg:bg-white/90 lg:shadow-[0_8px_28px_rgba(11,18,32,0.05)] lg:backdrop-blur-xl",
          mobileMenuOpen
            ? "border-transparent bg-[#f5f5f7] shadow-none"
            : "border-border bg-white/90 shadow-[0_8px_28px_rgba(11,18,32,0.05)] backdrop-blur-xl"
        )}
      >
        <div className="mx-auto flex h-[calc(64px+env(safe-area-inset-top))] w-full max-w-[1220px] items-center gap-5 pl-5 pr-[calc(1.25rem+var(--mobile-scrollbar-compensation,0px))] pt-[env(safe-area-inset-top)] lg:h-[72px] lg:px-4 lg:py-4 lg:pt-4 xl:px-5">
          <div
            aria-hidden={mobileMenuOpen ? "true" : undefined}
            className={cn(
              "transition-opacity duration-200 lg:opacity-100",
              mobileMenuOpen && "pointer-events-none opacity-0"
            )}
          >
            <WxpeLogo priority />
          </div>

        <nav
          className="ml-7 hidden items-center gap-5 lg:flex xl:ml-10 xl:gap-7"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);

            if (item.label === "Solutions") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                  onBlurCapture={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                      setSolutionsOpen(false);
                    }
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      setSolutionsOpen(false);
                    }
                  }}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={navLinkClass(active)}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle Solutions menu"
                      aria-haspopup="true"
                      aria-expanded={solutionsOpen}
                      aria-controls="solutions-menu"
                      onClick={() => setSolutionsOpen((open) => !open)}
                      className="flex size-6 items-center justify-center text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "size-3.5 transition-transform duration-200",
                          solutionsOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </div>

                  <div
                    id="solutions-menu"
                    className={cn(
                      "pointer-events-none invisible absolute left-0 top-full w-[620px] translate-y-2 pt-5 opacity-0 transition-all duration-200 ease-out",
                      solutionsOpen &&
                        "pointer-events-auto visible translate-y-0 opacity-100"
                    )}
                  >
                    <div className="overflow-hidden rounded-lg border border-[#d6e0e6] bg-white shadow-[0_24px_64px_rgba(11,18,32,0.14)]">
                      <div
                        className="grid grid-cols-2 gap-1 p-3"
                        aria-label="Energy solutions"
                      >
                        {solutionMenuItems.map((solution) => {
                          const Icon = solution.icon;

                          return (
                            <Link
                              key={solution.href}
                              href={solution.href}
                              onClick={() => setSolutionsOpen(false)}
                              className="group/item grid grid-cols-[32px_1fr] gap-3 rounded-md px-3 py-3 transition-colors hover:bg-[#f3f6f8] focus-visible:bg-[#f3f6f8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              <span className="flex size-8 items-center justify-center rounded-md bg-[#edf3f6] text-primary transition-colors group-hover/item:bg-[#e4edf2]">
                                <Icon aria-hidden="true" className="size-4" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-foreground">
                                  {solution.title}
                                </span>
                                <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                                  {solution.description}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="border-t border-border bg-[#f8fafb] px-6 py-4">
                        <Link
                          href="/solutions"
                          onClick={() => setSolutionsOpen(false)}
                          className="text-sm font-semibold text-primary transition-colors hover:text-[#174f83] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          View All Solutions →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={navLinkClass(active)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

          <button
            ref={mobileMenuButtonRef}
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="ml-auto flex size-11 items-center justify-center border-0 bg-transparent p-0 text-[#1d1d1f] shadow-none transition-[color,opacity] active:opacity-55 focus-visible:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-primary/45 lg:hidden"
          >
            <span className="relative block size-[26px]" aria-hidden="true">
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                animate={
                  mobileMenuOpen
                    ? { opacity: 0, rotate: -24, scale: 0.84 }
                    : { opacity: 1, rotate: 0, scale: 1 }
                }
                transition={{
                  duration: reduceMotion ? 0.1 : 0.28,
                  ease: menuEase
                }}
              >
                <Menu className="size-[25px] stroke-[1.6]" />
              </motion.span>
              <motion.span
                className="absolute inset-0 flex items-center justify-center"
                animate={
                  mobileMenuOpen
                    ? { opacity: 1, rotate: 0, scale: 1 }
                    : { opacity: 0, rotate: 24, scale: 0.84 }
                }
                transition={{
                  duration: reduceMotion ? 0.1 : 0.28,
                  delay: reduceMotion || !mobileMenuOpen ? 0 : 0.06,
                  ease: menuEase
                }}
              >
                <X className="size-[25px] stroke-[1.6]" />
              </motion.span>
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence initial={false}>
        {mobileMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            key="mobile-navigation"
            initial="closed"
            animate="open"
            exit="closed"
            variants={
              reduceMotion ? reducedMobileMenuVariants : mobileMenuVariants
            }
            className="fixed inset-0 z-[60] h-[100dvh] overflow-y-auto bg-[#f5f5f7] pb-[env(safe-area-inset-bottom)] lg:hidden"
          >
            <nav
              ref={mobileMenuNavRef}
              aria-label="Mobile navigation"
              className="px-10 pb-12 pt-[calc(env(safe-area-inset-top)+6.75rem)] sm:px-11"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Helvetica, Arial, sans-serif"
              }}
            >
              <motion.ul
                variants={reduceMotion ? undefined : mobileMenuListVariants}
                className="space-y-6 sm:space-y-7"
              >
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <motion.li
                      key={item.href}
                      variants={
                        reduceMotion ? undefined : mobileMenuItemVariants
                      }
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => closeMobileMenu(false)}
                        className={cn(
                          "inline-flex min-h-11 items-center text-[2rem] font-semibold leading-[1.12] tracking-[-0.025em] text-[#1d1d1f] transition-[color,opacity] duration-200 active:opacity-55 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-[#f5f5f7] sm:text-[2.25rem]",
                          active && "text-primary"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
