'use client'

import { motion } from 'framer-motion'

interface Beneficio {
  title: string
  description: string
  delay?: number
}

export function BeneficioCard({ title, description, delay = 0 }: Beneficio) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gray-50 rounded-2xl shadow-md p-6"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  )
} 