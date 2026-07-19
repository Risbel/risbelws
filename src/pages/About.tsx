import { motion, useReducedMotion, type Variants } from "motion/react";
import { DownloadIcon } from "lucide-react";

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button-variants";
import { Layout } from "@/components/layout";
import { Spotlight } from "@/components/spotlight";

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
      transition: { type: "spring", stiffness: 100, damping: 24 },
    },
  };

  return (
    <Layout className="relative overflow-hidden">
      <Spotlight />

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

      <motion.a
        href={import.meta.env.VITE_RESUME_URL}
        className={cn(buttonVariants({ variant: "default", size: "xl" }), "transition-colors")}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        Download Resume <DownloadIcon />
      </motion.a>
    </Layout>
  );
}
