import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface RatingData {
  [key: string]: number; // 1-5 stars as keys, count as values
  total: number;
}

interface RatingDistributionProps {
  data: RatingData;
}

const RatingDistribution = ({ data }: RatingDistributionProps) => {
  const ratings = [5, 4, 3, 2, 1];

  return (
    <Card className="border-none rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">
          Rating Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {ratings.map((rating) => {
            const count = data[rating.toString()] || 0;
            const percentage = Math.round((count / data.total) * 100) || 0;

            return (
              <div key={rating} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-1">{rating}</span>
                    <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">
                      {percentage}%
                    </span>
                    <span className="text-xs text-gray-500">({count})</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RatingDistribution;
