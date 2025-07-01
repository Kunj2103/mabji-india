"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ProductGrid from "@/components/product-grid";
import { products as mockProducts } from "@/lib/mock-data";
import SizeGuideModal from "@/components/ui/size-guide-modal";

// Mock product data
const product = {
  id: 1,
  name: "100% LINEN SLIM-FIT SHIRT",
  price: 5790.0,
  description:
    "Slim-fit shirt made of 100% linen fabric. Featuring a spread collar and long sleeves with buttoned cuffs. Button-up front.",
  details: [
    "Beige",
    "Article number: 37095138",
    "Composition: 100% linen",
    "Care: Machine wash up to 30ºC/86ºF gentle cycle",
    "Iron up to 150ºC/302ºF",
    "Dry clean tetrachloroethylene",
    "Do not tumble dry",
    "Do not bleach",
  ],
  colors: [
    { name: "Light Gray", value: "#D3D3D3" },
    { name: "Black", value: "#000000" },
    { name: "Brown", value: "#8B4513" },
    { name: "Beige", value: "#F5F5DC", selected: true },
  ],
  sizes: [
    { name: "XS", available: true },
    { name: "S", available: true },
    { name: "M", available: true },
    { name: "L", available: true },
    { name: "XL", available: true },
    { name: "XXL", available: true, lastFew: true },
  ],
  images: [
    "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37095138_99.jpg?ts=1695384514690&imwidth=422&imdensity=2",
    "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37095138_99_B.jpg?ts=1695384514690&imwidth=422&imdensity=2",
    "https://st.mngbcn.com/rcs/pics/static/T3/fotos/T3/37095138_99_R.jpg?ts=1695384514690&imwidth=422&imdensity=2",
    "https://st.mngbcn.com/rcs/pics/static/T3/fotos/T3/37095138_99_D0.jpg?ts=1695384514690&imwidth=422&imdensity=2",
  ],
};

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(3);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const addButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyHeader(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px", // Offset for the main header height
      }
    );

    if (addButtonRef.current) {
      observer.observe(addButtonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      {/* Sticky Header - Now positioned fixed relative to viewport */}
      <div
        className={`fixed left-0 right-0 z-50 bg-white transform transition-transform duration-300 ${
          showStickyHeader ? "block translate-y-[64px]" : "hidden translate-y-0"
        } ${!showStickyHeader ? "pointer-events-none" : ""}`}
        style={{ top: "0" }}
      >
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex items-center justify-between gap-8 py-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-16 h-20 relative flex-shrink-0">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-sm truncate">{product.name}</h2>
              <p className="text-sm">Rs. {product.price.toLocaleString()}</p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div
                  className="w-4 h-4 border border-gray-300 cursor-pointer"
                  style={{
                    backgroundColor: product.colors[selectedColor].value,
                  }}
                />
                <span className="text-sm text-gray-600">
                  {product.colors[selectedColor].name}
                </span>
              </button>
            </div>
            <div className="flex items-center gap-4 flex-1">
              <button className="bg-black text-white px-6 py-2 text-sm flex-1 cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-3 lg:max-h-[90vh] overflow-y-auto hide-scrollbar">
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="relative aspect-[3/4]">
                  <Image
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 30vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="lg:col-span-2">
            <div className="relative h-[calc(100vh-120px)]">
              {/* Main Content */}
              <div
                ref={mainContentRef}
                className="h-full overflow-y-auto hide-scrollbar"
              >
                <div className="space-y-8 pb-8">
                  {/* Product Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-xl">{product.name}</h1>
                      <p className="mt-2 text-lg">
                        Rs. {product.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {product.colors.map((color, index) => (
                          <button
                            key={color.name}
                            onClick={() => setSelectedColor(index)}
                            className={`w-4 h-4 rounded-full border ${
                              selectedColor === index
                                ? "ring-1 ring-black ring-offset-1"
                                : ""
                            }`}
                            style={{ backgroundColor: color.value }}
                            aria-label={color.name}
                          />
                        ))}
                      </div>
                      <span className="text-sm">
                        {product.colors[selectedColor].name}
                      </span>
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Select Size</span>
                      <button
                        onClick={() => setShowSizeGuide(true)}
                        className="text-sm underline cursor-pointer"
                      >
                        Size guide
                      </button>
                    </div>
                    <div className="h-[200px] overflow-y-auto hide-scrollbar border border-gray-200">
                      <div className="divide-y divide-gray-200">
                        {product.sizes.map((size) => (
                          <button
                            key={size.name}
                            onClick={() => setSelectedSize(size.name)}
                            className={`w-full py-3 text-sm flex items-center justify-between px-4 ${
                              selectedSize === size.name
                                ? "bg-black text-white"
                                : "hover:bg-gray-50"
                            } ${
                              !size.available
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                            }`}
                            disabled={!size.available}
                          >
                            <span>{size.name}</span>
                            {size.lastFew && (
                              <span className="text-xs text-red-500">
                                Last few items!
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div ref={addButtonRef} className="space-y-3">
                    <button className="w-full bg-black text-white py-3">
                      Add
                    </button>
                    <button className="w-full border border-black py-3">
                      Get the look
                    </button>
                  </div>

                  {/* Delivery Info */}
                  <div className="space-y-2">
                    <p className="text-sm">Free delivery to store</p>
                    <button className="text-sm underline">
                      See availability in store
                    </button>
                  </div>

                  {/* Description */}
                  <div className="space-y-6 pt-4 border-t">
                    <div>
                      <h3 className="text-sm font-medium mb-4">DESCRIPTION</h3>
                      <p className="text-sm text-gray-600">
                        {product.description}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-4">
                        REF. {product.details[1].split(": ")[1]}
                      </h3>
                    </div>
                  </div>

                  {/* Additional Links */}
                  <div className="space-y-3 pt-4 border-t">
                    <button className="text-sm underline block w-full text-left">
                      Composition, origin and care guidelines
                    </button>
                    <button className="text-sm underline block w-full text-left">
                      Deliveries and returns
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            You may also like
          </h2>
          <ProductGrid products={mockProducts} gridSize="4x4" />
        </div>
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={showSizeGuide}
        onClose={() => setShowSizeGuide(false)}
      />

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .hide-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #e5e7eb transparent;
        }
        .hide-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .hide-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .hide-scrollbar::-webkit-scrollbar-thumb {
          background-color: #e5e7eb;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
