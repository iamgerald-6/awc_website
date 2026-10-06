import { LucideIcon } from "lucide-react";
import { Container } from "./Container";
import Image from "next/image";
import { SectionLabel } from "./SectionLabel";

type GridItem = {
  name: string;
  Icon?: LucideIcon;
  image?: string;
};

type FourColFeatureGridProps = {
  label: string;
  intro: string;
  col2: GridItem[];
  col3: GridItem[];
  col4: GridItem[];
};

export function FourColFeatureGrid({
  label,
  intro,
  col2,
  col3,
  col4,
}: FourColFeatureGridProps) {
  const renderColumn = (items: GridItem[]) => (
    <Container className="section-padding md:py-20">
      <div className="space-y-10 md:space-y-14">
        {items.map((item) => {
          const Icon = item.Icon;
          return (
            <div key={item.name} className="space-y-4">
              <div className="flex gap-3 items-center">
                {Icon && (
                  <Icon className="h-10 w-10 text-accent shrink-0" aria-hidden />
                )}
                <h5 className="text-lg sm:text-xl text-accent-on-light font-semibold">
                  {item.name}
                </h5>
              </div>
              {item.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={`${item.name} advisory and infrastructure consulting`}
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );

  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x divide-border">
        <div className="md:col-span-3 border-t md:border-t-0 border-border">
          <Container className="section-padding md:py-20">
            <div className="space-y-6">
              <SectionLabel>{label}</SectionLabel>
              <p className="text-base sm:text-lg mt-6 md:mt-10 text-muted">{intro}</p>
            </div>
          </Container>
        </div>
        <div className="md:col-span-3 border-t md:border-t-0 border-border">
          {renderColumn(col2)}
        </div>
        <div className="md:col-span-3 border-t md:border-t-0 border-border">
          {renderColumn(col3)}
        </div>
        <div className="md:col-span-3 border-t md:border-t-0 border-border">
          {renderColumn(col4)}
        </div>
      </div>
    </section>
  );
}
