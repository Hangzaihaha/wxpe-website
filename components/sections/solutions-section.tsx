import { ArrowUpRight } from "lucide-react";

import { solutions } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function SolutionsSection() {
  return (
    <section id="solutions" className="section-padding border-b border-border bg-[linear-gradient(180deg,hsl(var(--background)),#07111f)]">
      <div className="container flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            title="Integrated Digital Energy Solutions"
            description="A project-led solution stack for industrial and commercial energy sites, built around storage, controls, solar hybrid integration and operating discipline."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-4">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="group flex h-full min-h-80 flex-col justify-between gap-10 rounded-lg border border-border bg-card/82 p-6 transition-colors hover:border-primary/45 hover:bg-secondary/60">
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
