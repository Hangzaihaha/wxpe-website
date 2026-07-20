import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const solutionTiles = [
  {
    title: "Battery Energy Storage",
    description: "Storage for cost control, resilience and site-level energy management.",
    image: "/assets/energy/bess-container-site-01.jpg",
    imageAlt: "Aerial view of a containerized battery energy storage facility",
    href: "/solutions#battery-storage"
  },
  {
    title: "Solar Hybrid Microgrids",
    description: "Solar, storage and intelligent controls for resilient site operation.",
    image: "/assets/energy/solar-storage-reference-01.jpg",
    imageAlt: "Rooftop and carport solar arrays at an industrial complex",
    href: "/solutions#solar-hybrid"
  },
  {
    title: "Flexible Energy Deployment Models",
    description: "Zero-CAPEX, EMC/PPA, leasing and lifecycle-support pathways.",
    image: "/assets/energy/bess-project-aerial-01.jpg",
    imageAlt: "Battery energy storage containers and substation at sunset",
    href: "/solutions#energy-deployment"
  },
  {
    title: "Electric Mobility",
    description: "Commercial electric tricycles for local logistics and site operations.",
    image: "/assets/mobility/ev-tricycle-homepage.webp",
    imageAlt: "Commercial electric tricycles for local logistics and site operations",
    href: "/mobility"
  }
] as const;

export function HomeSolutionsSection() {
  return (
    <section id="solutions" className="border-b border-border bg-background py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Solutions at a Glance"
            description="Four focused pathways for energy performance, resilient infrastructure and local electrification."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {solutionTiles.map((tile, index) => (
            <Reveal key={tile.title} delay={index * 0.045}>
              <Link
                href={tile.href}
                className="group relative block aspect-[16/10] overflow-hidden rounded-lg border border-[#d2dee6] bg-[#07111f] shadow-[0_18px_54px_rgba(11,18,32,0.08)] transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_26px_68px_rgba(11,18,32,0.13)]"
              >
                <Image
                  src={tile.image}
                  alt={tile.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.03)_26%,rgba(7,17,31,0.82)_100%)]" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-white md:p-7">
                  <div className="max-w-md">
                    <h3 className="text-xl font-semibold leading-tight md:text-2xl">
                      {tile.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/76">
                      {tile.description}
                    </p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-white/35 bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-[#07111f]">
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
