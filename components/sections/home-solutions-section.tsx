import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const energyTransitionTiles = [
  {
    title: "Battery Energy Storage Systems",
    description: "Storage for cost control, resilience and site-level energy management.",
    mobileDescription: "Storage for cost control and resilient site operation.",
    image: "/assets/energy/bess-container-site-01.jpg",
    imageAlt: "Aerial view of a containerized battery energy storage facility",
    href: "/solutions#battery-storage"
  },
  {
    title: "Solar Hybrid Microgrids",
    description: "Solar, storage and intelligent controls for resilient site operation.",
    mobileDescription: "Solar, storage and controls for resilient sites.",
    image: "/assets/energy/solar-storage-reference-01.jpg",
    imageAlt: "Rooftop and carport solar arrays at an industrial complex",
    href: "/solutions#solar-hybrid"
  },
  {
    title: "Digital Energy Solutions",
    description:
      "EMS, energy optimization and flexible deployment pathways for coordinated site operation.",
    mobileDescription: "EMS and optimization for coordinated site operation.",
    image: "/assets/energy/microgrid-reference-01.jpg",
    imageAlt: "Digital energy management for coordinated industrial site operation",
    href: "/solutions#digital-energy-management"
  }
] as const;

const mobilityTransitionTile = {
  title: "EVMobii Commercial Electric Mobility",
  description:
    "WXPE's EVMobii electric tricycles for Malaysian industrial logistics, commercial operations and last-mile delivery.",
  mobileDescription: "Commercial electric mobility for Malaysian industry and logistics.",
  image: "/assets/mobility/ev-tricycle-homepage.webp",
  imageAlt:
    "WXPE EVMobii electric cargo tricycle for commercial mobility in Malaysia",
  href: "/mobility"
} as const;

type SolutionTile = (typeof energyTransitionTiles)[number] | typeof mobilityTransitionTile;

function TransitionLabel({ id, children }: { id: string; children: string }) {
  return (
    <div className="flex items-center gap-4">
      <h3
        id={id}
        className="shrink-0 text-sm font-semibold uppercase tracking-[0.16em] text-primary md:text-base"
      >
        {children}
      </h3>
      <span className="h-px flex-1 bg-[#c9d8e3]" aria-hidden="true" />
    </div>
  );
}

function FeaturedSolutionCard({
  tile,
  imageSizes,
  imagePosition
}: {
  tile: SolutionTile;
  imageSizes: string;
  imagePosition?: string;
}) {
  return (
    <Link
      href={tile.href}
      className="group relative block min-h-[430px] overflow-hidden rounded-[1.375rem] border border-[#cbd8e1] bg-brand-navy shadow-[0_20px_54px_rgba(7,17,31,0.09)] outline-none transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_28px_72px_rgba(7,17,31,0.15)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 motion-reduce:hover:translate-y-0 md:min-h-[520px] xl:min-h-[570px]"
    >
      <Image
        src={tile.image}
        alt={tile.imageAlt}
        fill
        sizes={imageSizes}
        className={`object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035] ${imagePosition ?? ""}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.01)_24%,rgba(7,17,31,0.88)_100%)]" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-white md:p-8">
        <div className="max-w-xl">
          <h4 className="text-2xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-[2rem]">
            {tile.title}
          </h4>
          <p className="mt-2.5 max-w-lg text-sm leading-6 text-white/78 sm:hidden">
            {tile.mobileDescription}
          </p>
          <p className="mt-3 hidden max-w-lg text-sm leading-6 text-white/78 sm:block md:text-[0.95rem] md:leading-7">
            {tile.description}
          </p>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="size-6 shrink-0 transition-transform duration-300 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1"
        />
      </div>
    </Link>
  );
}

function SupportingSolutionCard({ tile }: { tile: SolutionTile }) {
  return (
    <Link
      href={tile.href}
      className="group grid min-h-[150px] grid-cols-[7rem_minmax(0,1fr)] overflow-hidden rounded-[1.125rem] border border-[#cbd8e1] bg-white shadow-[0_12px_32px_rgba(7,17,31,0.055)] outline-none transition-[border-color,box-shadow,transform] duration-200 active:scale-[0.985] hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_22px_56px_rgba(7,17,31,0.11)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 motion-reduce:hover:translate-y-0 sm:min-h-[250px] sm:grid-cols-[0.96fr_1.04fr] sm:rounded-[1.375rem] sm:shadow-[0_16px_44px_rgba(7,17,31,0.06)] sm:duration-500 sm:active:scale-100"
    >
      <div className="relative min-h-[150px] overflow-hidden sm:min-h-full">
        <Image
          src={tile.image}
          alt={tile.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex min-h-0 flex-col justify-between gap-4 p-4 sm:min-h-48 sm:gap-8 sm:p-6 md:p-7">
        <div>
          <h4 className="text-base font-semibold leading-[1.2] tracking-[-0.015em] text-foreground sm:text-xl sm:leading-tight md:text-2xl">
            {tile.title}
          </h4>
          <p className="mt-2 text-[0.8125rem] leading-5 text-muted-foreground sm:hidden">
            {tile.mobileDescription}
          </p>
          <p className="mt-3 hidden text-sm leading-6 text-muted-foreground sm:block">
            {tile.description}
          </p>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="ml-auto size-[1.125rem] text-primary transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1 sm:size-5 sm:duration-300"
        />
      </div>
    </Link>
  );
}

export function HomeSolutionsSection() {
  const [batteryStorageTile, ...supportingEnergyTiles] = energyTransitionTiles;

  return (
    <section id="solutions" className="border-b border-border bg-[#f7f9fb] py-12 sm:py-16 md:py-24">
      <div className="container">
        <Reveal>
          <div className="sm:hidden">
            <h2 className="text-balance text-[1.85rem] font-semibold leading-[1.12] tracking-[-0.02em] text-foreground">
              Localized Energy &amp; Mobility
            </h2>
            <p className="mt-3 max-w-xl text-[0.9375rem] leading-6 text-muted-foreground">
              Battery storage, solar hybrid and commercial electric mobility
              for Malaysia.
            </p>
          </div>
          <SectionHeading
            title="Two Transitions. One Localized Technology Platform."
            description="WXPE combines energy technology, manufacturing experience and local deployment capability to support Malaysia's clean technology transition."
            className="hidden max-w-4xl sm:flex"
          />
        </Reveal>

        <div className="mt-8 grid gap-x-6 gap-y-6 sm:mt-12 sm:gap-y-8 lg:grid-cols-12 lg:gap-x-7 lg:gap-y-7">
          <section aria-labelledby="energy-transition-title" className="lg:col-span-7">
            <TransitionLabel id="energy-transition-title">Energy Transition</TransitionLabel>
            <Reveal delay={0.04} className="mt-5">
              <FeaturedSolutionCard
                tile={batteryStorageTile}
                imageSizes="(min-width: 1536px) 680px, (min-width: 1024px) 58vw, 100vw"
              />
            </Reveal>
          </section>

          <section aria-labelledby="mobility-transition-title" className="lg:col-span-5">
            <TransitionLabel id="mobility-transition-title">Mobility Transition</TransitionLabel>
            <Reveal delay={0.1} className="mt-5">
              <FeaturedSolutionCard
                tile={mobilityTransitionTile}
                imageSizes="(min-width: 1536px) 465px, (min-width: 1024px) 42vw, 100vw"
                imagePosition="object-[56%_center]"
              />
            </Reveal>
          </section>

          {supportingEnergyTiles.map((tile, index) => (
            <Reveal
              key={tile.title}
              delay={0.12 + index * 0.05}
              className="lg:col-span-6"
            >
              <SupportingSolutionCard tile={tile} />
            </Reveal>
          ))}

          <Reveal delay={0.2} className="lg:col-span-12">
            <p className="hidden border-t border-[#c9d8e3] pt-5 text-center text-sm font-medium leading-7 tracking-[0.01em] text-primary sm:block">
              Battery capability · Local assembly · Commercial applications
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
