import { Reveal } from "@/components/reveal";
import { painPoints } from "@/lib/site-data";

export function HomePainPointsSection() {
  return (
    <section
      id="pain-points"
      aria-labelledby="pain-points-title"
      className="scroll-mt-[72px] border-b border-border bg-[#f4f7f8] py-24 md:py-32"
    >
      <div className="container grid items-start gap-14 lg:grid-cols-[minmax(300px,0.72fr)_minmax(0,1.28fr)] lg:gap-16 xl:gap-20">
        <Reveal className="xl:sticky xl:top-32 xl:self-start">
          <div className="relative max-w-lg pl-7 md:pl-9">
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-px bg-[#c8d4dc]"
            />
            <h2
              id="pain-points-title"
              className="text-balance text-[2.7rem] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground md:text-[3.35rem]"
            >
              Customer Problems WXPE Helps Solve
            </h2>
            <p className="mt-7 max-w-md text-base leading-8 text-muted-foreground md:text-[1.05rem]">
              A sharper starting point for C&amp;I energy strategy: cost,
              reliability and execution.
            </p>
          </div>
        </Reveal>

        <ol className="border-t border-[#c8d4dc]">
          {painPoints.map((item, index) => {
            const sequence = String(index + 1).padStart(2, "0");

            return (
              <li
                key={item.title}
                className="group border-b border-[#c8d4dc]"
              >
                <Reveal delay={index * 0.055}>
                  <div className="grid grid-cols-[3.65rem_minmax(0,1fr)] gap-5 py-9 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-7 md:py-10 lg:grid-cols-[5.5rem_minmax(0,1fr)] lg:gap-8">
                    <span
                      aria-hidden="true"
                      className="text-[2.6rem] font-light leading-none tracking-[-0.05em] text-primary/45 transition-colors duration-300 group-hover:text-primary sm:text-5xl lg:text-[4.25rem]"
                    >
                      {sequence}
                    </span>

                    <div className="max-w-2xl transition-transform duration-300 motion-safe:group-hover:translate-x-1">
                      <h3 className="text-[1.45rem] font-semibold leading-tight tracking-[-0.015em] text-foreground md:text-[1.75rem]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-[0.95rem] leading-7 text-muted-foreground md:text-base">
                        {item.description}
                      </p>
                      <p className="mt-5 text-sm font-medium leading-6 text-primary">
                        {item.response}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
