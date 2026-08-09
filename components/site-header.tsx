"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { WxpeLogo } from "@/components/wxpe-logo";

const menuEase = [0.22, 1, 0.36, 1] as const;
const megaEase = [0.4, 0, 0.6, 1] as const;

const megaMotion = {
  hoverOpenDelay: 130,
  hoverCloseDelay: 140,
  panelMinDuration: 340,
  panelMaxDuration: 440,
  panelCloseDuration: 280,
  contentDelay: 100,
  contentDuration: 320,
  contentCloseDuration: 180,
  itemStagger: 20,
  backdropOpenDuration: 320,
  backdropCloseDuration: 280
} as const;

const solutionMenuItems = [
  {
    title: "Battery Energy Storage",
    href: "/solutions#battery-storage"
  },
  {
    title: "Solar Hybrid & Microgrid",
    href: "/solutions#solar-hybrid"
  },
  {
    title: "EMS & Energy Optimization",
    href: "/solutions#digital-energy-management"
  },
  {
    title: "Energy-as-a-Service",
    href: "/solutions#energy-deployment"
  },
  {
    title: "Mobility",
    href: "/mobility"
  }
] as const;

const exploreMenuItems = [
  { title: "Projects", href: "/projects" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" }
] as const;

type DesktopPanelAnimation = {
  height: number;
  openDuration: number;
  reduceMotion: boolean;
};

const desktopPanelVariants = {
  closed: ({ reduceMotion }: DesktopPanelAnimation) => ({
    height: 0,
    pointerEvents: "none" as const,
    transition: {
      duration: reduceMotion ? 0.01 : megaMotion.panelCloseDuration / 1000,
      ease: megaEase
    },
    transitionEnd: { visibility: "hidden" as const }
  }),
  open: ({
    height,
    openDuration,
    reduceMotion
  }: DesktopPanelAnimation) => ({
    height,
    visibility: "visible" as const,
    pointerEvents: "auto" as const,
    transition: {
      duration: reduceMotion ? 0.01 : openDuration / 1000,
      ease: megaEase
    }
  })
};

const desktopContentVariants = {
  closed: {
    opacity: 0,
    y: -3,
    transition: {
      duration: megaMotion.contentCloseDuration / 1000,
      ease: megaEase
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: megaMotion.contentDelay / 1000,
      duration: megaMotion.contentDuration / 1000,
      delayChildren: megaMotion.contentDelay / 1000,
      staggerChildren: megaMotion.itemStagger / 1000,
      ease: megaEase
    }
  }
} as const;

const desktopItemVariants = {
  closed: {
    opacity: 0,
    y: -4,
    transition: {
      duration: megaMotion.contentCloseDuration / 1000,
      ease: megaEase
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: megaMotion.contentDuration / 1000,
      ease: megaEase
    }
  }
} as const;

const reducedDesktopContentVariants = {
  closed: { opacity: 0, transition: { duration: 0.01 } },
  open: {
    opacity: 1,
    transition: {
      duration: 0.01,
      delayChildren: 0,
      staggerChildren: 0
    }
  }
} as const;

const reducedDesktopItemVariants = {
  closed: { opacity: 0, transition: { duration: 0.01 } },
  open: { opacity: 1, transition: { duration: 0.01 } }
} as const;

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
  const [solutionsPanelHeight, setSolutionsPanelHeight] = useState(0);
  const [solutionsPanelDuration, setSolutionsPanelDuration] = useState<number>(
    megaMotion.panelMinDuration
  );
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuNavRef = useRef<HTMLElement>(null);
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);
  const solutionsPanelContentRef = useRef<HTMLDivElement>(null);
  const suppressNextSolutionsFocusRef = useRef(false);
  const solutionsOpenTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const solutionsCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash);

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(
    () => () => {
      if (solutionsOpenTimerRef.current) {
        clearTimeout(solutionsOpenTimerRef.current);
      }
      if (solutionsCloseTimerRef.current) {
        clearTimeout(solutionsCloseTimerRef.current);
      }
    },
    []
  );

  useLayoutEffect(() => {
    if (!solutionsOpen) {
      return;
    }

    const content = solutionsPanelContentRef.current;
    if (!content) {
      return;
    }

    const measurePanel = () => {
      const height = content.scrollHeight;
      setSolutionsPanelHeight(height);
      setSolutionsPanelDuration(
        Math.min(
          megaMotion.panelMaxDuration,
          Math.max(megaMotion.panelMinDuration, height / 1.5)
        )
      );
    };

    measurePanel();

    if (typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(measurePanel);
    observer.observe(content);
    return () => observer.disconnect();
  }, [solutionsOpen]);

  useEffect(() => {
    if (!solutionsOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (solutionsOpenTimerRef.current) {
          clearTimeout(solutionsOpenTimerRef.current);
          solutionsOpenTimerRef.current = null;
        }
        if (solutionsCloseTimerRef.current) {
          clearTimeout(solutionsCloseTimerRef.current);
          solutionsCloseTimerRef.current = null;
        }
        setSolutionsOpen(false);
        suppressNextSolutionsFocusRef.current = true;
        window.requestAnimationFrame(() => solutionsButtonRef.current?.focus());
      }
    };
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        if (solutionsOpenTimerRef.current) {
          clearTimeout(solutionsOpenTimerRef.current);
          solutionsOpenTimerRef.current = null;
        }
        if (solutionsCloseTimerRef.current) {
          clearTimeout(solutionsCloseTimerRef.current);
          solutionsCloseTimerRef.current = null;
        }
        setSolutionsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [solutionsOpen]);

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

  function clearSolutionsOpenTimer() {
    if (solutionsOpenTimerRef.current) {
      clearTimeout(solutionsOpenTimerRef.current);
      solutionsOpenTimerRef.current = null;
    }
  }

  function clearSolutionsCloseTimer() {
    if (solutionsCloseTimerRef.current) {
      clearTimeout(solutionsCloseTimerRef.current);
      solutionsCloseTimerRef.current = null;
    }
  }

  function clearSolutionsTimers() {
    clearSolutionsOpenTimer();
    clearSolutionsCloseTimer();
  }

  function openSolutionsMenuImmediately() {
    clearSolutionsTimers();
    setSolutionsOpen(true);
  }

  function handleSolutionsFocus() {
    if (suppressNextSolutionsFocusRef.current) {
      suppressNextSolutionsFocusRef.current = false;
      return;
    }

    openSolutionsMenuImmediately();
  }

  function scheduleSolutionsOpen() {
    clearSolutionsCloseTimer();

    if (solutionsOpen || solutionsOpenTimerRef.current) {
      return;
    }

    solutionsOpenTimerRef.current = setTimeout(() => {
      solutionsOpenTimerRef.current = null;
      if (window.innerWidth >= 1024) {
        setSolutionsOpen(true);
      }
    }, megaMotion.hoverOpenDelay);
  }

  function closeSolutionsMenu(restoreFocus = false) {
    clearSolutionsTimers();
    setSolutionsOpen(false);

    if (restoreFocus) {
      suppressNextSolutionsFocusRef.current = true;
      window.requestAnimationFrame(() => solutionsButtonRef.current?.focus());
    }
  }

  function scheduleSolutionsClose() {
    clearSolutionsOpenTimer();
    clearSolutionsCloseTimer();
    solutionsCloseTimerRef.current = setTimeout(() => {
      setSolutionsOpen(false);
      solutionsCloseTimerRef.current = null;
    }, megaMotion.hoverCloseDelay);
  }

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
            : "border-border bg-white/90 shadow-[0_8px_28px_rgba(11,18,32,0.05)] backdrop-blur-xl",
          solutionsOpen &&
            "lg:border-transparent lg:bg-white lg:shadow-none lg:backdrop-blur-none"
        )}
      >
        <div className="mx-auto flex h-[calc(64px+env(safe-area-inset-top))] w-full max-w-[1220px] items-center gap-5 pl-5 pr-[calc(1.25rem+var(--mobile-scrollbar-compensation,0px))] pt-[env(safe-area-inset-top)] lg:h-[72px] lg:px-4 lg:py-4 lg:pt-4 xl:px-5">
          <div
            aria-hidden={mobileMenuOpen ? "true" : undefined}
            onMouseEnter={() => closeSolutionsMenu()}
            onFocusCapture={() => closeSolutionsMenu()}
            onClick={() => closeSolutionsMenu()}
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
                    onMouseEnter={scheduleSolutionsOpen}
                    onMouseLeave={scheduleSolutionsClose}
                    onBlurCapture={(event) => {
                      if (
                        !event.currentTarget.contains(
                          event.relatedTarget as Node | null
                        )
                      ) {
                        scheduleSolutionsClose();
                      }
                    }}
                  >
                    <button
                      ref={solutionsButtonRef}
                      type="button"
                      aria-expanded={solutionsOpen}
                      aria-controls="solutions-mega-panel"
                      onFocus={handleSolutionsFocus}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => {
                        clearSolutionsTimers();
                        setSolutionsOpen((open) => !open);
                      }}
                      className={cn(
                        navLinkClass(active),
                        "flex items-center gap-1.5 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-white",
                        solutionsOpen && "border-foreground/45 text-foreground"
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "size-3.5 transition-transform duration-200",
                          solutionsOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {solutionsOpen ? (
                        <motion.div
                          id="solutions-mega-panel"
                          key="solutions-mega-panel"
                          initial="closed"
                          animate="open"
                          exit="closed"
                          custom={{
                            height: solutionsPanelHeight,
                            openDuration: solutionsPanelDuration,
                            reduceMotion: Boolean(reduceMotion)
                          }}
                          variants={desktopPanelVariants}
                          className="fixed inset-x-0 top-[72px] hidden overflow-hidden bg-white lg:block"
                        >
                          <motion.div
                            ref={solutionsPanelContentRef}
                            variants={
                              reduceMotion
                                ? reducedDesktopContentVariants
                                : desktopContentVariants
                            }
                            className="mx-auto grid w-full max-w-[1220px] grid-cols-[minmax(330px,1.35fr)_minmax(150px,0.65fr)_minmax(240px,0.9fr)] gap-12 px-4 py-11 xl:gap-20 xl:px-5 xl:py-12"
                            style={{
                              fontFamily:
                                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Arial, sans-serif"
                            }}
                          >
                            <section aria-labelledby="mega-solutions-heading">
                              <motion.h2
                                id="mega-solutions-heading"
                                variants={
                                  reduceMotion
                                    ? reducedDesktopItemVariants
                                    : desktopItemVariants
                                }
                                className="text-xs font-medium leading-[1.4] text-[#6e737a]"
                              >
                                Solutions
                              </motion.h2>
                              <ul className="mt-4 space-y-1.5">
                                <motion.li
                                  variants={
                                    reduceMotion
                                      ? reducedDesktopItemVariants
                                      : desktopItemVariants
                                  }
                                >
                                  <Link
                                    href="/solutions"
                                    onClick={() => closeSolutionsMenu()}
                                    className="inline-flex items-center gap-2 py-0.5 text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#0b1220] opacity-[0.88] transition-opacity duration-[160ms] hover:opacity-100 focus-visible:rounded-sm focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 xl:text-[1.625rem]"
                                  >
                                    View All Solutions
                                    <ArrowRight
                                      aria-hidden="true"
                                      className="size-4"
                                    />
                                  </Link>
                                </motion.li>
                                {solutionMenuItems.map((solution) => (
                                  <motion.li
                                    key={solution.href}
                                    variants={
                                      reduceMotion
                                        ? reducedDesktopItemVariants
                                        : desktopItemVariants
                                    }
                                  >
                                    <Link
                                      href={solution.href}
                                      onClick={() => closeSolutionsMenu()}
                                      className="inline-flex py-0.5 text-2xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#0b1220] opacity-[0.88] transition-opacity duration-[160ms] hover:opacity-100 focus-visible:rounded-sm focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 xl:text-[1.625rem]"
                                    >
                                      {solution.title}
                                    </Link>
                                  </motion.li>
                                ))}
                              </ul>
                            </section>

                            <section aria-labelledby="mega-explore-heading">
                              <motion.h2
                                id="mega-explore-heading"
                                variants={
                                  reduceMotion
                                    ? reducedDesktopItemVariants
                                    : desktopItemVariants
                                }
                                className="text-xs font-medium leading-[1.4] text-[#6e737a]"
                              >
                                Explore
                              </motion.h2>
                              <ul className="mt-4 space-y-2">
                                {exploreMenuItems.map((exploreItem) => (
                                  <motion.li
                                    key={exploreItem.href}
                                    variants={
                                      reduceMotion
                                        ? reducedDesktopItemVariants
                                        : desktopItemVariants
                                    }
                                  >
                                    <Link
                                      href={exploreItem.href}
                                      onClick={() => closeSolutionsMenu()}
                                      className="inline-flex py-1 text-[0.9375rem] font-semibold leading-[1.4] text-[#182131] opacity-[0.88] transition-opacity duration-[160ms] hover:opacity-100 focus-visible:rounded-sm focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                                    >
                                      {exploreItem.title}
                                    </Link>
                                  </motion.li>
                                ))}
                              </ul>
                            </section>

                            <section aria-labelledby="mega-mobility-heading">
                              <motion.h2
                                id="mega-mobility-heading"
                                variants={
                                  reduceMotion
                                    ? reducedDesktopItemVariants
                                    : desktopItemVariants
                                }
                                className="text-xs font-medium leading-[1.4] text-[#6e737a]"
                              >
                                Mobility
                              </motion.h2>
                              <motion.div
                                variants={
                                  reduceMotion
                                    ? reducedDesktopItemVariants
                                    : desktopItemVariants
                                }
                              >
                                <Link
                                  href="/mobility"
                                  onClick={() => closeSolutionsMenu()}
                                  className="mt-4 inline-flex py-1 text-base font-semibold leading-[1.4] text-[#182131] opacity-[0.88] transition-opacity duration-[160ms] hover:opacity-100 focus-visible:rounded-sm focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                                >
                                  EVMobii Commercial Electric Mobility
                                </Link>
                              </motion.div>
                              <motion.p
                                variants={
                                  reduceMotion
                                    ? reducedDesktopItemVariants
                                    : desktopItemVariants
                                }
                                className="mt-3 max-w-[280px] text-sm leading-6 text-[#68707b]"
                              >
                                Commercial electric mobility for Malaysian
                                operations.
                              </motion.p>
                            </section>
                          </motion.div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onMouseEnter={() => closeSolutionsMenu()}
                  onFocus={() => closeSolutionsMenu()}
                  className={cn(
                    navLinkClass(active),
                    "focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-white"
                  )}
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
        {solutionsOpen ? (
          <motion.button
            key="solutions-backdrop"
            type="button"
            tabIndex={-1}
            aria-label="Close Solutions menu"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: reduceMotion
                  ? 0.01
                  : megaMotion.backdropOpenDuration / 1000,
                ease: megaEase
              }
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: reduceMotion
                  ? 0.01
                  : megaMotion.backdropCloseDuration / 1000,
                ease: megaEase
              }
            }}
            onClick={() => closeSolutionsMenu()}
            className="fixed inset-x-0 bottom-0 top-[72px] z-[60] hidden cursor-default border-0 bg-[#07111f]/20 p-0 backdrop-blur-[6px] lg:block"
          />
        ) : null}
      </AnimatePresence>

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
