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

const inputClassName =
  "rounded-xl border-[#dbe3e7] bg-[#f8fafb] shadow-none";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-[#eef3f6] pb-0 pt-20 md:pt-28">
      <div className="container flex flex-col gap-12 md:gap-14">
        <Reveal>
          <SectionHeading
            title="Let's Discuss Your Project"
            description="Talk to our team about energy storage, solar hybrid systems, microgrids or electric mobility."
          />
        </Reveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <Reveal className="h-full">
            <div className="h-full overflow-hidden rounded-3xl bg-white shadow-[0_22px_70px_rgba(11,18,32,0.065)]">
              <div className="p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e7f5ed] text-[#167147]">
                    <MessageCircle aria-hidden="true" className="size-[18px]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Sales WhatsApp
                    </p>
                    <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <a
                        href="tel:+60179951928"
                        className="whitespace-nowrap text-xl font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        +60 17-995 1928
                      </a>
                      <Button asChild size="lg" className="w-full shrink-0 sm:w-fit">
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
              </div>

              <div className="border-t border-[#e5eaed] p-7 md:p-8">
                <a
                  href="mailto:sales@wxpgroup.com"
                  className="flex items-start gap-4 rounded-xl outline-none transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#eef3f6] text-primary">
                    <Mail aria-hidden="true" className="size-[18px]" />
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Sales Email
                    </span>
                    <span className="mt-2 block break-all text-base font-medium text-foreground">
                      sales@wxpgroup.com
                    </span>
                  </span>
                </a>
              </div>

              <div className="border-t border-[#e5eaed] p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#eef3f6] text-primary">
                    <Headphones aria-hidden="true" className="size-[18px]" />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Services &amp; Support
                    </p>
                    <div className="mt-2 flex flex-col items-start gap-2">
                      <a
                        href="mailto:admin@wxpgroup.com"
                        className="break-all text-base font-medium text-foreground transition-colors hover:text-primary"
                      >
                        admin@wxpgroup.com
                      </a>
                      <a
                        href="tel:+601161212957"
                        className="text-base font-medium text-foreground transition-colors hover:text-primary"
                      >
                        +60 11-6121 2957
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <form
              onSubmit={onSubmit}
              className="h-full rounded-3xl bg-white p-7 shadow-[0_22px_70px_rgba(11,18,32,0.065)] md:p-9"
            >
              <h3 className="mb-7 text-2xl font-semibold leading-tight text-foreground">
                Project inquiry
              </h3>
              <FieldGroup className="gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      className={inputClassName}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="company">Company</FieldLabel>
                    <Input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      required
                      className={inputClassName}
                    />
                  </Field>
                  <Field className="md:col-span-2">
                    <FieldLabel htmlFor="contact">Email or Phone</FieldLabel>
                    <Input
                      id="contact"
                      name="contact"
                      required
                      className={inputClassName}
                    />
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="projectType">Project Type</FieldLabel>
                  <select
                    id="projectType"
                    name="projectType"
                    defaultValue=""
                    required
                    className="flex h-12 w-full rounded-xl border border-[#dbe3e7] bg-[#f8fafb] px-4 py-3 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                    className="min-h-36 rounded-xl border-[#dbe3e7] bg-[#f8fafb] shadow-none"
                  />
                </Field>
                <Button type="submit" size="lg" className="w-full sm:w-fit">
                  Submit Inquiry
                  <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </Button>
                {submitted ? (
                  <p className="rounded-xl bg-accent/10 px-4 py-3 text-sm text-foreground">
                    Thank you. WXPE can review the project details and define a
                    suitable next step.
                  </p>
                ) : null}
              </FieldGroup>
            </form>
          </Reveal>
        </div>
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
                [
                  "Solutions",
                  "Energy-as-a-Service",
                  "Microgrid",
                  "Projects",
                  "Mobility",
                  "About Us",
                  "Contact Us"
                ].includes(item.label)
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
