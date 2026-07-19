"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BatteryCharging,
  ChevronDown,
  Gauge,
  HandCoins,
  Menu,
  Network
} from "lucide-react";

import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WxpeLogo } from "@/components/wxpe-logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

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

export function SiteHeader() {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash);

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white/90 shadow-[0_8px_28px_rgba(11,18,32,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1220px] items-center gap-5 px-4 py-4 sm:px-5">
        <WxpeLogo priority />

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

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="ml-auto lg:hidden"
              aria-label="Open menu"
            >
              <Menu data-icon="inline-start" aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="text-lg font-semibold text-foreground">
              WXPE
            </SheetTitle>
            <div className="mt-10 flex flex-col gap-6">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "border-b border-border pb-4 text-base transition-colors hover:text-foreground",
                      isActive(item.href)
                        ? "font-semibold text-foreground"
                        : "font-medium text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
