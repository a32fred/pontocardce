// components/whatsapp-float.tsx
'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="fixed bottom-8 right-8 z-50 group"
    >
      <a
        href="https://wa.me/558532262933"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#25D366] shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        {/* Efeito de pulsação intensa */}
        <motion.div
          className="absolute inset-0 border-4 border-[#25D366]/20 rounded-full"
          animate={{
            scale: [1, 1.8],
            opacity: [1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut'
          }}
        />
        
        {/* Camadas adicionais de pulsação */}
        <motion.div
          className="absolute inset-0 border-4 border-[#25D366]/15 rounded-full"
          animate={{
            scale: [1, 2.2],
            opacity: [1, 0]
          }}
          transition={{
            delay: 0.5,
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeOut'
          }}
        />

        {/* Ícone central com animação */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-white/10 rounded-full backdrop-blur-sm"
        >
          <MessageCircle className="text-white w-12 h-12 drop-shadow-lg" />
        </motion.div>

        {/* Badge de notificação */}
        <motion.div
          className="absolute top-0 right-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        >
          3
        </motion.div>

        {/* Tooltip elaborado */}
        <div className="absolute right-24 bottom-1/2 translate-y-1/2 bg-[#075E54] text-white px-4 py-3 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center gap-2">
          <span>Precisa de ajuda?</span>
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#075E54] rotate-45" />
        </div>
      </a>
    </motion.div>
  )
}