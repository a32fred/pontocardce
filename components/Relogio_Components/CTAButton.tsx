import { motion } from "framer-motion";
import Link from "next/link";

interface CTAButtonProps {
  label: string;
  href?: string;
  primary?: boolean;
  onClick?: () => void;
}

export const CTAButton = ({
  label,
  href,
  primary = false,
  onClick,
}: CTAButtonProps) => {
  const buttonClass = primary
    ? "bg-green-600 hover:bg-green-700 text-white"
    : "border-2 border-green-600 text-green-400 hover:bg-green-600/10";

  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={`inline-block px-8 py-3 rounded-lg text-lg font-semibold transition-all ${buttonClass}`}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};