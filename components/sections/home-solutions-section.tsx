import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const energyTransitionTiles = [
  {
    title: "Battery Energy Storage Systems",
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
    title: "Digital Energy Solutions",
    description:
      "EMS, energy optimization and flexible deployment pathways for coordinated site operation.",
    image: "/assets/energy/microgrid-reference-01.jpg",
    imageAlt: "Digital energy management for coordinated industrial site operation",
    href: "/solutions#digital-energy-management"
  }
] as const;

const mobilityTransitionTile = {
  title: "EVMobii Commercial Electric Mobility",
  description:
    "WXPE's EVMobii electric tricycles for Malaysian industrial logistics, commercial operations and last-mile delivery.",
  image: "/assets/mobility/ev-tricycle-homepage.webp",
  imageAlt:
    "WXPE EVMobii electric cargo tricycle for commercial mobility in Malaysia",
  href: "/mobility"
} as const;

export function HomeSolutionsSection() {
  return (
    <section id="solutions" className="border-b border-border bg-background py-16 md:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            title="Two Transitions. One Localized Technology Platform."
            description="WXPE combines energy technology, manufacturing experience and local deployment capability to support Malaysia's clean technology transition."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.48fr_0.82fr] lg:gap-10">
          <section aria-labelledby="energy-transition-title">
            <div className="flex items-center gap-5">
              <h3
                id="energy-transition-title"
                className="shrink-0 text-xl font-semibold text-foreground md:text-2xl"
              >
                Energy Transition
              </h3>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {energyTransitionTiles.map((tile, index) => (
                <Reveal
                  key={tile.title}
                  delay={index * 0.045}
                  className={index === 0 ? "sm:col-span-2" : undefined}
                >
                  <Link
                    href={tile.href}
                    className={`group relative block overflow-hidden rounded-lg border border-[#d2dee6] bg-[#07111f] shadow-[0_18px_54px_rgba(11,18,32,0.08)] transition-[border-color,box-shadow] hover:border-primary/35 hover:shadow-[0_24px_64px_rgba(11,18,32,0.12)] ${
                      index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={tile.image}
                      alt={tile.imageAlt}
                      fill
                      sizes={
                        index === 0
                          ? "(min-width: 1024px) 62vw, 100vw"
                          : "(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw"
                      }
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.02)_30%,rgba(7,17,31,0.86)_100%)]" />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 text-white md:p-6">
                      <div className="max-w-lg">
                        <h4 className="text-lg font-semibold leading-tight md:text-xl">
                          {tile.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-white/76">
                          {tile.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>

          <section
            aria-labelledby="mobility-transition-title"
            className="lg:border-l lg:border-border lg:pl-10"
          >
            <div className="flex items-center gap-5">
              <h3
                id="mobility-transition-title"
                className="shrink-0 text-xl font-semibold text-foreground md:text-2xl"
              >
                Mobility Transition
              </h3>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>

            <Reveal delay={0.08} className="mt-6">
              <Link
                href={mobilityTransitionTile.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-lg border border-[#d2dee6] bg-[#07111f] shadow-[0_18px_54px_rgba(11,18,32,0.08)] transition-[border-color,box-shadow] hover:border-primary/35 hover:shadow-[0_24px_64px_rgba(11,18,32,0.12)]"
              >
                <Image
                  src={mobilityTransitionTile.image}
                  alt={mobilityTransitionTile.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.02)_28%,rgba(7,17,31,0.88)_100%)]" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white md:p-7">
                  <div className="max-w-sm">
                    <h4 className="text-xl font-semibold leading-tight md:text-2xl">
                      {mobilityTransitionTile.title}
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-white/76">
                      {mobilityTransitionTile.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </Link>
              <p className="mt-5 border-t border-border pt-4 text-sm font-medium leading-7 text-muted-foreground">
                Battery capability · Local assembly · Commercial applications
              </p>
            </Reveal>
          </section>
        </div>
      </div>
    </section>
  );
}
