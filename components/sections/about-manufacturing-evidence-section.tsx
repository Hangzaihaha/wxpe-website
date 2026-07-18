import Image from "next/image";

import { Reveal } from "@/components/reveal";

export function AboutManufacturingEvidenceSection() {
  return (
    <section
      aria-labelledby="manufacturing-heritage-heading"
      className="border-b border-border bg-[#f3f6f8] py-16 md:py-20 lg:py-24"
    >
      <div className="container">
        <Reveal className="grid gap-5 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Manufacturing Heritage
            </p>
            <h2
              id="manufacturing-heritage-heading"
              className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-[1.14] text-foreground md:text-[2.65rem]"
            >
              Built on Real Industrial Experience
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground lg:justify-self-end">
            WXPE’s transition into digital energy is supported by the wider
            WXP-WSA manufacturing ecosystem, with experience across OEM
            operations, supply-chain coordination, quality management and
            industrial delivery in Malaysia.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.42fr)_minmax(320px,0.78fr)] lg:items-start lg:gap-7">
          <Reveal>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[#cbd8e0] bg-[#e5ebef] shadow-[0_18px_48px_rgba(11,18,32,0.08)]">
                <Image
                  src="/assets/about/assembly-line.webp"
                  alt="OEM production line within a Malaysian manufacturing facility"
                  fill
                  sizes="(min-width: 1536px) 720px, (min-width: 1024px) 62vw, calc(100vw - 40px)"
                  className="object-cover object-[56%_center]"
                />
              </div>
              <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                OEM production and industrial operations in Malaysia
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-1">
            <Reveal delay={0.05}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#cbd8e0] bg-[#e5ebef]">
                  <Image
                    src="/assets/about/warehouse-interior.webp"
                    alt="Manufacturing warehouse and finished-goods preparation area in Malaysia"
                    fill
                    sizes="(min-width: 1536px) 390px, (min-width: 1024px) 34vw, (min-width: 640px) 50vw, calc(100vw - 40px)"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Finished-goods preparation and warehouse operations
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.08} className="hidden sm:block">
              <figure className="border-t border-[#cbd8e0] pt-6">
                <div className="overflow-hidden rounded-lg border border-[#cbd8e0] bg-white">
                  <Image
                    src="/assets/about/manufacturing-operations-collage.jpg"
                    alt="Documentary overview of production, preparation and loading operations in Malaysia"
                    width={1154}
                    height={614}
                    sizes="(min-width: 1536px) 390px, (min-width: 1024px) 34vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Documentary operations overview · Wider WXP-WSA ecosystem
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
