// app/controle-acesso/_types/index.ts
export type Filter = {
    icon: React.ComponentType<{ className?: string }>
    title: string
    category: string
} & Readonly<{
    icon: React.ComponentType<{ className?: string }>
    title: string
    category: string
}> 