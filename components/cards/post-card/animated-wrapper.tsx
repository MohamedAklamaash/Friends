"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function AnimatedPostCard({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="glass-card rounded-xl overflow-hidden post-card-hover"
    >
      {children}
    </motion.div>
  )
}
