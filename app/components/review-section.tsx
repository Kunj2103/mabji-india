"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    date: "2024-01-15",
    rating: 5,
    review:
      "Absolutely love the quality and style! The delivery was super fast and the customer service was exceptional.",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Emily Chen",
    country: "Canada",
    date: "2024-01-12",
    rating: 4,
    review:
      "Great selection and beautiful designs. The fit was perfect and the material feels premium.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Maria Garcia",
    country: "Spain",
    date: "2024-01-10",
    rating: 5,
    review:
      "Outstanding experience from start to finish. Will definitely shop here again!",
    avatar:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "David Kim",
    country: "South Korea",
    date: "2024-01-08",
    rating: 4,
    review:
      "High-quality products with excellent attention to detail. Highly recommended!",
    avatar:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Real reviews from real customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.country}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < review.rating ? "fill-current" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{review.date}</span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {review.review}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/reviews">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              View All Reviews
              <ArrowRight className="ml-2" size={16} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
