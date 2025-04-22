'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ActionProps {
  href: string
  label: string
  icon?: LucideIcon
  props?: Record<string, any>
}

interface CallToActionProps {
  title: string
  description: string
  primaryAction?: ActionProps
  secondaryAction?: ActionProps
}

export const CallToAction = ({ title, description, primaryAction, secondaryAction }: CallToActionProps) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg mb-6 max-w-2xl mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {primaryAction && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={primaryAction.href}
            className="py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            {...primaryAction.props}
          >
            {primaryAction.icon && <primaryAction.icon className="w-5 h-5" />}
            {primaryAction.label}
          </motion.a>
        )}
        {secondaryAction && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={secondaryAction.href}
            className="py-3 px-6 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
            {...secondaryAction.props}
          >
            {secondaryAction.icon && <secondaryAction.icon className="w-5 h-5" />}
            {secondaryAction.label}
          </motion.a>
        )}
      </div>
    </div>
  )
} 