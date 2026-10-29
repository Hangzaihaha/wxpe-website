import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

type DiscussionCtaProps = {
  heading: string;
  linkLabel: string;
};

export function DiscussionCta({ heading, linkLabel }: DiscussionCtaProps) {
  return (
    <section className="bg-[#071a2f] py-16 text-white md:py-20">
      <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <Reveal>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] md:text-[2.6rem] md:leading-tight">
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/55 bg-transparent text-white hover:bg-white hover:text-[#071a2f]"
          >
            <Link href="/contact">
              {linkLabel}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
