// app/controle-acesso/_components/FeatureCard.tsx
import { cn } from "@/lib/utils"

type FeatureCardProps = {
  title: string
  items: string[]
  icon: React.ReactNode
  className?: string
}

export const FeatureCard = ({ title, items, icon, className }: FeatureCardProps) => (
  <div className={cn("p-8 rounded-xl transition-all duration-300", className)}>
    {icon}
    <h3 className="text-xl font-semibold text-gray-900 mb-6">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li 
          key={index}
          className="flex items-start text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span className="shrink-0 mt-1 mr-3 text-green-500">▹</span>
          <span className="text-base leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
    
    {/* Efeito de hover */}
    <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="absolute -inset-8 bg-[radial-gradient(200px_circle_at_var(--x)_var(--y),#f0fdf4] 
      opacity-20 pointer-events-none" />
    </div>
  </div>
)