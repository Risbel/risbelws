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
    slug: "noryx-studio",
    name: "Noryx Studio",
    githubUrl: "https://github.com/m1r4g3-code/noryx-studio",
    liveUrl: "https://noryx-studio.vercel.app",
    description:
      "Full-stack booking platform for a premium barbershop, with race-safe scheduling, an admin console and email/SMS notifications.",
    longDescription:
      "Noryx Studio is a two-sided web application for a premium barbershop in Lagos: a public marketing and booking site with a custom dark and gold design system, and a private admin console that runs the business behind it. Its data layer is built security-first, with Postgres Row-Level Security, a database-level lock against double-booking, rate-limited public writes and tag-based ISR so the public site stays static and fast.",
    stack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Zod",
      "Twilio",
    ],
    image: "/noryx-studio-00.webp",
    images: ["/noryx-studio-00.webp", "/noryx-studio-01.webp"],
    features: [
      {
        title: "Booking Flow",
        description:
          "Four-step wizard to pick a service, date and time, enter client details and confirm, with live slot availability.",
      },
      {
        title: "Race-Safe Scheduling",
        description:
          "A partial unique index blocks double-booking at the database level, and the server returns a clean \"slot just got taken\" response.",
      },
      {
        title: "Admin Console",
        description:
          "Auth-gated dashboard to manage appointments, services, review moderation, gallery uploads and site settings.",
      },
      {
        title: "Security-First Data Layer",
        description:
          "Row-Level Security on every table, availability exposed through an RPC that never leaks client data, and database-backed rate limiting.",
      },
      {
        title: "Notifications",
        description:
          "Email via Gmail SMTP and SMS via Twilio when a booking is made and when it is confirmed, cancelled or completed.",
      },
      {
        title: "Gallery & Reviews",
        description:
          "Public gallery with lightbox and client-side WebP compression on upload, plus client reviews with star ratings.",
      },
    ],
    stackGroups: [
      {
        category: "Frontend",
        items: [
          "Next.js 14 (App Router)",
          "React 18",
          "TypeScript",
          "Tailwind CSS 3",
        ],
      },
      {
        category: "Forms & Validation",
        items: ["React Hook Form", "Zod", "React Day Picker", "date-fns"],
      },
      {
        category: "Backend & Database",
        items: [
          "Server Actions",
          "Supabase",
          "PostgreSQL",
          "Row-Level Security",
          "Supabase Auth",
        ],
      },
      {
        category: "Notifications",
        items: ["Nodemailer (Gmail SMTP)", "Twilio SMS"],
      },
      {
        category: "Testing, CI & Deployment",
        items: ["Vitest", "GitHub Actions", "Vercel"],
      },
    ],
    techMatrix: [
      {
        layer: "Framework",
        technology: "Next.js 14 + React 18",
        purpose: "App Router with server components and server actions",
      },
      {
        layer: "Language",
        technology: "TypeScript",
        purpose: "Strict typing across the app",
      },
      {
        layer: "Styling",
        technology: "Tailwind CSS",
        purpose: "Custom dark and gold design system",
      },
      {
        layer: "Backend & Database",
        technology: "Supabase + PostgreSQL",
        purpose: "Data, auth and storage protected by Row-Level Security",
      },
      {
        layer: "Validation",
        technology: "Zod + React Hook Form",
        purpose: "Schemas shared between client forms and server actions",
      },
      {
        layer: "Caching",
        technology: "Next.js ISR + cache tags",
        purpose: "Static public pages revalidated when an admin makes changes",
      },
      {
        layer: "Email",
        technology: "Nodemailer (Gmail SMTP)",
        purpose: "Booking and status notification emails",
      },
      {
        layer: "SMS",
        technology: "Twilio",
        purpose: "Booking and status text messages",
      },
      {
        layer: "Testing & CI",
        technology: "Vitest + GitHub Actions",
        purpose: "Unit tests plus type-check, lint and build on every push",
      },
      {
        layer: "Hosting",
        technology: "Vercel",
        purpose: "Production hosting with automatic deployments",
      },
    ],
  },
  {
    slug: "fc-cleaning",
    name: "FC Cleaning",
    githubUrl: "https://github.com/Perchito/fc-cleaning-web",
    liveUrl: "https://www.fccleaningcompany.com",
    description:
      "Marketing website for a UK commercial cleaning company, with animated sections, service pages and a quote request form.",
    longDescription:
      "FC Cleaning is a modern rebuild of the website for FC Cleaning Company Ltd, a commercial cleaning business serving kitchens, restaurants, bars and hospitality venues. It uses a premium navy and teal design system with physics-based animations, presents the company's services and process, and turns visitors into leads through an enquiry form and a floating WhatsApp button.",
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "React Spring",
      "React Router",
    ],
    image: "/fc-cleaning-00.webp",
    images: [
      "/fc-cleaning-00.webp",
      "/fc-cleaning-01.webp",
      "/fc-cleaning-02.webp",
      "/fc-cleaning-03.webp",
    ],
    features: [
      {
        title: "Homepage",
        description:
          "Hero, trust marquee, animated stat counters, services overview, process steps and a call-to-action band.",
      },
      {
        title: "Service Pages",
        description:
          "Detailed blocks for kitchen, restaurant and bar, hospitality deep cleaning and washroom services, each with its own CTA.",
      },
      {
        title: "Enquiry Form",
        description:
          "Contact form that delivers quote requests by email through Formspree, with a thank-you confirmation page.",
      },
      {
        title: "FAQ & Content Pages",
        description:
          "Categorised FAQ accordion with filter tabs, plus About Us, Privacy and Terms pages.",
      },
      {
        title: "WhatsApp Contact",
        description:
          "Floating WhatsApp button that opens a chat with a prefilled quote request.",
      },
      {
        title: "Performance & SEO",
        description:
          "Tuned spring animations, lightweight gradient glows, compressed WebP images, Open Graph tags, sitemap and robots.txt.",
      },
    ],
    stackGroups: [
      {
        category: "Frontend",
        items: ["React 19", "Vite", "JavaScript", "Tailwind CSS 4"],
      },
      {
        category: "Animation & Routing",
        items: ["React Spring", "React Router v7"],
      },
      {
        category: "Forms & Contact",
        items: ["Formspree", "WhatsApp click-to-chat"],
      },
      {
        category: "Deployment",
        items: ["Vercel"],
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
        technology: "React 19",
        purpose: "Component-based pages and sections",
      },
      {
        layer: "Styling",
        technology: "Tailwind CSS 4",
        purpose: "Utility-first CSS with custom navy and teal tokens",
      },
      {
        layer: "Animation",
        technology: "React Spring",
        purpose: "Scroll reveals, stat counters, hover springs and accordion",
      },
      {
        layer: "Routing",
        technology: "React Router v7",
        purpose: "Client-side navigation between pages",
      },
      {
        layer: "Forms",
        technology: "Formspree",
        purpose: "Emails enquiries from the contact form to the business",
      },
      {
        layer: "Hosting",
        technology: "Vercel",
        purpose: "Production hosting with automatic deployments",
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
    slug: "kynda-coffee",
    name: "Kynda Coffee",
    githubUrl: "https://github.com/Jpalmer95/kynda-coffee",
    liveUrl: "https://www.kyndacoffee.com",
    description:
      "All-in-one digital platform for a specialty coffee shop: online store, menu ordering, AI merch design studio, loyalty and a full admin back office.",
    longDescription:
      "Kynda Coffee is the digital platform for an organic specialty coffee shop in Horseshoe Bay, Texas. Customers shop coffee beans and merch, browse the café menu, order by QR code, earn loyalty rewards and design custom merch with AI, while the team runs the business from staff and admin areas with a kitchen display, POS sync, inventory, training and an AI-assisted marketing pipeline. It is an installable PWA with light and dark themes.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Stripe",
      "Square",
      "Zustand",
    ],
    image: "/kynda-coffee-00.webp",
    images: [
      "/kynda-coffee-00.webp",
      "/kynda-coffee-01.webp",
      "/kynda-coffee-02.webp",
    ],
    features: [
      {
        title: "Online Store",
        description:
          "Coffee, tea, brew gear, apparel and gifts with category filters, cart, Stripe checkout, subscriptions and gift cards.",
      },
      {
        title: "Menu & QR Ordering",
        description:
          "Searchable café menu synced from Square, with QR-code ordering, a self-service kiosk and delivery via DoorDash and Uber Eats.",
      },
      {
        title: "AI Design Studio",
        description:
          "Canvas editor where customers generate and customize merch designs with AI, fulfilled as print-on-demand through Printful.",
      },
      {
        title: "Accounts & Loyalty",
        description:
          "Customer accounts with order history, addresses, favorites, subscriptions, rewards tiers and referrals.",
      },
      {
        title: "Staff & Admin Back Office",
        description:
          "Kitchen display system, orders, catalog, inventory counts and waste logs, customers, analytics, staff checklists, schedules and training.",
      },
      {
        title: "Marketing Automation",
        description:
          "AI-assisted pipeline that turns media into social posts with an approval gate, plus email newsletters and SMS campaigns.",
      },
    ],
    stackGroups: [
      {
        category: "Frontend",
        items: [
          "Next.js 16 (App Router)",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "Lucide",
        ],
      },
      {
        category: "State & Validation",
        items: ["Zustand", "Zod"],
      },
      {
        category: "Backend & Database",
        items: [
          "Next.js Route Handlers",
          "Supabase",
          "PostgreSQL",
          "Supabase Auth",
          "Supabase Storage",
        ],
      },
      {
        category: "Payments & Commerce",
        items: ["Stripe", "Square POS", "Printful"],
      },
      {
        category: "AI & Design",
        items: ["Anthropic Claude", "FAL.ai (FLUX)", "Konva / React Konva"],
      },
      {
        category: "Messaging",
        items: ["Resend", "Twilio", "Web Push"],
      },
      {
        category: "Monitoring & Analytics",
        items: ["Sentry", "PostHog"],
      },
      {
        category: "Testing, CI & Deployment",
        items: [
          "Vitest",
          "Testing Library",
          "Playwright",
          "GitHub Actions",
          "Docker",
          "PM2",
        ],
      },
    ],
    techMatrix: [
      {
        layer: "Framework",
        technology: "Next.js 16 + React 19",
        purpose: "App Router pages and API routes for store, staff and admin",
      },
      {
        layer: "Language",
        technology: "TypeScript",
        purpose: "Type safety across the whole platform",
      },
      {
        layer: "Styling",
        technology: "Tailwind CSS",
        purpose: "Design-token system with light and dark themes",
      },
      {
        layer: "Backend & Database",
        technology: "Supabase + PostgreSQL",
        purpose: "Data, authentication and file storage",
      },
      {
        layer: "Client State",
        technology: "Zustand",
        purpose: "Shopping cart and UI state",
      },
      {
        layer: "Payments",
        technology: "Stripe",
        purpose: "Online checkout, subscriptions and gift cards",
      },
      {
        layer: "Point of Sale",
        technology: "Square",
        purpose: "In-store POS, menu catalog and order sync",
      },
      {
        layer: "Print on Demand",
        technology: "Printful",
        purpose: "Fulfillment of custom merch designs",
      },
      {
        layer: "AI",
        technology: "Claude + FAL.ai",
        purpose: "Marketing content generation and AI image designs",
      },
      {
        layer: "Design Canvas",
        technology: "Konva",
        purpose: "Interactive editor for the design studio",
      },
      {
        layer: "Email & SMS",
        technology: "Resend + Twilio",
        purpose: "Order notifications, newsletters and SMS campaigns",
      },
      {
        layer: "Monitoring",
        technology: "Sentry + PostHog",
        purpose: "Error tracking and product analytics",
      },
      {
        layer: "Testing & CI",
        technology: "Vitest + Playwright + GitHub Actions",
        purpose: "Unit and end-to-end tests with type-check, lint and build",
      },
      {
        layer: "Hosting",
        technology: "Docker + PM2",
        purpose: "Self-hosted Node.js production server",
      },
    ],
  },
  {
    slug: "poppy-chargha-house",
    name: "Poppy Chargha House",
    liveUrl: "https://poppy-chargha-restaurant-website.vercel.app/",
    description:
      "Full-stack restaurant website for Poppy Chargha House with an online menu, gallery, reviews and reservations, plus a secure admin dashboard.",
    longDescription:
      "Poppy Chargha House is a modern restaurant website for Poppy Chargha House in Mughalpura, Lahore. Customers explore the menu by category, browse the gallery, read reviews and make reservations, while a secure admin dashboard lets staff manage restaurant content, images and analytics, backed by Supabase for authentication, database and storage.",
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Supabase",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
    image: "/poppy-chargha-house-00.webp",
    images: [
      "/poppy-chargha-house-00.webp",
      "/poppy-chargha-house-01.webp",
      "/poppy-chargha-house-02.webp",
    ],
    features: [
      {
        title: "Restaurant Website",
        description:
          "Responsive landing page with hero, food menu by category, gallery, reviews and contact and social links.",
      },
      {
        title: "Online Reservations",
        description:
          "Reservation system for customers to book a table directly from the site.",
      },
      {
        title: "Admin Dashboard",
        description:
          "Protected admin routes to manage menu, gallery and restaurant content, with dashboard analytics and charts.",
      },
      {
        title: "Authentication",
        description:
          "Secure admin login with email/password and Google OAuth via Supabase Auth.",
      },
      {
        title: "Image Uploads",
        description:
          "Menu and gallery images uploaded and served from Supabase Storage.",
      },
    ],
    stackGroups: [
      {
        category: "Frontend",
        items: ["React 19", "Vite", "JavaScript (JSX)", "React Router DOM"],
      },
      {
        category: "UI & Styling",
        items: [
          "Tailwind CSS 4",
          "shadcn/ui",
          "Radix UI",
          "Framer Motion",
          "Lucide React",
        ],
      },
      {
        category: "Data Management & Forms",
        items: ["TanStack Query", "React Hook Form", "Zod"],
      },
      {
        category: "Visualization",
        items: ["Recharts"],
      },
      {
        category: "Backend & Database",
        items: [
          "Supabase",
          "PostgreSQL",
          "Row Level Security",
          "Supabase Storage",
        ],
      },
      {
        category: "Development Tools",
        items: ["ESLint", "Prettier"],
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
        technology: "React 19",
        purpose: "Component-based public site and admin dashboard",
      },
      {
        layer: "Styling",
        technology: "Tailwind CSS 4 + shadcn/ui",
        purpose: "Utility-first CSS with accessible UI primitives",
      },
      {
        layer: "Animation",
        technology: "Framer Motion",
        purpose: "Smooth transitions across the public site",
      },
      {
        layer: "Forms & Validation",
        technology: "React Hook Form + Zod",
        purpose: "Reservation and admin content forms with schema validation",
      },
      {
        layer: "Server State",
        technology: "TanStack Query",
        purpose: "Data fetching and caching for menu, gallery and reviews",
      },
      {
        layer: "Backend & Database",
        technology: "Supabase + PostgreSQL",
        purpose: "Auth, relational data and Row Level Security policies",
      },
      {
        layer: "Storage",
        technology: "Supabase Storage",
        purpose: "Hosting menu and gallery images",
      },
      {
        layer: "Visualization",
        technology: "Recharts",
        purpose: "Admin dashboard analytics and charts",
      },
      {
        layer: "Hosting",
        technology: "Vercel",
        purpose: "Production hosting with automatic deployments",
      },
    ],
  },
  {
    slug: "nakheel-restaurant-cafe",
    name: "Nakheel Restaurant & Café",
    liveUrl: "https://nakheel-restaurant-cafe.vercel.app/",
    description:
      "Multilingual restaurant and café website with a full menu, gallery, testimonials and table reservation system.",
    longDescription:
      "Nakheel Restaurant & Café is a modern, fully-featured restaurant website with Arabic (RTL) and English/French (LTR) support, seamless language switching and RTL/LTR layout transitions, and a comprehensive menu, gallery, testimonials and table reservation system, all wrapped in a polished light and dark UI.",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 3",
      "Radix UI",
      "Framer Motion",
    ],
    image: "/nakheel-restaurant-cafe-00.webp",
    images: [
      "/nakheel-restaurant-cafe-00.webp",
      "/nakheel-restaurant-cafe-01.webp",
      "/nakheel-restaurant-cafe-02.webp",
      "/nakheel-restaurant-cafe-03.webp",
    ],
    features: [
      {
        title: "Multilingual Support",
        description:
          "Arabic (RTL) and English/French (LTR) support with seamless language switching and RTL/LTR layout transitions across all pages.",
      },
      {
        title: "Modern UI/UX",
        description:
          "Responsive, glassmorphism-inspired design with dark mode support and smooth animations powered by Framer Motion.",
      },
      {
        title: "Core Pages",
        description:
          "Home, Menu, Gallery, About, Testimonials, Reservation and Contact pages, each tailored to showcase the restaurant.",
      },
      {
        title: "Table Reservation",
        description:
          "Booking system that lets customers reserve a table directly from the site.",
      },
      {
        title: "Forms & Validation",
        description:
          "React Hook Form with Zod schema validation for reservation and contact forms.",
      },
      {
        title: "Performance & SEO",
        description:
          "Fast page loads with Next.js 15, SEO-optimized pages and a mobile-first responsive layout.",
      },
    ],
    stackGroups: [
      {
        category: "Frontend",
        items: [
          "Next.js 15 (App Router)",
          "React 19",
          "TypeScript",
          "Tailwind CSS 3",
        ],
      },
      {
        category: "UI & Animation",
        items: [
          "Radix UI",
          "Framer Motion",
          "Lucide React",
          "next-themes",
          "Embla Carousel",
        ],
      },
      {
        category: "Forms & Validation",
        items: ["React Hook Form", "Zod", "@hookform/resolvers"],
      },
      {
        category: "Utilities",
        items: ["date-fns", "Sonner", "cmdk"],
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
        purpose: "App Router with server-rendered, multilingual pages",
      },
      {
        layer: "Language",
        technology: "TypeScript",
        purpose: "Type safety across the application",
      },
      {
        layer: "Styling",
        technology: "Tailwind CSS 3",
        purpose: "Utility-first CSS with custom design tokens",
      },
      {
        layer: "Components",
        technology: "Radix UI",
        purpose: "Accessible, unstyled UI primitives",
      },
      {
        layer: "Animation",
        technology: "Framer Motion",
        purpose: "Smooth transitions and RTL/LTR layout switching",
      },
      {
        layer: "Forms & Validation",
        technology: "React Hook Form + Zod",
        purpose: "Reservation and contact forms with schema validation",
      },
      {
        layer: "Internationalization",
        technology: "Custom language provider",
        purpose: "Arabic RTL and English/French LTR support",
      },
      {
        layer: "Theme",
        technology: "next-themes",
        purpose: "Light and dark mode support",
      },
      {
        layer: "Hosting",
        technology: "Vercel",
        purpose: "Production hosting with automatic deployments",
      },
    ],
  },
];
