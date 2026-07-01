import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
      "Integrating PV, battery storage, controls and local project delivery.",
    image: "/assets/energy/solar-storage-reference-01.jpg",
    keywords: ["PV + BESS", "Microgrid", "Backup", "Optimization"]
  },
  {
    title: "Energy-as-a-Service",
    description:
      "Flexible EMC, PPA and zero-CAPEX models for customers who want lower investment risk.",
    image: "/assets/energy/microgrid-reference-01.jpg",
    keywords: ["Zero CAPEX", "Lease Model", "PPA", "Demand Management"]
  }
] as const;

export function EnergyVisualSection() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-28">
      <div className="container flex flex-col gap-5">
        {energyTiles.map((tile, index) => {
          const isFeatured = index === 0;
          const articleClassName = isFeatured
            ? "group relative min-h-[560px] w-full overflow-hidden rounded-lg border border-[#d2dee6] bg-[#07111f] shadow-[0_28px_86px_rgba(11,18,32,0.13)] md:min-h-[700px] lg:left-1/2 lg:w-[86vw] lg:max-w-[1320px] lg:-translate-x-1/2"
            : "group relative min-h-[520px] overflow-hidden rounded-lg border border-[#d2dee6] bg-[#07111f] shadow-[0_24px_72px_rgba(11,18,32,0.1)] md:min-h-[620px]";
          const contentClassName = isFeatured
            ? "relative z-10 flex min-h-[560px] items-end p-6 md:min-h-[700px] md:p-10 lg:p-12"
            : "relative z-10 flex min-h-[520px] items-end p-6 md:min-h-[620px] md:p-10 lg:p-12";
          const imageSizes = isFeatured
            ? "(min-width: 1024px) 86vw, 100vw"
            : "(min-width: 1180px) 1180px, 100vw";

          return (
            <Reveal key={tile.title} delay={index * 0.06}>
              <article className={articleClassName}>
                {/*
                  Temporary reference visual extracted from supplied PDF materials.
                  Replace with approved WXPE project/product photos when available.
                */}
                <Image
                  src={tile.image}
                  alt=""
                  fill
                  sizes={imageSizes}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.82)_0%,rgba(7,17,31,0.46)_42%,rgba(7,17,31,0.06)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(7,17,31,0)_0%,rgba(7,17,31,0.34)_100%)]" />

                <div className={contentClassName}>
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
                    <a
                      href={index === 2 ? "#eaas" : index === 1 ? "#microgrid" : "#solutions"}
                      className="mt-8 inline-flex items-center gap-2 border-b border-white/50 pb-1 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:text-white/86"
                    >
                      Explore
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </a>
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
