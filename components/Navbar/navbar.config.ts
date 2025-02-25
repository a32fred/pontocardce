import type { Variants } from "framer-motion";

export const APP_NAV_LINKS = [
  { href: "/relogio-de-ponto", label: "Relógio de Ponto" },
  { href: "/catracas", label: "Catracas" },
  { href: "/softwares", label: "Softwares" },
  { href: "/suporte", label: "Suporte" },
  { href: "/contato", label: "Contato" },
  { href: "/sobre-nos", label: "Sobre" },
] as const;

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
  }
};