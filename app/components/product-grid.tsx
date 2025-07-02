import ProductCard from "./product-card";
import { Product } from "@/lib/types";

interface ProductGridProps {
  products: Product[];
  basePath?: string;
}

export default function ProductGrid({
  products,
  basePath = "/products",
}: ProductGridProps) {
  // Define grid columns based on grid size
  const gridCols = {
    "2x2": "grid-cols-1 sm:grid-cols-2",
    "4x4": "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    "6x6": "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
  }["4x4"];

  // Limit number of products based on grid size
  const maxProducts = {
    "2x2": 4,
    "4x4": 16,
    "6x6": 36,
  }["4x4"];

  const displayProducts = products.slice(0, maxProducts);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-1`}
    >
      {displayProducts.map((product, index) => (
        <ProductCard
          key={`${product.id}-${index}`}
          product={product}
          basePath={basePath}
          index={index}
        />
      ))}
    </div>
  );
}
