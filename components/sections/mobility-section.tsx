import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { mobilityUseCases } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function MobilitySection() {
  return (
    <section
      id="mobility"
      className="section-padding border-b border-border bg-[#f3f6f8]"
    >
      <div className="container">
        <Reveal>
          <div className="group relative min-h-[640px] overflow-hidden rounded-lg border border-[#c7d6df] bg-[#07111f] shadow-[0_28px_84px_rgba(11,18,32,0.14)] md:min-h-[560px]">
            {/*
              Temporary approved Mobility banner. Replace later with clean WXPE
              mobility photos or compressed video loops; avoid raw brochure
              typography, legacy branding and unapproved supplier marks.
            */}
            <Image
              src="/assets/mobility/ev-tricycle-banner.jpg"
              alt="Electric tricycles for local logistics and commercial mobility"
              fill
              sizes="(min-width: 1024px) 1180px, 100vw"
              className="origin-bottom scale-110 object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.14] md:scale-100 md:group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.94)_0%,rgba(11,43,73,0.82)_43%,rgba(7,17,31,0.42)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.62)_0%,rgba(7,17,31,0.12)_42%,rgba(7,17,31,0.54)_100%)] md:bg-[linear-gradient(180deg,rgba(7,17,31,0.46)_0%,rgba(7,17,31,0.06)_44%,rgba(7,17,31,0.45)_100%)]" />

            <div className="relative z-10 flex min-h-[640px] items-end p-6 md:min-h-[560px] md:p-10 lg:p-12">
              <div className="max-w-2xl">
                <h2 className="text-balance text-3xl font-semibold leading-tight text-white md:text-[2.75rem]">
                  Electric Mobility as Part of the Local Energy Ecosystem
                </h2>
                <div className="mt-7 rounded-lg border border-white/16 bg-[#07111f]/62 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.26)] backdrop-blur-md md:p-6">
                  <h3 className="text-2xl font-semibold leading-tight text-white">
                    Electric Mobility for Local Logistics
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/76 md:text-base">
                    Smart electric tricycles for last-mile delivery, industrial
                    parks, warehouses, plantations and mobile commerce.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {mobilityUseCases.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/16 bg-white/10 px-3 py-2 text-xs font-medium text-white/82"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/70">
                    WXPE&apos;s EV mobility program supports local EV adoption
                    while creating a practical pathway for battery pack
                    localization, after-sales capability and commercial fleet
                    electrification.
                  </p>

                  <Button asChild className="mt-6 bg-white text-foreground hover:bg-white/90">
                    <a href="#contact">
                      Explore Mobility Solutions
                      <ArrowRight data-icon="inline-end" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
