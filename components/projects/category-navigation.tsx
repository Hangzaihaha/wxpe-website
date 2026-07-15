"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const categories = [
  { id: "utility-scale-storage", label: "Utility-Scale Storage" },
  { id: "ci-energy-storage", label: "C&I Energy Storage" },
  { id: "distributed-solar", label: "Distributed Solar" },
  { id: "charging-infrastructure", label: "Charging Infrastructure" }
] as const;

type CategoryId = (typeof categories)[number]["id"];

export function CategoryNavigation() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>(
    categories[0].id
  );

  useEffect(() => {
    const sections = categories
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveCategory(visibleSection.target.id as CategoryId);
        }
      },
      { rootMargin: "-24% 0px -58%", threshold: [0.05, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="border-b border-border bg-white/95 backdrop-blur-xl"
      aria-label="Project categories"
    >
      <div className="container overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="grid min-w-[760px] grid-cols-4">
          {categories.map((category) => {
            const active = category.id === activeCategory;

            return (
              <a
                key={category.id}
                href={`#${category.id}`}
                aria-current={active ? "location" : undefined}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "relative flex min-h-20 items-center justify-center px-5 text-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {category.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-6 bottom-0 h-0.5 origin-left bg-primary transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
