import ProductGrid from "./product-grid";

export default function FeaturesAndProducts({ products = [] }) {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Featured Products
        </h2>
        <p className="text-xl text-gray-600">Handpicked items just for you</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
