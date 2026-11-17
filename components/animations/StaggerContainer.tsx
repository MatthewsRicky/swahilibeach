"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export default function StaggerContainer({
  children,
  className,
  stagger = 0.12,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: shouldReduceMotion
            ? { duration: 0 }
            : {
                staggerChildren: stagger,
              },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
