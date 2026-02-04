import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getNewArrivals, products } from "@/data/products";

const NewArrivalsPage = () => {
  const newArrivals = getNewArrivals();
  const featuredProducts = products.slice(0, 8);

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 opacity-0 animate-fade-up">
            Just In
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground opacity-0 animate-fade-up stagger-1">
            New Arrivals
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-xl mt-6 leading-relaxed opacity-0 animate-fade-up stagger-2">
            The latest additions to our collection. Fresh styles crafted with the same 
            unwavering commitment to quality.
          </p>
        </div>
      </section>

      {/* New Arrivals Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
            <div>
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Customer Favorites
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                Best Sellers
              </h2>
            </div>
            <p className="font-body text-muted-foreground max-w-md mt-4 lg:mt-0">
              Timeless pieces loved by gentlemen around the world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NewArrivalsPage;
