import {
  ShieldCheck,
  Award,
  TrendingUp,
  Users,
  Shield,
  Activity,
  FileText,
  BarChart,
  Linkedin,
  LucideIcon,
  Mail,
} from "lucide-react";
export type NavLink = {
  type: "link";
  label: string;
  href: string;
};

export type NavDropdown = {
  type: "dropdown";
  label: string;
  children: { label: string; href: string }[];
};

export type NavEntry = NavLink | NavDropdown;

export type AboutValue = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export type AboutSection = {
  values: AboutValue[];
};
export const siteContent = {
  brand: {
    name: "AWC",
    tagline: "Building resilient, data-driven infrastructure across Africa.",
    logo: {
      src: "/brand/Logo_AWC.png",
      alt: "awc logo",
    },
  },

  nav: [
    { type: "link", label: "Home", href: "/" },
    { type: "link", label: "Who we are", href: "/who-we-are" },
    { type: "link", label: "What we do", href: "/services" },
    { type: "link", label: "News", href: "/news" },
    { type: "link", label: "Career", href: "/career" },
  ] satisfies NavEntry[],

  pages: {
    featuredProject: {
      title: "Featured Project",
      description:
        "A spotlight on how AWC partners with clients to deliver data-driven infrastructure and advisory outcomes. Full case study content will be published here.",
    },
    news: {
      title: "News & updates",
      description:
        "Announcements and insights from AWC will appear here when published.",
    },
    career: {
      title: "Careers at AWC",
      description:
        "Join a team focused on analytics-led advisory and infrastructure delivery across Africa. Open roles will be listed here.",
    },
  },

  home: {
    hero: {
      headline:
        "Data-driven infrastructure and advisory solutions for Africa's growth",
      subhead:
        "AWC delivers analytics, engineering, and strategic advisory services that enable smarter decisions and sustainable outcomes.",
      primaryCta: {
        label: "Explore Our Solutions",
        href: "/services",
      },
      secondaryCta: {
        label: "Talk to an Expert",
        href: "/contact",
      },
    },

    valueProposition: [
      {
        title: "Evidence-based decision making",
        body: "We combine technical expertise with robust data analysis to support informed infrastructure and policy decisions.",
      },
      {
        title: "End-to-end delivery",
        body: "From advisory and design through implementation and monitoring, we support projects across their full lifecycle.",
      },
      {
        title: "Africa-focused expertise",
        body: "Our work is grounded in regional context, local data, and practical execution realities.",
      },
    ],

    trustSignals: [
      "Proven multi-sector experience",
      "Data and analytics driven approach",
      "Public and private sector engagements",
      "Sustainable development focus",
    ],

    stats: [
      {
        value: "100+",
        label: "Projects",
        iconKey: "projects",
      },
      {
        value: "₵100M+",
        label: "Funds raised for projects",
        iconKey: "funds",
      },
      {
        value: "150+",
        label: "Clients",
        iconKey: "clients",
      },
      {
        value: "1",
        label: "Team",
        iconKey: "team",
      },
    ],

    featuredProjectsIntro:
      "Whether you work in the public or private sector—or run a complex infrastructure program or a focused local engagement—we help you achieve intended outcomes.",

    featuredProjectsSpotlight:
      "We can help you achieve your intended outcomes. See how our experienced team have advised others across Africa.",

    featuredProjects: [
      {
        title: "Multi-sector infrastructure portfolio",
        clientLabel: "PUBLIC & PRIVATE SECTOR · GHANA",
        subtitle:
          "Urban, transport, and digital programs delivered with analytics-led oversight.",
      },
      {
        title: "Stakeholder delivery workshop",
        clientLabel: "DEVELOPMENT FINANCE · REGIONAL",
        subtitle:
          "Facilitated planning sessions aligning public and private partners on outcomes.",
      },
      {
        title: "Field advisory & assurance",
        clientLabel: "INFRASTRUCTURE DELIVERY · AWC",
        subtitle:
          "On-site assessment and implementation support across client programs.",
      },
    ],
  },

  about: {
    overview:
      "AWC is a professional services firm providing infrastructure advisory, analytics, and implementation support across Africa. We work with governments, development partners, and private sector clients to deliver resilient and future-ready solutions.",

    mission:
      "To enable smarter infrastructure and investment decisions through data, technical excellence, and local insight.",

    vision:
      "To be a trusted partner in shaping sustainable and inclusive infrastructure systems across Africa.",

    values: [
      {
        title: "Integrity",
        body: "We operate with transparency, accountability, and professional rigor.",
        icon: ShieldCheck,
      },
      {
        title: "Excellence",
        body: "We apply high technical standards and continuous improvement in all engagements.",
        icon: Award,
      },
      {
        title: "Impact",
        body: "We focus on solutions that deliver measurable and lasting outcomes.",
        icon: TrendingUp,
      },
      {
        title: "Collaboration",
        body: "We work closely with clients and partners to co-create practical solutions.",
        icon: Users,
      },
    ],
    howWeWork: {
      overview:
        "We combine a modular product core (repeatable components, governance artifacts, and delivery playbooks) with bespoke extensions to fit each client's operating context and constraints.",

      steps: [
        {
          title: "Diagnose",
          body: "Clarify outcomes, constraints, governance requirements, and decision journeys.",
        },
        {
          title: "Build",
          body: "Deliver a governed MVP with UAT, documentation, and training.",
        },
        {
          title: "Deploy",
          body: "Implement in the client environment with security controls, monitoring, and release management.",
        },
        {
          title: "Transfer",
          body: "Capability build through playbooks, runbooks, coaching, and operating model support.",
        },
      ],
    },
    governance: {
      title: "Governance",
      principles: [
        {
          title: "Documentation-first delivery",
          body: "Solution design, data dictionaries, runbooks, and audit trails.",
          icon: FileText,
        },
        {
          title: "Regulated-ready implementation",
          body: "Access control, segregation of duties, and change management aligned to client policy.",
          icon: Shield,
        },
        {
          title: "Model governance",
          body: "Validation notes, explainability, monitoring, and drift controls where applicable.",
          icon: Activity,
        },
        {
          title: "Data quality controls",
          body: "Assessment, issue register, remediation plan, and monitoring dashboards.",
          icon: BarChart,
        },
      ],
    },
    leadership: [
      {
        name: "Mawuko Williams",
        title: "Chief Executive Officer (CEO)",
        focus: "Firm leadership · Strategy · Analytics & advisory",
        bio: "Mawuko Williams leads AWC, setting direction across analytics, advisory, and delivery and ensuring client programs are grounded in evidence and execution discipline.",
        linkedin: "#",
        email: "info@awcghana.com",
        icons: {
          icon1: Linkedin,
          icon2: Mail,
        },
        profile: "#",
        mail: "info@awcghana.com",
      },
      {
        name: "Prof. David Asamoah",
        title: "TAS Lead, Co-Founder · Strategic Adviser",
        focus: "Research leadership · Academic partnerships · Governance",
        bio: "Professor David Asamoah co-founded AWC and leads transaction advisory and strategic engagements, connecting research, governance, and long-term institutional partnerships.",
        linkedin: "#",
        email: "info@awcghana.com",
        icons: {
          icon1: Linkedin,
          icon2: Mail,
        },
        profile: "#",
        mail: "info@awcghana.com",
      },
    ],

    team: [
      {
        name: "Benjamin Agyemang",
        title: "Senior Manager, FSA · TAS Senior Manager",
      },
      {
        name: "Sheila Amoafo",
        title: "Associate Data Scientist",
      },
      {
        name: "Gerald Gyeabour",
        title: "Associate AI / Data Engineer",
      },
      {
        name: "Patrick Adjei",
        title: "Chief Data & ML Engineer · ADA Lead",
      },
    ],
  },
  corporateProfile2026: {
    headline: "Corporate Profile (2026)",
    overview:
      "AWC is a data-driven advisory and infrastructure solutions firm operating across Africa. The firm supports public and private sector clients with analytics-led planning, technical delivery, and strategic execution across critical infrastructure sectors.",

    positioning:
      "AWC combines deep regional insight with international best practices to deliver resilient, scalable, and sustainable infrastructure solutions.",

    capabilities: [
      {
        title: "Strategic & Policy Advisory",
        body: "Infrastructure policy advisory, feasibility studies, investment analysis, and institutional strengthening for large-scale programs.",
      },
      {
        title: "Analytics & Decision Support",
        body: "Advanced data analytics, modelling, dashboards, and evidence-based tools that support complex infrastructure and investment decisions.",
      },
      {
        title: "Technical & Engineering Services",
        body: "Engineering assessments, design reviews, implementation oversight, and quality assurance across infrastructure sectors.",
      },
      {
        title: "Program Delivery & Monitoring",
        body: "End-to-end program management, performance monitoring frameworks, and impact evaluation.",
      },
    ],

    differentiators: [
      "Strong Africa-focused execution experience",
      "Data-first and analytics-led approach",
      "Multi-sector infrastructure expertise",
      "Practical, implementation-oriented solutions",
    ],

    clientSegments: [
      "Government and public sector institutions",
      "Development finance institutions",
      "Private sector investors and operators",
      "Multilateral and donor-funded programs",
    ],
  },

  adsProductsAndServices: {
    headline: "Analytics, Decision Support & Services Suite",
    intro:
      "AWC’s Analytics, Decision Support (ADS) and services suite delivers integrated advisory, analytics, and technical solutions that support infrastructure planning, delivery, and performance management.",

    productLines: [
      {
        name: "AI, Data Science & Analytics (ADA)",
        description:
          "A modular analytics and decision-support platform that transforms raw data into actionable insights for infrastructure planning, monitoring, and investment decision-making.",

        features: [
          "Natural language processing (NLP) and sentiment analysis for stakeholder and user insights",
          "Data integration and validation",
          "Custom dashboards and visual analytics",
          "Scenario modelling and forecasting",
          "Data platforms, data quality, and model operations (MLOps)",
          "Responsible AI governance and documentation",
          "Performance monitoring and reporting",
        ],

        outcomes: [
          "Improved decision quality and transparency",
          "Better investment prioritization",
          "Reduced delivery and operational risk",
        ],
      },
      {
        name: "Financial Services Advisory (FSA)",
        description:
          "Comprehensive advisory services supporting infrastructure strategy, financing, and delivery across sectors and geographies.",

        features: [
          "Feasibility and pre-investment studies",
          "Policy, regulatory, and institutional advisory",
          "PPP and transaction advisory",
          "Capacity building and stakeholder engagement",
        ],
      },
      {
        name: "Transaction Advisory (TAS)",
        description:
          "Engineering and technical services ensuring infrastructure solutions are robust, efficient, and fit for purpose.",

        features: [
          "Technical assessments and audits",
          "Design validation and optimization",
          "Implementation and construction oversight",
          "Risk, quality, and compliance assurance",
        ],
      },
    ],

    deliveryModel: [
      "Client needs assessment and scoping",
      "Solution design and configuration",
      "Deployment and implementation support",
      "Ongoing monitoring, optimization, and learning",
    ],

    sectorsSupported: [
      "Energy & power systems",
      "Transport and logistics infrastructure",
      "Water and sanitation",
      "Urban and regional development",
      "Digital and data infrastructure",
      "Climate resilience and sustainability",
    ],
  },

  industries: {
    headline: "Industries We Serve",
    sectors: [
      "Energy & Power",
      "Transport & Logistics",
      "Water & Sanitation",
      "Urban Development",
      "Digital Infrastructure",
      "Climate & Sustainability",
    ],
  },

  insights: {
    headline: "Insights & Thought Leadership",
    intro:
      "Perspectives, research, and analysis on infrastructure, data, and development trends across Africa.",

    categories: [
      "Infrastructure planning",
      "Data and digital transformation",
      "Climate resilience",
      "Public-private partnerships",
      "Policy and regulation",
    ],
  },

  contact: {
    headline: "Get in Touch",
    intro:
      "Speak with our team to discuss how AWC can support your project or organization.",
    sublime: "Deliver your next project with confidence",
    locationAddress: "Octagon Banes Road, Accra, Ghana",
    postalAddress: "P.O. Box WY2662, Kwabenya",
    email: "info@awcghana.com",
    phones: ["+233 268 379 722", "+233 204 247 407"],
  },

  seo: {
    defaultTitle:
      "AWC | Data-Driven Infrastructure & Advisory Services in Africa",
    defaultDescription:
      "AWC provides infrastructure advisory, analytics, and technical services across Africa, supporting smarter investment and sustainable development outcomes.",
    keywords: [
      "infrastructure advisory Africa",
      "data analytics consulting",
      "engineering services Africa",
      "development advisory",
      "monitoring and evaluation",
    ],
  },
} as const;
