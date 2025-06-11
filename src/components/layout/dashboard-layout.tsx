
import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar isOpen={sidebarOpen} />
      
      <main
        className={cn(
          "transition-all duration-300",
          sidebarOpen ? "ml-64" : "ml-0"
        )}
      >
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
