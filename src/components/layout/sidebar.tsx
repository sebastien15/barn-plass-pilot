
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/authStore";
import { 
  Home, 
  FileText, 
  Users, 
  Settings, 
  BarChart3,
  Building,
  UserCheck,
  ClipboardList
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const { user } = useAuthStore();
  const location = useLocation();

  const getNavigationItems = () => {
    switch (user?.role) {
      case 'guardian':
        return [
          { icon: Home, label: 'Dashboard', href: '/guardian' },
          { icon: FileText, label: 'Mine søknader', href: '/guardian/applications' },
          { icon: ClipboardList, label: 'Tilbud', href: '/guardian/offers' },
        ];
      case 'case_manager':
        return [
          { icon: Home, label: 'Dashboard', href: '/case-manager' },
          { icon: FileText, label: 'Søknadskø', href: '/case-manager/queue' },
          { icon: BarChart3, label: 'Rapporter', href: '/case-manager/reports' },
          { icon: Settings, label: 'Innstillinger', href: '/case-manager/settings' },
        ];
      case 'kindergarten_staff':
        return [
          { icon: Home, label: 'Dashboard', href: '/staff' },
          { icon: Building, label: 'Kapasitet', href: '/staff/capacity' },
          { icon: ClipboardList, label: 'Tilbud', href: '/staff/offers' },
          { icon: Users, label: 'Barn', href: '/staff/children' },
        ];
      case 'admin':
        return [
          { icon: Home, label: 'Dashboard', href: '/admin' },
          { icon: Settings, label: 'Poengreglar', href: '/admin/scoring' },
          { icon: UserCheck, label: 'Brukarar', href: '/admin/users' },
          { icon: BarChart3, label: 'System', href: '/admin/system' },
        ];
      default:
        return [];
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white transition-transform",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold">Navigasjon</h2>
        </div>
        
        <nav className="flex-1 space-y-1 p-4">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            
            return (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
