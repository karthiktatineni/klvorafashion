import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import CollectionsPage from "./pages/CollectionsPage";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./pages/ProductPage";
import Checkout from "./components/Checkout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} /> {/* ← Add this */}
            <Route path="*" element={<NotFound />} />
          </Routes>

        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
