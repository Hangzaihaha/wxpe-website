import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CategoryNavigation } from "@/components/projects/category-navigation";
import {
  ProjectHeroMedia,
  ProjectMediaReveal
} from "@/components/projects/project-motion";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { WxpeLogo } from "@/components/wxpe-logo";
import { navItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Proven Energy Applications | WXPE",
  description:
    "Selected references across battery storage, commercial energy systems, distributed solar and charging infrastructure.",
  alternates: {
    canonical: "/projects"
  },
  openGraph: {
    title: "Proven Energy Applications | WXPE",
    description:
      "Selected energy application references from within WXPE's wider ecosystem.",
    url: "/projects",
    images: ["/assets/projects/references/utility-storage-hero.webp"]
  }
};

const referenceLabelClassName =
  "text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section
        className="relative isolate min-h-[680px] overflow-hidden border-b border-border pt-[72px] md:min-h-[790px]"
        aria-labelledby="projects-hero-title"
      >
        <ProjectHeroMedia className="absolute inset-0 top-[72px] -z-20">
          <Image
            src="/assets/projects/references/utility-storage-hero.webp"
            alt="Utility-scale battery storage installation at sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </ProjectHeroMedia>
        <div className="absolute inset-0 top-[72px] -z-10 bg-[linear-gradient(90deg,rgba(5,16,30,0.92)_0%,rgba(5,16,30,0.7)_35%,rgba(5,16,30,0.16)_69%,rgba(5,16,30,0)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(180deg,rgba(5,16,30,0),rgba(5,16,30,0.34))]" />

        <div className="container flex min-h-[608px] items-center py-20 md:min-h-[718px] md:py-24">
          <Reveal className="max-w-[700px] text-white">
            <h1
              id="projects-hero-title"
              className="text-balance text-[3.35rem] font-semibold leading-[0.98] tracking-[-0.035em] md:text-[5rem] lg:text-[5.6rem]"
            >
              Proven Energy Applications
            </h1>
            <p className="mt-7 max-w-[610px] text-base leading-8 text-white/[0.82] md:text-xl md:leading-9">
              Selected references across battery storage, commercial energy
              systems, distributed solar and charging infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="sticky top-[72px] z-30">
        <CategoryNavigation />
      </div>

      <section
        id="utility-scale-storage"
        className="scroll-mt-[150px] border-b border-border bg-background py-20 md:py-28"
      >
        <div className="container">
          <Reveal className="max-w-3xl">
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.015em] md:text-[2.9rem]">
              Selected Project References
            </h2>
          </Reveal>

          <article className="mt-12 md:mt-16">
            <ProjectMediaReveal className="group relative aspect-[16/9] rounded-lg bg-[#dce5eb] md:aspect-[16/7]">
              <Image
                src="/assets/projects/references/grid-side-storage-100mw-200mwh.webp"
                alt="Grid-side battery storage installation"
                fill
                sizes="(min-width: 1536px) 1180px, calc(100vw - 40px)"
                className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.018]"
              />
            </ProjectMediaReveal>

            <Reveal delay={0.06}>
              <div className="grid border-b border-border md:grid-cols-[1.2fr_0.62fr_1.18fr]">
                <div className="py-7 md:py-9 md:pr-10">
                  <p className={referenceLabelClassName}>Project Reference</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-[1.9rem]">
                    Grid-Side Battery Storage
                  </h3>
                </div>
                <div className="border-t border-border py-7 md:border-l md:border-t-0 md:px-9 md:py-9">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Verified capacity
                  </p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground md:text-[1.9rem]">
                    100 MW / 200 MWh
                  </p>
                </div>
                <div className="border-t border-border py-7 md:border-l md:border-t-0 md:py-9 md:pl-9">
                  <p className="text-sm leading-7 text-muted-foreground md:text-base">
                    Large-scale storage configured for grid-side balancing and
                    dispatch support.
                  </p>
                </div>
              </div>
            </Reveal>
          </article>

          <div className="mt-16 grid items-start gap-10 lg:mt-24 lg:grid-cols-[1.28fr_0.72fr] lg:gap-8">
            <article>
              <ProjectMediaReveal className="group relative aspect-[4/3] rounded-lg bg-[#dce5eb] md:aspect-[3/2]">
                <Image
                  src="/assets/projects/references/smart-microgrid-storage-50mw-100mwh.webp"
                  alt="Smart microgrid battery storage installation"
                  fill
                  sizes="(min-width: 1024px) 64vw, 100vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
                />
              </ProjectMediaReveal>
              <Reveal delay={0.05} className="pt-7 md:pt-8">
                <p className={referenceLabelClassName}>Selected Application</p>
                <div className="mt-3 flex flex-col justify-between gap-5 border-t border-border pt-5 sm:flex-row sm:items-end">
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight">
                      Smart Microgrid Storage
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                      Integrated storage supporting coordinated microgrid
                      operation.
                    </p>
                  </div>
                  <p className="shrink-0 text-lg font-semibold text-foreground">
                    50 MW / 100 MWh
                  </p>
                </div>
              </Reveal>
            </article>

            <article
              id="ci-energy-storage"
              className="scroll-mt-[160px] lg:pt-24"
            >
              <ProjectMediaReveal
                delay={0.08}
                className="group relative aspect-[4/3] rounded-lg bg-[#dce5eb]"
              >
                <Image
                  src="/assets/projects/references/ci-storage-069mw-139mwh.webp"
                  alt="Commercial and industrial battery storage installation"
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
                />
              </ProjectMediaReveal>
              <Reveal delay={0.1} className="pt-7 md:pt-8">
                <p className={referenceLabelClassName}>Reference Application</p>
                <div className="mt-3 border-t border-border pt-5">
                  <h3 className="text-2xl font-semibold leading-tight">
                    Commercial &amp; Industrial Storage
                  </h3>
                  <p className="mt-3 text-lg font-semibold text-foreground">
                    0.69 MW / 1.39 MWh
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Behind-the-meter storage supporting commercial site energy
                    management.
                  </p>
                </div>
              </Reveal>
            </article>
          </div>
        </div>
      </section>

      <section
        id="distributed-solar"
        className="scroll-mt-[150px] border-b border-border bg-[#eef3f6] py-20 md:py-28"
      >
        <div className="container">
          <ProjectMediaReveal className="group relative aspect-[16/9] rounded-lg bg-[#dce5eb] md:aspect-[16/7]">
            <Image
              src="/assets/projects/references/distributed-solar-184mwp.webp"
              alt="Distributed solar installation across an industrial site"
              fill
              sizes="(min-width: 1536px) 1180px, calc(100vw - 40px)"
              className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.018]"
            />
          </ProjectMediaReveal>

          <Reveal delay={0.06}>
            <div className="grid border-b border-[#cbd7de] md:grid-cols-[1.05fr_0.58fr_1.2fr]">
              <div className="py-7 md:py-9 md:pr-10">
                <p className={referenceLabelClassName}>Selected Application</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-[1.9rem]">
                  Distributed Solar
                </h2>
              </div>
              <div className="border-t border-[#cbd7de] py-7 md:border-l md:border-t-0 md:px-9 md:py-9">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Verified capacity
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.02em]">
                  1.84 MWp
                </p>
              </div>
              <div className="border-t border-[#cbd7de] py-7 md:border-l md:border-t-0 md:py-9 md:pl-9">
                <p className="text-sm leading-7 text-muted-foreground md:text-base">
                  Large-area distributed generation supporting on-site renewable
                  energy use.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="charging-infrastructure"
        className="scroll-mt-[150px] border-b border-border bg-background py-20 md:py-28"
      >
        <div className="container">
          <div className="grid items-stretch overflow-hidden border-y border-border lg:grid-cols-[1.15fr_0.85fr]">
            <ProjectMediaReveal className="group relative min-h-[340px] bg-[#dce5eb] sm:min-h-[430px] lg:min-h-[520px]">
              <Image
                src="/assets/projects/references/public-charging-reference.webp"
                alt="Public charging infrastructure reference"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.02]"
              />
            </ProjectMediaReveal>

            <Reveal className="flex flex-col justify-center py-10 lg:border-l lg:border-border lg:px-12 lg:py-14 xl:px-16">
              <p className={referenceLabelClassName}>Reference Application</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-[2.5rem]">
                Public Charging Infrastructure
              </h2>
              <div className="mt-8 border-t border-border pt-7">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Capacity
                </p>
                <p className="mt-3 text-base font-medium text-foreground">
                  Capacity not stated in source
                </p>
              </div>
              <p className="mt-8 max-w-md text-base leading-8 text-muted-foreground">
                Multi-unit charging infrastructure supporting public and
                commercial access.
              </p>
            </Reveal>
          </div>

          <p className="mt-9 max-w-4xl text-xs leading-6 text-muted-foreground/80 md:text-sm">
            Selected references illustrate relevant technologies, applications
            and delivery experience available within WXPE&apos;s wider ecosystem.
          </p>
        </div>
      </section>

      <section className="bg-[#071a2f] px-5 py-16 text-white md:py-20">
        <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] md:text-[2.6rem]">
              Discuss an energy application
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/55 bg-transparent text-white hover:bg-white hover:text-[#071a2f]"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
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
