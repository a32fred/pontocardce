'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Phone, ShieldCheck } from 'lucide-react';

const benefits = [
  "Biometria Facial Avançada",
  "Geolocalização Inteligente",
  "Conformidade Legal Total"
];

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32">
      {/* Background com Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/BGHERO.png"
          alt="Ilustração de soluções tecnológicas"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2446229d]/90 to-[#3c9136]/30" />
      </motion.div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
          >
            Tecnologia que{" "}
            <span className="text-[#9dff8d]">Impulsiona</span>
            <br />
            Seu Negócio
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-xl leading-relaxed">
              Soluções completas em controle de ponto e acesso com:
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#9dff8d]" />
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://wa.me/8532262933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#177f0f] hover:bg-[#125f0b] text-white rounded-lg font-semibold flex items-center gap-2 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Solicitar uma Proposta!
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/sobre-nos"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-semibold flex items-center gap-2 transition-all"
                >
                  Ver Detalhes
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Gradiente de rodapé decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#062004] to-transparent" />
    </section>
  );
}
