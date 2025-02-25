import { motion, MotionProps } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
  motionProps?: MotionProps;
}

export const SectionHeader = ({
  title,
  description,
  center = false,
  className = "",
  motionProps,
}: SectionHeaderProps) => (
  <motion.div
    {...motionProps}
    className={`${center ? "text-center" : ""} ${className}`}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-transparent">
      {title}
    </h2>
    {description && (
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
    )}
  </motion.div>
);