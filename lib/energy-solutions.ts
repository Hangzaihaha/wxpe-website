import { solutions } from "@/lib/site-data";

export const energyTerms = {
  bess: { label: "BESS", name: "Battery Energy Storage System", description: "Stores electricity for later use, helping businesses manage energy costs, support power reliability and make better use of renewable energy." },
  ems: { label: "EMS", name: "Energy Management System", description: "Monitors and manages electricity use, storage and supply to help a site operate more efficiently." },
  peakShaving: { label: "Peak Shaving", name: "Peak Shaving", description: "Uses stored energy or manages loads during high-demand periods, potentially lowering demand-related electricity costs." },
  microgrid: { label: "Microgrid", name: "Microgrid", description: "A local energy network that coordinates generation, storage and electricity use. Independent operation requires an appropriately designed system." },
  solarPv: { label: "Solar PV", name: "Solar Photovoltaics", description: "Converts sunlight into electricity so businesses can generate renewable power and reduce reliance on grid supply." },
  loadShifting: { label: "Load Shifting", name: "Load Shifting", description: "Moves electricity use, or the use of stored energy, to different times to better manage energy costs and demand." }
} as const;

export type EnergyTermKey = keyof typeof energyTerms;

const content = {
  "battery-storage": {
    overview: "Store electricity for use when your site needs it, with a system sized around demand, available power sources and operating priorities.",
    challenge: "Demand peaks, variable solar generation and power interruptions.",
    benefit: "More control over electricity use and renewable energy integration.",
    how: "Batteries charge from grid supply or available solar power. Controls schedule the use of stored electricity within the system's operating limits.",
    challenges: ["Short periods of high electricity demand.", "Solar generation that does not match the timing of site demand.", "Critical operations that need an appropriate backup strategy."],
    benefits: ["Manage demand using stored electricity.", "Use more available renewable energy on site.", "Support critical loads where backup operation is included in the design."],
    conditions: "Storage capacity, discharge power and backup capability depend on the selected equipment and site design. Financial outcomes depend on tariffs, operating patterns and project costs.",
    terms: ["bess"] as EnergyTermKey[],
    imageAlt: "Containerized battery energy storage equipment reference",
    enquiry: "Hi, I would like to discuss battery energy storage for my site."
  },
  "peak-shaving": {
    overview: "Plan when your site uses grid electricity and stored energy to manage demand peaks and electricity costs.",
    challenge: "Short demand peaks can increase demand-related electricity charges.",
    benefit: "Potential cost optimization based on site demand and tariff structure.",
    how: "A control system identifies high-demand periods and dispatches stored energy or manages suitable loads. Load shifting can move flexible electricity use to other times.",
    challenges: ["Brief peaks caused by overlapping equipment operation.", "Limited visibility of when peak demand occurs.", "Electricity use that could be scheduled more effectively."],
    benefits: ["Improve visibility of demand patterns.", "Reduce grid demand peaks where the system is suitably configured.", "Evaluate cost opportunities against the site's actual tariff and operating schedule."],
    conditions: "Savings are not guaranteed. Results depend on tariff rules, load flexibility, storage sizing, equipment limits and daily operation.",
    terms: ["peakShaving", "loadShifting"] as EnergyTermKey[],
    imageAlt: "Industrial battery storage installation reference",
    enquiry: "Hi, I would like to discuss peak shaving and electricity demand management for my site."
  },
  "solar-hybrid": {
    overview: "Coordinate solar generation, battery storage, grid supply and backup generation around your site's electricity needs.",
    challenge: "Variable solar output and several power sources to coordinate.",
    benefit: "Better renewable energy use and a site-specific resilience strategy.",
    how: "Solar panels generate electricity, batteries store available energy and controls coordinate supply with site demand. Grid and backup generation remain part of the selected system design.",
    challenges: ["Solar output changes throughout the day.", "Generation and electricity use do not always coincide.", "Several power sources need coordinated control."],
    benefits: ["Coordinate renewable generation with site demand.", "Manage the use of storage, grid supply and backup generation.", "Plan resilience around the loads that matter to the business."],
    conditions: "Independent or islanded operation is available only where the system has been designed with suitable controls, protection and equipment. It is not an automatic feature of every solar hybrid system.",
    terms: ["solarPv", "microgrid"] as EnergyTermKey[],
    imageAlt: "Solar and battery storage infrastructure reference",
    enquiry: "Hi, I would like to discuss solar hybrid and microgrid options for my site."
  },
  "digital-energy-management": {
    overview: "Bring electricity use, power sources and storage into one coordinated view to support better operating decisions.",
    challenge: "Limited visibility of energy use and independently operated assets.",
    benefit: "Clearer energy visibility and more coordinated operation.",
    how: "Monitoring collects data from compatible equipment. An energy management system uses configured rules and operating limits to coordinate supply, storage and suitable loads.",
    challenges: ["Energy use is difficult to track across equipment.", "Storage and power sources operate without coordinated control.", "Teams need clearer information for day-to-day energy decisions."],
    benefits: ["Monitor energy consumption and equipment status.", "Coordinate compatible energy assets around site priorities.", "Support efficiency improvements using operating data."],
    conditions: "Monitoring coverage, control functions and reporting depend on equipment compatibility and the agreed project scope. Technology and equipment capabilities are supported through WXPE's partners.",
    terms: ["ems"] as EnergyTermKey[],
    imageAlt: "Energy infrastructure and control system reference",
    enquiry: "Hi, I would like to discuss energy monitoring and EMS for my site."
  }
} as const;

export const energySolutions = solutions.map((solution) => ({
  ...solution,
  ...content[solution.id],
  href: `/solutions/${solution.id}`
}));

export function getEnergySolution(id: string) {
  return energySolutions.find((solution) => solution.id === id);
}
