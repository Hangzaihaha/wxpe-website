import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { solutions } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function SolutionsSection() {
  return (
    <section id="solutions" className="section-padding border-b border-border bg-background">
      <div className="container flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            title="Core Solutions"
            description="Four focused solution pillars for industrial and commercial energy sites in Malaysia."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="group overflow-hidden rounded-lg border border-[#d2dee6] bg-card shadow-[0_18px_54px_rgba(11,18,32,0.07)] transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_26px_70px_rgba(11,18,32,0.105)]">
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#eef3f6]">
                    {/*
                      Temporary reference visual extracted from supplied PDF materials.
                      Replace with approved WXPE energy project photos later.
                    */}
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0)_48%,rgba(7,17,31,0.34)_100%)]" />
                    <div className="absolute left-5 top-5 flex size-10 items-center justify-center rounded-md bg-white/90 text-primary shadow-[0_12px_30px_rgba(11,18,32,0.16)]">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="flex min-h-[180px] flex-col justify-between gap-7 p-6">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-semibold leading-tight tracking-normal text-foreground">
                        {item.title}
                      </h3>
                      <p className="max-w-md text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Energy Infrastructure
                      </span>
                      <ArrowUpRight
                        className="size-5 text-muted-foreground transition-colors group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
