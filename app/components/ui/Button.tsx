'use client'

import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export const Button = ({ 
  variant = 'primary', 
  className,
  children,
  ...props 
}: ButtonProps) => (
  <button
    className={cn(
      'px-8 py-4 rounded-lg transition-colors font-medium',
      variant === 'primary' 
        ? 'bg-green-600 text-white hover:bg-green-700' 
        : 'border-2 border-green-600 text-green-600 hover:bg-green-50',
      className
    )}
    {...props}
  >
    {children}
  </button>
) 