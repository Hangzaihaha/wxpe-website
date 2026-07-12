"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Headphones, Mail, MessageCircle } from "lucide-react";

import { navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
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
    <section id="contact" className="section-padding bg-[#eef3f6] pb-0">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal className="flex flex-col gap-7">
          <SectionHeading
            title="Let’s Discuss Your Project"
            description="Talk to our team about energy storage, solar hybrid systems, microgrids or electric mobility."
          />
          <div className="overflow-hidden rounded-lg border border-[#d2dee6] bg-card shadow-[0_18px_50px_rgba(11,18,32,0.07)]">
            <div className="border-b border-border bg-[#f7fafb] p-6">
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#e7f5ed] text-[#167147]">
                  <MessageCircle aria-hidden="true" className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Sales WhatsApp
                  </p>
                  <a
                    href="https://wa.me/60179951928"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-xl font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    +60 17-995 1928
                  </a>
                  <Button asChild size="lg" className="mt-5 w-full sm:w-fit">
                    <a
                      href="https://wa.me/60179951928"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat with Sales
                      <ArrowRight data-icon="inline-end" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="divide-y divide-border">
              <a
                href="mailto:sales@wxpgroup.com"
                className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-secondary/70"
              >
                <Mail aria-hidden="true" className="size-5 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Sales Email
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-foreground">
                    sales@wxpgroup.com
                  </span>
                </span>
              </a>
              <a
                href="mailto:admin@wxpgroup.com"
                className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-secondary/70"
              >
                <Mail aria-hidden="true" className="size-5 shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Admin Email
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-foreground">
                    admin@wxpgroup.com
                  </span>
                </span>
              </a>
              <a
                href="https://wa.me/601161212957"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-secondary/70"
              >
                <Headphones
                  aria-hidden="true"
                  className="size-5 shrink-0 text-primary"
                />
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Complaints &amp; Service Feedback
                  </span>
                  <span className="mt-1 block text-sm font-medium text-foreground">
                    +60 11-6121 2957
                  </span>
                </span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-[#d2dee6] bg-card p-6 shadow-[0_22px_64px_rgba(11,18,32,0.09)] md:p-8"
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
                <Field className="md:col-span-2">
                  <FieldLabel htmlFor="contact">Email or Phone</FieldLabel>
                  <Input id="contact" name="contact" required />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="projectType">Project Type</FieldLabel>
                <select
                  id="projectType"
                  name="projectType"
                  defaultValue=""
                  required
                  className="flex h-12 w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  <option value="battery-energy-storage">
                    Battery Energy Storage
                  </option>
                  <option value="solar-hybrid-microgrid">
                    Solar Hybrid / Microgrid
                  </option>
                  <option value="energy-as-a-service">
                    Energy-as-a-Service
                  </option>
                  <option value="ev-mobility">EV Mobility</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </Field>
              <Field>
                <FieldLabel htmlFor="message">Message</FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your site, energy challenge or partnership discussion."
                  required
                />
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

      <footer className="relative left-1/2 mt-24 w-screen -translate-x-1/2 bg-[#07111f] px-5 py-10 text-white md:py-12">
        <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <div className="text-lg font-semibold text-white">WXPE</div>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/68">
              Localized Energy Storage, Microgrid and Digital Energy Solutions.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
            {navItems
              .filter((item) =>
                ["Solutions", "Energy-as-a-Service", "Microgrid", "Projects", "Mobility", "About Us", "Contact Us"].includes(
                  item.label
                )
              )
              .map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/68 transition-colors hover:text-white"
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
