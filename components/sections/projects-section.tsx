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
      className="scroll-mt-[72px] border-b border-border bg-white pb-20 pt-16 md:pb-28 md:pt-20"
    >
      <div className="container grid items-center gap-12 lg:grid-cols-[minmax(300px,0.78fr)_minmax(0,1.22fr)] lg:gap-16 xl:gap-20">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Projects
            </p>
            <h2
              id="projects-preview-title"
              className="mt-5 text-balance text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.5rem]"
            >
              Proven Energy Applications
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">
              Explore selected references across battery storage, solar hybrid
              systems, commercial energy applications and charging
              infrastructure.
            </p>
            <Link
              href="/projects"
              className="group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-primary/35 pb-2 text-sm font-semibold text-primary transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
            >
              Explore Projects
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <ProjectMediaReveal className="group relative aspect-[16/10] rounded-lg bg-[#dce5eb] shadow-[0_24px_64px_rgba(11,18,32,0.11)] md:aspect-[16/9] lg:aspect-[5/4]">
          <Link
            href="/projects"
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
      </div>
    </section>
  );
}
