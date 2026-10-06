/**
 * Featured project catalogue — sourced from internal EOI portfolio.
 * Public copy avoids naming specific client institutions (confidentiality).
 */

export type ProjectRecord = {
  slug: string;
  title: string;
  /** Short line under title on cards (uppercase in UI) */
  categoryLabel: string;
  /** One line for home grid */
  teaser: string;
  heroImage: string;
  cardImage: string;
  services: string[];
  duration: string;
  location: string;
  summary: string;
  body: string[];
  galleryImages?: string[];
};

const img = {
  p0: "/images/home/project-delivery.jpg",
  p1: "/images/home/project-workshop.jpg",
  p2: "/images/home/project-field.jpg",
  p3: "/images/home/services-analytics.jpg",
  p4: "/images/home/about-advisory.jpg",
  p5: "/images/home/industry-digital.jpg",
  p6: "/images/home/industry-urban.jpg",
  p7: "/images/home/industry-transport.jpg",
  p8: "/images/home/industry-energy.jpg",
  p9: "/images/home/industry-water.jpg",
  p10: "/images/home/industry-climate.jpg",
};

export const projectsCatalog: ProjectRecord[] = [
  {
    slug: "aaford-blended-finance-review",
    title: "Blended finance facility review",
    categoryLabel: "NATIONAL DEVELOPMENT · AGRICULTURE",
    teaser:
      "Review and enhancement of operational and financial processes for a national blended finance facility.",
    heroImage: img.p4,
    cardImage: img.p4,
    services: ["Planning & advisory", "Financial modelling", "Governance"],
    duration: "2026",
    location: "Ghana",
    summary:
      "Advisory support to strengthen how a national blended finance facility operates—aligning processes, controls, and reporting with multilateral standards.",
    body: [
      "AWC supports the review and enhancement of operational and financial processes for a blended finance facility focused on affordable agricultural financing and resilient rural development.",
      "The engagement combines financial services advisory with analytics-led diagnostics: facility workflows, partner financial institution readiness, and governance artefacts that stand up to audit and donor review.",
      "Deliverables emphasise practical operating procedures, documentation, and implementation guidance rather than paper-only recommendations.",
    ],
    galleryImages: [img.p4, img.p3, img.p1],
  },
  {
    slug: "national-rmfi-baseline",
    title: "National RMFI baseline survey",
    categoryLabel: "RURAL FINANCE · BASELINE",
    teaser:
      "Nationwide baseline of rural microfinance institutions and agricultural portfolio performance.",
    heroImage: img.p1,
    cardImage: img.p1,
    services: ["Research & analytics", "Survey design", "M&E"],
    duration: "7 months",
    location: "Nationwide, Ghana",
    summary:
      "Baseline survey and performance assessment across dozens of rural microfinance institutions to inform a multilateral agricultural finance programme.",
    body: [
      "Designed and implemented a national baseline covering rural microfinance institutions, establishing indicators for programme monitoring and target-setting.",
      "Assessed agricultural lending products, portfolio quality, and institutional capacity to serve smallholder and rural clients.",
      "Produced analytical models and evidence-based recommendations aligned with multilateral programme requirements.",
    ],
    galleryImages: [img.p1, img.p8],
  },
  {
    slug: "agricultural-blended-finance-design",
    title: "Agricultural blended finance design",
    categoryLabel: "NATIONAL DEVELOPMENT FINANCE",
    teaser:
      "Structuring and governance for an emergency agricultural blended finance programme.",
    heroImage: img.p0,
    cardImage: img.p0,
    services: ["Blended finance", "Credit governance", "Investor relations"],
    duration: "24 months",
    location: "Greater Accra, Ghana",
    summary:
      "Structured an agricultural blended finance facility under a national emergency economic programme, including credit governance and stakeholder coordination.",
    body: [
      "Supported design and operationalisation of a blended finance window targeting agricultural and rural lending through partner financial institutions.",
      "Developed governance frameworks, investor-facing materials, and implementation playbooks suitable for multilateral oversight.",
      "Engagement bridged strategy and execution—ensuring processes could be run by client teams after handover.",
    ],
    galleryImages: [img.p0, img.p2],
  },
  {
    slug: "green-finance-investment-facility",
    title: "Green finance & investment facility",
    categoryLabel: "MULTILATERAL PROGRAMME",
    teaser:
      "Blended finance design and capital mobilisation for green investment.",
    heroImage: img.p10,
    cardImage: img.p10,
    services: ["Transaction advisory", "Financial modelling", "Governance"],
    duration: "36 months",
    location: "Ghana",
    summary:
      "Facility design, financial modelling, and mobilisation advisory for a green finance and investment programme backed by development partners.",
    body: [
      "Advised on blended finance architecture, grant and loan layering, and governance for a green investment facility.",
      "Built financial models and implementation roadmaps to support partner engagement and capital mobilisation.",
      "Aligned documentation and controls with development finance institution expectations.",
    ],
    galleryImages: [img.p10, img.p5],
  },
  {
    slug: "sustainable-loan-pricing-model",
    title: "Sustainable loan pricing model",
    categoryLabel: "DEVELOPMENT FINANCE",
    teaser:
      "Risk-based pricing, cost-of-funds, and subsidy dependence analytics.",
    heroImage: img.p3,
    cardImage: img.p3,
    services: ["Financial modelling", "Analytics", "Advisory"],
    duration: "4 months",
    location: "Ghana",
    summary:
      "Built a sustainable loan pricing model including weighted average cost of funds, risk-based pricing, and subsidy dependence metrics.",
    body: [
      "Delivered an Excel-based pricing engine and methodology for a national development finance institution and its partner financial institutions.",
      "Integrated net interest margin analysis and subsidy dependence indicators to support transparent, risk-aligned pricing.",
      "Packaged models with user guidance for ongoing institutional use.",
    ],
  },
  {
    slug: "pfi-selection-manual",
    title: "PFI selection criteria & manual",
    categoryLabel: "GOVERNMENT · MULTILATERAL",
    teaser:
      "Eligibility criteria and appraisal manual for participating financial institutions.",
    heroImage: img.p4,
    cardImage: img.p7,
    services: ["Policy advisory", "Manuals & governance", "Appraisal"],
    duration: "2021 – 2025",
    location: "Ghana",
    summary:
      "Developed eligibility criteria, selection manuals, and appraisal frameworks for partner financial institutions under a government-supported programme.",
    body: [
      "Drafted PFI selection standards, benchmarking approaches, and operational manuals for a national development finance initiative.",
      "Supported government and programme units with structured appraisal methods and documentation for audit readiness.",
    ],
    galleryImages: [img.p7, img.p4],
  },
  {
    slug: "pfi-onboarding-platform",
    title: "PFI assessment & onboarding platform",
    categoryLabel: "NATIONAL DFI",
    teaser:
      "Automated assessment, selection, and onboarding for partner institutions.",
    heroImage: img.p5,
    cardImage: img.p5,
    services: ["Digital platforms", "Process design", "Advisory"],
    duration: "32 months",
    location: "Ghana",
    summary:
      "End-to-end advisory for assessing, selecting, and onboarding participating financial institutions, including automation and eligibility criteria.",
    body: [
      "Designed assessment workflows, scoring logic, and onboarding procedures for a development finance institution’s partner network.",
      "Supported automation and governance so selections remain consistent, documented, and defensible to funders.",
    ],
    galleryImages: [img.p5, img.p3],
  },
  {
    slug: "partial-credit-guarantee-facility",
    title: "Partial credit guarantee facility",
    categoryLabel: "REGULATORY · CAPITAL",
    teaser:
      "Design and operationalisation of a partial credit guarantee window.",
    heroImage: img.p6,
    cardImage: img.p6,
    services: ["Facility design", "Regulatory advisory", "Structuring"],
    duration: "30 months",
    location: "Ghana",
    summary:
      "Technical assistance for designing and standing up a partial credit guarantee facility, including regulatory licensing and capital structuring.",
    body: [
      "Structured guarantee mechanics, risk-sharing principles, and operating policies for a national development finance guarantee window.",
      "Coordinated regulatory and capital considerations with multilateral programme requirements.",
    ],
  },
  {
    slug: "agricultural-credit-risk-esms",
    title: "Agricultural credit risk & ESMS",
    categoryLabel: "PRIVATE FINANCIAL INSTITUTION",
    teaser:
      "Enterprise risk, environmental & social systems, and agricultural lending.",
    heroImage: img.p2,
    cardImage: img.p2,
    services: ["Risk management", "ESMS", "Capacity building"],
    duration: "42 months",
    location: "Ashanti Region, Ghana",
    summary:
      "Enterprise risk management, product costing, and environmental & social management systems for a savings and loans institution under a development finance programme.",
    body: [
      "Strengthened credit risk, ERM, and ESMS aligned with international development finance standards.",
      "Supported product costing, pricing, and institutional capacity for agricultural lending.",
    ],
  },
  {
    slug: "national-rural-finance-assessment",
    title: "National rural finance assessment",
    categoryLabel: "RURAL FINANCE · NATIONAL",
    teaser:
      "Coverage and performance assessment of rural microfinance institutions.",
    heroImage: img.p8,
    cardImage: img.p8,
    services: ["Research", "Diagnostics", "Strategy"],
    duration: "6 months",
    location: "Nationwide, Ghana",
    summary:
      "National assessment of rural microfinance coverage, performance, and operational strategy for an industry network and development programme.",
    body: [
      "Evaluated rural finance institutions’ reach, product mix, and operational performance.",
      "Informed rural finance strategy and partner programme design.",
    ],
  },
  {
    slug: "investment-readiness-six-pfis",
    title: "Investment readiness programme",
    categoryLabel: "SIX FINANCIAL INSTITUTIONS",
    teaser:
      "Investment readiness and institutional strengthening across multiple PFIs.",
    heroImage: img.p0,
    cardImage: img.p9,
    services: ["Capacity building", "Investment readiness", "Advisory"],
    duration: "15 months",
    location: "Ghana",
    summary:
      "Investment readiness assessments and capacity strengthening for six Ghanaian financial institutions under a resilience programme.",
    body: [
      "Conducted institution-level diagnostics and readiness plans across a portfolio of banks and non-bank financial institutions.",
      "Delivered actionable strengthening roadmaps without disclosing institution-specific confidential arrangements in public materials.",
    ],
    galleryImages: [img.p9, img.p0],
  },
];

export function getProjectBySlug(slug: string) {
  return projectsCatalog.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3) {
  return projectsCatalog.filter((p) => p.slug !== slug).slice(0, limit);
}
