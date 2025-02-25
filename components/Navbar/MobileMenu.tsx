

import { motion } from "framer-motion";
import Link from "next/link";
import { APP_NAV_LINKS, NAV_ANIMATION_VARIANTS } from "./navbar.config";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => (
  <motion.div
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    exit="closed"
    variants={NAV_ANIMATION_VARIANTS.menu}
    className="md:hidden bg-[#32313e]/80 backdrop-blur-sm shadow-lg flex flex-col gap-4 p-6"
  >
    {APP_NAV_LINKS.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={onClose}
        className="text-white hover:text-[#125f0b] transition-colors py-2 text-sm"
      >
        {link.label}
      </Link>
    ))}
    
    <Link
      href="https://wa.me/8532262933"
      target="_blank"
      rel="noopener"
      className="bg-[#177f0f] text-white rounded-md px-4 py-2 hover:bg-[#125f0b] transition-colors text-center"
    >
      Solicitar Demonstração
    </Link>
  </motion.div>
);