'use client'

import { Button } from "@/components/ui/button";


const CONTACT = {
  WHATSAPP_NUMBER: '558532262933',
  WHATSAPP_MESSAGE: 'Olá, preciso de ajuda para escolher o sistema de controle de acesso ideal'
};


const generateWhatsAppLink = (message: string): string => {
  return `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};


export const FinalCTA = () => (
  <section className="bg-green-600 text-white py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Comece agora sua modernização</h2>
      <p className="text-xl mb-8">14 dias grátis | Implantação assistida | Suporte 24/7</p>
      <Button variant={'secondary'} className="bg-white text-green-600 hover:bg-gray-100">
        <a href={generateWhatsAppLink(CONTACT.WHATSAPP_MESSAGE)}>
          Solicitar uma proposta!!
        </a>
      </Button>
    </div>
  </section>
) 