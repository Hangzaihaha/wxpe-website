import Image from "next/image";

import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-[#071827] pt-[64px] lg:pt-[72px]">
      <div className="relative h-[calc(72svh-64px)] min-h-[500px] sm:h-[calc(76svh-64px)] sm:min-h-[560px] md:h-[calc(78svh-64px)] md:min-h-[620px] lg:h-[calc(78svh-72px)] lg:min-h-[700px]">
        {/*
          Approved temporary hero image. Replace with clean WXPE-owned project
          photography or video when available, then revisit the composition.
        */}
        <Image
          src="/assets/energy/wxpe-branded-energy-hero.png"
          alt="WXPE-branded battery energy storage beside solar panels"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_bottom] md:object-bottom"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,32,0.52)_0%,rgba(4,18,32,0.34)_38%,rgba(4,18,32,0.14)_68%,rgba(4,18,32,0.05)_100%)]" />

        <div className="absolute inset-0 z-10 flex items-center py-10 sm:py-12 md:py-20">
          <div className="container">
            <Reveal className="flex max-w-[64rem] flex-col gap-4 sm:gap-6 md:gap-7">
              <h1 className="text-balance text-[2.4rem] font-semibold leading-[1.03] tracking-[-0.025em] text-white sm:text-[3.6rem] sm:leading-[1.05] sm:tracking-normal lg:text-[4rem]">
                <span className="block lg:whitespace-nowrap">
                  Localized Energy &amp; Mobility
                </span>
                <span className="block">for Malaysia</span>
              </h1>
              <div className="flex flex-col gap-4 sm:gap-5">
                <p className="max-w-[32rem] text-[0.95rem] leading-6 text-white/85 sm:hidden">
                  Battery storage, solar hybrid and practical electric mobility
                  for Malaysian industry.
                </p>
                <p className="hidden max-w-[38rem] text-base leading-7 text-white/85 sm:block sm:text-[1.08rem] sm:leading-8">
                  Battery storage, solar hybrid systems and practical electric
                  mobility solutions for industrial and commercial applications.
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/72 sm:gap-x-5 sm:gap-y-2 sm:text-xs sm:tracking-[0.16em] sm:text-white/70">
                  <span>BESS</span>
                  <span>Solar Hybrid</span>
                  <span>Microgrid</span>
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
