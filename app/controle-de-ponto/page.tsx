// app/controle-de-ponto/page.tsx
import { Suspense } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

async function getControlePontoData() {
  // Simula um delay de API
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const categoriesData = await import("@/data/categories.json");
  return categoriesData.default.find((cat) => cat.id === "controle-de-ponto");
}

export const metadata = {
  title: "Sistema de Controle de Ponto | Sua Empresa",
  description:
    "Solução completa para gestão de jornada de trabalho com tecnologia biométrica",
};

async function ProductsList() {
  const controlePontoCategory = await getControlePontoData();

  if (!controlePontoCategory) {
    return (
      <div className="text-center text-red-500">Categoria não encontrada</div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {controlePontoCategory.products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in"
        >
          <div className="relative h-64 w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-[#32313e] mb-4">
              {product.name}
            </h3>
            <p className="text-[#6b7280]">{product.description}</p>
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
        <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <Skeleton className="h-64 w-full rounded-t-xl" />
          <div className="p-6">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3 mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function ControlePontoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Seção Hero */}
      <section className="bg-gradient-to-b from-[#177f0f]/10 to-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#32313e] mb-6">
            Controle de Ponto
          </h1>
        </div>
      </section>

      {/* Lista de Produtos com Suspense */}
      <section className="py-20 bg-[#f9fafb]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#32313e] mb-16">
            Nossas Soluções
          </h2>

          <Suspense fallback={<ProductsSkeleton />}>
            <ProductsList />
          </Suspense>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-[#177f0f] text-white overflow-hidden">
        {/* Efeito de gradiente dinâmico */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#125f0b] to-[#1a9f10] opacity-90"></div>

        {/* Padrão geométrico */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Título impactante */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Pronto para revolucionar seu controle de ponto?
            </h2>

            {/* Texto explicativo */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up delay-100">
              Nossos especialistas estão prontos para criar uma solução sob
              medida para sua empresa
            </p>

            {/* Container do botão com efeito */}
            <div className="animate-fade-in-up delay-200">
              <Button
                variant="secondary"
                className="group bg-white text-[#177f0f] hover:bg-gray-50 px-8 py-5 text-lg md:text-xl 
          rounded-xl shadow-2xl shadow-[#125f0b]/40 hover:shadow-[#125f0b]/60 transition-all
          transform hover:scale-105"
              >
                <span className="mr-3">📅</span>
                Agendar Consultoria Gratuita
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                </svg>
              </Button>
            </div>

            {/* Texto de apoio */}
            <p className="mt-6 text-sm md:text-base text-white/80 animate-fade-in-up delay-300">
              ⏱️ Resposta em menos de 24h • ✅ Demonstração sem compromisso
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
