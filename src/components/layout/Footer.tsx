
import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#8B2E2E] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HOP</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">House of Pulled</h3>
                <p className="text-gray-400 text-sm">Tutta l'arte del BBQ</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Dal 2021 portiamo la tradizione BBQ americana in Italia con prodotti artigianali di alta qualità.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Collegamenti Rapidi</h4>
            <ul className="space-y-2">
              <li><Link to="/chi-siamo" className="text-gray-400 hover:text-white transition-colors">Chi Siamo</Link></li>
              <li><Link to="/catalogo-b2b" className="text-gray-400 hover:text-white transition-colors">Catalogo B2B</Link></li>
              <li><Link to="/il-team" className="text-gray-400 hover:text-white transition-colors">Il Team</Link></li>
              <li><Link to="/galleria" className="text-gray-400 hover:text-white transition-colors">Galleria</Link></li>
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop Privati</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition-colors">Shop Home</Link></li>
              <li><Link to="/shop/prodotti" className="text-gray-400 hover:text-white transition-colors">Prodotti</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/termini" className="text-gray-400 hover:text-white transition-colors">Termini e Condizioni</Link></li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#8B2E2E]" />
                <span className="text-gray-400 text-sm">Via Giacomo Matteotti 17/C<br />24050 Grassobbio (BG)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#8B2E2E]" />
                <span className="text-gray-400 text-sm">+39 035 7176614</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#8B2E2E]" />
                <span className="text-gray-400 text-sm">info@houseofpulled.it</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-[#8B2E2E]" />
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">@houseofpulled</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 House of Pulled. Tutti i diritti riservati. | CE Certified | HACCP Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
