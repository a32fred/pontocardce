"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperCore } from "swiper";
import categoriesData from "@/data/categories.json";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

/* ----------------- Tipos ----------------- */
interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  details?: string;
}

interface Category {
  id: string;
  label: string;
  products: Product[];
}

/* Converte o JSON importado para o tipo Category[] */
const categories: Category[] = categoriesData as Category[];

/* ----------------- Componente: ProductCard ----------------- */
function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      <Image 
        src={product.image} 
        alt={product.name}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-300 text-sm">{product.description}</p>
      </div>
    </motion.div>
  );
}

/* ----------------- Componente: ProductModal ----------------- */
function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          <Image 
            src={product.image} 
            alt={product.name}
            width={600}
            height={400}
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              {product.name}
            </h2>
            <p className="text-gray-300 mb-4">{product.details}</p>
            
            <a
              href={`https://wa.me/558532262933?text=Olá, gostaria de saber mais sobre o produto ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 hover:bg-green-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------- Componente: CategorySlide ----------------- */
function CategorySlide({ category, onProductClick }: { category: Category; onProductClick: (product: Product) => void }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-6 text-green-400 text-center">
        {category.label}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </div>
  );
}

/* ----------------- Componente: CategoryTabs ----------------- */
function CategoryTabs({
  categories,
  activeIndex,
  onSelect,
}: {
  categories: Category[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category, index) => (
        <button
          key={category.id}
          onClick={() => onSelect(index)}
          className={`
            px-4 py-2 rounded-md transition-colors
            ${
              activeIndex === index
                ? "bg-green-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }
          `}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

/* ----------------- Componente Principal: ProductsSection ----------------- */
export default function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperCore>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Nossos Produtos
        </h2>

        <CategoryTabs
          categories={categories}
          activeIndex={activeIndex}
          onSelect={(index) => {
            setActiveIndex(index);
            swiperRef?.slideTo(index);
          }}
        />

        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={(swiper) => setSwiperRef(swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          autoplay={{ delay: 15000, disableOnInteraction: false }}
          navigation
          loop
          slidesPerView={1}
          className="pb-8 w-full"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <CategorySlide
                category={category}
                onProductClick={setSelectedProduct}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </section>
  );
}
