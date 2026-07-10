"use client";

import Image from "next/image";
import Link from "next/link";
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
        <Link href="/" className="flex items-center gap-3" aria-label="WXPE home">
          <Image
            src="/assets/brand/wxpe-mark.svg"
            alt=""
            width={36}
            height={36}
            priority
            unoptimized
            className="size-9 shrink-0"
          />
          <span className="text-lg font-semibold tracking-normal text-foreground">
            WXPE
          </span>
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] font-medium text-muted-foreground transition-colors hover:text-foreground xl:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild>
            <Link href="/#contact">Start a Pilot Project</Link>
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
                  <Link
                    href={item.href}
                    className="border-b border-border pb-4 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-2">
                  <Link href="/#contact">Start a Pilot Project</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
