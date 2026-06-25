import { localizationCards } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function LocalizationSection() {
  return (
    <section id="localization" className="section-padding border-b border-border bg-background">
      <div className="container grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading
            title="Localized in Malaysia. Powered by Proven Technologies."
            description="WXPE's advantage lies in combining proven technology economics with Malaysian project delivery, local assembly pathways, compliance coordination, customer relationships and long-term operations."
          />
          <p className="text-base leading-8 text-muted-foreground">
            WXPE aims to build local capabilities around EV battery pack assembly,
            C&I BESS cabinet assembly, pilot projects, certification support and
            future regional scale.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {localizationCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="flex min-h-36 items-start gap-4 bg-card p-6 transition-colors hover:bg-secondary/60">
                  <Icon className="mt-1 size-5 text-accent" aria-hidden="true" />
                  <h3 className="text-lg font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
