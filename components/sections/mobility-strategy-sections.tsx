import {
  ArrowRight,
  BatteryCharging,
  Factory,
  Network,
  Truck,
  Wrench
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";

const ecosystemSteps = [
  { title: "EVMobii Vehicles", icon: Truck },
  { title: "Battery Technology Capability", icon: BatteryCharging },
  { title: "Local Battery Pack Development", icon: Factory },
  { title: "Malaysia Assembly & Service Capability", icon: Wrench },
  { title: "Future Integration with Energy Storage Solutions", icon: Network }
] as const;

const transitionSteps = [
  { number: "01", title: "EVMobii Mobility" },
  { number: "02", title: "Battery Expertise" },
  { number: "03", title: "Energy Storage Capability" },
  { number: "04", title: "Solar & Microgrid Integration" }
] as const;

const strategicPillars = [
  {
    number: "01",
    title: "Built for Malaysia",
    description:
      "Commercial electric mobility shaped for Malaysian industrial sites, logistics routes and local operations."
  },
  {
    number: "02",
    title: "Built on Manufacturing Experience",
    description:
      "Grounded in WXPE's Malaysian manufacturing heritage, engineering discipline and service capability."
  },
  {
    number: "03",
    title: "Connected with Energy Transition",
    description:
      "Shared battery capability connects EVMobii mobility with storage, solar and microgrid solutions."
  }
] as const;

export function MobilityEcosystemSection() {
  return (
    <section
      aria-labelledby="evmobii-ecosystem-title"
      className="border-b border-border bg-background py-20 md:py-28"
    >
      <div className="container">
        <Reveal className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <h2
            id="evmobii-ecosystem-title"
            className="text-balance text-3xl font-semibold leading-tight text-foreground md:text-[2.75rem]"
          >
            EVMobii Ecosystem
          </h2>
          <p className="max-w-3xl text-base leading-8 text-muted-foreground lg:justify-self-end">
            Beyond vehicles, WXPE is developing EVMobii Malaysia as a localized
            electric mobility ecosystem integrating vehicle technology, battery
            capability, local assembly and future energy solutions.
          </p>
        </Reveal>

        <div className="mt-12 grid overflow-hidden rounded-xl border border-[#c8d6df] bg-white shadow-[0_18px_54px_rgba(11,18,32,0.06)] sm:grid-cols-2 lg:grid-cols-5">
          {ecosystemSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.title}
                delay={index * 0.045}
                className="group relative border-b border-[#c8d6df] last:border-b-0 sm:even:border-l sm:even:border-[#c8d6df] lg:border-b-0 lg:border-l lg:first:border-l-0"
              >
                <article className="relative min-h-[210px] px-5 py-7 transition-colors duration-500 hover:bg-[#f5f9fc] lg:min-h-[248px] lg:px-6 lg:py-8">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 motion-safe:group-hover:scale-x-100"
                  />
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold tracking-[0.12em] text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex size-10 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.045] text-primary transition-colors duration-300 group-hover:border-primary/35 group-hover:bg-primary/[0.08]">
                      <Icon
                        aria-hidden="true"
                        className="size-5 stroke-[1.5]"
                      />
                    </span>
                  </div>
                  <h3 className="mt-16 max-w-[12rem] text-lg font-semibold leading-7 text-foreground lg:mt-20">
                    {step.title}
                  </h3>
                  {index < ecosystemSteps.length - 1 ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 bg-white p-1 text-primary transition-transform duration-300 motion-safe:group-hover:translate-x-1 lg:block"
                    />
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.12}>
          <p className="mt-7 max-w-3xl border-l-2 border-accent pl-5 text-sm leading-7 text-muted-foreground md:text-base">
            Building battery capabilities supporting both EVMobii electric
            mobility and stationary energy solutions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyEVMobiiSection() {
  return (
    <section
      aria-labelledby="why-evmobii-title"
      className="border-b border-border bg-background py-20 md:py-24"
    >
      <div className="container">
        <Reveal>
          <h2
            id="why-evmobii-title"
            className="text-3xl font-semibold leading-tight text-foreground md:text-[2.65rem]"
          >
            Why EVMobii
          </h2>
        </Reveal>

        <div className="mt-10 grid border-y border-[#c8d6df] lg:grid-cols-3">
          {strategicPillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 0.055}
              className="group border-b border-[#c8d6df] last:border-b-0 lg:border-b-0 lg:border-l lg:first:border-l-0"
            >
              <article className="px-1 py-8 transition-colors duration-500 hover:bg-[#f7fafc] sm:px-6 lg:min-h-[255px] lg:px-9 lg:py-9">
                <div className="flex items-center gap-4">
                  <p className="text-[2.75rem] font-light leading-none tracking-[-0.04em] text-primary/75">
                    {pillar.number}
                  </p>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-[#c8d6df]"
                  />
                </div>
                <h3 className="mt-9 max-w-sm text-xl font-semibold leading-8 text-foreground md:text-[1.35rem]">
                  {pillar.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground md:text-[0.95rem] md:leading-7">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Link
            href="/about"
            className="mt-7 inline-flex text-sm font-semibold text-primary transition-colors hover:text-foreground"
          >
            Explore WXPE&apos;s manufacturing foundation →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function MobilityEnergyTransitionSection() {
  return (
    <section
      aria-labelledby="mobility-energy-transition-title"
      className="border-b border-border bg-[#f3f6f8] py-20 md:py-28"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
          <Reveal>
            <span className="block h-1 w-14 bg-accent" aria-hidden="true" />
            <h2
              id="mobility-energy-transition-title"
              className="mt-7 text-balance text-3xl font-semibold leading-tight text-foreground md:text-[2.75rem]"
            >
              From Mobility to Energy Transition
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              WXPE is building battery capabilities supporting both EVMobii
              electric mobility and stationary energy solutions, leveraging
              shared battery technology expertise across mobility and energy
              storage applications. Explore WXPE&apos;s{" "}
              <Link
                href="/solutions#battery-storage"
                className="font-medium text-foreground underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary"
              >
                battery energy storage
              </Link>{" "}
              and{" "}
              <Link
                href="/solutions#solar-hybrid"
                className="font-medium text-foreground underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary"
              >
                solar and microgrid
              </Link>{" "}
              capabilities.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <figure className="group">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-[#d2dee6] bg-white shadow-[0_20px_60px_rgba(11,18,32,0.08)] transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_72px_rgba(11,18,32,0.13)] motion-reduce:hover:translate-y-0">
                <Image
                  src="/assets/energy/industrial-bess-reference-01.jpg"
                  alt="Battery energy storage system supporting WXPE energy applications"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]"
                />
              </div>
              <figcaption className="mt-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                <span className="h-px w-8 bg-primary/45" aria-hidden="true" />
                Shared capability across mobility and energy
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <ol className="mt-14 grid border-y border-[#c8d6df] lg:grid-cols-4">
          {transitionSteps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 0.045}
              className="group border-b border-[#c8d6df] last:border-b-0 lg:border-b-0 lg:border-l lg:first:border-l-0"
            >
              <li className="relative min-h-[144px] px-1 py-7 transition-colors duration-500 hover:bg-white/75 sm:px-6 lg:min-h-[180px] lg:px-8 lg:py-8">
                <p className="text-xs font-semibold tracking-[0.16em] text-primary/75">
                  {step.number}
                </p>
                <h3 className="mt-8 max-w-[13rem] text-lg font-semibold leading-7 text-foreground">
                  {step.title}
                </h3>
                {index < transitionSteps.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -right-2 top-1/2 z-10 hidden size-4 -translate-y-1/2 bg-[#f3f6f8] text-primary/65 transition-transform duration-300 motion-safe:group-hover:translate-x-1 lg:block"
                  />
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
