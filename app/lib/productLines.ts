import { BarChart2, Layers, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteContent } from "@/app/content/siteContent";

export type ProductLineItem = {
  name: string;
  description: string;
  icon: LucideIcon;
  features: readonly string[];
};

export function getProductLineItems(): ProductLineItem[] {
  return siteContent.adsProductsAndServices.productLines.map((line) => {
    let icon: LucideIcon = BarChart2;
    if (line.name.includes("Analytics")) icon = BarChart2;
    else if (line.name.includes("Transaction")) icon = Layers;
    else if (line.name.includes("Financial")) icon = Settings;

    const features =
      "features" in line && Array.isArray(line.features) ? line.features : [];

    return {
      name: line.name,
      description: line.description,
      icon,
      features,
    };
  });
}
