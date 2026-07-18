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
      className="border-b border-border bg-background py-20 md:py-24 lg:py-28"
    >
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-16 xl:gap-24">
        <Reveal className="max-w-xl">
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
            experience and international partnerships to support the delivery of
            battery energy storage, solar, microgrid and electric mobility
            solutions.
          </p>
        </Reveal>

        <ol className="border-t border-[#cbd8e0]">
          {manufacturingCapabilities.map((capability, index) => (
            <li key={capability.title} className="border-b border-[#cbd8e0]">
              <Reveal delay={index * 0.035}>
                <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3 py-7 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-5 md:py-8">
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
