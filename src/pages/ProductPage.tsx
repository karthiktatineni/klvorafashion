import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { getProductById, products } from "@/data/products";
import { ArrowLeft, Minus, Plus, Check } from "lucide-react";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const { toast } = useToast();

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="bg-background min-h-screen">
        <Navbar />
        <div className="pt-40 pb-24 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Product Not Found</h1>
          <p className="font-body text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link to="/collections">
            <Button variant="hero">Browse Collections</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "Choose your preferred size before adding to cart.",
        variant: "destructive",
      });
      return;
    }
    if (!selectedColor && product.colors.length > 0) {
      toast({
        title: "Please select a color",
        description: "Choose your preferred color before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor || product.colors[0]?.name || "Default");
    }

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your shopping bag.`,
    });
  };

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-28 lg:pt-32">
        <div className="container mx-auto px-6 lg:px-12">
          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 font-body text-sm tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collections
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Product Image */}
            <div className="aspect-[3/4] bg-secondary overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="lg:py-8">
              <p className="font-body text-sm tracking-widest uppercase text-primary mb-3">
                {product.category}
              </p>
              <h1 className="font-display text-4xl lg:text-5xl text-foreground mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-8">
                <span className="font-display text-2xl text-foreground">${product.price}</span>
                {product.originalPrice && (
                  <span className="font-body text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div className="mb-8">
                  <p className="font-body text-sm tracking-widest uppercase text-foreground mb-4">
                    Color: {selectedColor}
                  </p>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                          selectedColor === color.name
                            ? "border-primary"
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor === color.name && (
                          <Check
                            className={`w-4 h-4 ${
                              color.hex === "#ffffff" || color.hex === "#b3d4fc"
                                ? "text-foreground"
                                : "text-foreground"
                            }`}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              <div className="mb-8">
                <p className="font-body text-sm tracking-widest uppercase text-foreground mb-4">
                  Size
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[3rem] h-12 px-4 border font-body text-sm tracking-wide transition-all duration-300 ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-foreground hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="font-body text-sm tracking-widest uppercase text-foreground mb-4">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 font-body">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                variant="champagne"
                size="xl"
                className="w-full mb-6"
                onClick={handleAddToCart}
              >
                Add to Cart — ${product.price * quantity}
              </Button>

              {/* Product Details */}
              <div className="border-t border-border pt-8 mt-8">
                <h3 className="font-body text-sm tracking-widest uppercase text-foreground mb-4">
                  Details
                </h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="font-body text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default ProductPage;
