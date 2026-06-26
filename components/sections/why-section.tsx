import { CheckCircle2 } from "lucide-react";

import { strategicPoints, whyItems } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function WhySection() {
  return (
    <section id="why-wxpe" className="section-padding border-b border-border bg-background">
      <div className="container flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            title="Why WXPE"
            description="WXPE is positioned to bridge selected technology partners, localized project delivery and flexible commercial structures for Malaysian C&I energy needs."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {whyItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="flex h-full min-h-64 flex-col gap-5 rounded-lg border border-[#d8e2e8] bg-card p-6 shadow-[0_14px_38px_rgba(11,18,32,0.055)] transition-all hover:-translate-y-1 hover:border-[#c8d7e0] hover:shadow-[0_22px_56px_rgba(11,18,32,0.09)]">
                <h3 className="text-xl font-semibold leading-tight text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-lg border border-primary/20 bg-[linear-gradient(135deg,#eef6fa,#ffffff_58%,#edf7f2)] p-7 shadow-[0_26px_76px_rgba(11,18,32,0.105)] md:p-9">
            <h3 className="max-w-2xl text-2xl font-semibold leading-tight text-foreground">
              Built for flagship pilots, then repeatable regional scale.
            </h3>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {strategicPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-7 text-muted-foreground"
                >
                  <CheckCircle2 className="mt-1 size-4 text-accent" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
