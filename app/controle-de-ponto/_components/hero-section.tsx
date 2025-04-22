'use client'

import { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoAvailable, setVideoAvailable] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Verifica se o vídeo existe e pode ser carregado
  useEffect(() => {
    const checkVideoExists = async () => {
      try {
        const response = await fetch('/controle-ponto-hero.mp4', { method: 'HEAD' });
        if (response.ok) {
          setVideoAvailable(true);
        } else {
          setVideoAvailable(false);
        }
      } catch (error) {
        setVideoAvailable(false);
      }
    };

    checkVideoExists();
  }, []);

  // Verifica se o vídeo carregou corretamente após a renderização
  useEffect(() => {
    const video = videoRef.current;
    if (video && videoAvailable) {
      const handleError = () => setVideoAvailable(false);
      
      video.addEventListener('error', handleError);
      
      return () => {
        video.removeEventListener('error', handleError);
      };
    }
    return undefined;
  }, [videoAvailable]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Vídeo ou Imagem de fundo */}
      <div className="absolute inset-0 z-0">
        {videoAvailable ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/video-poster.jpg"
          >
            <source src="/controle-ponto-hero.mp4" type="video/mp4" />
            <source src="/controle-ponto-hero.webm" type="video/webm" />
          </video>
        ) : (
          <Image
            src="/controle-ponto-hero.webp"
            alt="Controle de ponto inteligente"
            fill
            className="object-cover"
            priority
          />
        )}
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Controle de Ponto <span className="text-[#22b917]">Inteligente</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Tecnologia de ponta com reconhecimento facial 3D e geolocalização precisa
          </p>

          {/* Controles do vídeo apenas se existir */}
          {videoAvailable && (
            <button
              onClick={togglePlay}
              className="mb-12 inline-flex items-center gap-2 text-white hover:text-[#177f0f] transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-6 h-6" />
                  Pausar vídeo
                </>
              ) : (
                <>
                  <Play className="w-6 h-6" />
                  Assistir vídeo
                </>
              )}
            </button>
          )}

          {/* Cards flutuantes */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: '⚡', text: "Suporte Rápido" },
              { icon: '🛡️', text: "Certificado INMETRO" },
              { icon: '📈', text: "Redução de Custos" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <p className="font-semibold text-white">{item.text}</p>
              </div>
            ))}
          </div>

          <button 
            className="bg-[#177f0f] text-white px-8 py-6 text-lg hover:bg-[#125f0b] shadow-xl transition-all"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
}