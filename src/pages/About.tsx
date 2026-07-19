import { motion, useReducedMotion, type Variants } from "motion/react";
import { DownloadIcon } from "lucide-react";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";
import { Layout } from "@/components/layout";

const heading = [{ text: "Hi," }, { text: "I'm" }, { text: "Risbel", className: "text-primary" }];

const paragraphs = [
  `I'm a Full-Stack Software Engineer specializing in building fast, modern, and scalable web applications with a strong focus on user experience and performance. I enjoy transforming ideas into intuitive digital products that are both visually polished and technically reliable`,
  `I work across the full development stack using modern JavaScript technologies, creating responsive frontends, robust backend services, and maintainable architectures that support long-term growth. Whether developing a business website, a SaaS application, or a custom solution, I prioritize clean code, performance, and usability.`,
  `I believe great software is built through collaboration, attention to detail, and a deep understanding of user needs. Whether working with a development team or directly with clients, my goal is to deliver solutions that solve real problems and create lasting value.`,
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

export function About() {
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
    <Layout className="relative overflow-hidden">
      <div
        className={cn(
          "pointer-events-none absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none",
          "h-175 w-175 rounded-full",
          "bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.06)_35%,transparent_70%)]",
        )}
      />

      <TypewriterEffect words={heading} className="text-left mb-2 md:mb-6" />

      <motion.div
        className="hidden md:block space-y-4 text-muted-foreground"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {paragraphs.map((text) => (
          <motion.p className=" md:text-md lg:text-lg" key={text} variants={itemVariants}>
            {text}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        className="md:hidden space-y-4 text-muted-foreground"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {paragraphs.slice(0, 2).map((text) => (
          <motion.p className=" md:text-md lg:text-lg" key={text} variants={itemVariants}>
            {text}
          </motion.p>
        ))}
      </motion.div>

      <motion.div className="mt-8" variants={itemVariants}>
        <a href={import.meta.env.VITE_RESUME_URL} className={cn(buttonVariants({ variant: "default", size: "xl" }))}>
          Download Resume <DownloadIcon />
        </a>
      </motion.div>
    </Layout>
  );
}
