import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProjectMediaReveal } from "@/components/projects/project-motion";
import { Reveal } from "@/components/reveal";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-preview-title"
      className="scroll-mt-[72px] border-b border-border bg-white pb-[70px] pt-14 md:pb-28 md:pt-20"
    >
      <div className="container grid items-center gap-[42px] md:gap-12 lg:grid-cols-[minmax(300px,0.78fr)_minmax(0,1.22fr)] lg:gap-16 xl:gap-20">
        <div className="max-w-xl">
          <Reveal>
            <p className="home-eyebrow">
              Projects
            </p>
            <h2
              id="projects-preview-title"
              className="mt-[18px] text-balance text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.03em] text-foreground sm:mt-5 sm:text-5xl lg:text-[3.5rem]"
            >
              Proven Energy Applications
            </h2>
            <p className="mt-[21px] max-w-lg text-base leading-8 text-muted-foreground md:mt-6">
              Explore selected references across battery storage, solar hybrid
              systems, commercial energy applications and charging
              infrastructure.
            </p>
            <Link
              href="/projects"
              className="home-cta group mt-7 md:mt-8"
            >
              Explore Projects
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>
        </div>

        <figure className="min-w-0">
        <ProjectMediaReveal className="home-media group relative aspect-[16/10] bg-[#dce5eb] shadow-[0_24px_64px_rgba(11,18,32,0.11)] md:aspect-[16/9] lg:aspect-[5/4]">
          <Link
            href="/projects#utility-scale-storage"
            aria-label="Explore WXPE battery storage project references"
            className="absolute inset-0 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
          >
            <Image
              src="/assets/projects/references/grid-side-storage-100mw-200mwh.webp"
              alt="Grid-side battery storage installation"
              fill
              sizes="(min-width: 1280px) 690px, (min-width: 1024px) 58vw, calc(100vw - 40px)"
              className="object-cover object-center transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]"
            />
          </Link>
        </ProjectMediaReveal>
        <figcaption className="mt-5 border-t border-border pt-5">
          <h3 className="text-lg font-semibold text-[#0b1f33]">Grid-Side Battery Storage</h3>
          <dl className="mt-3 grid gap-3 text-sm leading-6 sm:grid-cols-[0.7fr_1.3fr] sm:gap-6">
            <div><dt className="text-muted-foreground">Capacity</dt><dd className="font-semibold tabular-nums">100 MW / 200 MWh</dd></div>
            <div><dt className="text-muted-foreground">Scope</dt><dd>Grid-side balancing and dispatch support</dd></div>
          </dl>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">Technology partner and ecosystem reference; not a WXPE-owned or WXPE-delivered project.</p>
        </figcaption>
        </figure>
      </div>
    </section>
  );
}
