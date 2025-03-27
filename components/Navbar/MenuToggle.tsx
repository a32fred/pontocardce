// components/MenuToggle.tsx
'use client';

import { motion } from 'framer-motion';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

type MenuToggleProps = {
  isOpen: boolean;
  toggle: () => void;
  className?: string;
};

export const MenuToggle = ({ isOpen, toggle, className }: MenuToggleProps) => (
  <button
    onClick={toggle}
    className={`${className} outline-none focus:outline-none`}
    aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
    aria-expanded={isOpen}
  >
    <svg width="23" height="23" viewBox="0 0 23 23" className="text-white">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'currentColor' },
          open: { d: 'M 3 16.5 L 17 2.5', stroke: 'currentColor' }
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346', stroke: 'currentColor' },
          open: { d: 'M 3 2.5 L 17 16.346', stroke: 'currentColor' }
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3 }}
      />
    </svg>
  </button>
);