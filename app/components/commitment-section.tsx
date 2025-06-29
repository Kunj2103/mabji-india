"use client";

import { motion } from "framer-motion";

export default function CommitmentSection() {
  const features = [
    {
      title: "Free Shipping",
      description: "Free shipping on orders over $99",
    },
    {
      title: "Secure Payment",
      description: "100% secure payment methods",
    },
    {
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer service",
    },
  ];
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Commitment to Excellence
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl bg-blue-50 p-6 text-center hover:bg-blue-100 transition shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
