import Image from "next/image";
import { HeroSection } from './_components/hero-section'
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { MessageCircle } from "lucide-react";
import WhyChooseUs from "./_components/porque-nos";

async function getControlePontoData() {
  const categoriesData = await import("@/data/categories.json");
  return categoriesData.default.find((cat) => cat.id === "controle-de-ponto");
}

export const metadata = {
  title: "Controle de Ponto Inteligente | Sua Empresa",
  description: "Solução completa com biometria facial, geolocalização e compliance trabalhista"
};

async function ProductsList() {
  const controlePontoCategory = await getControlePontoData();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {controlePontoCategory?.products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
          <div className="relative h-64 w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-t-xl"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-white text-xl font-bold">{product.name}</h3>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {['INMETRO'].map((tag) => (
                <span key={tag} className="bg-[#177f0f]/10 text-[#177f0f] px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-[#6b7280] mb-4">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProductsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-xl shadow-lg">
          <Skeleton className="h-64 w-full rounded-t-xl" />
          <div className="p-6">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function ControlePontoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - agora com altura controlada pelo próprio componente */}
      <HeroSection />

      {/* Seções seguintes */}
      <WhyChooseUs />

      <section className="py-12 md:py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#32313e] mb-12 md:mb-16">
            Nossas Soluções para Controle de Ponto
          </h2>

          <Suspense fallback={<ProductsSkeleton />}>
            <ProductsList />
          </Suspense>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#22B917] to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Transforme sua gestão de pessoal
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Tenha controle total da jornada de trabalho com nossa solução completa
            </p>

            <div className="mt-8 md:mt-10">
              <a
                href="https://wa.me/553199999999"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 bg-white text-emerald-800 px-6 py-3 md:px-8 md:py-4 rounded-xl
                         text-base md:text-lg font-semibold hover:bg-emerald-50 transition-all shadow-lg
                         hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                Conversar com Especialista
              </a>
            </div>

            <p className="mt-6 md:mt-8 text-sm text-emerald-200 opacity-90">
              Resposta garantida
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}