import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react";
import { ReactNode } from "react";

interface AnalyticsCardProps {
  title: string;
  value: number | string;
  icon?: ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const AnalyticsCard = ({
  title,
  value,
  icon,
  description,
  trend,
  className,
}: AnalyticsCardProps) => {
  return (
    <Card
      className={cn(
        "card overflow-hidden rounded-xl border-none shadow-sm",
        className,
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          {icon && <div className="rounded-md bg-primary/10 p-2">{icon}</div>}
        </div>
        <div className="mt-4 flex items-baseline">
          <h3 className="text-2xl font-semibold">{value}</h3>
          {trend && (
            <div
              className={cn(
                "ml-2 flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                trend.isPositive
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800",
              )}
            >
              {trend.isPositive ? (
                <ArrowUp className="mr-1 h-3 w-3" />
              ) : (
                <ArrowDown className="mr-1 h-3 w-3" />
              )}
              {trend.isPositive ? "+" : ""}
              {trend.value}%
            </div>
          )}
        </div>
        {description && (
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
