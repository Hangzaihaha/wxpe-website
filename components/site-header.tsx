"use client";

import { Menu } from "lucide-react";

import { navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white/90 shadow-[0_8px_28px_rgba(11,18,32,0.05)] backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between gap-5 py-4">
        <a href="#" className="flex items-center gap-3" aria-label="WXPE home">
          <span className="flex size-9 items-center justify-center rounded-md border border-border bg-[#f3f6f8] text-sm font-semibold text-primary">
            W
          </span>
          <span className="text-lg font-semibold tracking-normal text-foreground">
            WXPE
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild>
            <a href="#contact">Start a Pilot Project</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
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
                  <a
                    href={item.href}
                    className="border-b border-border pb-4 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-2">
                  <a href="#contact">Start a Pilot Project</a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
