// app/controle-acesso/_components/DetailedFeatures.tsx
import { CheckCircle2 } from 'lucide-react'
import { FeatureCard } from './FeatureCard'
import { FEATURES } from '../_constants/features'

export const DetailedFeatures = () => (
  <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50/50">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tudo que você precisa em um só lugar
        </h2>
        <p className="text-gray-600 md:text-lg">
          Recursos avançados para gestão completa e integrada
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={`feature-${index}`}
            title={feature.title}
            items={Array.isArray(feature.items) ? feature.items : []}
            icon={
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-100/50 border border-green-200">
                  <CheckCircle2 className="h-7 w-7 text-green-600" />
                </div>
              </div>
            }
            className="group relative bg-white/90 backdrop-blur-sm hover:bg-white transition-all 
            border border-gray-200/50 hover:border-green-200/80 hover:shadow-lg
            overflow-hidden"
          />
        ))}
      </div>

      {/* Decoração de fundo */}
      <div className="absolute inset-0 -z-10 pattern-dots pattern-green-100 pattern-opacity-20 
      pattern-size-4 pointer-events-none" />
    </div>
  </section>
)