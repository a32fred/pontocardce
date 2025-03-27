// components/faq-section.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: "Como funciona o sistema de reconhecimento facial?",
    answer: "Nossa solução utiliza algoritmos de IA com certificação ISO 30107 para detecção de vitalidade, garantindo segurança contra fraudes."
  },
  {
    id: 2,
    question: "Qual o tempo de implantação do sistema?",
    answer: "Implementação completa em até 72h, incluindo instalação física, integração com sistemas existentes e treinamento da equipe."
  }
]

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="bg-[#f9fafb] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#32313e] mb-12 text-center">
            Dúvidas Comuns
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div 
                key={faq.id}
                className="border border-[#177f0f]/20 rounded-xl bg-white"
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="text-lg font-medium text-[#32313e] pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    className="text-[#177f0f]"
                  >
                    <ChevronDown className="h-6 w-6" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-4 pt-2 border-t border-[#177f0f]/10"
                    >
                      <p className="text-[#6b7280] leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-[#32313e] mb-6">
              Restou alguma dúvida? Nossos especialistas estão prontos para ajudar
            </p>
            <button className="bg-[#177f0f] text-white px-8 py-3 rounded-lg hover:bg-[#125f0b] transition-colors font-medium">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}