"use client";

import ProductRow from "@/components/ui/rowlist";
import { motion } from "framer-motion";
import {
  Heart,
  Share2,
  Star,
  Truck,
  Shield,
  RefreshCw,
  Plus,
  Minus,
  Check,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock product data
const product = {
  id: 1,
  name: "Premium Cotton T-Shirt",
  price: "$49",
  originalPrice: "$69",
  rating: 4.8,
  reviews: 124,
  description:
    "Experience ultimate comfort with our premium cotton t-shirt. Made from 100% organic cotton, this versatile piece features a classic fit that's perfect for any occasion. The soft, breathable fabric ensures all-day comfort while maintaining its shape wash after wash.",
  features: [
    "100% Organic Cotton",
    "Pre-shrunk fabric",
    "Reinforced seams",
    "Machine washable",
    "Available in multiple colors",
  ],
  images: [
    "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/7679471/pexels-photo-7679471.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
    "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
  ],
  colors: [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Navy", value: "#000080" },
    { name: "Gray", value: "#808080" },
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
};

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link href="/women" className="hover:text-gray-900 transition-colors">
            women
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-xl shadow-sm p-6"
        >
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square overflow-hidden rounded-xl bg-gray-100 relative"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`transition-colors ${
                    isWishlisted ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  <Heart
                    size={20}
                    className={isWishlisted ? "fill-current" : ""}
                  />
                </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg transition-all duration-200 ${
                    selectedImage === index
                      ? "ring-2 ring-blue-500 ring-offset-2"
                      : "border border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl font-bold text-gray-900 mb-2"
              >
                {product.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-4 mb-4"
              >
                <div className="flex items-center space-x-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <span className="text-green-600 text-sm font-medium">
                  In Stock
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center space-x-4 mb-6"
              >
                <span className="text-3xl font-bold text-gray-900">
                  {product.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-semibold">
                  29% OFF
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-700"
            >
              {product.description}
            </motion.p>

            {/* Color Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <h3 className="text-lg font-semibold mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedColor === index
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  >
                    {selectedColor === index && (
                      <Check size={16} className="text-white" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Size Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">Size</h3>
                <button className="text-sm text-blue-600 hover:underline">
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border rounded-lg font-medium transition-all ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-50 text-blue-600 ring-2 ring-blue-200"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quantity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 font-medium w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  {quantity > 1 ? `${quantity} items` : `${quantity} item`}
                </span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-3 pt-6"
            >
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-colors ${
                    isAddedToCart
                      ? "bg-green-600 text-white"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {isAddedToCart ? (
                    <>
                      <Check size={18} />
                      Added to Cart
                    </>
                  ) : (
                    "Add to Cart"
                  )}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
                >
                  <Share2 size={20} />
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Buy Now
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200 mt-6"
            >
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                <div className="p-2 bg-blue-100 rounded-full mb-2">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-center">Free Shipping</p>
                <p className="text-xs text-gray-500 text-center">
                  On orders over $50
                </p>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                <div className="p-2 bg-green-100 rounded-full mb-2">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-center">
                  Secure Payment
                </p>
                <p className="text-xs text-gray-500 text-center">
                  100% protected
                </p>
              </div>
              <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                <div className="p-2 bg-purple-100 rounded-full mb-2">
                  <RefreshCw className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-center">Easy Returns</p>
                <p className="text-xs text-gray-500 text-center">
                  30-day policy
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Product Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl shadow-sm p-6"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
              Product Details
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
              Size & Fit
            </h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Size Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left py-3 px-4 font-medium">Size</th>
                      <th className="text-left py-3 px-4 font-medium">
                        Chest (in)
                      </th>
                      <th className="text-left py-3 px-4 font-medium">
                        Length (in)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">XS</td>
                      <td className="py-3 px-4">32-34</td>
                      <td className="py-3 px-4">26</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">S</td>
                      <td className="py-3 px-4">36-38</td>
                      <td className="py-3 px-4">27</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">M</td>
                      <td className="py-3 px-4">38-40</td>
                      <td className="py-3 px-4">28</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">L</td>
                      <td className="py-3 px-4">40-42</td>
                      <td className="py-3 px-4">29</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">XL</td>
                      <td className="py-3 px-4">42-44</td>
                      <td className="py-3 px-4">30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Fabric & Care</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>100% organic cotton</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Machine wash cold with similar colors</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Tumble dry low or line dry</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Iron on low heat if needed</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductRow
          title="You May Also Like"
          subtitle="Similar products you might be interested in"
        />
      </div>
    </div>
  );
}
