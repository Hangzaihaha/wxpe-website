import {
  BatteryCharging,
  Building2,
  CheckCircle2,
  CloudCog,
  Factory,
  Gauge,
  Globe2,
  Leaf,
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
    title: "High Maximum Demand Charges",
    description: "Peak loads can create a recurring cost burden for C&I sites.",
    icon: LineChart
  },
  {
    title: "Rising Energy Cost",
    description: "Tariffs and inefficient load profiles increase operating pressure.",
    icon: Gauge
  },
  {
    title: "Power Reliability Concerns",
    description: "Unstable supply and outages can disrupt critical operations.",
    icon: PlugZap
  },
  {
    title: "High Upfront CAPEX Barrier",
    description: "Many customers want cleaner energy without heavy initial investment.",
    icon: ShieldCheck
  },
  {
    title: "Complex Technical Evaluation",
    description: "Storage, solar, EMS and grid constraints must be planned together.",
    icon: Leaf
  },
  {
    title: "Local Compliance & Delivery Uncertainty",
    description:
      "Projects need practical coordination across site, utility and delivery teams.",
    icon: Building2
  }
] as const;

export const solutions = [
  {
    title: "Battery Energy Storage",
    description:
      "C&I BESS for peak shaving, backup support and flexible site-level energy control.",
    icon: BatteryCharging
  },
  {
    title: "Solar Hybrid Microgrid",
    description:
      "PV, BESS, EMS and backup resources integrated into resilient local energy systems.",
    icon: SunMedium
  },
  {
    title: "Energy-as-a-Service",
    description:
      "Flexible commercial pathways designed to lower upfront burden and simplify adoption.",
    icon: Leaf
  },
  {
    title: "EMS & Cloud Monitoring",
    description:
      "Forecast, dispatch, monitor and optimize distributed energy assets remotely.",
    icon: CloudCog
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
  "Outright purchase",
  "Leasing pathway",
  "EMC-style model",
  "PPA-style arrangement",
  "Energy-as-a-Service option",
  "Long-term O&M support"
] as const;

export const traditionalModel = [
  "Customer funds equipment upfront",
  "Higher approval friction",
  "Customer carries technical risk",
  "Longer decision cycle"
] as const;

export const flexibleModel = [
  "Zero-CAPEX or lower-CAPEX pathway",
  "Leasing / PPA-style / EMC-style options",
  "Partner-backed technical solution",
  "Local delivery and O&M support",
  "Easier pilot-to-scale adoption"
] as const;

export const microgridFlow = [
  { label: "PV Generation", icon: SunMedium },
  { label: "Battery Energy Storage", icon: BatteryCharging },
  { label: "EMS Control", icon: Network },
  { label: "AI Optimization", icon: Zap },
  { label: "Cloud Monitoring", icon: CloudCog },
  { label: "Future VPP-Ready Platform", icon: Globe2 }
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
    title: "Local Manufacturing Roots",
    description:
      "Built from a wider automotive and manufacturing ecosystem with practical operating discipline."
  },
  {
    title: "Dedicated Digital Energy Focus",
    description:
      "Focused on localized green energy solutions, not broad group storytelling."
  },
  {
    title: "Malaysia Project Delivery",
    description:
      "Local market access, project coordination and long-term service support for C&I customers."
  },
  {
    title: "Partner-Backed Technology Resources",
    description:
      "Technology and supply-chain resources are positioned carefully as partner capabilities."
  }
] as const;

export const projectReferences = [
  {
    title: "Representative BESS Applications",
    description:
      "Partner reference materials show demand management, C&I storage and grid-support use cases."
  },
  {
    title: "Solar Hybrid & Microgrid Planning",
    description:
      "Technical proposal materials help inform topology, site constraints and integration logic."
  },
  {
    title: "Approved Case Studies Coming Later",
    description:
      "Public project references will be added only after approval, anonymization and usage clearance."
  }
] as const;
