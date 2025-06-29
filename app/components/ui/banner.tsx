"use client";

import { motion } from "framer-motion";

export default function SingleBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="my-16"
    >
      <div
        className="h-[400px] bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1600&h=800&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-pink-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-4">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Exclusive Sale
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl mb-8"
            >
              Up to 70% off on selected items. Don&apos;t miss out!
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              Shop Sale
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
