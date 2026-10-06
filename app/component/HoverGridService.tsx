import { cn } from "../lib/utils";

export function HoverGridService({
  items,
  activeIndex,
  setActiveIndex,
}: {
  items: { name: string; description: string }[];
  activeIndex: number;
  setActiveIndex: (i: number) => void;
}) {
  return (
    <div className="col-span-12 md:col-span-6 mt-12 md:mt-24">
      <div className="flex flex-col gap-12 md:gap-16 pt-6">
        {items.map((item, i) => (
          <div key={item.name}>
            <h3
              onMouseEnter={() => setActiveIndex(i)}
              className={cn(
                "text-2xl sm:text-4xl font-semibold cursor-pointer transition-colors",
                activeIndex === i ? "text-accent-on-dark" : "text-white/40"
              )}
            >
              {item.name}
            </h3>
            {activeIndex === i && (
              <p className="mt-4 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
