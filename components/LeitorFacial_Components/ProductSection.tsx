'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, Play, Pause, Phone } from 'lucide-react';
import Link from 'next/link';

export default function ProductSection() {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    const video = document.getElementById('product-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Imagem do Leitor */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/leitorfacial-sem-fundo.png"
            alt="Leitor Facial"
            width={320}
            height={600}
            className="object-contain w-full max-w-xs md:max-w-sm"
            priority
          />
        </motion.div>

        {/* Texto e Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
            Leitor facial <span className="font-bold text-gray-800">Topdata</span>
          </h2>

          <p className="text-lg text-blue-700 font-medium mb-4">
            Reconhecimento facial com inteligência artificial para controle de ponto e controle de acesso
          </p>

          <p className="text-gray-600 text-base mb-8">
            Identificação de pessoas sem a necessidade de contato com o leitor, trazendo maior comodidade para os usuários
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="https://wa.me/8532262933"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#177f0f] hover:bg-[#125f0b] text-white rounded-lg font-semibold flex items-center gap-2 transition-all"
            >
              <Phone className="w-5 h-5" />
              Solicitar uma Proposta!
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-green-600 text-white hover:bg-green-700 shadow-md">
                  Ver mais detalhes
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full p-6 rounded-2xl bg-white shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">
                    Especificações do Leitor Facial
                  </DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm md:text-base">
                    <li>Reconhecimento facial com IA</li>
                    <li>Fácil integração</li>
                    <li>Alta Capacidade de Armazenamento</li>
                    <li>Conectividade via Wi-Fi, Ethernet e 4G</li>
                    <li>Identifica o usuário mesmo com o uso de máscara de proteção</li>
                    <li>Detecção de rosto vivo</li>
                    <li>Tela touchscreen colorida</li>
                    <li>Integração com sistema de controle de ponto</li>
                  </ul>

                  <div className="relative rounded-xl overflow-hidden bg-black">
                    <video
                      id="product-video"
                      className="w-full h-full rounded-xl shadow-lg"
                      src="/Catraca Revolution 4 Facial Topdata(1).mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                      poster="/fallback-video-poster.jpg"
                    />
                    <Button
                      onClick={toggleVideo}
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-4 left-4 bg-white/80 hover:bg-white text-black"
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </Button>
                  </div>
                </div>

                <div className="mt-6 flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
                  <a
                    href="/folder-leitor-facial.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow"
                  >
                    <Download size={18} />
                    Baixar folder completo
                  </a>
                  <DialogClose asChild>
                    <Button variant="ghost" className="text-gray-500 hover:text-gray-700">
                      Fechar
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
