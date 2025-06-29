import CategoryGrid from "@/components/category-grid";

export const metadata = {
  title: "Men's Collection | Your Brand",
  description: "Explore our men's fashion categories",
};

const menCategories = [
  {
    id: "mens-t-shirts",
    name: "T-Shirts",
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    href: "/men/t-shirts",
    height: "short",
  },
  {
    id: "mens-shirts",
    name: "Shirts",
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    href: "/men/shirts",
    description: "Formal & Casual",
    height: "tall",
  },
  {
    id: "mens-jeans",
    name: "Jeans",
    image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
    href: "/men/jeans",
    height: "short",
  },
  {
    id: "mens-activewear",
    name: "Activewear",
    image: "https://images.pexels.com/photos/4662350/pexels-photo-4662350.jpeg",
    href: "/men/activewear",
    height: "tall",
  },
  {
    id: "mens-outerwear",
    name: "Jackets",
    image: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg",
    href: "/men/jackets",
    description: "Coats & Outerwear",
    height: "short",
  },
  {
    id: "mens-suits",
    name: "Suits",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    href: "/men/suits",
    height: "tall",
  },
  {
    id: "mens-accessories",
    name: "Accessories",
    image: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
    href: "/men/accessories",
    height: "short",
  },
  {
    id: "mens-accessories-2",
    name: "Accessories",
    image: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg",
    href: "/men/accessories",
    height: "short",
  },
  {
    id: "mens-featured",
    name: "Premium Collection",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
    href: "/men/premium",
    description: "Luxury fabrics & finishes",
    height: "short",
  },
];

export default function MenCollectionPage() {
  return (
    <CategoryGrid
      categories={menCategories}
      title="Men's Collection"
      subtitle="Trendy Styles for Every Occasion"
    />
  );
}
