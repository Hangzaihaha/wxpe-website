import { painPoints } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function PainPointsSection() {
  return (
    <section id="pain-points" className="border-b border-border bg-[#f3f6f8] py-16 md:py-24">
      <div className="container flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            title="Customer Problems WXPE Helps Solve"
            description="A sharper starting point for C&I energy strategy: cost, reliability and execution."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {painPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="flex min-h-40 items-start gap-5 rounded-lg border border-[#d8e2e8] bg-card p-6 shadow-[0_14px_34px_rgba(11,18,32,0.05)] transition-all hover:-translate-y-1 hover:border-[#c8d7e0] hover:shadow-[0_20px_48px_rgba(11,18,32,0.08)]">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#eef6fa] text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold tracking-normal text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-6 text-muted-foreground">
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
