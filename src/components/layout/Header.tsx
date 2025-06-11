
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, User, Menu, X, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isShopSection = location.pathname.startsWith('/shop');

  const b2bNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Chi Siamo', href: '/chi-siamo' },
    { label: 'Catalogo B2B', href: '/catalogo-b2b' },
    { label: 'Il Team', href: '/il-team' },
    { label: 'Galleria', href: '/galleria' },
    { label: 'Contatti', href: '/contatti' },
  ];

  const b2cNavItems = [
    { label: 'Shop Home', href: '/shop' },
    { label: 'Prodotti', href: '/shop/prodotti' },
    { label: 'Carrello', href: '/shop/carrello' },
  ];

  const currentNavItems = isShopSection ? b2cNavItems : b2bNavItems;

  return (
    <header className="bg-white border-b-2 border-[#8B2E2E] sticky top-0 z-50">
      {/* Section Indicator Banner */}
      <div className={cn(
        "py-2 px-4 text-center text-sm font-medium text-white",
        isShopSection ? "bg-[#228B22]" : "bg-[#8B2E2E]"
      )}>
        {isShopSection ? (
          <div className="flex items-center justify-center gap-2">
            <User className="h-4 w-4" />
            <span>Shop per Privati - Ordina Online</span>
            <Link to="/" className="ml-4 underline hover:no-underline">
              Sei un'azienda? Scopri le soluzioni B2B
            </Link>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>Soluzioni Professionali per Ristoranti e Pub</span>
            <Link to="/shop" className="ml-4 underline hover:no-underline">
              Shop per Privati
            </Link>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#8B2E2E] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">HOP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1C1C1C]">House of Pulled</h1>
              <p className="text-sm text-gray-600">Tutta l'arte del BBQ</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {currentNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-[#1C1C1C] hover:text-[#8B2E2E] font-medium transition-colors",
                  location.pathname === item.href && "text-[#8B2E2E] border-b-2 border-[#8B2E2E]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {isShopSection ? (
              <Link to="/shop/carrello">
                <Button className="bg-[#228B22] hover:bg-[#32CD32] text-white">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Carrello
                </Button>
              </Link>
            ) : (
              <Link to="/contatti">
                <Button className="bg-[#8B2E2E] hover:bg-[#A73939] text-white">
                  Richiedi Catalogo B2B
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {currentNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block py-2 text-[#1C1C1C] hover:text-[#8B2E2E]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              {isShopSection ? (
                <Link to="/shop/carrello" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#228B22] hover:bg-[#32CD32] text-white">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Carrello
                  </Button>
                </Link>
              ) : (
                <Link to="/contatti" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-[#8B2E2E] hover:bg-[#A73939] text-white">
                    Richiedi Catalogo B2B
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
