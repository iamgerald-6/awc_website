"use client";

import { WhatWeDoExplorer } from "../component/WhatWeDoExplorer";
import { StatsBand } from "../component/StatsBand";
import { FeaturedProjectsSection } from "../component/FeaturedProjectsSection";
import { PageIntro } from "../component/PageIntro";
import { siteContent } from "../content/siteContent";
import { getProductLineItems } from "../lib/productLines";

export default function ServicePage() {
  const p = siteContent.adsProductsAndServices;

  return (
    <div>
      <PageIntro
        label="What we do"
        title={p.headline}
        description={p.intro}
        dark
      />
      <WhatWeDoExplorer
        items={getProductLineItems()}
        showFeatures
        showServicesLink={false}
        sectionLabel="Services we offer"
      />
      <StatsBand />
      <FeaturedProjectsSection
        intro="Every project has its own complexities; we're here to simplify yours, whatever the scale or sector. Explore representative engagements below—described at a high level to protect client confidentiality."
      />
    </div>
  );
}
