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
const softwaresCategory = categories.find((cat) => cat.id === "softwares");

export default function SoftwaresPage() {
  return (
    <main className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/softwares-bg.jpg"
            alt="Soluções em software"
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
            {softwaresCategory?.label || 'Soluções em Software'}
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Sistemas inteligentes para gestão integrada de acesso
          </p>
          <motion.a
            href="#solucoes"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-2xl transition-all"
          >
            Conhecer Sistemas
          </motion.a>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border-l-4 border-green-600 bg-gray-700/50 rounded-xl">
            <div className="w-20 h-20 bg-green-900/20 rounded-xl mx-auto mb-6 flex items-center justify-center text-3xl text-green-400">
              🧩
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Integração Total</h3>
            <p className="text-gray-300">Compatível com múltiplos dispositivos e plataformas</p>
          </div>

          <div className="text-center p-6 border-l-4 border-green-600 bg-gray-700/50 rounded-xl">
            <div className="w-20 h-20 bg-green-900/20 rounded-xl mx-auto mb-6 flex items-center justify-center text-3xl text-green-400">
              🔄
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Atualizações Constantes</h3>
            <p className="text-gray-300">Melhorias contínuas e novas funcionalidades</p>
          </div>

          <div className="text-center p-6 border-l-4 border-green-600 bg-gray-700/50 rounded-xl">
            <div className="w-20 h-20 bg-green-900/20 rounded-xl mx-auto mb-6 flex items-center justify-center text-3xl text-green-400">
              🔐
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Segurança de Dados</h3>
            <p className="text-gray-300">Criptografia avançada e compliance LGPD</p>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="solucoes" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Nossas Soluções</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwaresCategory?.products.map((product) => (
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
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-sm border border-green-800">
                        {product.details}
                      </span>
                    </div>
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
            Pronto para Digitalizar sua Gestão?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Nossos especialistas em software estão prontos para ajudar
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://wa.me/558532262933"
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Solicitar Demonstração
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}