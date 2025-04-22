'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Clock, BarChart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "Segurança Total",
    description: "Sistema 100% compliance com legislação trabalhista e proteção de dados"
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Implementação Rápida",
    description: "Funcionando em menos de 72h sem necessidade de treinamento complexo"
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Controle em Tempo Real",
    description: "Monitoramento preciso da jornada com atualizações instantâneas"
  },
  {
    icon: <BarChart className="w-12 h-12" />,
    title: "Redução de Custos",
    description: "Diminua em até 40% seus gastos com processos manuais"
  }
];

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      className="relative bg-gradient-to-br from-emerald-900 to-[#177f0f] text-white py-20"
    >
      {/* Container principal */}
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Por que escolher a PontoCard?
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Transforme radicalmente a gestão da sua equipe com tecnologia de ponta
          </p>
        </motion.div>

        {/* Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors duration-300"
            >
              <div className="text-emerald-300 mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-200 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Botão CTA */}
        <div className="text-center">
          <Link
            href="https://wa.me/8532262933"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-emerald-800 px-8 py-4 rounded-xl
                     text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg
                     hover:shadow-xl hover:-translate-y-1 active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            Conversar com Especialista
          </Link>
        </div>
      </div>
    </section>
  );
}