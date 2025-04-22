import { cn } from "@/lib/utils"

type FilterButtonProps = {
  filter: {
    icon: React.ComponentType<{ className?: string }>
    title: string
    category: string
  }
  isSelected: boolean
  onSelect: (category: string) => void
}

const FilterButton = ({ filter, isSelected, onSelect }: FilterButtonProps) => {
  const Icon = filter.icon
  
  return (
    <button
      onClick={() => onSelect(filter.category)}
      className={cn(
        "flex flex-col items-center p-4 md:p-5 rounded-lg border transition-all",
        "hover:border-green-600 hover:bg-green-50 focus:outline-none focus:ring-2",
        "focus:ring-green-500 focus:ring-offset-2 active:scale-[0.98]",
        isSelected 
          ? "border-green-600 bg-green-50 shadow-sm" 
          : "border-gray-200 bg-white"
      )}
      aria-pressed={isSelected}
    >
      <Icon className={cn(
        "h-6 w-6 mb-3 transition-colors",
        isSelected ? "text-green-700" : "text-gray-600"
      )} />
      <span className={cn(
        "text-sm font-medium text-center",
        isSelected ? "text-green-700" : "text-gray-700"
      )}>
        {filter.title}
      </span>
    </button>
  )
}

export default FilterButton
