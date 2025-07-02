"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface GridItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  href: string;
  size?: "half" | "full";
}

interface FullHeightGridProps {
  items: GridItem[];
}

export default function FullHeightGrid({ items }: FullHeightGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`relative group overflow-hidden h-svh ${
            item.size === "full" ? "md:col-span-2" : ""
          }`}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="relative h-full w-full"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-center p-6">
              <div>
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                >
                  {item.title}
                </motion.h2>
                {item.subtitle && (
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-white/90"
                  >
                    {item.subtitle}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
