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
  {
    slug: "storm-roofing",
    name: "Storm Roofing",
    githubUrl: "https://github.com/Risbel/storm_roofing",
    liveUrl: "https://storm-roofing.vercel.app",
    description:
      "Responsive landing page for a roofing company with a project gallery and a contact form that sends email.",
    longDescription:
      "Storm Roofing is a single-page marketing website for a roofing business. It presents the company with a hero, about section and project gallery, and lets visitors request a service through a contact form that delivers a branded HTML email to the business via a Next.js API route.",
    stack: [
      "Next.js 13",
      "React 18",
      "JavaScript",
      "Tailwind CSS",
      "Nodemailer",
    ],
    image: "/storm-roofing-00.webp",
    images: [
      "/storm-roofing-00.webp",
      "/storm-roofing-01.webp",
      "/storm-roofing-02.webp",
      "/storm-roofing-03.webp",
    ],
    features: [
      {
        title: "Landing Page",
        description:
          "Hero, about-us and contact sections with smooth in-page navigation and a mobile-friendly menu.",
      },
      {
        title: "Project Gallery",
        description:
          "Responsive image grid showcasing the company's roofing work, optimized with next/image.",
      },
      {
        title: "Contact Form",
        description:
          "Form with name, service, email and message, with loading state and toast feedback on submit.",
      },
      {
        title: "Email Delivery",
        description:
          "Next.js API route that sends each request to the business as a branded HTML email using Nodemailer.",
      },
    ],
    stackGroups: [
      {
        category: "Frontend",
        items: [
          "Next.js 13 (Pages Router)",
          "React 18",
          "JavaScript",
          "Tailwind CSS",
        ],
      },
      {
        category: "UI",
        items: ["Heroicons", "React Hot Toast", "next/image"],
      },
      {
        category: "Backend & Email",
        items: ["Next.js API Routes", "Nodemailer", "HTML email templates"],
      },
      {
        category: "Deployment",
        items: ["Vercel"],
      },
    ],
    techMatrix: [
      {
        layer: "Framework",
        technology: "Next.js 13 + React 18",
        purpose: "Fast, SEO-friendly single-page site with API routes",
      },
      {
        layer: "Styling",
        technology: "Tailwind CSS",
        purpose: "Responsive, utility-first layouts",
      },
      {
        layer: "Icons",
        technology: "Heroicons",
        purpose: "Contact and navigation icons",
      },
      {
        layer: "Notifications",
        technology: "React Hot Toast",
        purpose: "Feedback after submitting the contact form",
      },
      {
        layer: "Email",
        technology: "Nodemailer",
        purpose: "Sends service requests to the business by email",
      },
      {
        layer: "Hosting",
        technology: "Vercel",
        purpose: "Production hosting with automatic deployments",
      },
    ],
  },
  {
    slug: "risbeui-market",
    name: "RisbeUI",
    githubUrl: "https://github.com/Risbel/RisbeUI-market",
    liveUrl: "https://risbeui-market.vercel.app",
    description:
      "Marketplace where developers buy and sell ready-to-use UI components, with Stripe payments and seller payouts.",
    longDescription:
      "RisbeUI Market is a full-stack marketplace for UI components and code snippets. Sellers upload their code, images and a rich-text guide, buyers browse by category and tags, preview the component and purchase it through Stripe, and sellers get paid directly via Stripe Connect.",
    stack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Kinde",
    ],
    image: "/risbeui-00.webp",
    images: [
      "/risbeui-00.webp",
      "/risbeui-01.webp",
      "/risbeui-02.webp",
      "/risbeui-03.webp",
    ],
    features: [
      {
        title: "Component Marketplace",
        description:
          "Browse products by category and tags, with product cards, skeleton loaders and dedicated category pages.",
      },
      {
        title: "Seller Flow",
        description:
          "Sellers upload source code, images, a rich-text description and an installation guide using a Tiptap editor and drag-and-drop uploads.",
      },
      {
        title: "Payments & Payouts",
        description:
          "Stripe Checkout for purchases and Stripe Connect so sellers receive their earnings directly, with email confirmations after each sale.",
      },
      {
        title: "Product Page",
        description:
          "Live code preview, syntax-highlighted source code, usage guide and JSON export for every component.",
      },
      {
        title: "Accounts & Dashboard",
        description:
          "Kinde authentication, a My Products area with soft-delete, account settings and billing management.",
      },
    ],
    stackGroups: [
      {
        category: "Frontend",
        items: [
          "Next.js 14 (App Router)",
          "React 18",
          "TypeScript",
          "Tailwind CSS",
          "shadcn/ui",
        ],
      },
      {
        category: "UI & Content",
        items: [
          "Radix UI",
          "Framer Motion",
          "Embla Carousel",
          "Lucide",
          "Tiptap",
          "Prism.js",
          "highlight.js",
        ],
      },
      {
        category: "Backend & Database",
        items: [
          "Next.js Route Handlers",
          "Server Actions",
          "Prisma",
          "PostgreSQL",
          "Zod",
        ],
      },
      {
        category: "Payments, Auth & Services",
        items: [
          "Stripe Checkout",
          "Stripe Connect",
          "Kinde",
          "UploadThing",
          "Resend",
          "React Email",
        ],
      },
      {
        category: "Deployment",
        items: ["Vercel"],
      },
    ],
    techMatrix: [
      {
        layer: "Framework",
        technology: "Next.js 14 + React 18",
        purpose: "Server-rendered App Router pages with server actions",
      },
      {
        layer: "Language",
        technology: "TypeScript",
        purpose: "End-to-end type safety",
      },
      {
        layer: "Styling",
        technology: "Tailwind CSS + shadcn/ui",
        purpose: "Utility-first styling with accessible Radix-based components",
      },
      {
        layer: "Animation",
        technology: "Framer Motion",
        purpose: "Smooth transitions and interactive UI",
      },
      {
        layer: "Rich Text",
        technology: "Tiptap",
        purpose: "Editor for product descriptions and guides",
      },
      {
        layer: "Database & ORM",
        technology: "PostgreSQL + Prisma",
        purpose: "Users, products, tags and purchases with migrations",
      },
      {
        layer: "Authentication",
        technology: "Kinde",
        purpose: "Sign-in, sessions and user management",
      },
      {
        layer: "Payments",
        technology: "Stripe Checkout + Connect",
        purpose: "Buyer checkout and direct seller payouts",
      },
      {
        layer: "File Uploads",
        technology: "UploadThing",
        purpose: "Product image and code file uploads",
      },
      {
        layer: "Email",
        technology: "Resend + React Email",
        purpose: "Purchase confirmation emails",
      },
      {
        layer: "Validation",
        technology: "Zod",
        purpose: "Schema validation for forms and server actions",
      },
      {
        layer: "Hosting",
        technology: "Vercel",
        purpose: "Production hosting with automatic deployments",
      },
    ],
  },
  {
    slug: "kids-ecommerce",
    name: "Kids E-commerce",
    githubUrl: "https://github.com/Risbel/kids-ecommerce",
    liveUrl: "https://kids-ecommerce.vercel.app",
    description:
      "Online store for kids' clothes, toys and baby products with category browsing, product details and a shopping cart.",
    longDescription:
      "Kids E-commerce is a responsive storefront for children's products. Shoppers browse by category (boys, girls, baby, toys, home), open detailed product pages with image galleries and related items, manage a shopping cart, and can sign up, log in, subscribe to updates or contact the store.",
    stack: [
      "Next.js 13",
      "React 18",
      "JavaScript",
      "Tailwind CSS",
      "Material UI",
      "TanStack Query",
      "NextAuth",
    ],
    image: "/kids-eccomerce-00.webp",
    images: [
      "/kids-eccomerce-00.webp",
      "/kids-eccomerce-01.webp",
      "/kids-eccomerce-02.webp",
      "/kids-eccomerce-03.webp",
    ],
    features: [
      {
        title: "Product Catalog",
        description:
          "Category pages for boys, girls, baby, toys, clothes and home, plus an all-products view and a sales section.",
      },
      {
        title: "Product Details",
        description:
          "Dynamic detail pages with image gallery, rating, stock count and related products.",
      },
      {
        title: "Shopping Cart",
        description:
          "Add, remove and change quantities (limited by stock), with cart state shared across the app via React Context and a reducer.",
      },
      {
        title: "Authentication",
        description:
          "Sign up and log in flows with NextAuth and JWT handling, plus an account page.",
      },
      {
        title: "Forms & Content Pages",
        description:
          "Contact form, newsletter subscription, FAQ, careers, about us and terms pages.",
      },
    ],
    stackGroups: [
      {
        category: "Frontend",
        items: [
          "Next.js 13 (Pages Router)",
          "React 18",
          "JavaScript",
          "Tailwind CSS",
        ],
      },
      {
        category: "UI",
        items: ["Material UI", "Emotion", "React Icons", "Custom carousels"],
      },
      {
        category: "Data & State",
        items: ["TanStack React Query", "Axios", "React Context + useReducer"],
      },
      {
        category: "Authentication",
        items: ["NextAuth", "jose", "jwt-decode"],
      },
      {
        category: "Integrations & Deployment",
        items: ["REST API", "Telegraf (Telegram)", "Vercel"],
      },
    ],
    techMatrix: [
      {
        layer: "Framework",
        technology: "Next.js 13 + React 18",
        purpose: "Pages-based routing with dynamic product routes",
      },
      {
        layer: "Styling",
        technology: "Tailwind CSS",
        purpose: "Responsive, utility-first layouts",
      },
      {
        layer: "Components",
        technology: "Material UI + custom components",
        purpose: "Reusable buttons, inputs, carousels, cards and layouts",
      },
      {
        layer: "Cart State",
        technology: "React Context + useReducer",
        purpose: "Global shopping cart with add, update and remove actions",
      },
      {
        layer: "Server State",
        technology: "TanStack React Query + Axios",
        purpose: "Form submissions and API communication",
      },
      {
        layer: "Authentication",
        technology: "NextAuth + JWT",
        purpose: "Login, signup and session handling",
      },
      {
        layer: "Hosting",
        technology: "Vercel",
        purpose: "Production hosting with automatic deployments",
      },
    ],
  },
  {
    slug: "qvaevents",
    name: "QvaEvents",
    githubUrl: "https://github.com/Risbel/qvaevents",
    liveUrl: "https://qvaevents.vercel.app",
    description:
      "Multi-tenant B2B2C events platform where organizers manage businesses and events, and clients discover events and reserve their spot.",
    longDescription:
      "QvaEvents is a bilingual (English/Spanish) B2B2C platform. Organizers create a profile and one or more businesses, each with its own public landing page, and publish events through a step-by-step wizard. Clients browse events, reserve visits with companions, and keep track of their tickets, while businesses manage visitors, clients, staff and role-based permissions from a dedicated dashboard.",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Supabase",
      "TanStack Query",
      "next-intl",
    ],
    image: "/qvaevents-00.webp",
    features: [
      {
        title: "Organizer Onboarding",
        description:
          "Organizers sign up, create a profile and then one or more businesses, each with its own logo, banner images, footer and map location.",
      },
      {
        title: "Event Creation Wizard",
        description:
          "Multi-step flow for basic info, date and time, interactive map location, poster uploads, access type, visibility and publishing, with reusable saved configurations.",
      },
      {
        title: "Client Reservations",
        description:
          "Clients reserve visits with companions, confirm attendance through a code link, cancel, and view their tickets and profile.",
      },
      {
        title: "Business Dashboard",
        description:
          "Manage events, visitors (mark as attended, email or message all), clients, reviews and staff, with search and filters.",
      },
      {
        title: "Roles & Permissions",
        description:
          "Custom roles with permissions per resource so business owners control what each staff member can do.",
      },
      {
        title: "Public Business Pages & i18n",
        description:
          "Each business gets a public page with its events, map and footer, and the whole app is available in English and Spanish with light and dark themes.",
      },
    ],
    stackGroups: [
      {
        category: "Frontend",
        items: [
          "Next.js 15 (App Router)",
          "React 19",
          "TypeScript",
          "Tailwind CSS 4",
          "shadcn/ui",
        ],
      },
      {
        category: "Data Management & State",
        items: [
          "TanStack React Query",
          "TanStack Table",
          "Server Actions",
          "Zod",
        ],
      },
      {
        category: "UI & Utilities",
        items: [
          "Radix UI",
          "Lucide",
          "Leaflet / React Leaflet",
          "React Day Picker",
          "date-fns",
          "Sonner",
          "browser-image-compression",
          "next-themes",
        ],
      },
      {
        category: "Internationalization",
        items: ["next-intl (English / Spanish)"],
      },
      {
        category: "Backend & Database",
        items: [
          "Supabase",
          "PostgreSQL",
          "Supabase Auth (email and Google)",
          "Supabase Storage",
        ],
      },
      {
        category: "Deployment",
        items: ["Vercel"],
      },
    ],
    techMatrix: [
      {
        layer: "Framework",
        technology: "Next.js 15 + React 19",
        purpose: "App Router with server components and server actions",
      },
      {
        layer: "Language",
        technology: "TypeScript",
        purpose: "Strict typing, with types generated from the Supabase schema",
      },
      {
        layer: "Styling",
        technology: "Tailwind CSS 4 + shadcn/ui",
        purpose: "Accessible components with light and dark themes",
      },
      {
        layer: "Backend & Database",
        technology: "Supabase + PostgreSQL",
        purpose: "Database, authentication, file storage and queries",
      },
      {
        layer: "Authentication",
        technology: "Supabase Auth",
        purpose: "Email and Google sign-in for organizers and clients",
      },
      {
        layer: "Server State",
        technology: "TanStack React Query",
        purpose: "Client-side data fetching and caching",
      },
      {
        layer: "Validation",
        technology: "Zod",
        purpose: "Schema validation in server actions and forms",
      },
      {
        layer: "Maps",
        technology: "Leaflet",
        purpose: "Event and business location picking and display",
      },
      {
        layer: "Internationalization",
        technology: "next-intl",
        purpose: "English and Spanish routes and translations",
      },
      {
        layer: "Tables",
        technology: "TanStack Table",
        purpose: "Permissions and subscription history tables",
      },
      {
        layer: "Hosting",
        technology: "Vercel",
        purpose: "Production hosting with automatic deployments",
      },
    ],
  },
];
