/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import categoriesData from "@/data/categories.json";
import { TechnicalHighlightCard } from "@/components/Relogio_Components/TechmicalHighLightCard";
import { ProductCard } from "@/components/Relogio_Components/ProductCard";
import { SectionHeader } from "@/components/Relogio_Components/SectionHeader";
import { CTAButton } from "@/components/Relogio_Components/CTAButton";
import { DemoToggleButton } from "@/components/Relogio_Components/DemoToggleButton";
import { DemoWebcamArea } from "@/components/Relogio_Components/DemoWebcamArea";

// Interfaces
interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features?: string[];
}

interface Category {
  id: string;
  label: string;
  products: Product[];
}

// Constants
const CATEGORY_ID = "relogio-ponto";
const DEMO_DELAY = 3000;

// Dynamic imports
const ReactWebcam = dynamic(
  () => import("@/components/WebcamWrapper").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div className="text-white">Carregando webcam...</div>,
  }
);

export default function RelogioPontoPage() {
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [isRecognized, setIsRecognized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const relogioCategory = categoriesData.find((cat) => cat.id === CATEGORY_ID);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isDemoActive && isMounted) {
      timer = setTimeout(() => setIsRecognized(true), DEMO_DELAY);
    }
    return () => clearTimeout(timer);
  }, [isDemoActive, isMounted]);

  if (!isMounted || !relogioCategory) {
    return <div className="min-h-screen bg-gray-900" />;
  }

  return (
    <main className="bg-gray-900">
      <HeroSection />
      <TechnicalHighlights />
      <ProductModels products={relogioCategory.products} />
      <InteractiveDemo
        isDemoActive={isDemoActive}
        isRecognized={isRecognized}
        onToggleDemo={() => setIsDemoActive(!isDemoActive)}
      />
      <FinalCTA />
    </main>
  );
}

// Subcomponents
const HeroSection = () => (
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <BackgroundVideo />
    <HeroContent />
  </section>
);

const BackgroundVideo = () => (
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      muted
      loop
      className="w-full h-full object-cover opacity-40"
      poster="/relogio-poster.png"
    >
      <source src="/relogio-bg.mp4" type="video/mp4" />
    </video>
  </div>
);

const HeroContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative z-10 text-center px-4"
  >
    <SectionHeader
      title="Revolução no Controle de Ponto"
      description="Tecnologia biométrica com reconhecimento facial integrado à gestão de jornada"
    />
    <div className="flex justify-center gap-4">
      <CTAButton href="#modelos" label="Ver Modelos" primary />
      <CTAButton href="#diferenciais" label="Nossos Diferenciais" />
    </div>
  </motion.div>
);

const TechnicalHighlights = () => (
  <section id="diferenciais" className="py-20 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
      <TechnicalHighlightCard
        icon="👁️"
        title="Biometria Facial"
        description="Reconhecimento 3D com anti-fraude e liveness detection"
        borderColor="border-purple-500"
      />
      <TechnicalHighlightCard
        icon="⚡"
        title="Cloud Integrado"
        description="Dados sincronizados em tempo real com RH Cloud"
        borderColor="border-green-500"
      />
      <TechnicalHighlightCard
        icon="📊"
        title="Analytics"
        description="Relatórios customizáveis e dashboards inteligentes"
        borderColor="border-green-500"
      />
    </div>
  </section>
);

const ProductModels = ({ products }: { products: Product[] }) => (
  <section id="modelos" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4">
      <SectionHeader
        title="Nossos Equipamentos"
        center
        motionProps={{
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 }
        }}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

const InteractiveDemo = ({
  isDemoActive,
  isRecognized,
  onToggleDemo,
}: {
  isDemoActive: boolean;
  isRecognized: boolean;
  onToggleDemo: () => void;
}) => (
  <section className="py-20 bg-gradient-to-br from-green-900 to-purple-900">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 shadow-2xl relative"
      >
        <SectionHeader
          title="Experimente a Tecnologia"
          description="Simulação interativa do reconhecimento facial (webcam requerida)"
          className="mb-8"
        />
        <DemoWebcamArea isDemoActive={isDemoActive} isRecognized={isRecognized} />
        <DemoToggleButton
          isActive={isDemoActive}
          onClick={onToggleDemo}
        />
      </motion.div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="bg-gray-800 py-20">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <motion.div
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        className="bg-gradient-to-r from-green-600 to-purple-600 p-1 rounded-2xl shadow-2xl"
      >
        <div className="bg-gray-900 rounded-xl p-8">
          <SectionHeader
            title="Conformidade Total com a Lei"
            description="Nossos sistemas atendem 100% às exigências da Portaria 1.510/2009"
            className="mb-8"
          />
        </div>
      </motion.div>
    </div>
  </section>
);