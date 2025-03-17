"use client";

import { useState, useEffect } from "react"; // Adicione useEffect
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { APP_NAV_LINKS, NAV_ANIMATION_VARIANTS } from "./navbar.config";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Novo estado

  // Garante que animações só rodem no client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-[#202220]/80 backdrop-blur-sm fixed w-full top-0 z-50 shadow-md">
        {/* Layout estático para SSR */}
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/LOGO.png"
              alt="Controle de Acesso"
              width={160}
              height={32}
              priority
            />
          </Link>
          <div className="md:hidden opacity-0">Menu</div>
        </nav>
      </div>
    );
  }

  return (
    <div className="bg-[#202220]/80 backdrop-blur-sm fixed w-full top-0 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/LOGO.png"
            alt="Controle de Acesso"
            width={250}
            height={70}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {APP_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-[#125f0b] transition-colors text-sm"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="https://wa.me/8532262933"
            target="_blank"
            rel="noopener"
            className="bg-[#177f0f] text-white px-4 py-2 rounded-md hover:bg-[#125f0b] transition-colors text-sm"
          >
            Solicitar Demonstração
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          animate={isMenuOpen ? "open" : "closed"}
          variants={NAV_ANIMATION_VARIANTS.icon}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <motion.path
              stroke="currentColor"
              strokeWidth="2"
              d={isMenuOpen ? "M6 6L18 18" : "M4 6H20"}
            />
            <motion.path
              stroke="currentColor"
              strokeWidth="2"
              d="M4 12H20"
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
            />
            <motion.path
              stroke="currentColor"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6" : "M4 18H20"}
            />
          </svg>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};