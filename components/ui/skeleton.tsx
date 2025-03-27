// components/ui/skeleton.tsx
'use client'

import { motion } from 'framer-motion'

export function Skeleton({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      className={`bg-gray-200 rounded-md ${className}`}
    />
  )
}