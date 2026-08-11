import Image from "next/image";

import { Reveal } from "@/components/reveal";

export function BatteryManufacturingSection() {
  return (
    <section
      aria-labelledby="battery-manufacturing-title"
      className="border-b border-border bg-[#f3f6f8] py-20 md:py-28"
    >
      <div className="container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
        <Reveal>
          <span className="block h-1 w-14 bg-accent" aria-hidden="true" />
          <h2
            id="battery-manufacturing-title"
            className="mt-7 max-w-xl text-balance text-3xl font-semibold leading-tight text-foreground md:text-[2.75rem]"
          >
            Built on Proven Battery Expertise
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
            Our energy storage solutions are supported by established battery
            manufacturing, integration and engineering capabilities.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#d2dee6] bg-[#dfe6e9] shadow-[0_20px_60px_rgba(11,18,32,0.08)]">
            <Image
              src="/assets/energy/battery-pack-production-clean.webp"
              alt="Large battery packs moving through an advanced manufacturing and integration facility"
              fill
              quality={95}
              sizes="(min-width: 1280px) 650px, (min-width: 1024px) 58vw, calc(100vw - 40px)"
              className="object-cover object-[55%_58%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
