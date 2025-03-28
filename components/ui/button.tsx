// components/ui/button.tsx
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const Button = ({
  children,
  className,
  variant = 'default'
}: {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'secondary'
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const onClick = onclick;

  const baseStyles = 'rounded-lg font-medium transition-all duration-300'
  
  const variants = {
    default: 'bg-[#177f0f] hover:bg-[#125f0b] text-white',
    secondary: 'bg-white text-[#177f0f] hover:bg-gray-100'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}