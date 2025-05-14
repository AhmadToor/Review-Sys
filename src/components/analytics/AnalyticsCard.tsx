import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const AnalyticsCard = ({
  title,
  value,
  description,
  icon,
  trend,
  className,
}: AnalyticsCardProps) => {
  return (
    <Card className={cn("border-none rounded-3xl h-44", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm font-medium text-gray-500">
            {title}
          </CardTitle>
          {icon && <div className="text-gray-500">{icon}</div>}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        {(description || trend) && (
          <div className="flex items-center mt-2">
            {trend && (
              <div
                className={cn(
                  "text-xs font-medium mr-2 px-2 py-0.5 rounded",
                  trend.isPositive
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800",
                )}
              >
                {trend.isPositive ? "+" : ""}
                {trend.value}%
              </div>
            )}
            {description && (
              <p className="text-xs text-gray-500">{description}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
