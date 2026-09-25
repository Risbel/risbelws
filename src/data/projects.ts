export type Project = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  stack: string[];
  image: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  features?: { title: string; description: string }[];
  stackGroups?: { category: string; items: string[] }[];
  techMatrix?: { layer: string; technology: string; purpose: string }[];
};

export const projects: Project[] = [
  {
    slug: "alianci-cleaning",
    name: "Alianci Cleaning",
    githubUrl: "https://github.com/Risbel/aliancicleaning",
    liveUrl: "https://aliancicleaning.com",
    description:
      "Professional cleaning services booking platform with advanced scheduling and management dashboard.",
    longDescription:
      "Alianci Cleaning is a modern, full-featured booking and management platform for professional cleaning services. It serves as a landing page, customer booking system, and admin dashboard rolled into one cohesive web application.",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Supabase",
      "TanStack Query",
    ],
    image: "/aliancicleaning.webp",
    images: [
      "/aliancicleaning.webp",
      "/aliancicleaning-dashboard-00.webp",
      "/aliancicleaning-dashboard-01.webp",
    ],
    features: [
      {
        title: "Landing Page",
        description:
          "Marketing-focused homepage with service showcases and conversion-optimized CTAs.",
      },
      {
        title: "Booking System",
        description:
          "Multi-step wizard for customers to request cleaning services with detailed specifications.",
      },
      {
        title: "Admin Dashboard",
        description:
          "Comprehensive management interface for staff and admin roles to handle quotes, clients, and operations.",
      },
      {
        title: "Authentication",
        description:
          "Secure user authentication with role-based access control (client, staff, admin).",
      },
    ],
    stackGroups: [
      {
        category: "Frontend",
        items: [
          "React 19",
          "Vite",
          "TypeScript",
          "Tailwind CSS 4",
          "shadcn/ui",
        ],
      },
      {
        category: "Data Management & State",
        items: [
          "TanStack React Query",
          "React Context (Auth)",
          "React Hook Form",
          "Zod",
        ],
      },
      {
        category: "UI & Visualization",
        items: [
          "Recharts",
          "React Day Picker",
          "Radix UI",
          "HugeIcons",
          "Motion",
        ],
      },
      {
        category: "Utilities",
        items: ["date-fns", "Leaflet", "browser-image-compression", "Sonner"],
      },
      {
        category: "Backend & Database",
        items: ["Supabase", "PostgreSQL", "REST API"],
      },
      {
        category: "Email & Deployment",
        items: ["Resend", "Vercel", "Namecheap"],
      },
      {
        category: "Routing & Architecture",
        items: [
          "React Router v7",
          "Service Layer Pattern",
          "Query Hooks Pattern",
        ],
      },
      {
        category: "Development Tools",
        items: ["Playwright", "React Query DevTools", "Prettier"],
      },
    ],
    techMatrix: [
      {
        layer: "Bundler",
        technology: "Vite",
        purpose: "Fast dev server and optimized production builds",
      },
      {
        layer: "Framework",
        technology: "React 19 + TypeScript",
        purpose: "Component-based UI with type safety",
      },
      {
        layer: "Styling",
        technology: "Tailwind CSS 4",
        purpose: "Utility-first CSS with design tokens",
      },
      {
        layer: "Components",
        technology: "shadcn/ui",
        purpose: "Accessible, customizable UI primitives",
      },
      {
        layer: "Forms & Validation",
        technology: "React Hook Form + Zod",
        purpose: "Performant forms with schema validation",
      },
      {
        layer: "Server State",
        technology: "TanStack React Query",
        purpose: "Data fetching, caching, and synchronization",
      },
      {
        layer: "Auth State",
        technology: "React Context",
        purpose: "Session and user role management",
      },
      {
        layer: "Routing",
        technology: "React Router v7",
        purpose: "Client-side navigation and layouts",
      },
      {
        layer: "Backend & Database",
        technology: "Supabase + PostgreSQL",
        purpose: "Managed relational database with auth and APIs",
      },
      {
        layer: "Email",
        technology: "Resend",
        purpose:
          "Transactional emails for booking confirmations and notifications",
      },
      {
        layer: "Hosting",
        technology: "Vercel",
        purpose: "Production hosting with automatic deployments",
      },
      {
        layer: "Domain",
        technology: "Namecheap",
        purpose: "Domain registration and DNS management",
      },
      {
        layer: "Visualization",
        technology: "Recharts",
        purpose: "Dashboard charts and analytics",
      },
    ],
  },
];
