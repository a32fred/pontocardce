"use client";

import { useState } from "react";
import Image from "next/image";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { MenuToggle } from "./MenuToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1e2b20] text-white shadow-md">
      {/* Top Info Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 text-sm bg-[#3c5b3b] text-gray-100 font-medium shadow-sm">
        <div className="flex items-center gap-6">
          <span>Email: comercial@pontocardce.com.br</span>
          <span>Telefone: (85) 3226-2933</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/pontocardce"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/558532262933"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/LOGO.png"
            alt="Logo"
            width={200}
            height={200}
            className="object-contain max-h-[200px] md:max-h-[200px]" // controla a altura visível
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <DesktopNav />
        </nav>
        {/* Mobile Toggle */}
        <div className="md:hidden">
          <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};
