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
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
      {title}
    </h2>
    {description && (
      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
        {description}
      </p>
    )}
  </motion.div>
);