'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}
