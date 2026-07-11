import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { companyTimeline, navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About WXPE | From Manufacturing Roots to Digital Energy",
  description:
    "Learn how WXPE combines Malaysian manufacturing discipline, local project coordination and partner-backed technology for digital energy deployment.",
  openGraph: {
    title: "About WXPE | From Manufacturing Roots to Digital Energy",
    description:
      "Malaysian execution capability supporting energy storage, microgrids and electric mobility.",
    images: ["/assets/energy/bess-project-aerial-01.jpg"]
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border bg-background pb-20 pt-[136px] md:pb-28 md:pt-[156px]">
        <div className="container">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              About WXPE
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] text-foreground md:text-[3.75rem]">
              From Manufacturing Roots to Digital Energy
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              WXPE brings Malaysian manufacturing discipline, local project
              coordination and partner-backed technology together for practical
              energy deployment.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 md:mt-16">
            <figure>
              <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-[#cfdae1] bg-[#e7edf1] shadow-[0_26px_72px_rgba(11,18,32,0.11)] md:aspect-[16/7] md:min-h-0">
                <Image
                  src="/assets/energy/bess-project-aerial-01.jpg"
                  alt="Energy storage infrastructure reference at an industrial site"
                  fill
                  priority
                  sizes="(min-width: 1536px) 1180px, calc(100vw - 40px)"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Energy infrastructure reference visual
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-[#f3f6f8] py-20 md:py-28">
        <div className="container">
          <Reveal className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Company Evolution
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-[2.7rem]">
                Capability built step by step.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              Established manufacturing and delivery experience now supports a
              focused transition into localized energy storage, microgrids and
              electric mobility.
            </p>
          </Reveal>

          <div className="mt-12 grid border-y border-[#cbd8e0] md:grid-cols-5">
            {companyTimeline.map((item, index) => {
              const isCurrent = index === companyTimeline.length - 1;

              return (
                <Reveal
                  key={item.year}
                  delay={index * 0.04}
                  className={cn(
                    "relative border-b border-[#cbd8e0] last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0",
                    isCurrent && "bg-[#e8f1f6]"
                  )}
                >
                  <article className="min-h-[210px] px-5 py-7 md:min-h-[260px] md:px-6 md:py-8">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={cn(
                          "text-2xl font-semibold text-primary md:text-[1.8rem]",
                          isCurrent && "text-foreground"
                        )}
                      >
                        {item.year}
                      </span>
                      <span
                        className={cn(
                          "size-2.5 rounded-full bg-[#9eb5c4]",
                          isCurrent && "bg-accent ring-4 ring-white"
                        )}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-9 border-t border-[#cbd8e0] pt-5">
                      <h3 className="text-base font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
          <Reveal>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#cfdae1] bg-[#e7edf1] shadow-[0_20px_56px_rgba(11,18,32,0.09)]">
                <Image
                  src="/assets/energy/industrial-bess-reference-01.jpg"
                  alt="Industrial energy storage infrastructure reference"
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Industrial energy systems reference visual
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Local Capability
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground md:text-[2.55rem]">
              Local execution with an energy focus.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              WXPE applies quality discipline and delivery experience to energy
              projects that require clear coordination, practical localization
              and long-term operating support.
            </p>
            <div className="mt-8 grid gap-4 border-y border-border py-6 sm:grid-cols-3 lg:grid-cols-1">
              {["Project coordination", "Localization pathways", "Lifecycle support"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span className="text-sm font-semibold text-foreground">{item}</span>
                  </div>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

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
