import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Angry, Meh, Smile } from "lucide-react";

interface SentimentData {
  positive: number;
  neutral: number;
  negative: number;
  total: number;
}

interface SentimentDistributionProps {
  data: SentimentData;
}

const SentimentDistribution = ({ data }: SentimentDistributionProps) => {
  const positivePercentage =
    Math.round((data.positive / data.total) * 100) || 0;
  const neutralPercentage = Math.round((data.neutral / data.total) * 100) || 0;
  const negativePercentage =
    Math.round((data.negative / data.total) * 100) || 0;

  return (
    <Card className="border-none rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">
          Sentiment Distribution
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Smile className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm font-medium">Positive</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">
                {positivePercentage}%
              </span>
              <span className="text-xs text-gray-500">({data.positive})</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: `${positivePercentage}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Meh className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm font-medium">Neutral</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">
                {neutralPercentage}%
              </span>
              <span className="text-xs text-gray-500">({data.neutral})</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-yellow-500 h-2.5 rounded-full"
              style={{ width: `${neutralPercentage}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Angry className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-sm font-medium">Negative</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">
                {negativePercentage}%
              </span>
              <span className="text-xs text-gray-500">({data.negative})</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-red-500 h-2.5 rounded-full"
              style={{ width: `${negativePercentage}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimentDistribution;
