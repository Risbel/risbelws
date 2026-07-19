import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  /** Tailwind position classes, e.g. "top-1/3 left-1/2". Defaults to centered. */
  position?: string;
  /** Tailwind size classes, e.g. "h-175 w-175". */
  size?: string;
  /** Delay in seconds before the breathing pulse starts looping. */
  delay?: number;
};

export function Spotlight({
  className,
  position = "top-1/3 left-1/2",
  size = "h-175 w-175",
  delay = 1.5,
}: SpotlightProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute -z-10 -translate-x-1/2 -translate-y-1/2 select-none rounded-full",
        "bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.06)_35%,transparent_70%)]",
        position,
        size,
        className,
      )}
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: shouldReduceMotion ? 1 : [1, 1.08, 1] }}
      transition={{
        opacity: { duration: 1.5, ease: "easeOut" },
        scale: shouldReduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      }}
    />
  );
}
