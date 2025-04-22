// app/controle-acesso/_components/ControleAcessoHero.tsx
import { Button } from '@/components/ui/button';
import Image from 'next/image'


const generateWhatsAppLink = (message: string): string => {
  return `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const CONTACT = {
  WHATSAPP_NUMBER: '558532262933',
  WHATSAPP_MESSAGE: 'Olá, preciso de ajuda para escolher o sistema de controle de acesso ideal'
};

export const ControleAcessoHero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-green-50/50 py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="mx-auto max-w-5xl text-center">
        {/* Heading com quebra natural */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Controle de Acesso{' '}
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Moderno & Legislativo
          </span>
        </h1>

        {/* Subtítulo com limite de largura */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl md:leading-8">
          Gestão completa de frequência com reconhecimento facial, geolocalização e conformidade total com a Portaria 671/2021
        </p>

        {/* Grupo de botões com espaçamento adequado */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant='default'
            className="group bg-green-600 px-8 py-4 text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
          >
            <a href={generateWhatsAppLink(CONTACT.WHATSAPP_MESSAGE)}>Solicitar uma Proposta</a>
            <span className="ml-2 opacity-70 transition-opacity group-hover:opacity-100">→</span>
          </Button>
        </div>

        {/* Container da imagem com efeito de profundidade */}
        <div className="mt-16 lg:mt-20">
          <div className="relative mx-auto max-w-6xl rounded-3xl border border-green-100/50 bg-white shadow-2xl shadow-green-100/30">
            <div className="aspect-video overflow-hidden rounded-3xl">
              <Image
                src="/dashboard-preview.png"
                alt="Painel de Controle Moderno"
                width={1920}
                height={1080}
                className="h-full w-full object-cover object-top"
                priority
                quality={100}
              />
              {/* Overlay sutil para melhor contraste */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-green-50/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)