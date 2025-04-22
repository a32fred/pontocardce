'use client'

import Image from 'next/image'
import { useState } from 'react'
import {
  Lock,
  Ticket,
  Accessibility,
  Cpu,
  Terminal,
  DoorOpen,
  X
} from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import controleDeAcesso from '@/data/controle-de-acesso.json'
import { cn } from '@/lib/utils'

type Product = {
  id: string
  name: string
  description: string
  image: string
  features: string[]
  specs: string[]
  categories?: string[]
}

type ProductsSectionProps = {
  selectedCategory?: string | null
}

const FeatureList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-2">
    <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
    <ul className="space-y-1.5 text-gray-600 text-xs">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-green-600 mt-[0.3rem]">▹</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
)

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
)

const ProductCard = ({ product }: { product: Product }) => {
  const [open, setOpen] = useState(false)

  const whatsappLink = (productName: string) => {
    const message = `Olá, me interessei no produto ${encodeURIComponent(productName)}. Gostaria de falar com alguém do comercial para mais informações.`
    return `https://wa.me/558532262933?text=${encodeURIComponent(message)}`
  }

  const getIcon = () => {
    const iconClass = "h-5 w-5 text-green-600"
    if (product.id.includes('catraca')) return <Lock className={iconClass} />
    if (product.id.includes('academia')) return <DoorOpen className={iconClass} />
    if (product.id.includes('estacionamento')) return <Ticket className={iconClass} />
    if (product.categories?.includes('empresas')) return <Terminal className={iconClass} />
    if (product.categories?.includes('hospitais')) return <Accessibility className={iconClass} />
    return <Cpu className={iconClass} />
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <article className="h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-4 flex flex-col gap-3 h-full">
          <header className="flex items-center gap-3">
            <div className="p-2 bg-green-50 rounded-lg">
              {getIcon()}
            </div>
            <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
              {product.name}
            </h3>
          </header>

          <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
            {product.description}
          </p>

          <FeatureList title="Destaques" items={product.features} />

          <div className="mt-auto space-y-2">
            <Dialog.Trigger
              className={cn(
                "w-full py-2 px-4 bg-green-600 text-white rounded-lg",
                "hover:bg-green-700 focus:bg-green-700",
                "transition-colors duration-200 font-medium",
                "flex items-center justify-center gap-2",
                "shadow-sm hover:shadow-md",
                "focus:outline-none focus:ring-2 focus:ring-green-800",
                "focus:ring-offset-2"
              )}
            >
              <span>Ver detalhes</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </Dialog.Trigger>

            <a
              href={whatsappLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-full py-2 px-4 text-center rounded-lg",
                "border-2 border-green-600 text-green-600",
                "hover:bg-green-50 focus:bg-green-50",
                "transition-colors duration-200 font-medium",
                "shadow-sm hover:shadow-md",
                "focus:outline-none focus:ring-2 focus:ring-green-800",
                "focus:ring-offset-2 flex items-center justify-center gap-2"
              )}
            >
              <span>Solicitar Proposta</span>
              <WhatsappIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl bg-white rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <Dialog.Title className="text-2xl font-bold text-gray-900">
                  {product.name}
                </Dialog.Title>
                <Dialog.Close className="p-1.5 hover:bg-gray-100 rounded-lg">
                  <X size={24} />
                </Dialog.Close>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <FeatureList title="Funcionalidades" items={product.features} />
                  <FeatureList title="Especificações" items={product.specs} />
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </article>
    </Dialog.Root>
  )
}

export default function ProductsSection({ selectedCategory }: ProductsSectionProps) {
  const filteredProducts = selectedCategory
    ? controleDeAcesso.filter(product => product.categories?.includes(selectedCategory))
    : controleDeAcesso

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}