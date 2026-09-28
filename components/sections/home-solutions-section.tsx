import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";

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
  image: "/assets/mobility/evmobii-mobility-branded.webp",
  imageAlt:
    "WXPE EVMobii electric cargo tricycle for commercial mobility in Malaysia",
  href: "/mobility"
} as const;

type SolutionTile =
  | (typeof energyTransitionTiles)[number]
  | typeof mobilityTransitionTile;

function FeatureRow({
  tile,
  eyebrow,
  reverse = false
}: {
  tile: SolutionTile;
  eyebrow: string;
  reverse?: boolean;
}) {
  const titleId = `${tile.href === "/mobility" ? "mobility" : "energy"}-transition-title`;

  return (
    <section
      aria-labelledby={titleId}
      className={`grid items-center gap-7 md:gap-10 min-[1200px]:gap-10 min-[1440px]:gap-20 min-[1800px]:gap-[5.5rem] ${
        reverse
          ? "min-[1200px]:grid-cols-[minmax(360px,2fr)_minmax(0,3fr)]"
          : "min-[1200px]:grid-cols-[minmax(0,3fr)_minmax(360px,2fr)]"
      }`}
    >
      <Reveal
        distance={10}
        duration={0.56}
        className={`order-2 ${reverse ? "min-[1200px]:order-2" : "min-[1200px]:order-1"}`}
      >
        <Link
          href={tile.href}
          aria-label={`Explore ${tile.title}`}
          className="home-media relative block aspect-[16/9] w-full border border-[#d5e0e7] bg-[#e8eef2] shadow-[0_18px_50px_rgba(11,31,51,0.075)] outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
        >
          <Image
            src={tile.image}
            alt={tile.imageAlt}
            fill
            sizes="(min-width: 1776px) 995px, (min-width: 1440px) 790px, (min-width: 1200px) 63vw, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
            className="object-cover object-center"
          />
        </Link>
      </Reveal>

      <Reveal
        distance={10}
        duration={0.56}
        delay={0.05}
        className={`order-1 ${reverse ? "min-[1200px]:order-1" : "min-[1200px]:order-2"}`}
      >
        <div
          className={`max-w-xl min-[1200px]:max-w-md ${
            reverse ? "min-[1200px]:ml-auto" : ""
          }`}
        >
          <p className="home-eyebrow">
            {eyebrow}
          </p>
          <h3
            id={titleId}
            className="mt-[14px] text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#0b1f33] sm:mt-4 sm:text-[2.4rem] lg:text-[2.65rem]"
          >
            {tile.href === "/mobility" ? (
              <>
                <span className="block">EVMobii</span>{" "}
                <span className="mt-2 block text-[1.35rem] font-medium leading-tight tracking-[-0.015em] sm:text-[1.75rem] lg:text-[1.85rem]">
                  Commercial Electric Mobility
                </span>
              </>
            ) : tile.title}
          </h3>
          <p className="mt-[18px] text-[0.9375rem] leading-7 text-[#475569] sm:hidden">
            {tile.mobileDescription}
          </p>
          <p className="mt-5 hidden text-base leading-8 text-[#475569] sm:block">
            {tile.description}
          </p>
          <Link
            href={tile.href}
            className="home-cta group mt-6 sm:mt-7"
          >
            {tile.href === "/mobility" ? "Explore Mobility" : "Explore Solution"}
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function SupportingSolution({ tile }: { tile: SolutionTile }) {
  return (
    <Reveal distance={10} duration={0.54}>
      <Link
        href={tile.href}
        className="group block border-t border-[#cbd8e1] pt-[21px] sm:pt-6 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
      >
        <div className="home-media relative aspect-[16/9] border border-[#d5e0e7] bg-[#e8eef2] shadow-[0_14px_40px_rgba(11,31,51,0.055)]">
          <Image
            src={tile.image}
            alt={tile.imageAlt}
            fill
            sizes="(min-width: 1024px) 570px, calc(100vw - 40px)"
            className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]"
          />
        </div>
        <div className="mt-[21px] sm:mt-6">
          <div className="max-w-lg">
            <h3 className="text-balance text-xl font-semibold leading-tight tracking-[-0.02em] text-[#0b1f33] sm:text-2xl">
              {tile.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#475569] sm:hidden">
              {tile.mobileDescription}
            </p>
            <p className="mt-3 hidden text-[0.9375rem] leading-7 text-[#475569] sm:block">
              {tile.description}
            </p>
          </div>
          <span className="home-cta mt-5">Explore Solution <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5" /></span>
        </div>
      </Link>
    </Reveal>
  );
}

export function HomeSolutionsSection() {
  const [batteryStorageTile, ...supportingEnergyTiles] = energyTransitionTiles;

  return (
    <section
      id="solutions"
      className="scroll-mt-[72px] border-b border-border bg-white pb-14 pt-[70px] sm:pb-20 sm:pt-24 md:pb-20 md:pt-32"
    >
      <div className="container">
        <Reveal distance={10} duration={0.58}>
          <header className="max-w-[57rem]">
            <h2 className="text-[clamp(1.75rem,7.7vw,2.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#0b1f33] sm:text-balance sm:text-[3rem] sm:leading-[1.06] md:text-[3.5rem]">
              <span className="block sm:inline">Two Transitions.</span>{" "}<span className="block sm:inline">One Localized</span>{" "}<span className="block sm:inline">Technology Platform.</span>
            </h2>
            <p className="mt-[21px] max-w-3xl text-base leading-7 text-[#475569] sm:mt-6 sm:text-lg sm:leading-8">
              WXPE combines energy technology, manufacturing experience and local
              deployment capability to support Malaysia&apos;s clean technology
              transition.
            </p>
          </header>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 w-[calc(100%_-_2.5rem)] max-w-[1680px] space-y-[70px] sm:mt-20 sm:space-y-24 md:mt-24 md:w-[calc(100%_-_4rem)] md:space-y-28 min-[1200px]:space-y-40 min-[1440px]:w-[calc(100%_-_6rem)] min-[1776px]:w-full">
        <FeatureRow
          tile={batteryStorageTile}
          eyebrow="Energy Transition"
        />
        <FeatureRow
          tile={mobilityTransitionTile}
          eyebrow="Mobility Transition"
          reverse
        />
      </div>

      <div className="container">
        <div className="mt-[70px] grid gap-12 sm:mt-24 sm:gap-14 lg:grid-cols-2 lg:gap-10">
          {supportingEnergyTiles.map((tile) => (
            <SupportingSolution key={tile.title} tile={tile} />
          ))}
        </div>

        <Reveal distance={8} duration={0.5} className="mt-14 sm:mt-20">
          <p className="border-t border-[#cbd8e1] pt-6 text-center text-xs font-medium uppercase leading-6 tracking-[0.14em] text-[#64748b] sm:text-sm sm:normal-case sm:tracking-[0.04em]">
            Battery capability · Local assembly · Commercial applications
          </p>
        </Reveal>
      </div>
    </section>
  );
}
