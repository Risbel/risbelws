import { motion, useReducedMotion, type Variants } from "motion/react";
import { Layout } from "@/components/layout";
import { Spotlight } from "@/components/spotlight";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 30 },
    },
  };

  const viewport = { once: true, amount: "some" as const, margin: "0px 0px -80px 0px" };

  return (
    <Layout className="relative overflow-hidden">
      <Spotlight delay={0.5} />

      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-muted-foreground">
        Showcase of my latest work and portfolio projects.
      </p>

      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {projects.map((project) => (
          <motion.div key={project.slug} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </Layout>
  );
}
