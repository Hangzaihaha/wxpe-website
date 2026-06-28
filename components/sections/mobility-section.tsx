import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";

export function MobilitySection() {
  return (
    <section
      id="mobility"
      className="border-b border-border bg-[#f3f6f8] py-16 md:py-24"
    >
      <Reveal className="mx-auto w-full">
        <div className="group relative h-[82vh] min-h-[660px] max-h-[860px] w-full overflow-hidden bg-[#07111f] shadow-[0_30px_90px_rgba(11,18,32,0.16)] md:h-[84vh] md:min-h-[700px]">
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
            className="origin-bottom scale-[1.2] object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.23] md:scale-[1.12] md:group-hover:scale-[1.15]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.78)_0%,rgba(9,31,55,0.52)_34%,rgba(7,17,31,0.08)_70%,rgba(7,17,31,0)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.2)_0%,rgba(7,17,31,0)_42%,rgba(7,17,31,0.08)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-[42%] bg-[linear-gradient(180deg,rgba(238,243,246,0.94)_0%,rgba(238,243,246,0.62)_34%,rgba(238,243,246,0)_100%)]" />

          <div className="relative z-10 flex h-full items-end">
            <div className="container pb-12 md:pb-16 lg:pb-20">
              <div className="max-w-[480px] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                  EV MOBILITY ECOSYSTEM
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-[2.65rem]">
                  Electric Mobility for Local Logistics
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/78 md:text-base">
                  Smart electric tricycles for last-mile delivery and commercial
                  mobility.
                </p>

                {/*
                  TODO: Future /mobility page should include product models,
                  use cases, battery pack localization, service support and
                  fleet applications.
                */}
                <Link
                  href="/mobility"
                  className="mt-7 inline-flex items-center gap-2 border-b border-white/50 pb-1 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:text-white/86"
                >
                  Explore Mobility Solutions
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
