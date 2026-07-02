import Image from "next/image";

import { solutions } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function SolutionsSection() {
  return (
    <section id="solutions" className="border-b border-border bg-background py-16 md:py-24">
      <div className="container flex flex-col gap-10">
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
                  <div className="flex min-h-[160px] flex-col justify-between gap-6 p-6">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-semibold leading-tight tracking-normal text-foreground">
                        {item.title}
                      </h3>
                      <p className="max-w-md text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
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
