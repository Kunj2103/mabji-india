import ProductCard from "./product-card";

interface ProductGridProps {
  products: Array<{
    id: number;
    slug: string;
    name: string;
    price: string;
    originalPrice?: string;
    image: string;
    rating: number;
    reviews: number;
    isNew?: boolean;
  }>;
  viewMode?: "grid" | "list";
  basePath?: string;
}

export default function ProductGrid({
  products,
  viewMode = "grid",
  basePath = "/products",
}: ProductGridProps) {
  if (viewMode === "list") {
    return (
      <div className="space-y-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} basePath={basePath} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} basePath={basePath} />
      ))}
    </div>
  );
}
