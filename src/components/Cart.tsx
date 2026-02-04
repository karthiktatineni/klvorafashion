import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Navigate to checkout page with cart state
    navigate("/checkout", { state: { cartItems: items, totalPrice } });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="minimal" size="sm" className="relative">
          <ShoppingBag className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg bg-background border-border">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl text-foreground">Shopping Bag</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
            <p className="font-display text-xl text-foreground mb-2">Your bag is empty</p>
            <p className="font-body text-muted-foreground mb-6">
              Discover our latest collection and find something you love.
            </p>
            <SheetTrigger asChild>
              <Link to="/collections">
                <Button variant="hero">Browse Collections</Button>
              </Link>
            </SheetTrigger>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-6 space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="flex gap-4 pb-6 border-b border-border"
                >
                  <div className="w-24 h-32 bg-secondary overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-display text-foreground">{item.product.name}</h4>
                        <p className="font-body text-sm text-muted-foreground">
                          {item.size} / {item.color}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.size, item.color)}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-border">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.color,
                              item.quantity - 1
                            )
                          }
                          className="p-2 hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 font-body text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.color,
                              item.quantity + 1
                            )
                          }
                          className="p-2 hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="font-body text-foreground">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex justify-between font-body">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">${totalPrice}</span>
              </div>
              <p className="font-body text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout
              </p>
              {/* Updated Checkout Button */}
              <Button
                variant="champagne"
                className="w-full"
                size="lg"
                onClick={handleCheckout}
              >
                Checkout
              </Button>

              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </SheetTrigger>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
