import { motion, useReducedMotion, type Variants } from "motion/react";
import { Layers, Palette, Puzzle, Sparkles, Zap, type LucideIcon } from "lucide-react";
import { LogoListSection } from "@/components/logo-list-section";
import { Layout } from "@/components/layout";
import type { LogoItem } from "@/components/logo-tag";

type Highlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const highlights: Highlight[] = [
  {
    icon: Layers,
    title: "Full-stack awareness",
    description:
      "I understand both frontend and backend needs, so I can collaborate across teams and speed up development.",
  },
  {
    icon: Palette,
    title: "UX/UI awareness",
    description: "Ability to turn Figma/Sketch designs into pixel-perfect UIs.",
  },
  {
    icon: Puzzle,
    title: "Strong problem-solving",
    description: "I can debug and fix complex issues quickly, reducing downtime.",
  },
  {
    icon: Sparkles,
    title: "Clean, maintainable code",
    description:
      "I follow modern development best practices like Clean Code to reduce bugs and simplify long-term maintenance.",
  },
  {
    icon: Zap,
    title: "Efficient workflow",
    description:
      "I invest in professional tools like paid Cursor AI to speed up development, reduce errors, and maintain high code quality.",
  },
];

const languages: LogoItem[] = [
  { url: "/html.svg", title: "HTML5", size: "md" },
  { url: "/css.svg", title: "CSS", size: "md" },
  {
    url: "/JavaScript.png",
    title: "JavaScript",
    size: "md",
  },
  {
    url: "/TypeScript.png",
    title: "TypeScript",
    size: "md",
  },
];

const frameworks: LogoItem[] = [
  {
    url: "/React.png",
    title: "ReactJS",
    size: "md",
  },
  { url: "/Vite.js.png", title: "Vite", size: "md" },
  { url: "/nextjs_svg.svg", title: "NextJS", size: "md" },
  { url: "/astro.svg", title: "Astro", size: "md" },
  { url: "/tanstack-query.png", title: "TanStack Query", size: "md" },
  { url: "/redux.png", title: "Redux", size: "md" },
  { url: "/zustand.svg", title: "Zustand", size: "md" },
  {
    url: "/Tailwind CSS.png",
    title: "Tailwind CSS",
    size: "md",
  },
  { url: "/shadcn_ui.png", title: "shadcn/ui", size: "md" },
];

const backend: LogoItem[] = [
  { url: "/supabase.svg", title: "Supabase", size: "md" },
  { url: "/Node.js.png", title: "Node.js", size: "md" },
  {
    url: "/PostgresSQL.png",
    title: "PostgreSQL",
    size: "md",
  },

  { url: "/express_svg.svg", title: "Express", size: "md" },
  { url: "/prisma.svg", title: "Prisma ORM", size: "md" },
  { url: "/sequelize.svg", title: "Sequelize ORM", size: "md" },
];

const tools: LogoItem[] = [
  { url: "/Git.png", title: "Git", size: "md" },
  { url: "/github_svg.svg", title: "GitHub", size: "md" },
  { url: "/Docker.png", title: "Docker", size: "md" },
  {
    url: "/Visual Studio Code (VS Code).png",
    title: "VS Code",
    size: "md",
  },
  { url: "/Postman.png", title: "Postman", size: "md" },
  { url: "/Figma.png", title: "Figma", size: "md" },
  {
    url: "/Playwrite.png",
    title: "Playwright",
    size: "md",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export function SkillsTools() {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Skills & Tools</h1>

      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {highlights.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            variants={itemVariants}
            className="transition-colors bg-muted/50 hover:bg-muted/80 hover:dark:bg-accent/80 rounded-xl border border-border p-5 space-y-2"
          >
            <Icon className="size-6 text-primary" />
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="space-y-8 mt-10">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <LogoListSection title="Languages" subtitle="Core languages I write day to day" logos={languages} />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <LogoListSection
            title="Frameworks & Libraries"
            subtitle="Building blocks for the apps I ship"
            logos={frameworks}
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <LogoListSection title="Backend & Database" subtitle="Server-side runtime and data storage" logos={backend} />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <LogoListSection
            title="Tools & Platforms"
            subtitle="What keeps the workflow running smoothly"
            logos={tools}
          />
        </motion.div>
      </div>
    </Layout>
  );
}
