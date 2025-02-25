import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bghero.jpg" // Caminho da imagem na pasta public
          alt="Ilustração de soluções tecnológicas"
          fill
          style={{ objectFit: "cover" }} // Cobrir todo o espaço sem distorcer
          quality={100} // Qualidade máxima
          className="opacity-100" // Ajuste a opacidade conforme necessário
        />
      </div>

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#062004] mb-6">
          Tecnologia que Impulsiona Seu Negócio
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#0c4007] mb-8">
          Transforme sua empresa com soluções inteligentes em controle de ponto e acesso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://wa.me/8532262933"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#177f0f] text-white rounded-md hover:bg-[#125f0b] transition text-center"
            >
              Solicite um Orçamento!
            </Link>
            <Link
              href="/sobre"
              className="px-6 py-3 text-white border border-none bg-[#3E6B51] opacity-80 rounded-md hover:bg-[#177f0f] hover:text-white transition text-center"
            >
              Conheça Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}