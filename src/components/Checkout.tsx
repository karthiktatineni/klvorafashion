import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface OrderForm {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, totalPrice } = useCart();

  const [form, setForm] = useState<OrderForm>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    if (!form.name || !form.phone || !form.address || !form.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    const orderData = {
      ...form,
      total: totalPrice,
      items: items.map((item) => ({
        name: item.product.name,
        qty: item.quantity,
        price: item.product.price,
        size: item.size,
        color: item.color,
      })),
    };

    try {
      await fetch("/.netlify/functions/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
      toast.success("Order placed! Currently we only accept COD.");
      navigate("/"); // redirect to home or orders page
    } catch (err) {
      console.error(err);
      toast.error("Failed to place order. Try again!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {items.length === 0 ? (
        <p className="text-xl">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Cart Items */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Your Items</h2>
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}`}
                className="flex justify-between bg-gray-900 p-4 rounded-md"
              >
                <div>
                  <p className="font-semibold">{item.product.name}</p>
                  <p className="text-sm text-gray-300">
                    {item.size} / {item.color} x {item.quantity}
                  </p>
                </div>
                <span className="font-semibold">${item.product.price * item.quantity}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-4 text-lg">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-gray-900 p-6 rounded-md space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-gray-700"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-gray-700"
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              value={form.address}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-gray-700"
              rows={4}
            />

            <Button
              variant="champagne"
              className="w-full mt-4"
              size="lg"
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
            <p className="text-gray-400 text-sm mt-2">
              Right now we are accepting only Cash on Delivery (COD) due to resource constraints.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
