
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#8B2E2E]">404</h1>
          <h2 className="text-3xl font-bold text-[#1C1C1C] mt-4">Pagina non trovata</h2>
          <p className="text-gray-600 mt-4">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
        </div>
        
        <Link to="/">
          <Button className="bg-[#8B2E2E] hover:bg-[#A73939] text-white">
            <Home className="h-4 w-4 mr-2" />
            Torna alla Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
