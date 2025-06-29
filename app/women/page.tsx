import CategoryGrid from "@/components/category-grid";

export const metadata = {
  title: "Women's Collection | Your Brand",
  description: "Explore our women's fashion categories",
};

const womenCategories = [
  {
    id: "womens-dresses",
    name: "Dresses",
    image: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg",
    href: "/women/dresses",
    height: "tall",
  },
  {
    id: "womens-tops",
    name: "Tops",
    image: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg",
    href: "/women/tops",
    height: "short",
  },
  {
    id: "womens-jeans",
    name: "Jeans",
    image: "https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg",
    href: "/women/jeans",
    height: "short",
  },
  {
    id: "womens-activewear",
    name: "Activewear",
    image: "https://images.pexels.com/photos/4662351/pexels-photo-4662351.jpeg",
    href: "/women/activewear",
    description: "Yoga & Gym Wear",
    height: "tall",
  },
  {
    id: "womens-lingerie",
    name: "Lingerie",
    image: "https://images.pexels.com/photos/1485635/pexels-photo-1485635.jpeg",
    href: "/women/lingerie",
    height: "short",
  },
  {
    id: "womens-swimwear",
    name: "Swimwear",
    image: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg",
    href: "/women/swimwear",
    height: "tall",
  },
  {
    id: "womens-accessories",
    name: "Accessories",
    image: "https://images.pexels.com/photos/989960/pexels-photo-989960.jpeg",
    href: "/women/accessories",
    height: "short",
  },
  {
    id: "womens-accessories-2",
    name: "Accessories",
    image: "https://images.pexels.com/photos/989960/pexels-photo-989960.jpeg",
    href: "/women/accessories",
    height: "short",
  },
  {
    id: "womens-accessories-3",
    name: "Accessories",
    image: "https://images.pexels.com/photos/989960/pexels-photo-989960.jpeg",
    href: "/women/accessories",
    height: "tall",
  },
  {
    id: "womens-featured",
    name: "Designer Collection",
    image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
    href: "/women/designer",
    description: "Exclusive designer pieces",
    featured: true,
    height: "tall",
  },
];

export default function WomenCollectionPage() {
  return (
    <CategoryGrid
      categories={womenCategories}
      title="Women's Collection"
      subtitle="Elegant Styles for Every Season"
    />
  );
}
