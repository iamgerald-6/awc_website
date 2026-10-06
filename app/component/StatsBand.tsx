"use client";

import { Layers, Banknote, Briefcase, Users, type LucideIcon } from "lucide-react";
import { Container } from "./Container";
import { siteContent } from "@/app/content/siteContent";
import { ScrambleStat } from "./ScrambleStat";

const iconMap: Record<string, LucideIcon> = {
  projects: Layers,
  funds: Banknote,
  clients: Briefcase,
  team: Users,
};

export function StatsBand() {
  const stats = siteContent.home.stats;

  return (
    <section
      className="bg-surface-dark text-white border-b border-white/10"
      aria-label="Company milestones"
    >
      <Container className="section-padding">
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => {
            const Icon = iconMap[stat.iconKey];
            return (
              <li
                key={stat.label}
                className="flex flex-col items-center text-center px-2 py-2"
              >
                {Icon && (
                  <Icon
                    className="h-10 w-10 text-accent-bright mb-4"
                    aria-hidden
                  />
                )}
                <ScrambleStat
                  value={stat.value}
                  className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-accent-bright tabular-nums min-h-[1.2em]"
                />
                <p className="mt-3 text-sm sm:text-base font-medium uppercase tracking-widest text-white/80 max-w-[16rem]">
                  {stat.label}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
