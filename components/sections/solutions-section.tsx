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
        <div className="grid gap-5 lg:grid-cols-4">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="group flex h-full min-h-72 flex-col justify-between gap-10 rounded-lg border border-[#d8e2e8] bg-card p-6 shadow-[0_14px_38px_rgba(11,18,32,0.055)] transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_22px_56px_rgba(11,18,32,0.09)]">
                  <div className="flex items-start justify-between gap-4">
                    <Icon className="size-7 text-primary" aria-hidden="true" />
                    <ArrowUpRight
                      className="size-5 text-muted-foreground transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold leading-tight tracking-normal text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
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
