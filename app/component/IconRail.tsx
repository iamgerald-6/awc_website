// import { Activity } from "lucide-react";
import { cn } from "../lib/utils";
import { LucideIcon } from "lucide-react";

type IconRailItem = {
  icon: LucideIcon; // pass the icon component
};

type ServicesIconRailProps = {
  items: { icon: LucideIcon }[];
  activeIndex: number;
};
export function IconRail({ items, activeIndex }: ServicesIconRailProps) {
  return (
    <div className="hidden md:flex md:justify-end  border-black/10 mt-20">
      <div className="flex flex-col gap-16 pt-6">
        {items.map((item, i) => {
          const IconComponent = item.icon; // get icon component
          return (
            <div
              key={i}
              className={cn(
                "transition-opacity",
                activeIndex === i ? "opacity-100" : "opacity-20"
              )}
            >
              <IconComponent className="h-14 w-14 text-accent-bright" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
