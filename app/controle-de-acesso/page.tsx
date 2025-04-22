// app/controle-acesso/page.tsx
'use client'

import { useState } from 'react'
import { ControleAcessoHero } from './_components/ControleAcessoHero'
import { SolutionsSection } from './_components/SolutionsSection'
import { DetailedFeatures } from './_components/DetailedFeatures'
import { FinalCTA } from './_components/FinalCTA'
import { FILTERS } from './_constants/filters'

export default function ControleAcessoPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategoryToggle = (category: string) => {
    setSelectedCategory(prev => prev === category ? null : category)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <ControleAcessoHero />
      
      <SolutionsSection
        filters={FILTERS}
        selectedCategory={selectedCategory}
        onCategoryToggle={handleCategoryToggle}
      />

      <DetailedFeatures />
      <FinalCTA />
    </main>
  )
}