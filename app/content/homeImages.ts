/**
 * Central home page image registry — AWC photography and contextual stock.
 */
export type HomeImageSlot = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export const homeImages = {
  hero: {
    src: "/images/aboutUs.jpg",
    alt: "AWC team and partners in a working session on infrastructure advisory",
    priority: true,
  },
  aboutPrimary: {
    src: "/images/aboutUs2.jpg",
    alt: "Consultants collaborating on development finance and program design",
    width: 900,
    height: 600,
  },
  aboutSecondary: {
    src: "/images/teamPic.jpg",
    alt: "AWC professionals at a firm engagement",
    width: 900,
    height: 600,
  },
  whatWeDo: {
    src: "/images/whatwedo.jpg",
    alt: "Analytics and advisory work supporting infrastructure decisions",
    width: 700,
    height: 420,
  },
  industries: [
    {
      src: "/images/home/industry-energy.jpg",
      alt: "Energy infrastructure planning session",
    },
    {
      src: "/images/home/industry-transport.jpg",
      alt: "Transport and logistics advisory discussion",
    },
    {
      src: "/images/home/industry-water.jpg",
      alt: "Water and sanitation program review",
    },
    {
      src: "/images/home/industry-urban.jpg",
      alt: "Urban development strategy workshop",
    },
    {
      src: "/images/home/project-field.jpg",
      alt: "Field assessment for infrastructure program delivery",
    },
    {
      src: "/images/home/industry-climate.jpg",
      alt: "Climate resilience and sustainability advisory",
    },
  ] satisfies HomeImageSlot[],
  projects: [
    {
      src: "/images/home/project-delivery.jpg",
      alt: "Stakeholder presentation on a development finance engagement",
      width: 700,
      height: 400,
    },
    {
      src: "/images/home/project-workshop.jpg",
      alt: "Workshop on blended finance and PFI onboarding",
      width: 700,
      height: 360,
    },
    {
      src: "/images/home/project-field.jpg",
      alt: "On-site review with program partners",
      width: 450,
      height: 300,
    },
  ] satisfies HomeImageSlot[],
  news: [] satisfies HomeImageSlot[],
} as const;
