"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SobreNosPage() {
  return (
    <main className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sobre-nos-bg.jpg"
            alt="Nossa história"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-gray-900/90" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nossa História
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Mais de uma década transformando o controle de acesso
          </p>
        </motion.div>
      </section>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Sobre nós */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20 grid grid-cols-1 gap-8" // Modificado aqui
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Desde 2007 Inovando
            </h2>
            <p className="text-gray-300 mb-6 max-w-3xl">
              A PontoCard está presente no mercado desde 2007, com uma equipe que acumula mais de 
              10 anos de experiência no segmento de controle eletrônico de ponto e acesso.
            </p>
            <div className="bg-green-900/30 p-6 rounded-xl border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-white mb-3">
                Certificação TOPDATA
              </h3>
              <p className="text-gray-300">
                Em apenas 2 anos de atuação, nos tornamos Representante Especializado Certificado 
                pela fabricante, garantindo máxima qualidade e confiança em nossos serviços.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Valores */}
        <section className="py-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gray-800 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Pilares da Nossa Empresa
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Valores */}
              <div className="bg-gray-700/50 p-6 rounded-xl border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-green-400">✦</span> Valores
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    Ética, perseverança e transparência
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    Comprometimento, confiança e humildade
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    Respeito e valorização dos colaboradores
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▹</span>
                    Soluções que beneficiam clientes e sociedade
                  </li>
                </ul>
              </div>

              {/* Estratégia */}
              <div className="bg-gray-700/50 p-6 rounded-xl border-l-4 border-gray-600">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-gray-400">⮞</span> Estratégia
                </h3>
                <p className="text-gray-300">
                  Buscamos parcerias com os melhores fabricantes para oferecer o que há de mais 
                  avançado em tecnologia e inovação, garantindo soluções de ponta para nossos clientes.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Missão */}
        <motion.section 
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          className="bg-gradient-to-r from-green-900 to-gray-900 rounded-2xl p-8 md:p-12 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Nossa Missão
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ser determinante para o sucesso dos nossos clientes, sendo referência em soluções 
              para controle de ponto e acesso. Buscamos liderar nosso segmento oferecendo produtos 
              de alta qualidade e serviços que transmitam segurança e confiança.
            </p>
          </div>
        </motion.section>

        {/* Slogan */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block border-2 border-green-600/30 rounded-xl p-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Life-Run: My/His Comodo
            </h3>
            <p className="text-gray-400">
              Filosofia que guia nossa busca por excelência
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}