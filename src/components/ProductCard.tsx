import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group cursor-pointer block">
      <div className="image-reveal aspect-[3/4] mb-4 overflow-hidden relative rounded-lg border border-border bg-[hsl(0_0%_85%)]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain p-4"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 text-xs font-body tracking-widest uppercase rounded">
            New
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1 text-xs font-body tracking-widest uppercase rounded">
            Sale
          </span>
        )}
      </div>
      <div>
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
          {product.category}
        </p>
        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-body text-foreground">${product.price}</span>
          {product.originalPrice && (
            <span className="font-body text-muted-foreground line-through text-sm">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
