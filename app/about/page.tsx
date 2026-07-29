import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { AboutManufacturingCapabilitySection } from "@/components/sections/about-manufacturing-capability-section";
import { AboutManufacturingEvidenceSection } from "@/components/sections/about-manufacturing-evidence-section";
import { SiteHeader } from "@/components/site-header";
import { WxpeLogo } from "@/components/wxpe-logo";
import { heritageTimeline, navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About WXPE | Clean Energy & EVMobii Mobility Malaysia",
  description:
    "WXPE combines Malaysian manufacturing experience with clean energy solutions and EVMobii, its commercial electric mobility brand for Malaysia.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About WXPE | Clean Energy & EVMobii Mobility Malaysia",
    description:
      "WXPE manufacturing experience supporting clean energy solutions and EVMobii commercial electric mobility in Malaysia.",
    url: "/about",
    images: ["/assets/about/about-hero-energy.webp"]
  }
};

const internationalMarkets = [
  "Malaysia",
  "China",
  "Australia",
  "United States",
  "ASEAN",
  "Europe"
] as const;

const transitionPillars = [
  {
    title: "Energy Transition",
    description:
      "Battery energy storage, solar hybrid microgrids and digital energy solutions for industrial and commercial applications.",
    areas: [
      {
        label: "Battery Energy Storage Systems",
        href: "/solutions#battery-storage"
      },
      {
        label: "Solar Hybrid Microgrids",
        href: "/solutions#solar-hybrid"
      },
      {
        label: "Digital Energy Solutions",
        href: "/solutions#digital-energy-management"
      },
      {
        label: "Flexible Energy Deployment",
        href: "/solutions#energy-deployment"
      }
    ]
  },
  {
    title: "Mobility Transition",
    description:
      "EVMobii commercial electric mobility, battery capability and localized assembly and service development.",
    areas: [
      {
        label: "EVMobii Commercial Electric Mobility",
        href: "/mobility"
      },
      {
        label: "Battery Capability",
        href: "/mobility#evmobii-ecosystem-title"
      },
      {
        label: "Local Assembly & Service",
        href: "/mobility#evmobii-ecosystem-title"
      }
    ]
  }
] as const;

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border bg-background pb-16 pt-[128px] md:pb-20 md:pt-[144px]">
        <div className="container">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About WXPE
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] text-foreground md:text-[3.55rem]">
              30+ Years of Manufacturing Experience.
              <span className="block text-primary">
                Building Malaysia&apos;s Clean Technology Future.
              </span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              WXPE is a Malaysian company combining manufacturing expertise,
              energy technology partnerships and localized deployment capability
              across{" "}
              <Link
                href="/solutions#battery-storage"
                className="font-medium text-foreground underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary"
              >
                Battery Energy Storage Systems
              </Link>
              ,{" "}
              <Link
                href="/solutions#solar-hybrid"
                className="font-medium text-foreground underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary"
              >
                Solar Hybrid Microgrids
              </Link>{" "}
              and{" "}
              <Link
                href="/mobility"
                className="font-medium text-foreground underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary"
              >
                EVMobii commercial electric mobility
              </Link>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 md:mt-12">
            <figure>
              <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-[#cfdae1] bg-[#e7edf1] shadow-[0_24px_64px_rgba(11,18,32,0.1)] md:aspect-[16/7] md:min-h-0">
                <Image
                  src="/assets/about/about-hero-energy.webp"
                  alt="Solar generation and battery storage at an industrial facility"
                  fill
                  priority
                  sizes="(min-width: 1536px) 1180px, calc(100vw - 40px)"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Digital energy infrastructure reference visual
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <AboutManufacturingEvidenceSection />

      <AboutManufacturingCapabilitySection />

      <section className="border-b border-border bg-[#f3f6f8] py-16 md:py-20">
        <div className="container">
          <Reveal className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Heritage Timeline
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-[2.6rem]">
                Industrial foundations. A focused energy future.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground lg:justify-self-end md:text-base md:leading-8">
              This timeline reflects the wider WXP-WSA ecosystem that WXPE builds
              on, from manufacturing origins to the digital-energy transition.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-px border-y border-[#cbd8e0] bg-[#cbd8e0] md:grid-cols-3 lg:grid-cols-6">
            {heritageTimeline.map((item, index) => {
              const isCurrent = index === heritageTimeline.length - 1;

              return (
                <Reveal
                  key={item.year}
                  delay={index * 0.035}
                  className={cn("bg-white", isCurrent && "bg-[#e7f1f6]")}
                >
                  <article className="min-h-[176px] px-5 py-6 lg:min-h-[220px]">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={cn(
                          "text-xl font-semibold text-primary",
                          isCurrent && "text-foreground"
                        )}
                      >
                        {item.year}
                      </span>
                      <span
                        className={cn(
                          "size-2 rounded-full bg-[#9eb5c4]",
                          isCurrent && "bg-accent ring-4 ring-white"
                        )}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-8 border-t border-[#d8e2e8] pt-4 text-sm font-semibold leading-6 text-foreground">
                      {item.title}
                    </h3>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-14 md:py-16">
        <div className="container">
          <Reveal className="max-w-3xl">
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-[2.45rem]">
              International Experience, Local Execution
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              WXPE connects Malaysian delivery capability with international
              cooperation experience across the wider WXP-WSA ecosystem.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-9">
            <div className="grid grid-cols-2 gap-px border-y border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
              {internationalMarkets.map((market) => (
                <div
                  key={market}
                  className="flex min-h-20 items-center bg-white px-4 py-5 text-sm font-semibold text-foreground"
                >
                  {market}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="container">
          <Reveal className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Clean Technology Strategy
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-[2.65rem]">
                Manufacturing Expertise for Two Connected Transitions
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              WXPE applies its industrial foundation, engineering discipline and
              localization strategy across both clean energy and commercial
              electric mobility.
            </p>
          </Reveal>

          <div className="mt-10 grid border-y border-[#c8d6df] lg:grid-cols-2">
            {transitionPillars.map((pillar, index) => (
              <Reveal
                key={pillar.title}
                delay={index * 0.07}
                className={
                  index === 0
                    ? "border-b border-[#c8d6df] lg:border-b-0 lg:pr-12"
                    : "lg:border-l lg:border-[#c8d6df] lg:pl-12"
                }
              >
                <article className="py-10 lg:py-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Pillar {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-foreground md:text-[2rem]">
                    {pillar.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                    {pillar.description}
                  </p>
                  <ul className="mt-7 border-t border-border pt-5">
                    {pillar.areas.map((area) => (
                      <li key={area.label} className="border-b border-border last:border-b-0">
                        <Link
                          href={area.href}
                          className="group flex items-center justify-between gap-4 py-3 text-sm font-semibold text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          {area.label}
                          <ArrowRight
                            className="size-3.5 shrink-0 text-primary/60 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
              >
                Explore Our Solutions
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/mobility"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
              >
                Explore EVMobii
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#07111f] px-5 py-10 text-white md:py-12">
        <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <WxpeLogo inverted />
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
