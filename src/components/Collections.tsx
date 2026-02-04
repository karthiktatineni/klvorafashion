import { Link } from "react-router-dom";
import collectionMens from "@/assets/collection-mens.jpg";
import collectionWomens from "@/assets/collection-womens.jpg";
import collectionKids from "@/assets/collection-kids.jpg";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Men's",
    subtitle: "Men's Collection",
    image: collectionMens,
    description: "Bold streetwear and refined styles for the modern man",
  },
  {
    id: 2,
    title: "Women's",
    subtitle: "Women's Collection",
    image: collectionWomens,
    description: "Elegant and trendy fashion for the contemporary woman",
  },
  {
    id: 3,
    title: "Kids",
    subtitle: "Kids Collection",
    image: collectionKids,
    description: "Fun and stylish clothing for the little fashionistas",
  },
];

const Collections = () => {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Featured
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              Collections
            </h2>
          </div>
          <p className="font-body text-muted-foreground max-w-md mt-6 lg:mt-0 leading-relaxed">
            Each collection tells a unique story, crafted with meticulous attention 
            to detail and an unwavering commitment to quality.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {collections.map((collection, index) => (
            <Link
              to="/collections"
              key={collection.id}
              className="group cursor-pointer block"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image Container */}
              <div className="image-reveal aspect-[3/4] mb-6 bg-secondary overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.description}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    {collection.subtitle}
                  </p>
                  <h3 className="font-display text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {collection.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
