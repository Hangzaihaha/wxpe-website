import {
  BatteryCharging,
  Building2,
  CheckCircle2,
  CloudCog,
  Factory,
  Globe2,
  LineChart,
  MapPinned,
  Network,
  PlugZap,
  ShieldCheck,
  SunMedium,
  Zap
} from "lucide-react";

export const navItems = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Energy-as-a-Service", href: "/#eaas" },
  { label: "Microgrid", href: "/#microgrid" },
  { label: "Projects", href: "/#projects" },
  { label: "Mobility", href: "/mobility" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" }
] as const;

export const painPoints = [
  {
    title: "Cost Pressure",
    description: "Peak demand, rising tariffs and upfront CAPEX pressure margins.",
    icon: LineChart
  },
  {
    title: "Power Reliability",
    description: "Unstable supply, outages and backup gaps disrupt operations.",
    icon: PlugZap
  },
  {
    title: "Project Complexity",
    description: "Technical planning, compliance and local delivery must align.",
    icon: Building2
  }
] as const;

export const solutions = [
  {
    title: "Battery Energy Storage",
    description: "Modular storage for industrial and commercial energy sites.",
    tags: ["BESS", "C&I", "Resilience"],
    icon: BatteryCharging,
    image: "/assets/energy/bess-container-site-01.jpg"
  },
  {
    title: "Peak Shaving & Cost Optimization",
    description: "Reduce demand peaks and improve site energy economics.",
    tags: ["Peak Shaving", "EMS", "Tariffs"],
    icon: LineChart,
    image: "/assets/energy/industrial-bess-reference-01.jpg"
  },
  {
    title: "Solar Hybrid Microgrid",
    description: "Coordinate PV, BESS, EMS and site loads for resilience.",
    tags: ["PV", "Microgrid", "Backup"],
    icon: SunMedium,
    image: "/assets/energy/solar-storage-reference-01.jpg"
  },
  {
    title: "EMS & Digital Energy Management",
    description: "Monitor and optimize distributed assets through EMS control.",
    tags: ["EMS", "Cloud", "Dispatch"],
    icon: CloudCog,
    image: "/assets/energy/microgrid-reference-01.jpg"
  }
] as const;

export const deliveryFocus = [
  {
    title: "WXPE Local Capability",
    description:
      "Customer access, site development, project coordination, compliance support and long-term service planning.",
    icon: MapPinned
  },
  {
    title: "Technology Partner Capability",
    description:
      "Partner-backed battery storage, PCS, EMS and technical planning resources for suitable projects.",
    icon: Network
  },
  {
    title: "Future Local Assembly Roadmap",
    description:
      "EV battery pack localization, C&I BESS cabinet assembly pathways and ASEAN-ready operating support.",
    icon: Factory
  }
] as const;

export const commercialModels = [
  "Zero-CAPEX Option",
  "EMC / PPA Structure",
  "Long-Term Operation Support"
] as const;

export const traditionalModel = [
  "Upfront equipment investment",
  "Longer approval cycle",
  "Customer carries more technical risk"
] as const;

export const flexibleModel = [
  "Lower upfront investment pathway",
  "Commercial structure aligned to site needs",
  "Delivery and lifecycle support"
] as const;

export const microgridFlow = [
  { label: "PV", icon: SunMedium },
  { label: "BESS", icon: BatteryCharging },
  { label: "EMS", icon: Network },
  { label: "Grid", icon: Zap },
  { label: "Load", icon: Factory },
  { label: "Backup", icon: PlugZap }
] as const;

export const localizationCards = [
  { title: "Local Market Access", icon: MapPinned },
  { title: "Local Assembly Pathway", icon: Factory },
  { title: "Compliance Coordination", icon: ShieldCheck },
  { title: "Project Delivery", icon: CheckCircle2 },
  { title: "O&M Support", icon: CloudCog },
  { title: "ASEAN Expansion Potential", icon: Globe2 }
] as const;

export const mobilityUseCases = [
  "Last-mile delivery",
  "Industrial parks",
  "Warehouse mobility",
  "Mobile commerce"
] as const;

export const aboutPillars = [
  {
    title: "Local project coordination",
    description: "Malaysia site planning, customer access and project interfaces."
  },
  {
    title: "Energy-focused delivery",
    description: "Battery storage, solar hybrid and EMS deployment discipline."
  },
  {
    title: "Long-term operation support",
    description: "Lifecycle coordination for scalable local energy assets."
  }
] as const;

export const projectReferences = [
  {
    title: "BESS Planning References",
    description: "Demand management and C&I storage patterns for solution planning."
  },
  {
    title: "Solar Hybrid Logic",
    description: "PV, BESS and EMS topology references for site-level design."
  },
  {
    title: "Future Case Studies",
    description: "Public references will be added after approval and anonymization."
  }
] as const;
