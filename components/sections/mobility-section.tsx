import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { mobilityUseCases } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";

export function MobilitySection() {
  return (
    <section
      id="mobility"
      className="border-b border-border bg-[#f3f6f8] py-16 md:py-24"
    >
      <Reveal className="mx-auto w-full">
        <div className="group relative h-[78vh] min-h-[620px] max-h-[780px] w-full overflow-hidden bg-[#07111f] shadow-[0_30px_90px_rgba(11,18,32,0.16)]">
          {/*
            Temporary approved Mobility banner. Replace later with clean WXPE
            mobility photos or compressed video loops; avoid raw brochure
            typography, legacy branding and unapproved supplier marks.
          */}
          <Image
            src="/assets/mobility/ev-tricycle-banner.jpg"
            alt="Electric tricycles for local logistics and commercial mobility"
            fill
            sizes="100vw"
            priority={false}
            className="origin-bottom scale-[1.34] object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.38] md:scale-[1.16] md:object-[center_62%] md:group-hover:scale-[1.19]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.9)_0%,rgba(10,34,59,0.72)_34%,rgba(7,17,31,0.16)_76%,rgba(7,17,31,0.04)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.54)_0%,rgba(7,17,31,0.06)_36%,rgba(7,17,31,0.24)_100%)]" />

          <div className="relative z-10 flex h-full items-end">
            <div className="container pb-12 md:pb-16 lg:pb-20">
              <div className="max-w-[520px] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                  EV Mobility Ecosystem
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-[2.65rem]">
                  Electric Mobility for Local Logistics
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/78 md:text-base">
                  Smart electric tricycles for last-mile delivery, industrial
                  parks, warehouses and mobile commerce.
                </p>

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-white/66 md:gap-x-5">
                  {mobilityUseCases.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                {/*
                  TODO: Future /mobility page should contain detailed use cases,
                  product models, battery pack localization, after-sales support
                  and fleet applications.
                */}
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 border-b border-white/50 pb-1 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:text-white/86"
                >
                  Explore Mobility Solutions
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
