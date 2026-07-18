import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";

const heritagePoints = [
  "Manufacturing Heritage",
  "International Experience",
  "Digital Energy Transition"
] as const;

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border bg-background py-20 md:py-24">
      <div className="mx-auto grid w-full max-w-[1360px] gap-12 px-5 lg:grid-cols-[0.78fr_1.1fr] lg:items-center lg:gap-16 xl:gap-20">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About WXPE
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-foreground md:text-[2.65rem]">
            From Manufacturing Heritage to Digital Energy
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            WXPE brings decades of Malaysian manufacturing, OEM supply and
            international partnership experience into energy storage,
            microgrids and electric mobility.
          </p>

          <div className="mt-7 border-y border-border py-5">
            {heritagePoints.map((point) => (
              <div key={point} className="flex items-center gap-3 py-1.5">
                <span className="size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">{point}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
          >
            Discover Our Story
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-xl bg-[#e7edf1] shadow-[0_24px_64px_rgba(11,18,32,0.11)]">
            <Image
              src="/assets/about/wxpe-team-manufacturing-site.jpg"
              alt="WXPE team at manufacturing facility in Malaysia"
              width={2048}
              height={963}
              sizes="(min-width: 1360px) 735px, (min-width: 1024px) 55vw, calc(100vw - 40px)"
              className="h-auto w-full object-contain"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
