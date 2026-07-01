import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { commercialModels } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export function EnergyServiceSection() {
  return (
    <section id="eaas" className="section-padding border-b border-border bg-[#eef3f6]">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-[#d2dee6] bg-[#07111f] shadow-[0_26px_76px_rgba(11,18,32,0.105)]">
            {/*
              Temporary reference visual extracted from supplied PDF materials.
              Replace with approved WXPE project/product imagery later.
            */}
            <Image
              src="/assets/energy/bess-project-aerial-01.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0)_42%,rgba(7,17,31,0.58)_100%)]" />
            <div className="absolute bottom-0 left-0 max-w-lg p-7 text-white md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Commercial Structure
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-[2.4rem]">
                Flexible Energy Deployment Models
              </h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-col gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Energy-as-a-Service
            </p>
            <p className="mt-5 max-w-xl text-lg leading-9 text-muted-foreground">
              Many industrial and commercial customers prefer lower upfront
              investment and reduced project risk. WXPE can support flexible
              energy models such as EMC, PPA, leasing and Energy-as-a-Service.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {commercialModels.map((model) => (
              <article
                key={model}
                className="rounded-lg border border-[#d2dee6] bg-white p-5 shadow-[0_14px_38px_rgba(11,18,32,0.055)]"
              >
                <CheckCircle2 className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-8 text-base font-semibold leading-6 text-foreground">
                  {model}
                </h3>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
