"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContatoPage() {
  return (
    <main className="bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contato-bg.jpg"
            alt="Entre em contato"
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
            Fale Conosco
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Estamos prontos para atender suas necessidades em controle de acesso
          </p>
        </div>
      </section>

      {/* Seção de Contato */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Suporte Comercial */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-700/50 p-8 rounded-xl border-l-4 border-green-600"
          >
            <div className="w-16 h-16 bg-green-900/20 rounded-xl mb-6 flex items-center justify-center text-3xl text-green-400">
              📞
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Suporte Comercial</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                <a href="tel:+558532262933" className="hover:text-green-400 transition">
                  +55 85 3226-2933
                </a>
              </p>
              <p className="text-gray-300">
                <a href="mailto:gerentecomercial@pontocardce.com.br" className="hover:text-green-400 transition">
                  gerentecomercial@pontocardce.com.br
                </a>
              </p>
              <p className="text-gray-300 text-sm mt-4">
                Horário de atendimento: 8h às 18h (Seg-Sex)
              </p>
            </div>
          </motion.div>

          {/* Contato Financeiro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-700/50 p-8 rounded-xl border-l-4 border-green-600"
          >
            <div className="w-16 h-16 bg-green-900/20 rounded-xl mb-6 flex items-center justify-center text-3xl text-green-400">
              💰
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Financeiro</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                <a href="mailto:gerentefinanceiro@pontocardce.com.br" className="hover:text-green-400 transition">
                  gerentefinanceiro@pontocardce.com.br
                </a>
              </p>
              <p className="text-gray-300 text-sm mt-4">
                Atendimento exclusivo por e-mail
              </p>
            </div>
          </motion.div>

          {/* Atendimento Presencial */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-700/50 p-8 rounded-xl border-l-4 border-green-600"
          >
            <div className="w-16 h-16 bg-green-900/20 rounded-xl mb-6 flex items-center justify-center text-3xl text-green-400">
              🏢
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Atendimento Presencial</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
              R. São Paulo, 32-3º Andar, Sala 309<br/>
                Centro, Fortaleza - CE<br/>
                CEP: 60030-100
              </p>
              <p className="text-gray-300 text-sm mt-4">
                Horário: 8h às 17h (Seg-Sex)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulário e Mapa */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Envie uma Mensagem</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Nome completo</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">E-mail</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Telefone</label>
                <input 
                  type="tel" 
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Assunto</label>
                <select className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none">
                  <option>Selecione um assunto</option>
                  <option>Comercial</option>
                  <option>Suporte Técnico</option>
                  <option>Financeiro</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Mensagem</label>
                <textarea 
                  rows={5}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full rounded-xl overflow-hidden shadow-xl"
          >
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7962.741964271449!2d-38.5285933213214!3d-3.729045358963558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74852a6a76aa3%3A0x62633b52236ef7e3!2sPonto%20Card!5e0!3m2!1spt-PT!2sbr!4v1739993421542!5m2!1spt-PT!2sbr"
              width="100%"
              height="100%"
              className="min-h-[500px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-green-900 to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de Ajuda Imediata?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Nossa equipe está pronta para atendê-lo
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="https://wa.me/558591296515"
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              WhatsApp de Emergência
            </a>
            <a
              href="tel:+558532262933"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
            >
              Ligar para Comercial
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}