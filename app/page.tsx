import CategoryCollection from "./components/category-collection";
import FeaturesAndProducts from "./components/featured-products";
import SingleBanner from "./components/ui/banner";
import Carousel from "./components/ui/carousel";
import FullHeightGrid from "./components/ui/full-height-grid";

const banners = [
  {
    imageSrc: "https://placehold.co/1200x400?text=Slide+1",
    alt: "Slide 1",
    href: "#slide1",
  },
  {
    imageSrc: "https://placehold.co/1200x400?text=Slide+2",
    alt: "Slide 2",
    href: "#slide2",
  },
  {
    imageSrc: "https://placehold.co/1200x400?text=Slide+3",
    alt: "Slide 3",
    href: "#slide3",
  },
];

const data = [
  {
    id: "prod-001",
    name: "Vintage Engagement Ring with Marquise Cut",
    slug: "vintage-engagement-ring-marquise-cut",
    description:
      "A timeless vintage-style engagement ring featuring a brilliant marquise cut lab-grown diamond.",
    shortDescription: "Marquise cut lab diamond on vintage band",
    price: 86900,
    salePrice: 64900,
    sku: "VINT-MARQ-001",
    stock: 10,
    rating: 4.9,
    images: [
      "https://placehold.co/400x400?text=Ring+Front+1",
      "https://placehold.co/400x400?text=Ring+Hover+1",
    ],
    categoryIds: ["engagement", "vintage"],
    tags: ["lab grown", "diamond", "vintage"],
    featured: true,
    status: "active",
    seoTitle: "Vintage Marquise Cut Engagement Ring | Lab Grown",
    seoDescription:
      "Shop vintage-inspired engagement rings with lab-grown marquise diamonds at great prices.",
    weight: 5.5,
    dimensions: {
      length: 5,
      width: 5,
      height: 3,
    },
    createdAt: new Date("2024-05-15T10:00:00.000Z"),
    updatedAt: new Date("2024-06-20T12:30:00.000Z"),
  },
  {
    id: "prod-002",
    name: "Chevron Wedding Band with Round Diamonds",
    slug: "chevron-wedding-band-round-diamonds",
    description:
      "Elegant chevron-shaped band studded with sparkling round lab-grown diamonds.",
    shortDescription: "Chevron band with round lab diamonds",
    price: 24900,
    salePrice: 18600,
    sku: "CHEV-RND-002",
    stock: 20,
    rating: 4.7,
    images: [
      "https://placehold.co/400x400?text=Ring+Front+2",
      "https://placehold.co/400x400?text=Ring+Hover+2",
    ],
    categoryIds: ["wedding-band"],
    tags: ["lab grown", "chevron", "diamond"],
    featured: false,
    status: "active",
    seoTitle: "Chevron Lab Diamond Wedding Band | Elegant Design",
    seoDescription:
      "Buy modern chevron-style wedding bands with lab-grown diamonds.",
    weight: 3.2,
    dimensions: {
      length: 4,
      width: 4,
      height: 2,
    },
    createdAt: new Date("2024-06-01T11:45:00.000Z"),
    updatedAt: new Date("2024-06-22T14:00:00.000Z"),
  },
  {
    id: "prod-003",
    name: "Floating Diamond Eternity Band",
    slug: "floating-diamond-eternity-band",
    description:
      "A beautiful band featuring floating bezel-set diamonds for a contemporary look.",
    shortDescription: "Floating lab-grown diamond band",
    price: 21200,
    salePrice: 15800,
    sku: "FLOAT-DIA-003",
    stock: 5,
    rating: 4.8,
    images: [
      "https://placehold.co/400x400?text=Ring+Front+3",
      "https://placehold.co/400x400?text=Ring+Hover+3",
    ],
    categoryIds: ["wedding-band", "eternity"],
    tags: ["floating", "lab grown", "eternity"],
    featured: true,
    status: "active",
    seoTitle: "Floating Lab Diamond Eternity Band | Modern Look",
    seoDescription:
      "Discover our floating eternity bands with lab-grown diamonds for a clean, stylish look.",
    weight: 4.1,
    dimensions: {
      length: 4.5,
      width: 4.5,
      height: 2.5,
    },
    createdAt: new Date("2024-06-10T09:00:00.000Z"),
    updatedAt: new Date("2024-06-25T16:15:00.000Z"),
  },
  {
    id: "prod-004",
    name: "Floating Diamond Eternity Band",
    slug: "floating-diamond-eternity-band",
    description:
      "A beautiful band featuring floating bezel-set diamonds for a contemporary look.",
    shortDescription: "Floating lab-grown diamond band",
    price: 21200,
    salePrice: 15800,
    sku: "FLOAT-DIA-003",
    stock: 5,
    rating: 4.8,
    images: [
      "https://placehold.co/400x400?text=Ring+Front+3",
      "https://placehold.co/400x400?text=Ring+Hover+3",
    ],
    categoryIds: ["wedding-band", "eternity"],
    tags: ["floating", "lab grown", "eternity"],
    featured: true,
    status: "active",
    seoTitle: "Floating Lab Diamond Eternity Band | Modern Look",
    seoDescription:
      "Discover our floating eternity bands with lab-grown diamonds for a clean, stylish look.",
    weight: 4.1,
    dimensions: {
      length: 4.5,
      width: 4.5,
      height: 2.5,
    },
    createdAt: new Date("2024-06-10T09:00:00.000Z"),
    updatedAt: new Date("2024-06-25T16:15:00.000Z"),
  },
  {
    id: "prod-005",
    name: "Floating Diamond Eternity Band",
    slug: "floating-diamond-eternity-band",
    description:
      "A beautiful band featuring floating bezel-set diamonds for a contemporary look.",
    shortDescription: "Floating lab-grown diamond band",
    price: 21200,
    salePrice: 15800,
    sku: "FLOAT-DIA-003",
    stock: 5,
    rating: 4.8,
    images: [
      "https://placehold.co/400x400?text=Ring+Front+3",
      "https://placehold.co/400x400?text=Ring+Hover+3",
    ],
    categoryIds: ["wedding-band", "eternity"],
    tags: ["floating", "lab grown", "eternity"],
    featured: true,
    status: "active",
    seoTitle: "Floating Lab Diamond Eternity Band | Modern Look",
    seoDescription:
      "Discover our floating eternity bands with lab-grown diamonds for a clean, stylish look.",
    weight: 4.1,
    dimensions: {
      length: 4.5,
      width: 4.5,
      height: 2.5,
    },
    createdAt: new Date("2024-06-10T09:00:00.000Z"),
    updatedAt: new Date("2024-06-25T16:15:00.000Z"),
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    price: "$49",
    originalPrice: "$69",
    image:
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Summer Dress",
    price: "$89",
    originalPrice: "$129",
    image:
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: "$99",
    originalPrice: "$149",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: "Designer Handbag",
    price: "$199",
    originalPrice: "$299",
    image:
      "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    rating: 4.8,
    reviews: 203,
  },
];

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
