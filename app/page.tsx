import CategoryCollection from "./components/category-collection";
import FeaturesAndProducts from "./components/featured-products";
import SingleBanner from "./components/ui/banner";
import Carousel from "./components/ui/carousel";
import FullHeightGrid from "./components/ui/full-height-grid";

const gridItems = [
  {
    id: "shirts",
    title: "SHIRTS",
    subtitle: "New Collection",
    image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
    href: "/men/shirts",
    size: "half" as const,
  },
  {
    id: "trousers",
    title: "TROUSERS",
    subtitle: "Spring/Summer 2024",
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    href: "/men/trousers",
    size: "half" as const,
  },
];

const featuredProducts = [
  {
    id: "featured-1",
    name: "Classic Cotton T-Shirt",
    slug: "classic-cotton-t-shirt",
    description:
      "A comfortable classic cotton t-shirt perfect for everyday wear",
    shortDescription: "Classic comfort for everyday style",
    price: 4900,
    salePrice: 6900,
    sku: "CCT-001",
    stock: 100,
    rating: 4.8,
    images: [
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    ],
    categoryIds: ["clothing", "t-shirts"],
    tags: ["cotton", "classic", "casual"],
    featured: true,
    status: "active",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "featured-2",
    name: "Summer Dress",
    slug: "summer-dress",
    description: "A beautiful summer dress perfect for warm days",
    shortDescription: "Light and airy summer fashion",
    price: 8900,
    salePrice: 12900,
    sku: "SD-001",
    stock: 50,
    rating: 4.9,
    images: [
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    ],
    categoryIds: ["clothing", "dresses"],
    tags: ["summer", "dress", "casual"],
    featured: true,
    status: "active",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "featured-3",
    name: "Casual Sneakers",
    slug: "casual-sneakers",
    description: "Comfortable casual sneakers for everyday wear",
    shortDescription: "Everyday comfort sneakers",
    price: 9900,
    salePrice: 14900,
    sku: "CS-001",
    stock: 75,
    rating: 4.7,
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    ],
    categoryIds: ["shoes", "sneakers"],
    tags: ["casual", "sneakers", "comfortable"],
    featured: true,
    status: "active",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "featured-4",
    name: "Designer Handbag",
    slug: "designer-handbag",
    description: "A stylish designer handbag for any occasion",
    shortDescription: "Elegant designer accessory",
    price: 19900,
    salePrice: 29900,
    sku: "DH-001",
    stock: 25,
    rating: 4.8,
    images: [
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    ],
    categoryIds: ["accessories", "bags"],
    tags: ["designer", "handbag", "luxury"],
    featured: true,
    status: "active",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
];

export default function Home() {
  return (
    <>
      <Carousel />
      <SingleBanner />
      <div className="min-h-screen">
        <FullHeightGrid items={gridItems} />
      </div>
      <CategoryCollection />

      <FeaturesAndProducts products={featuredProducts} />
    </>
  );
}
