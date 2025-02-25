// app/suporte/page.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { validateCNPJ } from '@/utils/validator';
import { IMaskInput } from 'react-imask';
import Image from 'next/image';

export default function SuportePage() {
  const [cnpj, setCnpj] = useState('');
  const [isValidCnpj, setIsValidCnpj] = useState(false);

  const validatingCNPJ = (value: string) => {
    const isValid = validateCNPJ(value);
    setIsValidCnpj(isValid);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidCnpj) {
      const whatsappMessage = `Olá, preciso de suporte técnico. Meu CNPJ é: ${cnpj}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/558532262933?text=${encodedMessage}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="relative h-64 w-full">
          <Image
            src="https://i.pinimg.com/736x/9b/44/20/9b44204581637299fdfcfe54993a9190.jpg" // Substitua pelo caminho correto da imagem
            alt="Banner de Suporte Técnico"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Bem-vindo ao Suporte Técnico</h1>
          <p className="text-gray-700 mb-6">
            Estamos aqui para ajudá-lo com qualquer dúvida ou problema relacionado aos nossos produtos e serviços. Por favor, forneça seu CNPJ para que possamos atendê-lo de forma mais eficiente.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                CNPJ
              </label>
              <IMaskInput
                mask="00.000.000/0000-00"
                value={cnpj}
                onAccept={(value: string) => {
                  setCnpj(value);
                  validatingCNPJ(value);
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
                placeholder="00.000.000/0000-00"
              />
              {!isValidCnpj && cnpj.length > 0 && (
                <p className="mt-1 text-sm text-red-600">CNPJ inválido</p>
              )}
            </div>
            <div className="space-y-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!isValidCnpj}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isValidCnpj
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Falar com Suporte via WhatsApp
              </motion.button>
              <div className="text-center">
                <p className="text-sm text-gray-600">Ou ligue para:</p>
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
    </div>
  );
}
