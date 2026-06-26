import { painPoints } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function PainPointsSection() {
  return (
    <section id="pain-points" className="section-padding border-b border-border bg-[#f3f6f8]">
      <div className="container flex flex-col gap-14">
        <Reveal>
          <SectionHeading
            title="Solving Urgent Energy Challenges for C&I Customers"
            description="WXPE enters through operational pain points: energy cost, demand risk, reliability and the practical economics of clean energy adoption."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="flex min-h-56 flex-col justify-between gap-8 rounded-lg border border-[#d8e2e8] bg-card p-6 shadow-[0_14px_38px_rgba(11,18,32,0.055)] transition-all hover:-translate-y-1 hover:border-[#c8d7e0] hover:shadow-[0_22px_56px_rgba(11,18,32,0.09)]">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold tracking-normal text-foreground">
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
