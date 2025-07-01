"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    title: "Summer Collection 2024",
    subtitle: "Discover the latest trends",
    image:
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Fresh styles for every occasion",
    image:
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop",
    cta: "Explore",
  },
  {
    id: 3,
    title: "Premium Quality",
    subtitle: "Luxury meets affordability",
    image:
      "https://images.pexels.com/photos/7679471/pexels-photo-7679471.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop",
    cta: "Discover",
  },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <div
      className="relative h-[calc(100svh-128px)] overflow-hidden"
      ref={emblaRef}
    >
      <div className="flex h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="h-full flex-[0_0_100%] min-w-0 relative"
          >
            <div
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <motion.h1
                    key={`title-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: selectedIndex === index ? 1 : 0,
                      y: selectedIndex === index ? 0 : 30,
                    }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    key={`subtitle-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: selectedIndex === index ? 1 : 0,
                      y: selectedIndex === index ? 0 : 30,
                    }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl mb-8"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.button
                    key={`cta-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: selectedIndex === index ? 1 : 0,
                      y: selectedIndex === index ? 0 : 30,
                    }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                  >
                    {slide.cta}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition z-10 backdrop-blur"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition z-10 backdrop-blur"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
