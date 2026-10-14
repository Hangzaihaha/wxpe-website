import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TermExplanations } from "@/components/solutions/term-explanations";
import { energySolutions, getEnergySolution } from "@/lib/energy-solutions";
import { contactData } from "@/lib/contact-data";

type Props = { params: Promise<{ solution: string }> };

export function generateStaticParams() {
  return energySolutions.map(({ id }) => ({ solution: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { solution: id } = await params;
  const solution = getEnergySolution(id);
  if (!solution) return {};
  return { title: `${solution.title} | WXPE`, description: solution.overview, alternates: { canonical: solution.href } };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { solution: id } = await params;
  const solution = getEnergySolution(id);
  if (!solution) notFound();
  const whatsappHref = `${contactData.sales.whatsappHref}?text=${encodeURIComponent(solution.enquiry)}`;
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="container">
          <Link href="/solutions" scroll className="text-link">All solutions</Link>
          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
            <div>
              <h1 className="text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">{solution.title}</h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">{solution.overview}</p>
              <nav aria-label="Solution sections" className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
                <a href="#how-it-works" className="text-link">How it works</a>
                <a href="#solution-enquiry" className="text-link">Enquire about this solution</a>
              </nav>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-secondary">
              <Image src={solution.image} alt={solution.imageAlt} fill loading="eager" sizes="(min-width: 1024px) 520px, calc(100vw - 40px)" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border py-14 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em]">Business challenges</h2>
            <ul className="mt-5 space-y-3 text-base leading-7 text-muted-foreground">{solution.challenges.map((item) => <li key={item} className="border-l-2 border-border pl-4">{item}</li>)}</ul>
          </div>
          <div id="how-it-works" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em]">How it works</h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">{solution.how}</p>
            <div className="mt-5"><TermExplanations terms={solution.terms} /></div>
            <h2 className="mt-8 text-2xl font-semibold leading-tight tracking-[-0.02em]">Potential business benefits</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground">{solution.benefits.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="mt-5 border-t border-border pt-4 text-sm leading-6 text-muted-foreground">{solution.conditions}</p>
          </div>
        </div>
      </section>
      <section id="solution-enquiry" className="scroll-mt-24 bg-secondary py-14 md:py-20">
        <div className="container grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">Discuss your site requirements</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">WXPE supports project planning and local coordination with technology and equipment partners. Contact our team to discuss a suitable scope for your site.</p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="home-cta">Enquire on WhatsApp <ArrowRight className="size-4" aria-hidden="true" /></a>
            <Link href="/contact" scroll className="text-link">Contact our team</Link>
          </div>
        </div>
      </section>
      <nav aria-label="Other energy solutions" className="container flex flex-wrap gap-x-6 gap-y-2 py-8">
        {energySolutions.filter((item) => item.id !== solution.id).map((item) => <Link key={item.id} href={item.href} scroll className="text-link">{item.title}</Link>)}
      </nav>
      <SiteFooter />
    </main>
  );
}
