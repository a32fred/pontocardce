// MobileMenu.tsx
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { APP_NAV_LINKS, NAV_ANIMATION_VARIANTS, NavLink } from "./navbar.config";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenuItem = ({ link, onClose }: { link: NavLink; onClose: () => void }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <Link
          href={link.href}
          onClick={onClose}
          className="text-white hover:text-[#125f0b] transition-colors py-2 text-sm flex-1"
        >
          {link.label}
        </Link>
        {link.subItems && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white p-2 text-lg"
          >
            {isExpanded ? "-" : "+"}
          </button>
        )}
      </div>
      
      {link.subItems && (
        <motion.div
          initial="closed"
          animate={isExpanded ? "open" : "closed"}
          variants={{
            closed: { 
              height: 0,
              opacity: 0,
              transition: { 
                duration: 0.2,
                when: "afterChildren" 
              } 
            },
            open: { 
              height: "auto",
              opacity: 1,
              transition: {
                duration: 0.3,
                when: "beforeChildren"
              }
            }
          }}
          className="overflow-hidden pl-4"
        >
          {link.subItems.map((subLink) => (
            <Link
              key={subLink.href}
              href={subLink.href}
              onClick={onClose}
              className="text-white hover:text-[#125f0b] transition-colors py-2 text-sm block"
            >
              {subLink.label}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        key="mobile-menu"
        initial="closed"
        animate="open"
        exit="closed"
        variants={{
          closed: { 
            opacity: 0,
            y: -20,
            transition: { 
              duration: 0.2,
              when: "afterChildren" 
            } 
          },
          open: { 
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 24,
              when: "beforeChildren"
            }
          }
        }}
        className="md:hidden fixed inset-x-0 top-16 bg-[#32313e]/90 backdrop-blur-sm shadow-lg flex flex-col gap-2 p-4"
      >
        {APP_NAV_LINKS.map((link) => (
          <MobileMenuItem key={link.href} link={link} onClose={onClose} />
        ))}
        
        <Link
          href="https://wa.me/8532262933"
          target="_blank"
          rel="noopener"
          className="bg-[#177f0f] text-white rounded-md px-4 py-2 hover:bg-[#125f0b] transition-colors text-center mt-2 text-sm"
        >
          Solicitar Orçamento
        </Link>
      </motion.div>
    )}
  </AnimatePresence>
);