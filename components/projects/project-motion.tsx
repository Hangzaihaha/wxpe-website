"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ProjectHeroMedia({
  children,
  className
}: MotionWrapperProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ scale: 1.055 }}
      animate={{ scale: 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 1.6, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}

export function ProjectMediaReveal({
  children,
  className,
  delay = 0
}: MotionWrapperProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ clipPath: "inset(0 0 14% 0)", opacity: 0, y: 18 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduceMotion
          ? { duration: 0, delay: 0 }
          : { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }
      }
    >
      {children}
    </motion.div>
  );
}
