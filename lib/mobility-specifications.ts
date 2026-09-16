// Visually checked against evmobii-product-brochure.pdf, pp.1–15.
// Sources and clarification notes stay internal and are not rendered.
export const specificationFields = [
  { key: "maximumLoad", label: "Maximum load" },
  { key: "motorPower", label: "Motor power" },
  { key: "batterySpecification", label: "Battery specification" },
  { key: "maximumSpeed", label: "Maximum speed" },
  { key: "estimatedRange", label: "Estimated range" },
  { key: "chargingTime", label: "Charging time" },
  { key: "lithiumBatteryOption", label: "Lithium battery option" }
] as const;

export const cardSpecificationFields = [
  specificationFields[0], specificationFields[2], specificationFields[1], specificationFields[4]
] as const;
export type SpecificationDetail = { label: string; value: string };
type SpecificationKey = (typeof specificationFields)[number]["key"];
type MobilitySpecification = {
  id: string;
  model: "Flag Ship" | "Black Panther" | "Warrior" | "Courier Cart" | "Mobile Food Cart";
  fullName: string;
  specifications: Record<SpecificationKey, string>;
  dimensions: readonly SpecificationDetail[];
  driving: readonly SpecificationDetail[];
  features: readonly SpecificationDetail[];
};

export const mobilitySpecifications: readonly MobilitySpecification[] = [
  {
    // Core p.1; driving, tyres and cargo p.2; instruments and motor p.3.
    id: "flag-ship", model: "Flag Ship", fullName: "Flag Ship",
    specifications: {
      maximumLoad: "1,200 kg", motorPower: "1,800 W", batterySpecification: "72 V / 58 Ah",
      maximumSpeed: "50 km/h", estimatedRange: "60–80 km", chargingTime: "6–8 hours",
      lithiumBatteryOption: "Enquire about configurations"
    },
    dimensions: [
      { label: "Vehicle dimensions", value: "3,300 × 1,299 × 1,460 mm" },
      { label: "Cargo bed dimensions", value: "1,800 × 1,300 mm" }
    ],
    driving: [
      { label: "Drive controls", value: "Forward / reverse; low, medium and high speed modes" },
      { label: "Hill functions", value: "Hill-climbing mode and anti-rollback system" },
      { label: "Front suspension", value: "43 mm external spring shock absorbers" },
      { label: "Tyres", value: "Front 400-12; rear 450-12" }
    ],
    features: [
      { label: "Cargo access", value: "Liftable cargo bed with opening cargo door" },
      { label: "Instruments", value: "LED digital instrument panel with Bluetooth connectivity" },
      { label: "Motor protection", value: "IP54 motor protection rating" }
    ]
  },
  {
    // Core p.4; suspension and tyres p.5; instruments p.6.
    id: "black-panther", model: "Black Panther", fullName: "Black Panther",
    specifications: {
      maximumLoad: "800 kg", motorPower: "1,500 W", batterySpecification: "72 V / 52 Ah",
      maximumSpeed: "50 km/h", estimatedRange: "60–80 km", chargingTime: "6–8 hours",
      lithiumBatteryOption: "Enquire about configurations"
    },
    dimensions: [
      { label: "Vehicle dimensions", value: "3,070 × 1,180 × 1,410 mm" },
      { label: "Cargo bed dimensions", value: "1,600 × 1,100 mm" }
    ],
    driving: [
      { label: "Drive controls", value: "Forward / reverse; low, medium and high speed modes" },
      { label: "Hill functions", value: "Hill-climbing mode and front / rear anti-rollback function" },
      { label: "Suspension", value: "43 mm front external spring shock absorbers; four-spring rear suspension" },
      { label: "Tyres", value: "Front 375-12; rear 400-12" }
    ],
    features: [
      { label: "Cargo access", value: "Liftable cargo bed" },
      { label: "Instruments", value: "LED digital instrument panel" },
      { label: "Connectivity", value: "Bluetooth, USB port and audio system" }
    ]
  },
  {
    // Core p.7; suspension p.8; lighting/connectivity p.9.
    // Tyre notation on p.8 (350-12 / R400-12) omitted pending clarification.
    id: "warrior", model: "Warrior", fullName: "Warrior",
    specifications: {
      maximumLoad: "500 kg", motorPower: "1,200 W", batterySpecification: "60 V / 52 Ah",
      maximumSpeed: "50 km/h", estimatedRange: "60–80 km", chargingTime: "6–8 hours",
      lithiumBatteryOption: "Enquire about configurations"
    },
    dimensions: [
      { label: "Vehicle dimensions", value: "2,910 × 1,070 × 1,365 mm" },
      { label: "Cargo bed dimensions", value: "1,500 × 1,000 mm" }
    ],
    driving: [
      { label: "Drive controls", value: "Forward / reverse; low, medium and high speed modes" },
      { label: "Hill functions", value: "Hill-climbing mode and anti-rollback system" },
      { label: "Suspension", value: "43 mm front external spring shock absorbers; six-leaf rear springs" }
    ],
    features: [
      { label: "Lighting", value: "LED headlamps" },
      { label: "Instruments", value: "LED dashboard and integrated control handle" },
      { label: "Connectivity", value: "Bluetooth, USB charging port and audio system" }
    ]
  },
  {
    // Existing Courier Cart maps to brochure Warrior Electric Tricycle Courier Cart.
    // Core p.13; suspension/brakes p.14; doors/seat p.15.
    // User confirmation 2026-09-16: box 1700 × 1100 × 1400 mm is valid.
    // Omit 2910 × 1070 × 1365 mm: measurement subject is not established.
    id: "courier-cart", model: "Courier Cart", fullName: "Warrior Electric Tricycle Courier Cart",
    specifications: {
      maximumLoad: "500 kg", motorPower: "1,200 W", batterySpecification: "60 V / 52 Ah",
      maximumSpeed: "50 km/h", estimatedRange: "60–80 km", chargingTime: "6–8 hours",
      lithiumBatteryOption: "Enquire about configurations"
    },
    dimensions: [{ label: "Cargo box dimensions", value: "1,700 × 1,100 × 1,400 mm" }],
    driving: [
      { label: "Drive controls", value: "Forward / reverse; low, medium and high speed modes" },
      { label: "Hill functions", value: "Hill-climbing mode and anti-rollback system" },
      { label: "Suspension", value: "43 mm front external spring shock absorbers; six-leaf rear springs" },
      { label: "Braking", value: "Three-wheel brake system, 160 mm" }
    ],
    features: [
      { label: "Cargo access", value: "Side and rear doors, safety locks and foldable steps" },
      { label: "Driver accommodation", value: "Adjustable seat and anti-slip armrests" },
      { label: "Instruments", value: "LED instrument panel with Bluetooth connectivity" },
      { label: "GPS installation", value: "Provision for GPS installation; GPS equipment is not included as standard" }
    ]
  },
  {
    // Core p.12; external power pp.10/12; suspension/brakes/service area p.11.
    // User confirmation 2026-09-16: body 1700 × 1100 × 1400 mm is valid.
    // Omit 2910 × 1070 × 1365 mm; do not relabel as overall or chassis dimensions.
    id: "mobile-food-cart", model: "Mobile Food Cart", fullName: "Mobile Food Cart",
    specifications: {
      maximumLoad: "500 kg", motorPower: "1,200 W", batterySpecification: "60 V / 52 Ah",
      maximumSpeed: "50 km/h", estimatedRange: "60–80 km", chargingTime: "6–8 hours",
      lithiumBatteryOption: "Enquire about configurations"
    },
    dimensions: [{ label: "Food cart body dimensions", value: "1,700 × 1,100 × 1,400 mm" }],
    driving: [
      { label: "Drive controls", value: "Forward / reverse; low, medium and high speed modes" },
      { label: "Hill functions", value: "Hill-climbing mode" },
      { label: "Rear suspension", value: "Six-leaf springs" },
      { label: "Braking", value: "180 mm brake system" }
    ],
    features: [
      { label: "Service area", value: "Stainless-steel food preparation and serving area" },
      { label: "Brand display", value: "Customizable lightbox" },
      { label: "Instruments", value: "LED instrument panel" },
      { label: "Connectivity", value: "Bluetooth, USB charging port and audio system" }
    ]
  }
];

export const specificationNote = "Specifications may vary by configuration. Maximum load, maximum speed and estimated range are separate figures and should not be assumed to be achievable together.";
export const rangeNote = "Actual range varies with battery configuration, load, speed, terrain and operating conditions.";
export const chargingNote = "Charging time varies with battery and charger configuration.";
export const lithiumNote = "Contact us for available lithium battery configurations for your vehicle and operating needs.";
export const batteryNote = "The battery specifications shown are separate from lithium battery options, which depend on the selected configuration.";
