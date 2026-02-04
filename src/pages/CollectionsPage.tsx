import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, collections } from "@/data/products";
import collectionMens from "@/assets/collection-mens.jpg";
import collectionWomens from "@/assets/collection-womens.jpg";
import collectionKids from "@/assets/collection-kids.jpg";
import { ArrowUpRight, SlidersHorizontal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const collectionImages: Record<string, string> = {
  mens: collectionMens,
  womens: collectionWomens,
  kids: collectionKids,
  streetwear: collectionMens,
};

const genderFilters = [
  { id: "all", name: "All" },
  { id: "mens", name: "Men's" },
  { id: "womens", name: "Women's" },
  { id: "kids", name: "Kids" },
];

const categoryFilters = [
  { id: "all", name: "All Categories" },
  { id: "T-Shirts", name: "T-Shirts" },
  { id: "Shirts", name: "Shirts" },
  { id: "Trousers", name: "Trousers" },
  { id: "Outerwear", name: "Outerwear" },
  { id: "Knitwear", name: "Knitwear" },
  { id: "Footwear", name: "Footwear" },
  { id: "Accessories", name: "Accessories" },
];

const sortOptions = [
  { id: "featured", name: "Featured" },
  { id: "price-low", name: "Price: Low to High" },
  { id: "price-high", name: "Price: High to Low" },
  { id: "newest", name: "Newest First" },
  { id: "name-az", name: "Name: A-Z" },
  { id: "name-za", name: "Name: Z-A" },
];

const CollectionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFilter = searchParams.get("filter") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [genderFilter, setGenderFilter] = useState(initialFilter);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (initialSearch) {
      const searchLower = initialSearch.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchLower) ||
          p.description.toLowerCase().includes(searchLower) ||
          p.category.toLowerCase().includes(searchLower)
      );
    }

    // Gender filter
    if (genderFilter !== "all") {
      filtered = filtered.filter(
        (p) => p.gender === genderFilter || p.gender === "unisex"
      );
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "name-az":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-za":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Featured - bestsellers first
        filtered.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    }

    return filtered;
  }, [genderFilter, categoryFilter, sortBy, initialSearch]);

  const handleGenderClick = (genderId: string) => {
    setGenderFilter(genderId);
    if (genderId === "all") {
      searchParams.delete("filter");
    } else {
      searchParams.set("filter", genderId);
    }
    setSearchParams(searchParams);
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 opacity-0 animate-fade-up">
            Explore
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground opacity-0 animate-fade-up stagger-1">
            Collections
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl mt-6 leading-relaxed opacity-0 animate-fade-up stagger-2">
            {initialSearch
              ? `Search results for "${initialSearch}"`
              : "Discover our carefully curated collections for men, women, and kids. Each piece tells a unique story of style and quality."}
          </p>
        </div>
      </section>

      {/* Featured Collections - Only show when no search */}
      {!initialSearch && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {collections.slice(0, 4).map((collection) => (
                <button
                  key={collection.id}
                  onClick={() => handleGenderClick(collection.id)}
                  className={`group relative aspect-[4/5] overflow-hidden text-left transition-all duration-300 ${
                    genderFilter === collection.id ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <img
                    src={collectionImages[collection.id] || collectionMens}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    <p className="font-body text-xs tracking-widest uppercase text-primary mb-2">
                      {collection.subtitle}
                    </p>
                    <h3 className="font-display text-3xl lg:text-4xl text-foreground mb-3">
                      {collection.name}
                    </h3>
                    <p className="font-body text-muted-foreground max-w-sm mb-6">
                      {collection.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all duration-300">
                      <span className="font-body text-sm tracking-widest uppercase">
                        {genderFilter === collection.id ? "Selected" : "Shop Now"}
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products with Filters */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Filters Header */}
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-2">
                  Shop All
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-foreground">
                  All Products
                </h2>
              </div>
              
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                
                <span className="text-sm text-muted-foreground">
                  {filteredAndSortedProducts.length} products
                </span>
              </div>
            </div>

            {/* Filter Tabs - Gender */}
            <div className="flex flex-wrap gap-2">
              {genderFilters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={genderFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleGenderClick(filter.id)}
                  className="transition-all"
                >
                  {filter.name}
                </Button>
              ))}
            </div>

            {/* Desktop Filters */}
            <div className={`flex flex-col lg:flex-row gap-4 ${showFilters ? "block" : "hidden lg:flex"}`}>
              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full lg:w-48 bg-background">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  {categoryFilters.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-48 bg-background">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  {sortOptions.map((sort) => (
                    <SelectItem key={sort.id} value={sort.id}>
                      {sort.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Clear Filters */}
              {(genderFilter !== "all" || categoryFilter !== "all" || initialSearch) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setGenderFilter("all");
                    setCategoryFilter("all");
                    setSortBy("featured");
                    setSearchParams({});
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear All
                </Button>
              )}
            </div>
          </div>

          {/* Products Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="font-display text-2xl text-foreground mb-2">No products found</p>
              <p className="font-body text-muted-foreground">
                Try adjusting your filters or search term
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setGenderFilter("all");
                  setCategoryFilter("all");
                  setSearchParams({});
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CollectionsPage;
