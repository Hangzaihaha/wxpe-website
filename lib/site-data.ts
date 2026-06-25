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
  { label: "Solutions", href: "#solutions" },
  { label: "Energy-as-a-Service", href: "#eaas" },
  { label: "Microgrid", href: "#microgrid" },
  { label: "Localization", href: "#localization" },
  { label: "Mobility", href: "#mobility" },
  { label: "Why WXPE", href: "#why-wxpe" },
  { label: "Contact", href: "#contact" }
] as const;

export const painPoints = [
  {
    title: "High Energy Cost",
    description: "Tariffs and inefficient load profiles increase operating expenses.",
    icon: LineChart
  },
  {
    title: "Maximum Demand",
    description: "Peak demand charges can erode industrial and commercial margins.",
    icon: Gauge
  },
  {
    title: "Power Quality",
    description: "Voltage fluctuation and power-factor issues affect equipment stability.",
    icon: PlugZap
  },
  {
    title: "Reliability",
    description: "Outages and unstable supply disrupt critical operations.",
    icon: ShieldCheck
  },
  {
    title: "ESG Pressure",
    description: "Customers need measurable decarbonization and cleaner energy pathways.",
    icon: Leaf
  },
  {
    title: "CAPEX Barrier",
    description:
      "Many customers want clean energy but prefer lower upfront investment and risk.",
    icon: Building2
  }
] as const;

export const solutions = [
  {
    title: "C&I Battery Energy Storage",
    description:
      "Battery storage systems for factories, industrial parks, commercial buildings, shopping malls and data centers.",
    icon: BatteryCharging
  },
  {
    title: "Peak Shaving & Cost Optimization",
    description:
      "Use BESS, EMS and AI dispatch strategies to reduce maximum demand, shift loads and improve energy cost efficiency.",
    icon: Gauge
  },
  {
    title: "Solar Hybrid Microgrid",
    description:
      "Integrate PV, BESS, EMS, charging infrastructure and backup generation into resilient site-level microgrids.",
    icon: SunMedium
  },
  {
    title: "EMS, AI & Cloud Monitoring",
    description:
      "Forecast, dispatch, monitor and optimize distributed energy assets through intelligent control and remote operations.",
    icon: CloudCog
  }
] as const;

export const commercialModels = [
  "Outright purchase",
  "Leasing model",
  "EMC / shared-savings model",
  "PPA-style arrangement",
  "Energy-as-a-Service",
  "Long-term O&M and lifecycle support"
] as const;

export const traditionalModel = [
  "High upfront investment",
  "Customer bears technical risk",
  "Slower internal approval",
  "Limited lifecycle support",
  "Harder to scale across multiple sites"
] as const;

export const flexibleModel = [
  "Lower upfront burden",
  "Structured financing options",
  "Performance-linked service",
  "O&M and lifecycle support",
  "Scalable portfolio potential",
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
  "Factory and warehouse logistics",
  "Plantation and farm mobility",
  "Commercial and municipal use",
  "Local battery pack assembly pathway"
] as const;

export const whyItems = [
  {
    title: "Malaysia-Based Local Delivery",
    description:
      "Local project relationships, site coordination and customer proximity for practical execution."
  },
  {
    title: "Green Energy Integrated Solutions",
    description:
      "A combined approach across BESS, EMS, AI optimization, solar hybrid systems and operations."
  },
  {
    title: "Flexible Energy-as-a-Service Models",
    description:
      "Commercial structures designed to reduce upfront burden and support pilot-to-scale adoption."
  },
  {
    title: "Technology Partner Ecosystem",
    description:
      "Partner-supported solutions that bridge proven technology economics with local delivery needs."
  },
  {
    title: "Automotive & Manufacturing Background",
    description:
      "Manufacturing and mobility experience that supports local assembly pathways and lifecycle service."
  },
  {
    title: "Local Credibility with International Reach",
    description:
      "WXPE combines Malaysian local market understanding with cross-border cooperation experience, including shareholder and partner networks connected to Malaysia, China, Australia and the United States. This positions WXPE to bridge proven global technologies with practical local project needs."
  }
] as const;

export const strategicPoints = [
  "Malaysian local shareholder foundation and stakeholder network",
  "Bumiputra participation and local market understanding",
  "International cooperation experience with partners from Australia, the United States and China",
  "Practical localization pathway for assembly, certification and project delivery",
  "Ability to structure flexible commercial models such as leasing, EMC, PPA-style arrangements and Energy-as-a-Service",
  "Long-term vision to scale from flagship pilot projects into an ASEAN digital energy platform"
] as const;
