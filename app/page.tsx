"use client";
import { Hero } from "./component/Hero";
import { siteContent } from "./content/siteContent";
import { homeImages } from "./content/homeImages";
import { SectionGrid } from "./component/SectionGrid";
import { HighlightSphere } from "./component/ButtonAnime";
import { StatsBand } from "./component/StatsBand";
// import {
//   Zap,
//   Droplet,
//   Building,
//   Server,
//   Leaf,
//   Layers,
// } from "lucide-react";
// import type { LucideIcon } from "lucide-react";
// import { FourColFeatureGrid } from "./component/IndustrisGrid";
import Link from "next/link";
import { NewsGrid } from "./component/newsGrid";
import { FeaturedProjectsRow } from "./component/FeaturedProjectsRow";
import { WhatWeDoExplorer } from "./component/WhatWeDoExplorer";
import { getProductLineItems } from "./lib/productLines";

export default function Home() {
  const h = siteContent.home;
  const a = siteContent.about;
  const productItems = getProductLineItems();

  // Industries We Serve — disabled on home for now
  // const sectors = siteContent.industries.sectors;
  // type GridItem = {
  //   name: string;
  //   Icon?: LucideIcon;
  //   image?: string;
  // };
  // const sectorIcons = [Zap, Droplet, Building, Server, Leaf, Layers];
  // const col2: GridItem[] = [];
  // const col3: GridItem[] = [];
  // const col4: GridItem[] = [];
  // sectors.forEach((sector, i) => {
  //   const Icon = sectorIcons[i];
  //   const imageSlot = homeImages.industries[i];
  //   const item: GridItem = {
  //     name: sector,
  //     Icon,
  //     image: imageSlot?.src,
  //   };
  //   if (i % 3 === 0) col2.push(item);
  //   else if (i % 3 === 1) col3.push(item);
  //   else col4.push(item);
  // });

  return (
    <div className="overflow-x-hidden">
      <Hero
        headline={h.hero.headline}
        subhead={h.hero.subhead}
        cta={{
          label: h.hero.primaryCta.label,
          href: h.hero.primaryCta.href,
        }}
        backgroundImage={homeImages.hero.src}
        backgroundAlt={homeImages.hero.alt}
      />

      <SectionGrid
        label="Who we are"
        leftImage={{
          src: homeImages.aboutPrimary.src,
          alt: homeImages.aboutPrimary.alt,
          priority: true,
        }}
        rightImage={{
          src: homeImages.aboutSecondary.src,
          alt: homeImages.aboutSecondary.alt,
        }}
      >
        <div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            {a.overview}
          </p>

          <p className="mt-8 md:mt-10 text-lg sm:text-xl md:text-2xl text-muted leading-relaxed max-w-3xl">
            {a.mission}
          </p>

          <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl">
            {a.vision}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 md:mt-16">
            {a.values?.slice(0, 2).map((val) => (
              <li key={val.title}>
                <h3 className="text-xl sm:text-2xl text-accent-on-light font-semibold">
                  {val.title}
                </h3>
                <p className="text-base sm:text-lg mt-2 leading-relaxed">
                  {val.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link href="/who-we-are">
              <HighlightSphere borderColor="border-foreground">
                Learn more
              </HighlightSphere>
            </Link>
          </div>
        </div>
      </SectionGrid>

      <WhatWeDoExplorer
        items={productItems}
        sideImage={{
          src: homeImages.whatWeDo.src,
          alt: homeImages.whatWeDo.alt,
        }}
      />

      <StatsBand />

      {/* Industries We Serve — re-enable when needed
      <section>
        <FourColFeatureGrid
          label="Industries We Serve"
          intro="We provide advisory and technical solutions across these sectors."
          col2={col2}
          col3={col3}
          col4={col4}
        />
      </section>
      */}

      <FeaturedProjectsRow />

      <NewsGrid />
    </div>
  );
}
