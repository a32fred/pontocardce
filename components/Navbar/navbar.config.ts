// navbar.config.ts
import type { Variants } from "framer-motion";

export type NavLink = {
  href: string;
  label: string;
  subItems?: NavLink[];
};

export const APP_NAV_LINKS: NavLink[] = [
  { href: "/", label: "Início" },
  { 
    href: "/controle-de-ponto", 
    label: "Controle de Ponto",
    subItems: [
      { href: "/relogio-de-ponto", label: "Relógio de Ponto" },
      { href: "/leitor-facial", label: "Leitor Facial" },
      { href: "/sistema-de-ponto", label: "Sistema de Ponto" },
    ]
  },
  { 
    href: "/controle-de-acesso", 
    label: "Controle de Acesso",
    subItems: [
      { href: "/catracas", label: "Catracas" },
      { href: "/inners-acessos", label: "Inners Acessos" },
      { href: "/cancelas", label: "Cancelas" },
    ]
  },
  { href: "/suporte", label: "Suporte" },
  { href: "/contato", label: "Contato" },
  { href: "/sobre-nos", label: "Sobre" },
];

export const NAV_ANIMATION_VARIANTS: Record<string, Variants> = {
  menu: {
    closed: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    open: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    }
  },
  icon: {
    closed: { rotate: 0 },
    open: { rotate: 45 }
  },
  subMenu: {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 }
  }
};