"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Star, Filter, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const allReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    date: "2024-01-15",
    rating: 5,
    review:
      "Absolutely love the quality and style! The delivery was super fast and the customer service was exceptional. The fabric feels premium and the fit is perfect. I've already ordered two more in different colors.",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    helpful: 24,
  },
  {
    id: 2,
    name: "Emily Chen",
    country: "Canada",
    date: "2024-01-12",
    rating: 4,
    review:
      "Great selection and beautiful designs. The fit was perfect and the material feels premium. Only minor issue was the shipping took a bit longer than expected, but the quality makes up for it.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    helpful: 18,
  },
  {
    id: 3,
    name: "Maria Garcia",
    country: "Spain",
    date: "2024-01-10",
    rating: 5,
    review:
      "Outstanding experience from start to finish. Will definitely shop here again! The customer service team was incredibly helpful when I had questions about sizing. The product exceeded my expectations.",
    avatar:
      "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    helpful: 31,
  },
  {
    id: 4,
    name: "David Kim",
    country: "South Korea",
    date: "2024-01-08",
    rating: 4,
    review:
      "High-quality products with excellent attention to detail. Highly recommended! The packaging was also very thoughtful and eco-friendly. Great value for money.",
    avatar:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    helpful: 15,
  },
  {
    id: 5,
    name: "Lisa Anderson",
    country: "Australia",
    date: "2024-01-05",
    rating: 5,
    review:
      "Perfect fit and amazing quality! The colors are exactly as shown in the photos. Fast shipping to Australia and great customer support. This is now my go-to store for fashion.",
    avatar:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    helpful: 27,
  },
  {
    id: 6,
    name: "James Wilson",
    country: "United Kingdom",
    date: "2024-01-03",
    rating: 4,
    review:
      "Good quality clothing with modern designs. The sizing chart was accurate and the material is comfortable. Would recommend to friends and family.",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    helpful: 12,
  },
  {
    id: 7,
    name: "Sophie Martin",
    country: "France",
    date: "2024-01-01",
    rating: 5,
    review:
      "Exceptional service and beautiful products! The attention to detail in both the product and packaging shows they really care about their customers. Will definitely be back for more.",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    helpful: 33,
  },
  {
    id: 8,
    name: "Michael Brown",
    country: "Germany",
    date: "2023-12-28",
    rating: 4,
    review:
      "Very satisfied with my purchase. The quality is excellent and the style is exactly what I was looking for. Shipping was fast and the item was well-packaged.",
    avatar:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    verified: true,
    helpful: 19,
  },
];

const ratingStats = {
  average: 4.6,
  total: 847,
  breakdown: {
    5: 68,
    4: 22,
    3: 7,
    2: 2,
    1: 1,
  },
};

export default function ReviewsPage() {
  const [sortBy, setSortBy] = useState("newest");
  const [filterRating, setFilterRating] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredReviews = allReviews.filter((review) => {
    if (filterRating === "all") return true;
    return review.rating === parseInt(filterRating);
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "oldest":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "highest":
        return b.rating - a.rating;
      case "lowest":
        return a.rating - b.rating;
      case "helpful":
        return b.helpful - a.helpful;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Customer Reviews</h2>

              {/* Rating Overview */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold mr-2">
                    {ratingStats.average}
                  </span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < Math.floor(ratingStats.average)
                            ? "fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Based on {ratingStats.total} reviews
                </p>

                {/* Rating Breakdown */}
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center text-sm">
                      <span className="w-3">{rating}</span>
                      <Star
                        size={12}
                        className="text-yellow-400 fill-current mx-1"
                      />
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{
                            width: `${
                              ratingStats.breakdown[
                                rating as keyof typeof ratingStats.breakdown
                              ]
                            }%`,
                          }}
                        />
                      </div>
                      <span className="text-gray-600">
                        {
                          ratingStats.breakdown[
                            rating as keyof typeof ratingStats.breakdown
                          ]
                        }
                        %
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Filter by Rating
                  </label>
                  <select
                    value={filterRating}
                    onChange={(e) => setFilterRating(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Ratings</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sort by
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="highest">Highest Rating</option>
                    <option value="lowest">Lowest Rating</option>
                    <option value="helpful">Most Helpful</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">
                All Reviews ({sortedReviews.length})
              </h1>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center px-4 py-2 border border-gray-300 rounded-lg"
              >
                <Filter size={16} className="mr-2" />
                Filters
                <ChevronDown size={16} className="ml-2" />
              </button>
            </div>

            <div className="space-y-6">
              {sortedReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900">
                              {review.name}
                            </h4>
                            {review.verified && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {review.country}
                          </p>
                        </div>
                        <span className="text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>

                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < review.rating
                                  ? "fill-current"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-4">
                        {review.review}
                      </p>

                      <div className="flex items-center justify-between">
                        <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                          <span className="mr-1">👍</span>
                          Helpful ({review.helpful})
                        </button>
                        <button className="text-sm text-gray-600 hover:text-gray-900">
                          Report
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-8"
            >
              <button className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Load More Reviews
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
