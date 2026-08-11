import Image from "next/image";

import { Reveal } from "@/components/reveal";

const manufacturingCapabilities = [
  {
    title: "Local Manufacturing Base",
    description:
      "Supported by WXPE’s manufacturing operations and local presence in Selangor, Malaysia."
  },
  {
    title: "OEM & Supply-Chain Experience",
    description:
      "Experience in sourcing, supplier coordination, quality control and industrial delivery."
  },
  {
    title: "Energy System Integration",
    description:
      "Coordination of battery energy storage, solar, power electronics, controls and supporting electrical systems."
  },
  {
    title: "International Partnerships",
    description:
      "Collaboration with established technology and equipment partners across the energy value chain."
  },
  {
    title: "Local Delivery & Service Support",
    description:
      "Local coordination for installation, commissioning, maintenance and after-sales support."
  }
] as const;

export function AboutManufacturingCapabilitySection() {
  return (
    <section
      aria-labelledby="manufacturing-capability-heading"
      className="border-b border-border bg-background py-16 md:py-20 lg:py-24"
    >
      <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-14 xl:gap-20">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Foundation
            </p>
            <h2
              id="manufacturing-capability-heading"
              className="mt-4 text-balance text-3xl font-semibold leading-[1.14] text-foreground md:text-[2.65rem]"
            >
              Manufacturing Capability Built for Energy
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              WXPE combines Malaysian manufacturing heritage, OEM supply-chain
              experience and international partnerships to support the delivery
              of battery energy storage, solar, microgrid and electric mobility
              solutions.
            </p>
          </div>

          <div className="relative mt-9 aspect-[4/3] overflow-hidden rounded-xl border border-[#d2dee6] bg-[#e3eaee] shadow-[0_20px_54px_rgba(11,18,32,0.08)] md:mt-10">
            <Image
              src="/assets/about/manufacturing-automation-line.webp"
              alt="Automated manufacturing line and production equipment at a Malaysian industrial facility"
              fill
              quality={95}
              sizes="(min-width: 1280px) 470px, (min-width: 1024px) 38vw, calc(100vw - 40px)"
              className="object-cover object-[50%_64%]"
            />
          </div>
        </Reveal>

        <ol className="border-t border-[#cbd8e0]">
          {manufacturingCapabilities.map((capability, index) => (
            <li key={capability.title} className="border-b border-[#cbd8e0]">
              <Reveal delay={index * 0.035}>
                <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3 py-6 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-5 md:py-7">
                  <span className="pt-1 text-xs font-semibold tabular-nums tracking-[0.16em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-foreground md:text-xl">
                      {capability.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
