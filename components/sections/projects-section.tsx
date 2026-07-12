import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projectReferences } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-border bg-[#f3f6f8] py-16 md:py-20">
      <div className="container flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            title="Partner Capability References"
            description="Selected technical references and project materials inform WXPE solution planning. Public case studies will be added only after approval and anonymization."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projectReferences.map((item, index) => {
            const card = (
              <article className="group flex h-full min-h-52 flex-col justify-between gap-6 rounded-lg border border-[#d8e2e8] bg-card p-6 shadow-[0_14px_34px_rgba(11,18,32,0.05)] transition-all hover:-translate-y-1 hover:border-[#c8d7e0] hover:shadow-[0_20px_48px_rgba(11,18,32,0.08)]">
                <ArrowUpRight
                  className="size-5 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-semibold leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            );

            return (
              <Reveal key={item.title} delay={index * 0.04} className="h-full">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    aria-label={`${item.title}: ${item.description}`}
                  >
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
