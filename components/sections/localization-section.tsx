import { deliveryFocus } from "@/lib/site-data";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function PartnerDeliverySection() {
  return (
    <section id="delivery" className="section-padding border-b border-border bg-background">
      <div className="container grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading
            title="Partner-Backed Technology, Localized Delivery"
            description="WXPE works with technology and supply-chain partners to bring battery storage, PCS, EMS and project planning capabilities into Malaysia."
          />
          <p className="text-base leading-8 text-muted-foreground">
            The public story stays carefully separated: WXPE focuses on local
            customer access, project development, delivery coordination and
            service support, while partner capabilities are treated as
            partner-backed resources rather than WXPE-owned projects.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {deliveryFocus.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="flex items-start gap-5 rounded-lg border border-[#d8e2e8] bg-card p-6 shadow-[0_14px_38px_rgba(11,18,32,0.055)] transition-all hover:-translate-y-1 hover:border-[#c8d7e0] hover:shadow-[0_22px_56px_rgba(11,18,32,0.09)]">
                  <Icon className="mt-1 size-5 text-accent" aria-hidden="true" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold leading-snug text-foreground">
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
