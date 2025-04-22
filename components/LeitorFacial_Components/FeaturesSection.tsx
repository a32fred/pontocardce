'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Wifi } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-10 h-10 text-green-600" />,
      title: 'Reconhecimento em 0.3s',
      description: 'Identificação facial instantânea com tecnologia de ponta.'
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
      title: 'Anti-Fraude com Liveness',
      description: 'Detecta presença real do usuário, evitando tentativas de fraude.'
    },
    {
      icon: <Wifi className="w-10 h-10 text-green-600" />,
      title: 'Wi-Fi, Ethernet e 4G',
      description: 'Integração flexível com diferentes ambientes e redes.'
    }
  ];

  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 leading-tight tracking-tight"
        >
          Destaques da Solução Facial
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all rounded-3xl p-8 group"
            >
              <div className="flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
