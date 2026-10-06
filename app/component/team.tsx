import { Linkedin, LucideIcon, Mail } from "lucide-react";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import Image from "next/image";

type GridItem = {
  name: string;
  title: string;
  focus: string;
  bio: string;
  image?: string;
  icons: {
    icons1: LucideIcon;
    icons2: LucideIcon;
  };
  profile: string;
  mail: string;
};

type TeamGridProps = {
  label: string;
  intro: string;
  col2: GridItem[];
  col3: GridItem[];
  col4: GridItem[];
};

export function TeamGrid({ label, intro, col2, col3, col4 }: TeamGridProps) {
  const renderColumn = (items: GridItem[]) => (
    <Container className="py-20">
      <div className="grid gap-8">
        {items.map((item) => {
          return (
            <div
              key={item.name}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image on top */}
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={320}
                  height={180}
                  className="w-full h-44 object-cover"
                />
              )}

              <div className="p-4 space-y-2">
                {/* Name below image */}
                <h3 className="text-lg font-semibold">{item.name}</h3>

                {/* Title and focus */}
                <div className="flex flex-wrap gap-2 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title && (
                    <span className="bg-brand-light text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {item.title}
                    </span>
                  )}
                  {item.focus && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.focus}
                    </span>
                  )}

                  {/* LinkedIn & Email icons */}
                  <div className="flex gap-2 ml-2">
                    {item.profile && (
                      <a
                        href={item.profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {item.mail && (
                      <a
                        href={`mailto:${item.mail}`}
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );

  return (
    <section className="">
      <div className="grid grid-cols-12">
        {/* First column - static */}
        <div className="col-span-12 md:col-span-3 border-r border-black/10">
          <Container className="py-20">
            <div className="space-y-6">
              <SectionLabel>{label}</SectionLabel>
              <p className="text-lg mt-10 text-brand-dark">{intro}</p>
            </div>
          </Container>
        </div>

        {/* Second column */}
        <div className="col-span-12 md:col-span-3  border-black/10">
          {renderColumn(col2)}
        </div>

        {/* Third column */}
        <div className="col-span-12 md:col-span-3 border-l border-black/10">
          {renderColumn(col3)}
        </div>

        {/* Fourth column */}
        <div className="col-span-12 md:col-span-3 border-l border-black/10">
          {renderColumn(col4)}
        </div>
      </div>
    </section>
  );
}
