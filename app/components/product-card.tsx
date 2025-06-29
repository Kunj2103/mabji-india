"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  // slug: string;
  price: string;
  originalPrice: string;
  image: string;
  rating: number;
  reviews: number;
}

interface Props {
  product: Product;
  index: number;
  basePath?: string;
}

export default function ProductCard({
  product,
  index,
  basePath = "/products",
}: Props) {
  const productUrl = `${basePath}/${product.id}`;

  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <Link href={productUrl}>
        <div className="relative overflow-hidden rounded-lg mb-4">
          <Image
            width={300}
            height={100}
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
              SALE
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity"
          >
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
              Quick View
            </button>
          </motion.div>
        </div>
      </Link>
      <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>

      <div className="flex items-center mb-2">
        <div className="flex text-yellow-400 text-sm">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < Math.floor(product.rating) ? "" : "text-gray-300"}
            >
              ★
            </span>
          ))}
        </div>
        <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold text-gray-900">{product.price}</span>
        <span className="text-gray-500 line-through">
          {product.originalPrice}
        </span>
      </div>
    </motion.div>
  );
}
