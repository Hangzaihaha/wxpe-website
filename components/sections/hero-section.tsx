import Image from "next/image";

import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-[#e8eef3] pt-[64px] lg:pt-[72px]">
      <div className="relative h-[clamp(31.25rem,72svh,40rem)] sm:h-[clamp(35rem,74svh,43rem)] md:h-[clamp(38.75rem,76svh,45rem)] lg:h-[clamp(42.5rem,76svh,47.5rem)]">
        <Image
          src="/assets/energy/wxpe-energy-hero-clean.png"
          alt="Battery energy storage equipment beside a solar panel installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_bottom] [filter:brightness(1.04)_saturate(1.07)_contrast(1.05)] sm:object-[56%_bottom] md:object-[54%_bottom] lg:object-[50%_bottom]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,248,252,0.26)_0%,rgba(244,248,252,0.13)_34%,rgba(244,248,252,0)_58%)]" />

        <div className="absolute inset-0 z-10 flex items-center pb-16 pt-6 sm:pb-20 sm:pt-8 md:pb-24 md:pt-10">
          <div className="container">
            <Reveal
              distance={10}
              duration={0.58}
              className="flex max-w-[64rem] flex-col gap-6 sm:gap-7 md:gap-8"
            >
              <h1 className="text-balance text-[clamp(2.75rem,7.4vw,3.6rem)] font-semibold leading-[1.01] tracking-[-0.025em] text-[#0b1f33] sm:text-[clamp(3.6rem,6vw,4.45rem)] lg:text-[clamp(4rem,5.2vw,4.75rem)]">
                <span className="block xl:whitespace-nowrap">
                  Localized Energy &amp; Mobility
                </span>
                <span className="block">for Malaysia</span>
              </h1>
              <div className="flex flex-col gap-5 sm:gap-6">
                <p className="max-w-[32rem] text-[0.95rem] leading-6 text-[#334155] sm:hidden">
                  Battery storage, solar hybrid and practical electric mobility
                  for Malaysian industry.
                </p>
                <p className="hidden max-w-[39rem] text-base leading-7 text-[#334155] sm:block sm:text-[1.125rem] sm:leading-8 lg:text-[1.2rem] lg:leading-[1.65]">
                  Battery storage, solar hybrid systems and practical electric
                  mobility solutions for industrial and commercial applications.
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[#07111f] sm:gap-x-4 sm:text-xs sm:tracking-[0.16em]">
                  <span>BESS</span>
                  <span aria-hidden="true" className="text-[#07111f]/55">·</span>
                  <span>Solar Hybrid</span>
                  <span aria-hidden="true" className="text-[#07111f]/55">·</span>
                  <span>Microgrid</span>
                  <span aria-hidden="true" className="text-[#07111f]/55">·</span>
                  <span>EV Mobility</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
