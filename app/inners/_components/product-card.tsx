// app/inners/_components/product-card.tsx
'use client'
import React from 'react'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
import { X, MessageCircle, CheckCircle } from 'lucide-react'
import Image from 'next/image'

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


interface ProductShowcaseProps {
  products: Product[];
}

interface ProductImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

interface FeatureListProps {
  items: string[];
  color?: string;
}

interface ProductDetailsProps {
  product: Product;
}

interface ProductDialogProps {
  product: Product;
}

interface QuoteButtonProps {
  productName: string;
}

interface ProductSectionProps {
  product: Product;
  index: number;
  totalProducts: number;
  scrollYProgress: any;
}

// Constants
const CONTACT = {
  WHATSAPP_NUMBER: '558532262933'
};

const ANIMATION_DURATION = {
  standard: 0.6,
  slow: 0.8
};

// Helper function
const generateWhatsAppLink = (message: string): string => {
  return `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

// Components
const ProductImage = ({ src, alt, priority = false }: ProductImageProps): React.ReactElement => (
  <div className="relative w-full h-full">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      priority={priority}
    />
  </div>
);

const ScrollIndicator = (): React.ReactElement => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }}
      className="text-white/80"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </motion.div>
  </motion.div>
);

const FeatureList = ({ items, color = "green" }: FeatureListProps): React.ReactElement => (
  <ul className="space-y-2 text-gray-700">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        <CheckCircle className={`h-5 w-5 text-${color}-500 mr-2 flex-shrink-0`} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const ProductDetails = ({ product }: ProductDetailsProps): React.ReactElement => (
  <div className="mt-6 space-y-6">
    <div className="relative h-64 rounded-xl overflow-hidden bg-gray-100">
      <ProductImage src={product.image} alt={product.name} priority />
    </div>

    {product.features && product.features.length > 0 && (
      <div>
        <h4 className="text-xl font-semibold mb-3 text-gray-800">Funcionalidades</h4>
        <FeatureList items={product.features} color="green" />
      </div>
    )}

    {product.specs && product.specs.length > 0 && (
      <div>
        <h4 className="text-xl font-semibold mb-3 text-gray-800">Especificações Técnicas</h4>
        <FeatureList items={product.specs} color="blue" />
      </div>
    )}

  </div>
);

const ProductDialog = ({ product }: ProductDialogProps): React.ReactElement => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-white/90 hover:bg-white text-green-800 rounded-lg font-semibold shadow-lg transition-all"
      >
        Ver Detalhes
      </motion.button>
    </Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl bg-white rounded-xl shadow-2xl p-6 z-50 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center sticky top-0 bg-white pt-2 pb-4">
          <Dialog.DialogTitle className="text-2xl font-bold text-gray-900">
            {product.name}
          </Dialog.DialogTitle>
          <Dialog.Close className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <X size={24} className="text-gray-500" />
          </Dialog.Close>
        </div>

        <ProductDetails product={product} />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

const QuoteButton = ({ productName }: QuoteButtonProps): React.ReactElement => {
  const message = `Olá, gostaria de uma proposta para: ${productName}`;
  const whatsappUrl = generateWhatsAppLink(message);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg transition-all"
    >
      <MessageCircle size={20} />
      Solicitar Cotação
    </motion.a>
  );
};

const ProductSection = ({ product, index, totalProducts, scrollYProgress }: ProductSectionProps): React.ReactElement => {
  // Calculate parallax effect based on scroll position
  const y = useTransform(
    scrollYProgress,
    [index / totalProducts, (index + 1) / totalProducts],
    ['0%', '-10%']
  );

  const isEven = index % 2 === 0;
  const gradientColors = isEven
    ? 'from-green-600 to-green-800'
    : 'from-blue-600 to-blue-800';

  return (
    <motion.section
      key={product.id}
      style={{ y }}
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b ${gradientColors} text-white`}
    >
      {/* Background image with parallax effect */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: ANIMATION_DURATION.slow }}
        className="absolute inset-0 w-full h-full"
      >
        <ProductImage src={product.image} alt={product.name} priority={index === 0} />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content with staggered animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: ANIMATION_DURATION.standard, delay: 0.2 }}
        className="relative z-10 text-center px-6 py-16 max-w-2xl mx-auto"
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          whileHover={{ scale: 1.02 }}
        >
          {product.name}
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-100 mb-8"
          whileHover={{ scale: 1.01 }}
        >
          {product.description}
        </motion.p>

        {product.categories && product.categories.length > 0 && (
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {product.categories.map((category, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </motion.div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ProductDialog product={product} />
          <QuoteButton productName={product.name} />
        </div>
      </motion.div>

      {/* Scroll indicator (except for last product) */}
      {index < totalProducts - 1 && <ScrollIndicator />}
    </motion.section>
  );
};

// Main Component
export const ProductShowcase = ({ products }: ProductShowcaseProps): React.ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={containerRef} className="scroll-smooth bg-gray-50">
      <div className="space-y-0.5">
        {products.map((product, index) => (
          <ProductSection
            key={product.id}
            product={product}
            index={index}
            totalProducts={products.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;