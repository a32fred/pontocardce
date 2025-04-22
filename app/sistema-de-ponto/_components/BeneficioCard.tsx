'use client'

import { motion } from "framer-motion"

interface BeneficioCardProps {
  title: string
  description: string
  delay?: number
}

export function BeneficioCard({ title, description, delay = 0 }: BeneficioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <h3 className="text-lg font-semibold mb-2 text-green-600">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  )
}
