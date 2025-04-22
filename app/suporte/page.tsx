'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { validateCNPJ } from '@/utils/validator';
import { IMaskInput } from 'react-imask';
import Image from 'next/image';
import { Headphones, Phone, MessageCircle } from 'lucide-react';

export default function SuportePage() {
  const [cnpj, setCnpj] = useState('');
  const [isValidCnpj, setIsValidCnpj] = useState(false);

  const handleCnpjChange = (value: string) => {
    setCnpj(value);
    setIsValidCnpj(validateCNPJ(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidCnpj) return;
    
    const message = `Olá, preciso de suporte técnico. Meu CNPJ é: ${cnpj}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/558532262933?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* Header com imagem */}
        <div className="relative h-64 w-full">
          <Image
            src="/suporte-tecnico.jpg"
            alt="Suporte Técnico PontoCard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-gray-900/50" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-6">
              <Headphones className="w-12 h-12 text-white mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Suporte Técnico
              </h1>
              <p className="text-lg text-gray-100 max-w-md mx-auto">
                Assistência especializada para seus equipamentos
              </p>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Como podemos ajudar?
            </h2>
            <p className="text-gray-600">
              Preencha com seu CNPJ para atendimento personalizado
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CNPJ da Empresa
              </label>
              <IMaskInput
                mask="00.000.000/0000-00"
                value={cnpj}
                onAccept={handleCnpjChange}
                className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                placeholder="00.000.000/0000-00"
              />
              {!isValidCnpj && cnpj.length > 0 && (
                <p className="mt-2 text-sm text-red-500">
                  Por favor, insira um CNPJ válido
                </p>
              )}
            </div>

            <div className="space-y-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={!isValidCnpj}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors ${
                  isValidCnpj
                    ? 'bg-green-600 hover:bg-green-700 text-white shadow-md'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp do Suporte
              </motion.button>

              <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>Telefone:</span>
                </div>
                <a
                  href="tel:+558532262933"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  (85) 3226-2933
                </a>
              </div>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Informações adicionais */}
      <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-2">Horário de Atendimento</h3>
          <p className="text-gray-600">Seg-Sex: 8h às 18h</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-2">Certificação</h3>
          <p className="text-gray-600">Suporte técnico autorizado TOPDATA</p>
        </div>
      </div>
    </div>
  );
}