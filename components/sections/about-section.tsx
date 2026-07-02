import { aboutPillars } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border bg-background py-16 md:py-24">
      <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal className="flex max-w-2xl flex-col gap-6">
          <SectionHeading
            title="Local execution. Partner-backed technology."
            description="WXPE combines Malaysia project coordination, manufacturing discipline and partner-backed technology resources for localized digital energy deployment."
          />
        </Reveal>

        <div className="grid gap-3">
          {aboutPillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="flex items-start gap-4 border-b border-border py-4 last:border-b-0">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
