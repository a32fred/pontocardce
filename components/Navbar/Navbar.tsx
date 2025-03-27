"use client";

// Navbar.tsx
import { useState } from "react";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { MenuToggle } from "./MenuToggle"; // Componente existente para abrir/fechar menu
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-[#32313e]/80 backdrop-blur-sm shadow-sm h-16">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          <Image
            src="/LOGO.png"
            alt="Controle de Acesso"
            width={200}
            height={40}
            priority
            className="w-[200px] h-[40px]"
          />
        </Link>
        <DesktopNav />

        <MenuToggle
          isOpen={isOpen}
          toggle={() => setIsOpen(!isOpen)}
          className="md:hidden"
        />

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
};
