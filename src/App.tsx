
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

// Pages
import Login from "./pages/Login";
import GuardianDashboard from "./pages/guardian/GuardianDashboard";
import GuardianApplications from "./pages/guardian/GuardianApplications";
import CaseManagerDashboard from "./pages/case-manager/CaseManagerDashboard";
import ApplicationQueue from "./pages/case-manager/ApplicationQueue";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route Component
function ProtectedRoute({ children, requiredRole }: { children: React.ReactNode; requiredRole?: string }) {
  const { isAuthenticated, user } = useAuthStore();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  return <DashboardLayout>{children}</DashboardLayout>;
}

// Role-based dashboard redirect
function DashboardRedirect() {
  const { user } = useAuthStore();
  
  switch (user?.role) {
    case 'guardian':
      return <Navigate to="/guardian" replace />;
    case 'case_manager':
      return <Navigate to="/case-manager" replace />;
    case 'kindergarten_staff':
      return <Navigate to="/staff" replace />;
    case 'admin':
      return <Navigate to="/admin" replace />;
    default:
      return <Navigate to="/login" replace />;
  }
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<DashboardRedirect />} />
          
          {/* Guardian Routes */}
          <Route path="/guardian" element={
            <ProtectedRoute requiredRole="guardian">
              <GuardianDashboard />
            </ProtectedRoute>
          } />
          <Route path="/guardian/applications" element={
            <ProtectedRoute requiredRole="guardian">
              <GuardianApplications />
            </ProtectedRoute>
          } />
          <Route path="/guardian/offers" element={
            <ProtectedRoute requiredRole="guardian">
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Mine tilbud</h1>
                <p className="text-gray-600">Denne siden er under utvikling</p>
              </div>
            </ProtectedRoute>
          } />
          
          {/* Case Manager Routes */}
          <Route path="/case-manager" element={
            <ProtectedRoute requiredRole="case_manager">
              <CaseManagerDashboard />
            </ProtectedRoute>
          } />
          <Route path="/case-manager/queue" element={
            <ProtectedRoute requiredRole="case_manager">
              <ApplicationQueue />
            </ProtectedRoute>
          } />
          <Route path="/case-manager/reports" element={
            <ProtectedRoute requiredRole="case_manager">
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Rapporter</h1>
                <p className="text-gray-600">Denne siden er under utvikling</p>
              </div>
            </ProtectedRoute>
          } />
          <Route path="/case-manager/settings" element={
            <ProtectedRoute requiredRole="case_manager">
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Innstillinger</h1>
                <p className="text-gray-600">Denne siden er under utvikling</p>
              </div>
            </ProtectedRoute>
          } />
          
          {/* Staff Routes */}
          <Route path="/staff" element={
            <ProtectedRoute requiredRole="kindergarten_staff">
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Barnehage Dashboard</h1>
                <p className="text-gray-600">Denne siden er under utvikling</p>
              </div>
            </ProtectedRoute>
          } />
          <Route path="/staff/capacity" element={
            <ProtectedRoute requiredRole="kindergarten_staff">
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Kapasitetsstyring</h1>
                <p className="text-gray-600">Denne siden er under utvikling</p>
              </div>
            </ProtectedRoute>
          } />
          <Route path="/staff/offers" element={
            <ProtectedRoute requiredRole="kindergarten_staff">
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Tilbudshåndtering</h1>
                <p className="text-gray-600">Denne siden er under utvikling</p>
              </div>
            </ProtectedRoute>
          } />
          <Route path="/staff/children" element={
            <ProtectedRoute requiredRole="kindergarten_staff">
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Barn oversikt</h1>
                <p className="text-gray-600">Denne siden er under utvikling</p>
              </div>
            </ProtectedRoute>
          } />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute requiredRole="admin">
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Administrator Dashboard</h1>
                <p className="text-gray-600">Denne siden er under utvikling</p>
              </div>
            </ProtectedRoute>
          } />
          <Route path="/admin/scoring" element={
            <ProtectedRoute requiredRole="admin">
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Poengreglar</h1>
                <p className="text-gray-600">Denne siden er under utvikling</p>
              </div>
            </ProtectedRoute>
          } />
          <Route path="/admin/users" element={
            <ProtectedRoute requiredRole="admin">
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Brukerstyring</h1>
                <p className="text-gray-600">Denne siden er under utvikling</p>
              </div>
            </ProtectedRoute>
          } />
          <Route path="/admin/system" element={
            <ProtectedRoute requiredRole="admin">
              <div className="p-8 text-center">
                <h1 className="text-2xl font-bold mb-4">Systemovervåking</h1>
                <p className="text-gray-600">Denne siden er under utvikling</p>
              </div>
            </ProtectedRoute>
          } />
          
          <Route path="/unauthorized" element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">403</h1>
                <p className="text-xl text-gray-600 mb-4">Ingen tilgang</p>
                <p className="text-gray-500">Du har ikke tilgang til denne siden.</p>
              </div>
            </div>
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
