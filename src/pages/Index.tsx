
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  
  useEffect(() => {
    if (isAuthenticated) {
      // User is already authenticated, redirect based on role will happen in App.tsx
      navigate('/');
    } else {
      // Redirect to login
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Oslo Kommune Barnehage</h1>
        <p className="text-xl text-gray-600">Opptak og plasseringsadministrasjon</p>
        <div className="mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-500 mt-2">Laster inn...</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
