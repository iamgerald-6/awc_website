import Link from "next/link";
import { cn } from "../lib/utils";
import { HighlightSphere } from "./ButtonAnime";

export function HoverGrid({
  items,
  activeIndex,
  setActiveIndex,
}: {
  items: { name: string; description: string }[];
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  return (
    <div className="col-span-12 md:col-span-6 mt-24">
      <div className="flex flex-col gap-20 pt-6">
        {items.map((item, i) => (
          <h3
            key={item.name}
            onMouseEnter={() => setActiveIndex(i)}
            className={cn(
              "text-4xl font-semibold cursor-pointer transition-colors",
              activeIndex === i ? "text-white" : "text-gray-100/40"
            )}
          >
            {item.name}
          </h3>
        ))}
      </div>

      <div className="mt-10 max-w-xl text-lg text-white/70">
        {items[activeIndex].description}
      </div>
      <div className="mt-16">
        <Link href="/services">
          <HighlightSphere borderColor="border-white" textColor="text-white">
            View more
          </HighlightSphere>
        </Link>
      </div>
    </div>
  );
}
