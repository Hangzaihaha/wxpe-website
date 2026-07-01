import Image from "next/image";

import { Reveal } from "@/components/reveal";

const energyTiles = [
  {
    title: "Localized Energy Storage for Malaysia",
    description:
      "Battery storage, EMS and solar hybrid systems for industrial and commercial sites.",
    image: "/assets/energy/bess-project-aerial-01.jpg",
    keywords: ["BESS", "EMS", "Peak Shaving", "Solar Hybrid"]
  },
  {
    title: "Solar Hybrid Microgrid Solutions",
    description:
      "PV, BESS, EMS and site loads coordinated for resilient energy operation.",
    image: "/assets/energy/solar-hybrid-microgrid.jpg",
    keywords: ["PV", "BESS", "EMS", "Microgrid"]
  },
  {
    title: "Flexible Energy Deployment Models",
    description:
      "EMC, PPA, leasing and zero-CAPEX pathways for lower project risk.",
    image: "/assets/energy/microgrid-reference-01.jpg",
    keywords: ["Zero CAPEX", "EMC / PPA", "Leasing", "Long-Term Operation"]
  }
] as const;

export function EnergyVisualSection() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-28">
      <div className="container flex flex-col gap-8 md:gap-10">
        {energyTiles.map((tile, index) => {
          return (
            <Reveal key={tile.title} delay={index * 0.06}>
              <article className="group relative min-h-[520px] w-full overflow-hidden rounded-lg border border-[#d2dee6] bg-[#07111f] shadow-[0_28px_86px_rgba(11,18,32,0.13)] md:min-h-[620px] lg:left-1/2 lg:w-[86vw] lg:max-w-[1320px] lg:-translate-x-1/2">
                {/*
                  Temporary reference visual extracted from supplied PDF materials.
                  Replace with approved WXPE project/product photos when available.
                */}
                <Image
                  src={tile.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 86vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.82)_0%,rgba(7,17,31,0.46)_42%,rgba(7,17,31,0.06)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(7,17,31,0)_0%,rgba(7,17,31,0.34)_100%)]" />

                <div className="relative z-10 flex min-h-[520px] items-end p-6 md:min-h-[620px] md:p-10 lg:p-12">
                  <div className="max-w-xl text-white">
                    <h2 className="text-balance text-3xl font-semibold leading-tight md:text-[2.75rem]">
                      {tile.title}
                    </h2>
                    <p className="mt-5 max-w-lg text-sm leading-7 text-white/76 md:text-base">
                      {tile.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/66">
                      {tile.keywords.map((keyword) => (
                        <span key={keyword}>{keyword}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
