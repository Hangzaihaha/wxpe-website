import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { EnergyServiceSection } from "@/components/sections/energy-service-section";
import { PartnerDeliverySection } from "@/components/sections/localization-section";
import { MicrogridSection } from "@/components/sections/microgrid-section";
import { PainPointsSection } from "@/components/sections/pain-points-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { Reveal } from "@/components/reveal";
import { navItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Energy Solutions | WXPE",
  description:
    "Battery energy storage, peak shaving, solar hybrid microgrids, EMS and flexible Energy-as-a-Service pathways for Malaysian industrial and commercial sites.",
  alternates: {
    canonical: "/solutions"
  },
  openGraph: {
    title: "Energy Solutions | WXPE",
    description:
      "Integrated storage, microgrid, energy-management and flexible deployment solutions.",
    url: "/solutions",
    images: ["/assets/energy/solar-hybrid-microgrid.jpg"]
  }
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border bg-background pb-16 pt-[128px] md:pb-20 md:pt-[144px]">
        <div className="container">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              WXPE Solutions
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] text-foreground md:text-[3.6rem]">
              Integrated Energy Solutions for Industrial and Commercial Sites
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              From battery storage and peak shaving to solar hybrid microgrids,
              intelligent control and flexible commercial models.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 md:mt-12">
            <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-[#cfdae1] bg-[#e7edf1] shadow-[0_24px_64px_rgba(11,18,32,0.1)] md:aspect-[16/7] md:min-h-0">
              <Image
                src="/assets/energy/solar-hybrid-microgrid.jpg"
                alt="Solar hybrid energy infrastructure reference"
                fill
                priority
                sizes="(min-width: 1536px) 1180px, calc(100vw - 40px)"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0)_55%,rgba(7,17,31,0.3)_100%)]" />
            </div>
          </Reveal>
        </div>
      </section>

      <PainPointsSection />
      <SolutionsSection />
      <MicrogridSection />
      <EnergyServiceSection />
      <PartnerDeliverySection />

      <footer className="bg-[#07111f] px-5 py-10 text-white md:py-12">
        <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <div className="text-lg font-semibold text-white">WXPE</div>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/68">
              Localized Energy Storage, Microgrid and Digital Energy Solutions.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/68 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </main>
  );
}
