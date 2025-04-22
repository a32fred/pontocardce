'use client'

interface SolutionFilterProps {
  icon: React.ReactNode
  title: string
  category: string
  selected: boolean
  onClick: () => void
  className?: string
}

export function SolutionFilter({ icon, title, selected, onClick, className }: SolutionFilterProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center p-4 rounded-xl transition-all ${
        selected
          ? 'bg-green-600 text-white shadow-lg'
          : 'bg-white text-gray-700 hover:bg-green-50'
      } ${className || ''}`}
    >
      <div className="mb-2">{icon}</div>
      <span className="text-sm font-medium">{title}</span>
    </button>
  )
}