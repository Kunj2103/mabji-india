"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

interface Props {
  product: {
    id: string | number;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    slug?: string;
  };
  basePath?: string;
}

export default function ProductCard({
  product,
  basePath = "/products",
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <Link href={`${basePath}/${product.id}`} className="block">
        <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100 relative">
          <div className="h-full" ref={emblaRef}>
            <div className="flex h-full touch-pan-y">
              <div className="relative flex-[0_0_100%] min-w-0">
                <Image
                  src={product.image}
                  alt={`${product.name}`}
                  fill
                  className="object-cover object-center transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={true}
                />
              </div>
            </div>
          </div>

          {product.originalPrice && (
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs font-medium rounded z-10">
              Sale
            </div>
          )}
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="text-sm text-gray-700">{product.name}</h3>
          <div className="text-sm text-gray-500">
            {product.originalPrice ? (
              <>
                <span className="line-through">
                  Rs. {product.originalPrice.toLocaleString()}
                </span>
                <span className="ml-2 text-red-500">
                  Rs. {product.price.toLocaleString()}
                </span>
              </>
            ) : (
              <span>Rs. {product.price.toLocaleString()}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
