'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroAndDetailsSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoAvailable, setVideoAvailable] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    fetch('/Catraca Revolution 4 Facial Topdata(1).mp4', { method: 'HEAD' })
      .then((res) => setVideoAvailable(res.ok))
      .catch(() => setVideoAvailable(false));
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Vídeo de fundo ou fallback */}
      <div className="absolute inset-0 z-0">
        {videoAvailable ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-75"
            poster="/controle-ponto-hero.jpg"
          >
            <source src="/Catraca Revolution 4 Facial Topdata(1).mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/controle-ponto-hero.webp"
            alt="Leitor facial"
            fill
            className="object-cover brightness-75"
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 px-6 pt-28 pb-20 flex flex-col items-center justify-center text-center min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 max-w-3xl leading-tight"
        >
          Leitor Facial Topdata:
          <span className="block text-green-500">Reconhecimento Rápido e Seguro</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8"
        >
          A tecnologia mais robusta do mercado com certificação INMETRO, IP65 e leitura facial de alta precisão — mesmo em ambientes externos.
        </motion.p>

        {videoAvailable && (
          <motion.button
            onClick={togglePlay}
            whileTap={{ scale: 0.95 }}
            className="mb-10 flex items-center gap-2 text-white hover:text-green-400 transition-colors"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            {isPlaying ? "Pausar vídeo" : "Assistir vídeo"}
          </motion.button>
        )}

        {/* Bloco de Destaques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 max-w-5xl w-full shadow-xl grid md:grid-cols-2 gap-10"
        >
          <div className="flex items-center justify-center">
            <Image
              src="/leitor-facial-topdata.png"
              alt="Leitor Facial"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>

          <div className="flex flex-col justify-center text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              Robusto, Inteligente, Confiável
            </h2>

            <ul className="space-y-4 text-lg">
              {[
                "Capacidade para até 50.000 cadastros",
                "Certificação INMETRO e IP65",
                "Reconhecimento facial 3D com precisão milimétrica",
                "Operação externa e interna (IP65)",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="text-green-400 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
