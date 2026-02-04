import p1 from "@/assets/1.png";
import p2 from "@/assets/2.png";
import p3 from "@/assets/3.png";
import p4 from "@/assets/4.png";
import p5 from "@/assets/5.png";
import p6 from "@/assets/6.png";
import p7 from "@/assets/7.png";
import p8 from "@/assets/8.png";
import p9 from "@/assets/9.png";
import p10 from "@/assets/10.png";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  collection?: string;
  gender?: "mens" | "womens" | "kids" | "unisex";
}

export const products: Product[] = [
  {
    id: "klv-001",
    name: "Elite Streetwear Tee",
    category: "T-Shirts",
    price: 120,
    description: "Premium oversized tee from the KLVORA core collection. Features high-density graphic print and ultra-soft cotton.",
    details: ["100% Heavyweight Cotton", "Drop shoulder fit", "Breathable fabric", "Premium silk-screen print"],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Onyx", hex: "#000000" }],
    images: [p1],
    isNew: true,
    collection: "Streetwear",
    gender: "mens"
  },
  {
    id: "klv-002",
    name: "Urban Legend Hoodie",
    category: "Outerwear",
    price: 250,
    description: "A signature piece for the modern urbanite. This hoodie combines comfort with high-fashion aesthetics.",
    details: ["Double-lined hood", "Premium fleece interior", "Signature KLVORA embroidery", "Ribbed cuffs"],
    sizes: ["M", "L", "XL"],
    colors: [{ name: "Midnight", hex: "#121212" }],
    images: [p2],
    isBestSeller: true,
    collection: "Streetwear",
    gender: "unisex"
  },
  {
    id: "klv-003",
    name: "Vanguard Jacket",
    category: "Outerwear",
    price: 450,
    description: "Weather-resistant technical jacket designed for the elements without compromising on style.",
    details: ["Waterproof shell", "Internal utility pockets", "Adjustable hem", "Brushed metal hardware"],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Obsidian", hex: "#0a0a0a" }],
    images: [p3],
    isNew: true,
    collection: "Vanguard",
    gender: "mens"
  },
  {
    id: "klv-004",
    name: "Luxe Knit Sweater",
    category: "Knitwear",
    price: 320,
    description: "Finely woven cashmere-blend sweater. The ultimate layering piece for the sophisticated wardrobe.",
    details: ["Cashmere & Cotton blend", "Lightweight but warm", "Classic crew neck", "Tailored fit"],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Slate", hex: "#2f2f2f" }],
    images: [p4],
    collection: "Essentials",
    gender: "womens"
  },
  {
    id: "klv-005",
    name: "Signature Cargo Trousers",
    category: "Trousers",
    price: 280,
    description: "Reimagined military aesthetics with a luxury twist. Multiple utility pockets with a tapered silhouette.",
    details: ["Premium twill fabric", "Reinforced stitching", "Precision-cut pockets", "Adjustable waist tabs"],
    sizes: ["28", "30", "32", "34"],
    colors: [{ name: "Jet Black", hex: "#050505" }],
    images: [p5],
    isBestSeller: true,
    collection: "Streetwear",
    gender: "mens"
  },
  {
    id: "klv-006",
    name: "Zenith Oversized Shirt",
    category: "Shirts",
    price: 195,
    description: "Clean lines and a relaxed drape define this versatile button-down shirt. Perfect for high-low styling.",
    details: ["Premium poplin cotton", "Oversized silhouette", "Hidden button placket", "Cuffed sleeves"],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Frost", hex: "#f5f5f5" }],
    images: [p6],
    collection: "Vanguard",
    gender: "unisex"
  },
  {
    id: "klv-007",
    name: "Monarch Graphic Hoodie",
    category: "Outerwear",
    price: 275,
    description: "Limited edition graphic hoodie exploring themes of modern sovereignty through intricate artwork.",
    details: ["Heavyweight jersey", "Custom artistic print", "Kangaroo pocket", "Pre-shrunk"],
    sizes: ["M", "L", "XL", "XXL"],
    colors: [{ name: "Carbon", hex: "#1a1a1a" }],
    images: [p7],
    isNew: true,
    collection: "Streetwear",
    gender: "mens"
  },
  {
    id: "klv-008",
    name: "Apex Joggers",
    category: "Trousers",
    price: 210,
    description: "The pinnacle of athletic luxury. Tailored joggers designed for movement and style.",
    details: ["Interlock tech fabric", "Zipped pockets", "Reflective branding", "Slim fit"],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Ash", hex: "#3e3e3e" }],
    images: [p8],
    collection: "Essentials",
    gender: "unisex"
  },
  {
    id: "klv-009",
    name: "Regal Polo",
    category: "Shirts",
    price: 165,
    description: "Classic polo redefined with a modern cut and premium Pima cotton for an effortless look.",
    details: ["100% Pima Cotton", "Mother-of-pearl buttons", "Tonal logo embroidery", "Regular fit"],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "Night", hex: "#080808" }],
    images: [p9],
    isBestSeller: true,
    collection: "Essentials",
    gender: "mens"
  },
  {
    id: "klv-010",
    name: "Ethereal Maxi Dress",
    category: "Dresses",
    price: 395,
    description: "Flowing silhouette with a minimalist aesthetic. A statement of quiet luxury for evening wear.",
    details: ["Italian silk blend", "Backless design", "Invisible zipper", "Fully lined"],
    sizes: ["XS", "S", "M"],
    colors: [{ name: "Onyx", hex: "#000000" }],
    images: [p10],
    isNew: true,
    collection: "Evening",
    gender: "womens"
  }
];

export const collections = [
  {
    id: "mens",
    name: "Men's",
    subtitle: "Men's Collection",
    description: "Bold streetwear and refined styles for the modern man",
  },
  {
    id: "womens",
    name: "Women's",
    subtitle: "Women's Collection",
    description: "Elegant and trendy fashion for the contemporary woman",
  },
  {
    id: "kids",
    name: "Kids",
    subtitle: "Kids Collection",
    description: "Fun and stylish clothing for the little fashionistas",
  },
  {
    id: "streetwear",
    name: "Streetwear",
    subtitle: "Urban Fashion",
    description: "Bold graphic tees and statement pieces for the streets",
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
};

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.isNew);
};

export const getBestSellers = (): Product[] => {
  return products.filter((p) => p.isBestSeller);
};
