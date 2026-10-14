"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function PageEntry({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  // Keep solution route roots stationary so Next.js can measure their top
  // consistently and the fixed header does not inherit a transformed parent.
  const isSolutionRoute = pathname === "/solutions" || pathname.startsWith("/solutions/");

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: isSolutionRoute ? 0 : 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.36, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
