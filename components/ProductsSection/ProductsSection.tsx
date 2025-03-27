"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import categoriesData from "@/data/categories.json";
import "swiper/css";
import "swiper/css/navigation";
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  details?: string;
}

export interface Category {
  id: string;
  label: string;
  products: Product[];
}

const useProductData = () => {
  return { categories: categoriesData };
};

const COLORS = {
  background: "bg-white",
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-600",
    muted: "text-gray-500",
  },
  accent: {
    primary: "bg-emerald-500 hover:bg-emerald-600",
    secondary: "bg-gray-100 hover:bg-gray-200",
  },
  border: "border-gray-200",
};

const ProductCard: React.FC<{ product: Product; onSelect: (product: Product) => void }> = ({ product, onSelect }) => {
  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden ${COLORS.background} border ${COLORS.border} 
      shadow-lg transition-all duration-300 hover:shadow-xl group focus:outline-none focus:ring-2 focus:ring-emerald-300`}
      whileHover={{
        scale: 1.025,
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-4 sm:p-5 space-y-3">
        <h3
          className={`text-lg sm:text-xl font-bold ${COLORS.text.primary} group-hover:text-emerald-600 transition-colors`}
        >
          {product.name}
        </h3>

        <p className={`${COLORS.text.secondary} text-sm line-clamp-3`}>{product.description}</p>

        <button
          onClick={() => onSelect(product)}
          className={`w-full py-2 rounded-lg ${COLORS.accent.primary} text-white font-semibold 
          transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-300`}
        >
          Ver Detalhes
        </button>
      </div>
    </motion.div>
  );
};

const ProductModal: React.FC<{ product: Product | null; onClose: () => void }> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden grid md:grid-cols-2 shadow-2xl"
      >
        {/* Image Section */}
        <div className="relative aspect-square">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>

        {/* Details Section */}
        <div className="p-6 md:p-8 space-y-4">
          <h2 className={`text-2xl md:text-3xl font-bold ${COLORS.text.primary}`}>{product.name}</h2>

          <p className={`${COLORS.text.secondary}`}>{product.description}</p>

          {product.details && (
            <div>
              <h3 className={`text-lg font-semibold ${COLORS.text.primary} mb-2`}>Detalhes</h3>
              <p className={`${COLORS.text.muted}`}>{product.details}</p>
            </div>
          )}

          <div className="flex space-x-3 pt-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className={`flex-1 py-2.5 rounded-lg ${COLORS.accent.secondary} ${COLORS.text.primary} font-semibold transition-all`}
            >
              Fechar
            </button>
            <button
              onClick={() => window.open(`https://wa.me/558532262933?text=Olá, gostaria de saber mais sobre o produto ${product.name}`, '_blank')}
              className={`flex-1 py-2.5 rounded-lg ${COLORS.accent.primary} text-white font-semibold transition-all duration-300 hover:scale-[1.02]`}
            >
              Comprar
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProductsSection() {
  const { categories } = useProductData();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const handleProductSelect = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);
  return (
    <section className={`min-h-screen ${COLORS.background} py-12 md:py-16 lg:py-20`}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold ${COLORS.text.primary} mb-4`}
          >
            Nossos Produtos
          </h2>
          <p
            className={`text-base md:text-xl max-w-2xl mx-auto ${COLORS.text.secondary}`}
          >
            Descubra nossa linha completa de produtos de alta qualidade
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-8 md:mb-12 space-x-2 md:space-x-4">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`px-4 md:px-6 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ${activeCategory === index
                ? "bg-emerald-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories[activeCategory]?.products.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={handleProductSelect} />
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
