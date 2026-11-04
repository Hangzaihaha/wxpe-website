import Link from "next/link";

import { WxpeLogo } from "@/components/wxpe-logo";
import { navItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-[#07111f] px-5 py-10 text-white md:py-12">
      <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-start">
        <div>
          <WxpeLogo inverted />
          <p className="mt-3 max-w-md text-sm leading-7 text-white/68">
            Localized Energy Storage, Microgrid and Digital Energy Solutions.
          </p>
          <p className="mt-5 text-sm leading-6 text-white/68">
            Part of the WXP Group ecosystem
          </p>
          <a
            href="https://wxpgroup.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 underline decoration-white/30 underline-offset-4 outline-none transition-colors hover:text-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#07111f]"
          >
            Visit WXP Group Website <span aria-hidden="true">↗</span>
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/68 outline-none transition-colors hover:text-white focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#07111f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
