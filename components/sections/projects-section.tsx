import { ArrowUpRight } from "lucide-react";

import { projectReferences } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding border-b border-border bg-[#f3f6f8]">
      <div className="container flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            title="Partner Project References"
            description="Representative BESS applications and technical references will be shown only after usage approval, anonymization and proper labeling."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {projectReferences.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="group flex h-full min-h-56 flex-col justify-between gap-8 rounded-lg border border-[#d8e2e8] bg-card p-6 shadow-[0_14px_38px_rgba(11,18,32,0.055)] transition-all hover:-translate-y-1 hover:border-[#c8d7e0] hover:shadow-[0_22px_56px_rgba(11,18,32,0.09)]">
                <ArrowUpRight
                  className="size-5 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-lg border border-primary/20 bg-[linear-gradient(135deg,#eef6fa,#ffffff_58%,#edf7f2)] p-6 shadow-[0_18px_54px_rgba(11,18,32,0.075)]">
            <p className="max-w-4xl text-sm leading-7 text-muted-foreground">
              Supplier technical plans, customer-specific proposals, raw project
              case pages and old WXP brochures are not displayed directly on
              this website. Any future case study must be approved, rewritten in
              WXPE language and clearly labeled as a WXPE project or a partner
              reference.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
