// app/controle-acesso/_constants/filters.ts
import {
    BuildingIcon,
    DumbbellIcon,
    HospitalIcon,
    ParkingSquareIcon,
    ShoppingCartIcon,
  } from 'lucide-react'
  
  export const FILTERS = [
    { icon: HospitalIcon, title: 'Hospitais', category: 'hospitais' },
    { icon: DumbbellIcon, title: 'Academias', category: 'academias' },
    { icon: ParkingSquareIcon, title: 'Estacionamentos', category: 'estacionamentos' },
    { icon: BuildingIcon, title: 'Empresas', category: 'empresas' },
    { icon: ShoppingCartIcon, title: 'Restaurantes', category: 'restaurantes' },
  ] as const