
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Pages
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Team from "./pages/Team";
import ProductsCatalog from "./pages/ProductsCatalog";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Shop from "./pages/shop/Shop";
import ShopProducts from "./pages/shop/ShopProducts";
import Cart from "./pages/shop/Cart";
import Checkout from "./pages/shop/Checkout";
import ThankYou from "./pages/shop/ThankYou";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            {/* B2B Main Site Routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/chi-siamo" element={<About />} />
            <Route path="/il-team" element={<Team />} />
            <Route path="/catalogo-b2b" element={<ProductsCatalog />} />
            <Route path="/galleria" element={<Gallery />} />
            <Route path="/contatti" element={<Contact />} />
            
            {/* B2C Shop Routes */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/prodotti" element={<ShopProducts />} />
            <Route path="/shop/carrello" element={<Cart />} />
            <Route path="/shop/checkout" element={<Checkout />} />
            <Route path="/shop/grazie" element={<ThankYou />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/termini" element={<Terms />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
