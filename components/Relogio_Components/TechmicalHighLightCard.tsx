import { motion } from "framer-motion";

export const TechnicalHighlightCard = ({
  icon,
  title,
  description,
  borderColor,
}: {
  icon: string;
  title: string;
  description: string;
  borderColor: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className={`group relative bg-gray-700/50 p-8 rounded-xl border-l-4 ${borderColor} overflow-hidden`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all" />
    <div className="w-20 h-20 bg-purple-900/20 rounded-xl mb-6 flex items-center justify-center text-3xl text-purple-400">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);