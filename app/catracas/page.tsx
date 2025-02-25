"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import categoriesData from "@/data/categories.json";

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

const categories: Category[] = categoriesData as Category[];
const catracasCategory = categories.find((cat) => cat.id === "catracas");

export default function CatracasPage() {
  return (
    <main className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bghero.jpg"
            alt="Controle de acesso"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-green-900/80" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {catracasCategory?.label || 'Catracas'}
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Soluções inteligentes para gestão de acesso e segurança
          </p>
          <motion.a
            href="#produtos"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-2xl transition-all"
          >
            Ver Modelos
          </motion.a>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border-l-4 border-green-600 bg-gray-700/50 rounded-xl">
            <div className="w-20 h-20 bg-green-900/20 rounded-xl mx-auto mb-6 flex items-center justify-center text-3xl text-green-400">
              🔒
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Segurança Adaptável</h3>
            <p className="text-gray-300">Sistemas modulares para diferentes necessidades de controle</p>
          </div>

          <div className="text-center p-6 border-l-4 border-green-600 bg-gray-700/50 rounded-xl">
            <div className="w-20 h-20 bg-green-900/20 rounded-xl mx-auto mb-6 flex items-center justify-center text-3xl text-green-400">
              ⚡
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Alta Performance</h3>
            <p className="text-gray-300">Tecnologia de ponta para fluxos intensos</p>
          </div>

          <div className="text-center p-6 border-l-4 border-green-600 bg-gray-700/50 rounded-xl">
            <div className="w-20 h-20 bg-green-900/20 rounded-xl mx-auto mb-6 flex items-center justify-center text-3xl text-green-400">
              🔄
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Integração Total</h3>
            <p className="text-gray-300">Compatível com principais sistemas do mercado</p>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Nossas Soluções</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catracasCategory?.products.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{product.name}</h3>
                  <p className="text-gray-300 min-h-[60px]">{product.description}</p>
                  {product.details && (
                    <span className="inline-block mt-4 px-3 py-1 bg-blue-900/30 text-green-400 rounded-full text-sm border border-green-800">
                      {product.details}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-green-900 to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Modernizar seu Controle de Acesso?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Nossos especialistas estão prontos para ajudar na escolha ideal
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://wa.me/8532262933"
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              WhatsApp Comercial
            </a>
            <a
              href="tel:8532262933"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}