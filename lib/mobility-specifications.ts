export const specificationFields = [
  { key: "motorPower", label: "Motor power" },
  { key: "estimatedRange", label: "Estimated range" },
  { key: "maximumLoad", label: "Maximum load" },
  { key: "vehicleDimensions", label: "Vehicle dimensions" },
  { key: "chargingTime", label: "Charging time" }
] as const;

type SpecificationKey = (typeof specificationFields)[number]["key"];

type MobilitySpecification = {
  model: string;
  specifications: Record<SpecificationKey, string>;
};

export const mobilitySpecifications = [
  {
    model: "Flag Ship",
    specifications: {
      motorPower: "1,800 W",
      estimatedRange: "60–80 km",
      maximumLoad: "Up to 1,200 kg",
      vehicleDimensions: "3300 × 1299 × 1460 mm",
      chargingTime: "6–8 hours"
    }
  },
  {
    model: "Black Panther",
    specifications: {
      motorPower: "1,500 W",
      estimatedRange: "60–80 km",
      maximumLoad: "Up to 800 kg",
      vehicleDimensions: "3070 × 1180 × 1410 mm",
      chargingTime: "6–8 hours"
    }
  },
  {
    model: "Warrior",
    specifications: {
      motorPower: "1,200 W",
      estimatedRange: "60–80 km",
      maximumLoad: "Up to 500 kg",
      vehicleDimensions: "2910 × 1070 × 1365 mm",
      chargingTime: "6–8 hours"
    }
  },
  {
    model: "Courier Cart",
    specifications: {
      motorPower: "1,200 W",
      estimatedRange: "60–80 km",
      maximumLoad: "Up to 500 kg",
      vehicleDimensions: "2910 × 1070 × 1365 mm",
      chargingTime: "6–8 hours"
    }
  },
  {
    model: "Mobile Food Cart",
    specifications: {
      motorPower: "1,200 W",
      estimatedRange: "60–80 km",
      maximumLoad: "Up to 500 kg",
      vehicleDimensions: "2910 × 1070 × 1365 mm",
      chargingTime: "6–8 hours"
    }
  }
] as const satisfies readonly MobilitySpecification[];

export const specificationNote =
  "Specifications are reference values and may vary by configuration and future product updates.";

