import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import tshirtMoon from "@/assets/tshirt-moon.png";
import tshirtDragon from "@/assets/tshirt-dragon.png";
import tshirtMouth from "@/assets/tshirt-mouth.png";
import tshirtStatue from "@/assets/tshirt-statue.png";
import tshirtSkull from "@/assets/tshirt-skull.png";
import tshirtSamurai from "@/assets/tshirt-samurai.png";
import tshirtDragon2 from "@/assets/tshirt-dragon2.png";
import tshirtDragon3 from "@/assets/tshirt-dragon3.png";
import tshirtAuthentic from "@/assets/tshirt-authentic.png";

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
    id: "moon-wolf-tee",
    name: "Moon Wolf Graphic Tee",
    category: "T-Shirts",
    price: 79,
    description: "Premium black t-shirt featuring a striking howling wolf silhouette against a full moon. Bold typography design for streetwear enthusiasts.",
    details: [
      "100% Premium Cotton",
      "Screen printed graphics",
      "Oversized fit",
      "Ribbed crew neck",
      "Made in Portugal"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Black", hex: "#0a0a0a" }],
    images: [tshirtMoon],
    isNew: true,
    collection: "Streetwear",
    gender: "mens"
  },
  {
    id: "golden-dragon-tee",
    name: "Golden Dragon Tee",
    category: "T-Shirts",
    price: 89,
    description: "Japanese-inspired golden dragon artwork on premium black cotton. Features traditional Asian design elements with modern streetwear aesthetics.",
    details: [
      "100% Premium Cotton",
      "Gold foil print details",
      "Oversized fit",
      "Reinforced collar",
      "Made in Japan"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Black", hex: "#0a0a0a" }],
    images: [tshirtDragon],
    isBestSeller: true,
    collection: "Streetwear",
    gender: "mens"
  },
  {
    id: "mouth-graphic-tee",
    name: "It's My Mouth Graphic Tee",
    category: "T-Shirts",
    price: 75,
    description: "Bold statement piece featuring artistic lip design. Perfect for those who want to stand out with edgy streetwear.",
    details: [
      "100% Cotton",
      "HD print quality",
      "Regular fit",
      "Pre-shrunk fabric",
      "Made in USA"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#0a0a0a" }],
    images: [tshirtMouth],
    isNew: true,
    collection: "Streetwear",
    gender: "womens"
  },
  {
    id: "statue-art-tee",
    name: "Statue Art Tee",
    category: "T-Shirts",
    price: 85,
    description: "Classical meets contemporary with this artistic statue design. Watercolor-inspired graphics on premium black fabric.",
    details: [
      "100% Organic Cotton",
      "Water-based ink print",
      "Relaxed fit",
      "Double-stitched seams",
      "Made in Italy"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Black", hex: "#0a0a0a" }],
    images: [tshirtStatue],
    collection: "Streetwear",
    gender: "womens"
  },
  {
    id: "skull-fire-tee",
    name: "Skull Fire 2024 Tee",
    category: "T-Shirts",
    price: 95,
    originalPrice: 120,
    description: "Intense blue flame skull design with bold typography. A statement piece for the fearless fashionista.",
    details: [
      "100% Premium Cotton",
      "Glow-in-dark elements",
      "Oversized fit",
      "Vintage wash finish",
      "Made in Portugal"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Black", hex: "#0a0a0a" }],
    images: [tshirtSkull],
    isBestSeller: true,
    collection: "Streetwear",
    gender: "mens"
  },
  {
    id: "samurai-tee",
    name: "Samurai Warrior Tee",
    category: "T-Shirts",
    price: 89,
    description: "Honor the warrior spirit with this traditional samurai design. Red sun backdrop with disciplined warrior silhouette.",
    details: [
      "100% Japanese Cotton",
      "Screen printed artwork",
      "Regular fit",
      "Soft hand feel",
      "Made in Japan"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Black", hex: "#0a0a0a" }],
    images: [tshirtSamurai],
    isNew: true,
    collection: "Streetwear",
    gender: "kids"
  },
  {
    id: "unstoppable-dragon-tee",
    name: "Unstoppable Dragon Tee",
    category: "T-Shirts",
    price: 99,
    description: "Fierce dragon head design with fiery orange accents. For those who embrace their inner power and boldness.",
    details: [
      "100% Premium Cotton",
      "Multi-color print",
      "Oversized fit",
      "Heavy weight fabric",
      "Made in Korea"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Black", hex: "#0a0a0a" }],
    images: [tshirtDragon2],
    isBestSeller: true,
    collection: "Streetwear",
    gender: "mens"
  },
  {
    id: "oriental-dragon-tee",
    name: "Oriental Dragon Tee",
    category: "T-Shirts",
    price: 85,
    description: "Intricate golden dragon with red Japanese calligraphy. A fusion of traditional art and modern streetwear.",
    details: [
      "100% Cotton",
      "Gold metallic print",
      "Regular fit",
      "Enzyme washed",
      "Made in Japan"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#0a0a0a" }],
    images: [tshirtDragon3],
    collection: "Streetwear",
    gender: "kids"
  },
  {
    id: "authentic-tee",
    name: "Authentic Statue Tee",
    category: "T-Shirts",
    price: 79,
    description: "Stay authentic with this motivational statue design. Bold orange gradient backdrop with classical sculpture.",
    details: [
      "100% Organic Cotton",
      "Gradient print technique",
      "Relaxed fit",
      "Soft touch finish",
      "Made in Portugal"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Black", hex: "#0a0a0a" }],
    images: [tshirtAuthentic],
    isNew: true,
    collection: "Streetwear",
    gender: "kids"
  },
  {
    id: "navy-polo",
    name: "Premium Navy Polo",
    category: "Shirts",
    price: 189,
    description: "Crafted from the finest Pima cotton, this polo shirt combines casual elegance with superior comfort.",
    details: ["100% Pima Cotton", "Mother-of-pearl buttons", "Ribbed collar and cuffs", "Slim fit", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Navy", hex: "#1e3a5f" }, { name: "White", hex: "#ffffff" }, { name: "Black", hex: "#0a0a0a" }],
    images: [product1],
    collection: "Essentials",
    gender: "mens"
  },
  {
    id: "oxford-shirt",
    name: "White Oxford Dress Shirt",
    category: "Shirts",
    price: 245,
    description: "The quintessential dress shirt, tailored to perfection.",
    details: ["Premium Oxford cotton", "Spread collar", "French cuffs", "Tailored fit", "Made in Italy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "White", hex: "#ffffff" }, { name: "Light Blue", hex: "#b3d4fc" }],
    images: [product2],
    isBestSeller: true,
    collection: "Tailored",
    gender: "mens"
  },
  {
    id: "leather-shoes",
    name: "Classic Leather Oxfords",
    category: "Footwear",
    price: 495,
    originalPrice: 595,
    description: "Hand-crafted leather oxfords featuring Goodyear welt construction.",
    details: ["Full-grain calfskin leather", "Goodyear welt construction", "Leather sole", "Blake stitched", "Made in Italy"],
    sizes: ["40", "41", "42", "43", "44", "45", "46"],
    colors: [{ name: "Black", hex: "#0a0a0a" }, { name: "Cognac", hex: "#8b4513" }],
    images: [product3],
    collection: "Footwear",
    gender: "mens"
  },
  {
    id: "wool-trousers",
    name: "Charcoal Wool Trousers",
    category: "Trousers",
    price: 345,
    description: "Impeccably tailored trousers in premium Italian wool.",
    details: ["100% Italian wool", "Half-canvas construction", "Side adjusters", "Slim fit", "Made in Italy"],
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    colors: [{ name: "Charcoal", hex: "#36454f" }, { name: "Navy", hex: "#1e3a5f" }, { name: "Black", hex: "#0a0a0a" }],
    images: [product4],
    collection: "Tailored",
    gender: "mens"
  },
  {
    id: "cashmere-sweater",
    name: "Camel Cashmere Sweater",
    category: "Knitwear",
    price: 425,
    description: "Luxuriously soft cashmere crew neck sweater.",
    details: ["100% Grade-A Mongolian cashmere", "12-gauge knit", "Ribbed cuffs and hem", "Regular fit", "Made in Scotland"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Camel", hex: "#c19a6b" }, { name: "Charcoal", hex: "#36454f" }, { name: "Navy", hex: "#1e3a5f" }],
    images: [product5],
    collection: "Knitwear",
    gender: "womens"
  },
  {
    id: "navy-blazer",
    name: "Navy Wool Blazer",
    category: "Outerwear",
    price: 695,
    description: "The cornerstone of any refined wardrobe.",
    details: ["Super 120s wool", "Half-canvas construction", "Horn buttons", "Patch pockets", "Made in Italy"],
    sizes: ["46", "48", "50", "52", "54", "56"],
    colors: [{ name: "Navy", hex: "#1e3a5f" }, { name: "Charcoal", hex: "#36454f" }],
    images: [product6],
    collection: "Tailored",
    gender: "womens"
  },
  {
    id: "leather-belt",
    name: "Brown Leather Belt",
    category: "Accessories",
    price: 175,
    description: "A refined leather belt featuring a brushed silver buckle.",
    details: ["Full-grain calfskin leather", "Brushed silver buckle", "35mm width", "Made in Italy"],
    sizes: ["85", "90", "95", "100", "105", "110"],
    colors: [{ name: "Brown", hex: "#5c4033" }, { name: "Black", hex: "#0a0a0a" }],
    images: [product7],
    collection: "Accessories",
    gender: "unisex"
  },
  {
    id: "essential-tee",
    name: "Essential Cotton T-Shirt",
    category: "T-Shirts",
    price: 95,
    description: "Elevated basics crafted from premium Supima cotton.",
    details: ["100% Supima cotton", "200gsm weight", "Reinforced collar", "Regular fit", "Made in Portugal"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [{ name: "Grey", hex: "#808080" }, { name: "White", hex: "#ffffff" }, { name: "Black", hex: "#0a0a0a" }, { name: "Navy", hex: "#1e3a5f" }],
    images: [product8],
    collection: "Essentials",
    gender: "unisex"
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
