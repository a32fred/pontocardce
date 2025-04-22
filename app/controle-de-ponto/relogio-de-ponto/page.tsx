'use client';


import { motion } from 'framer-motion';
import { useState } from 'react';
import { TechnicalHighlightCard } from "@/components/Relogio_Components/TechmicalHighLightCard";
import { ProductCard } from "@/components/Relogio_Components/ProductCard";
import { SectionHeader } from "@/components/Relogio_Components/SectionHeader";
import { CTAButton } from "@/components/Relogio_Components/CTAButton";
import { MessageCircle } from 'lucide-react';
import relogioData from '@/data/relogio-data.json';
import DemoWebcamArea from '@/components/LeitorFacial_Components/DemoWebcamArea';
// Dynamic imports
// Removed unused ReactWebcam import to resolve the error

export default function RelogioPontoPage() {
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [isRecognized] = useState(false);

  return (
    <main className="bg-gradient-to-b from-white to-green-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
        {/* Vídeo de fundo com camada escura */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-75"
            poster={relogioData.hero.videoPoster}
          >
            <source src={relogioData.hero.videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 px-6 pt-28 pb-20 flex flex-col items-center justify-center text-center min-h-screen">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 max-w-3xl leading-tight"
          >
            {relogioData.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8"
          >
            {relogioData.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-4"
          >
            <CTAButton href="#modelos" label="Ver Modelos" primary />
            <CTAButton href="#diferenciais" label="Nossos Diferenciais" />
          </motion.div>
        </div>
      </section>

      {/* Destaques Técnicos */}
      <section id="diferenciais" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Tecnologia Avançada"
            description="Nossos diferenciais exclusivos"
            center
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {relogioData.highlights.map((highlight, index) => (
              <TechnicalHighlightCard
                key={index}
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.description}
                borderColor={highlight.borderColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modelos de Produtos */}
      <section id="modelos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title={relogioData.products.title}
            description={relogioData.products.description}
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {relogioData.products.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <DemoWebcamArea
        isDemoActive={isDemoActive}
        isRecognized={isRecognized}
        onStartDemo={() => setIsDemoActive(true)}
        onStopDemo={() => setIsDemoActive(false)}
      />

      {/* CTA Final */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#22B917] to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Transforme sua gestão de pessoal
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Tenha controle total da jornada de trabalho com nossa solução completa
            </p>

            <div className="mt-8 md:mt-10">
              <a
                href="https://wa.me/553199999999"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 bg-white text-emerald-800 px-6 py-3 md:px-8 md:py-4 rounded-xl
                         text-base md:text-lg font-semibold hover:bg-emerald-50 transition-all shadow-lg
                         hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                Conversar com Especialista
              </a>
            </div>

            <p className="mt-6 md:mt-8 text-sm text-emerald-200 opacity-90">
              Resposta garantida
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}