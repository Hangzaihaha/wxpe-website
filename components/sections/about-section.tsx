import { aboutPillars } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-padding border-b border-border bg-background">
      <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading
            title="Built on Local Manufacturing Roots. Focused on Digital Energy."
            description="WXPE builds on the wider WXP automotive and manufacturing ecosystem, with a dedicated focus on localized green energy solutions for Malaysia."
          />
          <p className="text-base leading-8 text-muted-foreground">
            The company combines local market access, manufacturing experience,
            project coordination and partner-backed technology resources to
            support Malaysia&apos;s transition toward more resilient and flexible
            clean energy infrastructure.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutPillars.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="flex h-full min-h-48 flex-col gap-4 rounded-lg border border-[#d8e2e8] bg-card p-6 shadow-[0_14px_38px_rgba(11,18,32,0.055)] transition-all hover:-translate-y-1 hover:border-[#c8d7e0] hover:shadow-[0_22px_56px_rgba(11,18,32,0.09)]">
                <h3 className="text-lg font-semibold leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
