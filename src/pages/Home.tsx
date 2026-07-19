import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, FileStackIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { motion, useReducedMotion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 26 },
  },
};

export function Home() {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden">
      <Spotlight duration={1} className="top-30 left-30 hidden lg:left-150 dark:block" fill="white" />
      <motion.div
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 flex flex-col items-center justify-center relative z-10 mx-auto w-fit max-w-7xl px-4"
      >
        <motion.img
          variants={shouldReduceMotion ? undefined : itemVariants}
          height={72}
          width={72}
          src="/favicon.svg"
          alt="favicon"
        />
        <motion.h1
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="max-w-sm lg:max-w-4xl bg-opacity-50 text-center font-extrabold text-foreground text-2xl lg:text-5xl dark:bg-linear-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-clip-text dark:text-transparent"
        >
          I build fast, modern websites that help businesses grow.
        </motion.h1>
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="mt-2 md:mt-4 md:max-w-xl text-center text-sm md:text-base font-normal text-muted-foreground"
        >
          I'm Risbel, a freelance web developer creating high-performance websites and web applications for businesses
          that want to stand out online.
        </motion.p>
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="mt-4 space-x-4">
          <Button size={"xl"} className="group gap-1" onClick={() => navigate("/contact")}>
            Contact <ArrowRightIcon className="group-hover:translate-x-1 transition-transform" />{" "}
          </Button>
          <Button size={"xl"} variant={"outline"} onClick={() => navigate("/projects")}>
            My Projects <FileStackIcon />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
