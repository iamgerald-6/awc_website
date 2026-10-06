// /lib/industryIcons.ts
import { Zap, Truck, Droplet, Building, Server, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const industryIconMap: Record<string, LucideIcon> = {
  "Energy & Power": Zap,
  "Transport & Logistics": Truck,
  "Water & Sanitation": Droplet,
  "Urban Development": Building,
  "Digital Infrastructure": Server,
  "Climate & Sustainability": Leaf,
};
