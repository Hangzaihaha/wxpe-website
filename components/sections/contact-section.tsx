"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

import { navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-padding bg-[linear-gradient(180deg,#07111f,hsl(var(--background)))]">
      <div className="container grid gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="flex flex-col gap-8">
          <SectionHeading
            title="Start with a Flagship Pilot Project"
            description="The best energy strategy begins with one executable site. WXPE works with customers and partners to identify high-impact pilot projects, prove savings, standardize design and scale deployment."
          />
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              Pilot project focus
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Site data, electricity bills, load profile, operational constraints
              and commercial model preference help shape the first project scope.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-border bg-card p-6 md:p-8"
          >
            <FieldGroup>
              <div className="grid gap-5 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input id="name" name="name" autoComplete="name" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="company">Company</FieldLabel>
                  <Input id="company" name="company" autoComplete="organization" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <Input id="phone" name="phone" autoComplete="tel" />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="projectType">Project Type</FieldLabel>
                <Input
                  id="projectType"
                  name="projectType"
                  placeholder="BESS, microgrid, EaaS, EV mobility or pilot study"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your site, energy challenge or partnership discussion."
                  required
                />
                <FieldDescription>
                  Include site type, location, energy challenge and expected
                  project timeline where available.
                </FieldDescription>
              </Field>
              <Button type="submit" size="lg" className="w-full sm:w-fit">
                Submit Inquiry
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </Button>
              {submitted ? (
                <p className="rounded-md border border-accent/35 bg-accent/10 px-4 py-3 text-sm text-foreground">
                  Thank you. WXPE can review the project details and define a
                  suitable next step.
                </p>
              ) : null}
            </FieldGroup>
          </form>
        </Reveal>
      </div>

      <footer className="container mt-20 border-t border-border pt-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <div className="text-lg font-semibold text-foreground">WXPE</div>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
              Localized Digital Energy Solutions for Malaysia and ASEAN.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
            {navItems
              .filter((item) =>
                ["Solutions", "Energy-as-a-Service", "Localization", "Mobility", "Contact"].includes(
                  item.label
                )
              )
              .map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
          </nav>
        </div>
      </footer>
    </section>
  );
}
