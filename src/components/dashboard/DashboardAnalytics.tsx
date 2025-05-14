import { useBusinessAnalytics } from "@/hooks/useBusinessProfiles";
import { useBusiness } from "@/context/BusinessContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnalyticsCard from "@/components/analytics/AnalyticsCard";
import ReviewsChart from "@/components/analytics/ReviewsChart";
import SentimentDistribution from "@/components/analytics/SentimentDistribution";
import RatingDistribution from "@/components/analytics/RatingDistribution";
import {
  ArrowUpRight,
  BarChart3,
  LineChart,
  RefreshCw,
  Star,
  TrendingUp,
} from "lucide-react";

const timeRanges = [
  { label: "7 Days", value: "week" },
  { label: "30 Days", value: "month" },
  { label: "90 Days", value: "quarter" },
  { label: "1 Year", value: "year" },
];

const DashboardAnalytics = () => {
  const { currentBusiness } = useBusiness();
  const [timeRange, setTimeRange] = useState("month");
  const {
    data: analytics,
    isLoading,
    refetch,
  } = useBusinessAnalytics(currentBusiness?.id || "", timeRange);

  // Mock data for development
  const mockData = {
    totalReviews: 240,
    averageRating: 4.2,
    responseRate: 87,
    newReviews: 24,
    reviewTrend: 12,
    sentimentDistribution: {
      positive: 180,
      neutral: 40,
      negative: 20,
      total: 240,
    },
    ratingDistribution: {
      "5": 120,
      "4": 80,
      "3": 20,
      "2": 15,
      "1": 5,
      total: 240,
    },
    reviewsOverTime: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Reviews",
          data: [30, 40, 35, 50, 45, 60],
          backgroundColor: "rgba(70, 72, 255, 0.2)",
          borderColor: "#4648FF",
          borderWidth: 2,
        },
      ],
    },
  };

  // Use mock data for now, would use actual analytics data in production
  const data = mockData;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-bold">Analytics Overview</h2>
        <div className="flex flex-wrap gap-2">
          {timeRanges.map((range) => (
            <Button
              key={range.value}
              variant={timeRange === range.value ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeRange(range.value)}
              className="text-xs"
            >
              {range.label}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => refetch()}
            className="text-xs"
          >
            <RefreshCw className="h-3 w-3 mr-1" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnalyticsCard
          title="Total Reviews"
          value={data.totalReviews}
          icon={<BarChart3 className="h-4 w-4" />}
          className="bg-dashboard1"
        />
        <AnalyticsCard
          title="Average Rating"
          value={data.averageRating.toFixed(1)}
          icon={<Star className="h-4 w-4 fill-yellow-400" />}
          className="bg-dashboard2"
        />
        <AnalyticsCard
          title="Response Rate"
          value={`${data.responseRate}%`}
          trend={{ value: 5, isPositive: true }}
          icon={<ArrowUpRight className="h-4 w-4" />}
          className="bg-dashboard1"
        />
        <AnalyticsCard
          title="New Reviews"
          value={data.newReviews}
          description={`+${data.reviewTrend}% from last period`}
          icon={<TrendingUp className="h-4 w-4" />}
          className="bg-dashboard3"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ReviewsChart
            title="Reviews Over Time"
            data={data.reviewsOverTime}
            type="line"
            height={300}
          />
        </div>
        <div className="space-y-6">
          <SentimentDistribution data={data.sentimentDistribution} />
          <RatingDistribution data={data.ratingDistribution} />
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalytics;
