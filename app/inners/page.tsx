// app/inners/page.tsx
'use client'

import React from 'react'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  ChevronDown, 
  MessageCircle, 
  ArrowRight,
  Users,
  Database,
  Zap
} from 'lucide-react'
import { ProductShowcase } from './_components/product-card'
import controleDeAcesso from '@/data/controle-de-acesso.json'
import { FadeInSection } from '@/components/animations/fade-in-section'

// Types
interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  specs: string[];
  categories: string[];
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
}

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  categories: string[];
}

// Constants
const CONTACT = {
  WHATSAPP_NUMBER: '558532262933',
  WHATSAPP_MESSAGE: 'Olá, preciso de ajuda para escolher o sistema de inner acesso ideal'
};

const FAQS: FAQItemProps[] = [
  {
    question: "Quais tecnologias de identificação os inners da TopData oferecem?",
    answer: "Os inners da TopData oferecem diversas tecnologias de identificação, incluindo biometria digital, cartões de proximidade (RFID/NFC), QR Code e senha numérica."
  },
  {
    question: "Os equipamentos funcionam sem internet?",
    answer: "Sim, os inner possuem memória interna e funcionam de forma autônoma mesmo sem conexão com a internet. Quando a conexão é restabelecida, os dados são sincronizados automaticamente com o servidor."
  },
  {
    question: "Qual a capacidade de armazenamento de usuários e registros?",
    answer: "Dependendo do modelo, os inners podem armazenar de 5.000 a 100.000 usuários e de 100.000 a 1.000.000 de registros na memória interna."
  }
];

// Helper Components
const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps): React.ReactElement => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-green-200 transition-all"
  >
    <div className="rounded-full bg-green-50 w-12 h-12 flex items-center justify-center mb-4">
      <Icon className="text-green-600 w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);


const FAQItem = ({ question, answer }: FAQItemProps): React.ReactElement => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border-b border-gray-200 py-6"
  >
    <h3 className="text-xl font-medium text-gray-900 mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </motion.div>
);

const CategoryFilter = ({ activeCategory, setActiveCategory, categories }: CategoryFilterProps): React.ReactElement => (
  <div className="flex flex-wrap gap-3 justify-center mb-10">
    {categories.map((category: string) => (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          activeCategory === category
            ? 'bg-green-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);


// Helpers
const generateWhatsAppLink = (message: string): string => {
  return `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export default function InnersPage(): React.ReactElement {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(heroScrollProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(heroScrollProgress, [0, 1], [1, 1.2]);

  // Filter products that are in the inners category
  const inners = controleDeAcesso.filter((p: Product) => p.categories?.includes('inners'));
  
  // Get all available subcategories for filtering
  const subcategories = ['Todos', ...new Set(inners.flatMap(p => p.categories || []))];
  
  // State for filtering products
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  
  const filteredProducts = activeCategory === 'Todos' 
    ? inners 
    : inners.filter(p => p.categories?.includes(activeCategory));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Enhanced with Parallax */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ opacity: heroOpacity }}
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block bg-green-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
          >
            Tecnologia TopData
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-gray-900">Inner Acesso</span>
            <span className="text-green-600">Controle Inteligente</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Soluções completas para controle de acesso e ponto eletrônico com tecnologia nacional e suporte especializado
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#modelos"
              className="py-4 px-8 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
            >
              Ver Modelos
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={generateWhatsAppLink(CONTACT.WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              Consultoria Especializada
              <MessageCircle className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          style={{ y, scale: heroScale }}
          className="absolute inset-0 -z-10"
        >
          <div className="h-full w-full bg-[url('/inner-acesso-hero.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white" />
        </motion.div>
      </section>

      {/* Benefits Section */}
      <FadeInSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher Inner TopData?</h2>
              <p className="text-gray-600 text-lg">
                Soluções inteligentes e confiáveis para controle de acesso e ponto eletrônico
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={Zap} 
                title="Processamento Rápido" 
                description="Identificação biométrica em menos de 1 segundo, ideal para ambientes com alto fluxo de usuários."
              />
              <FeatureCard 
                icon={Users} 
                title="Múltiplas Tecnologias" 
                description="Compatibilidade com biometria, cartões de proximidade, QR Code, reconhecimento facial e senha."
              />
              <FeatureCard 
                icon={Database} 
                title="Armazenamento Robusto" 
                description="Capacidade para armazenar milhares de usuários e registros, mesmo em modo offline."
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Product Categories Section */}
      <section id="modelos" className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modelos Inner TopData</h2>
            <p className="text-gray-600 text-lg">
              Encontre o equipamento ideal para as necessidades da sua empresa
            </p>
          </motion.div>
          
          <CategoryFilter 
            categories={subcategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductShowcase products={[product]} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>


      {/* FAQ Section */}
      <FadeInSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-gray-600 text-lg">
                Tire suas dúvidas sobre nossos sistemas de Inner Acesso
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {FAQS.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para modernizar seu controle de acesso?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Nossa equipe está preparada para entender suas necessidades e oferecer a solução ideal para sua empresa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={generateWhatsAppLink(CONTACT.WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-8 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Especialista
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#modelos"
                className="py-4 px-8 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                Ver Catálogo Completo
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}