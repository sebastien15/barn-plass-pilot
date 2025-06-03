
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case 'draft':
        return { variant: 'secondary' as const, text: 'Utkast' };
      case 'submitted':
        return { variant: 'default' as const, text: 'Innsendt' };
      case 'reviewed':
        return { variant: 'outline' as const, text: 'Vurdert' };
      case 'offered':
        return { variant: 'destructive' as const, text: 'Tilbud sendt' };
      case 'confirmed':
        return { variant: 'default' as const, text: 'Bekreftet', className: 'bg-green-500' };
      case 'declined':
        return { variant: 'destructive' as const, text: 'Avslått' };
      case 'pending':
        return { variant: 'secondary' as const, text: 'Venter' };
      case 'accepted':
        return { variant: 'default' as const, text: 'Godtatt', className: 'bg-green-500' };
      case 'p1':
        return { variant: 'destructive' as const, text: 'P1' };
      case 'p2':
        return { variant: 'secondary' as const, text: 'P2' };
      case 'p3':
        return { variant: 'outline' as const, text: 'P3' };
      default:
        return { variant: 'outline' as const, text: status };
    }
  };

  const config = getStatusConfig(status);
  
  return (
    <Badge 
      variant={config.variant} 
      className={cn(config.className, className)}
    >
      {config.text}
    </Badge>
  );
}
