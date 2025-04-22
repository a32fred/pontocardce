// DesktopNav.tsx
'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { APP_NAV_LINKS, NAV_ANIMATION_VARIANTS } from "./navbar.config";

export const DesktopNav = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      <nav className="hidden md:flex items-center gap-8 relative">

        {APP_NAV_LINKS.map((link) => (
          <div
            key={link.href}
            className="relative"
            onMouseEnter={() => setHoveredItem(link.href)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link
              href={link.href}
              className="text-white hover:text-[#125f0b] transition-colors text-sm font-medium relative py-2"
            >
              {link.label}
              {link.subItems && (
                <span className="ml-1 text-xs">▾</span>
              )}
            </Link>

            {link.subItems && (
              <motion.div
                initial="closed"
                animate={hoveredItem === link.href ? "open" : "closed"}
                variants={NAV_ANIMATION_VARIANTS.menu}
                className="absolute top-full left-0 bg-[#32313e]/90 backdrop-blur-sm shadow-lg rounded-lg p-4 min-w-[200px]"
              >
                <div className="flex flex-col gap-2">
                  {link.subItems.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className="text-white hover:text-[#125f0b] transition-colors text-sm whitespace-nowrap"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        ))}
        <Link
          href="https://wa.me/8532262933"
          target="_blank"
          rel="noopener"
          className="bg-[#177f0f] text-white px-4 py-2 rounded-md hover:bg-[#125f0b] transition-colors text-sm"
        >
          Solicitar Orçamento
        </Link>
      </nav>
    </>
  );
};