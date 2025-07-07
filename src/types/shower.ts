export interface DoorConfiguration {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface FrameStyle {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export interface HardwareFinish {
  id: string;
  name: string;
  colorHex?: string;
  image?: string;
}

export interface GlassType {
  id: string;
  name: string;
  description: string;
  image?: string;
  pattern?: string;
}

export interface ShowerConfiguration {
  doorConfiguration?: DoorConfiguration;
  frameStyle?: FrameStyle;
  hardwareFinish?: HardwareFinish;
  glassType?: GlassType;
}

export const DOOR_CONFIGURATIONS: DoorConfiguration[] = [
  {
    id: "swing-door",
    name: "Swing Door",
    description: "Traditional hinged door that swings open.",
  },
  {
    id: "sliding-door",
    name: "Sliding Door",
    description: "Space-saving door that slides along track.",
  },
  {
    id: "fixed-panel",
    name: "Fixed Panel",
    description: "Stationary glass panel for walk-in showers.",
  },
  {
    id: "corner-enclosure",
    name: "Corner Enclosure",
    description: "Complete corner shower enclosure.",
  },
];

export const FRAME_STYLES: FrameStyle[] = [
  {
    id: "frameless",
    name: "Frameless",
    description: "Modern, minimalist, max glass.",
  },
  {
    id: "semi-frameless",
    name: "Semi-Frameless",
    description: "Balanced design, budget-friendly.",
  },
  {
    id: "framed",
    name: "Framed",
    description: "Classic, durable frame.",
  },
  {
    id: "custom",
    name: "Custom",
    description: "Built for unique spaces.",
  },
];

export const HARDWARE_FINISHES: HardwareFinish[] = [
  {
    id: "chrome",
    name: "Chrome",
    colorHex: "#C0C0C0",
  },
  {
    id: "brushed-nickel",
    name: "Brushed Nickel",
    colorHex: "#B8B8B8",
  },
  {
    id: "oil-rubbed-bronze",
    name: "Oil-Rubbed Bronze",
    colorHex: "#654321",
  },
  {
    id: "matte-black",
    name: "Matte Black",
    colorHex: "#2C2C2C",
  },
  {
    id: "custom",
    name: "Custom",
    colorHex: "#8B7355",
  },
];

export const GLASS_TYPES: GlassType[] = [
  {
    id: "clear",
    name: "Clear",
    description: "Crystal clear visibility",
  },
  {
    id: "frosted",
    name: "Frosted",
    description: "Privacy with light transmission",
  },
  {
    id: "rain",
    name: "Rain",
    description: "Textured water droplet pattern",
  },
  {
    id: "low-iron",
    name: "Low Iron (Ultra Clear)",
    description: "Premium clarity with minimal tint",
  },
  {
    id: "patterned",
    name: "Patterned",
    description: "Decorative textured designs",
  },
  {
    id: "tinted",
    name: "Tinted (Gray/Bronze)",
    description: "Subtle color for reduced glare",
  },
];
