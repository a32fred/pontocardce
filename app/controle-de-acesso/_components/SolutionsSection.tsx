// app/controle-acesso/_components/SolutionsSection.tsx
import { Filter } from '../_types'
import FilterButton from './FilterButton'
import ProductsSection from './ProductsSection'

type SolutionsSectionProps = {
  filters: readonly Filter[]
  selectedCategory: string | null
  onCategoryToggle: (category: string) => void
}

export const SolutionsSection = ({
  filters,
  selectedCategory,
  onCategoryToggle
}: SolutionsSectionProps) => (
  <section className="bg-white py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-14 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Soluções por Segmento
        </h2>
        <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
          Sistemas especializados para diferentes necessidades de controle de acesso
        </p>
      </div>

      <div className="mb-12 md:mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {filters.map(filter => (
            <FilterButton
              key={filter.category}
              filter={filter}
              isSelected={selectedCategory === filter.category}
              onSelect={onCategoryToggle}
            />
          ))}
        </div>
      </div>

      <ProductsSection selectedCategory={selectedCategory} />
    </div>
  </section>
)