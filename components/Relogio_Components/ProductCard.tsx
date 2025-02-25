import { motion } from "framer-motion";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features?: string[];
}

export const ProductCard = ({ product }: { product: Product }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="group relative bg-gray-800 rounded-xl shadow-2xl hover:shadow-3xl transition-all overflow-hidden"
  >
    <div className="relative h-64">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
      <p className="text-gray-300 min-h-[60px]">{product.description}</p>
      {product.features && (
        <div className="mt-4 space-y-2">
          {product.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-green-400"
            >
              <span className="mr-2">✔️</span>
              {feature}
            </div>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);