import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export interface TimelineEntry {
  title: string;
  content: ReactNode;
}

export function Timeline({ data }: { data: TimelineEntry[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateHeight = () => setHeight(el.getBoundingClientRect().height);

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 0.85], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef}>
      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-8 first:pt-0 gap-5 lg:gap-10 md:pt-10">
            <div className="sticky top-24 z-10 flex shrink-0 flex-col items-center self-start w-0 md:w-8 lg:w-20">
              <div className="flex size-6 items-center justify-center rounded-full bg-background md:size-8 lg:size-10">
                <div className="size-3 rounded-full border border-border bg-muted md:size-4" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              className="flex-1 pb-2"
            >
              <h3 className="mb-4 text-xl font-bold md:text-2xl">{item.title}</h3>
              {item.content}
            </motion.div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className="absolute top-0 w-1 -translate-x-1/2 overflow-hidden rounded-full bg-border left-0 md:left-4 lg:left-10"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-0.5 bg-linear-to-t from-purple-500 via-blue-500 to-transparent from-0% via-10% rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
