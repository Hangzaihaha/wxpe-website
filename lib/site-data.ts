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
  Truck,
  Zap
} from "lucide-react";

export const navItems = [
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Mobility", href: "/mobility" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" }
] as const;

export const painPoints = [
  {
    title: "Cost Pressure",
    description: "Peak demand, rising tariffs and upfront investment pressure.",
    icon: LineChart,
    response: "Demand optimization · Flexible deployment"
  },
  {
    title: "Power Reliability",
    description: "Supply instability and outages can interrupt critical operations.",
    icon: PlugZap,
    response: "Storage backup · Resilient microgrids"
  },
  {
    title: "Project Complexity",
    description:
      "Storage, solar, EMS and site requirements must work as one coordinated system.",
    icon: Building2,
    response: "Integrated planning · Local execution"
  },
  {
    title: "Fleet & Last-Mile Efficiency",
    description:
      "Reduce short-distance logistics costs with practical electric mobility.",
    icon: Truck,
    response: "Electric tricycles · Commercial operations"
  }
] as const;

export const solutions = [
  {
    id: "battery-storage",
    title: "Battery Energy Storage",
    description: "Modular storage for industrial and commercial energy sites.",
    tags: ["BESS", "C&I", "Resilience"],
    icon: BatteryCharging,
    image: "/assets/energy/bess-container-site-01.jpg"
  },
  {
    id: "peak-shaving",
    title: "Peak Shaving and Cost Optimization",
    description: "Reduce demand peaks and improve site energy economics.",
    tags: ["Peak Shaving", "EMS", "Tariffs"],
    icon: LineChart,
    image: "/assets/energy/industrial-bess-reference-01.jpg"
  },
  {
    id: "solar-hybrid",
    title: "Solar Hybrid Microgrid",
    description: "Coordinate PV, BESS, EMS and site loads for resilience.",
    tags: ["PV", "Microgrid", "Backup"],
    icon: SunMedium,
    image: "/assets/energy/solar-storage-reference-01.jpg"
  },
  {
    id: "digital-energy-management",
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
  "Leasing Model",
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

export const heritageTimeline = [
  {
    year: "1995",
    title: "Manufacturing Origins"
  },
  {
    year: "1999-2009",
    title: "OEM and Industrial Growth"
  },
  {
    year: "2014",
    title: "International Expansion through WSA Venture"
  },
  {
    year: "2019",
    title: "WXP Autohaus Established"
  },
  {
    year: "2020-2023",
    title: "Factory, Certification and OEM Capability Expansion"
  },
  {
    year: "2024-Now",
    title: "Transition into EV Mobility and Digital Energy"
  }
] as const;

export const projectReferences = [
  {
    title: "BESS Planning References",
    description:
      "Load profile analysis, peak shaving logic and storage dispatch references for solution planning.",
    href: null
  },
  {
    title: "Solar Hybrid Logic",
    description: "PV, BESS and EMS topology references for site-level design.",
    href: null
  },
  {
    title: "Electric Mobility Applications",
    description:
      "Electric tricycles for last-mile logistics, industrial sites and commercial fleet operations.",
    href: "/mobility"
  },
  {
    title: "Selected Project References",
    description:
      "Anonymized storage, solar and charging applications from within WXPE's wider ecosystem.",
    href: "/projects"
  }
] as const;
