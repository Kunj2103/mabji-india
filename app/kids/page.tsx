import CategoryGrid from "@/components/category-grid";

export const metadata = {
  title: "Kids' Collection | Your Brand",
  description: "Explore our kids' fashion categories",
};

const kidsCategories = [
  {
    id: "kids-boys-clothing",
    name: "Boys Clothing",
    image: "https://images.pexels.com/photos/5874584/pexels-photo-5874584.jpeg",
    href: "/kids/boys-clothing",
    description: "Ages 2-12 Years",
    height: "tall",
  },
  {
    id: "kids-girls-clothing",
    name: "Girls Clothing",
    image: "https://images.pexels.com/photos/5874586/pexels-photo-5874586.jpeg",
    href: "/kids/girls-clothing",
    description: "Ages 2-12 Years",
    height: "short",
  },
  {
    id: "kids-baby-essentials",
    name: "Baby Essentials",
    image: "https://images.pexels.com/photos/3551728/pexels-photo-3551728.jpeg",
    href: "/kids/baby-essentials",
    description: "Newborn to 24 Months",
    height: "tall",
  },
  {
    id: "kids-shoes",
    name: "Shoes",
    image: "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg",
    href: "/kids/shoes",
    description: "Sneakers & Sandals",
    height: "short",
  },
  {
    id: "kids-school-uniforms",
    name: "School Uniforms",
    image:
      "https://images.pexels.com/photos/159823/kids-girl-pencil-drawing-159823.jpeg",
    href: "/kids/school-uniforms",
    height: "short",
  },
  {
    id: "kids-seasonal",
    name: "Seasonal Wear",
    image: "https://images.pexels.com/photos/5874595/pexels-photo-5874595.jpeg",
    href: "/kids/seasonal",
    description: "Winter & Summer Collections",
    height: "tall",
  },
  {
    id: "kids-toys-accessories",
    name: "Toys & Accessories",
    image: "https://images.pexels.com/photos/1620765/pexels-photo-1620765.jpeg",
    href: "/kids/accessories",
    height: "tall",
  },
  {
    id: "kids-toys-accessories-2",
    name: "Toys & Accessories",
    image: "https://images.pexels.com/photos/1620765/pexels-photo-1620765.jpeg",
    href: "/kids/accessories",
    height: "short",
  },
  {
    id: "kids-featured",
    name: "New Arrivals",
    image: "https://images.pexels.com/photos/5067705/pexels-photo-5067705.jpeg",
    href: "/kids/new-arrivals",
    description: "Fresh styles for little ones",
    featured: true,
    height: "extra-tall",
  },
  {
    id: "kids-featured-2",
    name: "New Arrivals",
    image: "https://images.pexels.com/photos/5067705/pexels-photo-5067705.jpeg",
    href: "/kids/new-arrivals",
    description: "Fresh styles for little ones",
    height: "tall",
  },
  {
    id: "kids-boys-clothing-2",
    name: "Boys Clothing",
    image: "https://images.pexels.com/photos/5874584/pexels-photo-5874584.jpeg",
    href: "/kids/boys-clothing",
    description: "Ages 2-12 Years",
    height: "short",
  },
];

export default function KidsCollectionPage() {
  return (
    <CategoryGrid
      categories={kidsCategories}
      title="Kids' Collection"
      subtitle="Adorable Outfits for Little Ones"
    />
  );
}
