'use client';

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, Download } from "lucide-react";
import categoriesData from "@/data/categories.json";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  details?: string;
  videoUrl?: string;
  folderUrl?: string;
}

interface Category {
  id: string;
  label: string;
  products: Product[];
}

const categories: Category[] = categoriesData as Category[];
const catracasCategory = categories.find((cat) => cat.id === "catracas");

export default function CatracasPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <header className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/BGHERO.png"
            alt="Imagem de fundo representando controle de acesso"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-green-600/70" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          >
            {catracasCategory?.label || "Catracas"}
          </motion.h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Soluções inteligentes para gestão de acesso e segurança
          </p>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2.5 rounded-full mb-6 border border-white/30"
          >
            <Award className="w-5 h-5 text-yellow-300" />
            <span className="font-medium text-white">
              Parceiro Certificado TOPDATA
            </span>
          </motion.div>

          <motion.a
            href="#produtos"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-xl transition-all"
          >
            Ver Modelos
          </motion.a>
        </div>
      </header>

      {/* DESTAQUES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Award className="w-10 h-10" />,
              color: "yellow",
              title: "Certificação TOPDATA",
              text: "Produtos homologados com garantia de qualidade e desempenho",
              badge: "TOPDATA",
            },
            {
              icon: "🔒",
              color: "green",
              title: "Segurança Adaptável",
              text: "Sistemas modulares para diferentes necessidades de controle",
            },
            {
              icon: "⚡",
              color: "green",
              title: "Alta Performance",
              text: "Tecnologia de ponta para fluxos intensos",
            },
          ].map((item, idx) => (
            <article
              key={idx}
              className={`text-center p-6 border-l-4 border-${item.color}-600 bg-white rounded-xl shadow-md relative overflow-hidden`}
            >
              {item.badge && (
                <div className={`absolute top-0 right-0 bg-${item.color}-400 text-gray-800 px-3 py-1 text-xs font-bold`}>
                  {item.badge}
                </div>
              )}

              <div
                className={`w-20 h-20 bg-${item.color}-100 rounded-xl mx-auto mb-6 flex items-center justify-center text-3xl text-${item.color}-600`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Soluções</h2>
            <div className="inline-flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full text-yellow-700 text-sm font-medium border border-yellow-200">
              <Award className="w-4 h-4" />
              Todos os produtos homologados TOPDATA
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catracasCategory?.products.map((product) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={`Imagem do produto ${product.name}`}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-t-xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 min-h-[60px]">{product.description}</p>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-4 inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium"
                  >
                    Ver mais detalhes
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>


      {/* MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full relative overflow-hidden"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-gray-600 mb-4">{selectedProduct.details || selectedProduct.description}</p>
                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {selectedProduct.videoUrl && (
                  <div className="mb-4">
                    <video
                      src={selectedProduct.videoUrl}
                      controls
                      className="rounded-lg w-full"
                    />
                  </div>
                )}

                {selectedProduct.folderUrl && (
                  <a
                    href={selectedProduct.folderUrl}
                    download
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Baixar Folder PDF
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA FINAL */}
      <footer className="bg-gradient-to-br from-green-600 to-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
            <Award className="w-5 h-5 text-yellow-300" />
            <span>Parceiro Certificado TOPDATA</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Modernizar seu Controle de Acesso?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Nossos especialistas estão prontos para ajudar na escolha ideal
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://wa.me/8532262933"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
            >
              WhatsApp Comercial
            </a>
            <a
              href="tel:8532262933"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
