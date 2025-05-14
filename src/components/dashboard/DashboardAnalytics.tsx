import { useEffect, useState } from "react";
import AnalyticsCard from "../analytics/AnalyticsCard";
import SentimentDistribution from "../analytics/SentimentDistribution";
import RatingDistribution from "../analytics/RatingDistribution";
import ReviewsChart from "../analytics/ReviewsChart";
import { BarChart3, Star, ArrowUpRight, TrendingUp } from "lucide-react";

interface AnalyticsData {
  totalReviews: number;
  averageRating: number;
  responseRate: number;
  newReviews: number;
  reviewTrend: number;
  sentimentDistribution: {
    positive: number;
    neutral: number;
    negative: number;
    total: number;
  };
  ratingDistribution: {
    [key: string]: number;
    total: number;
  };
  reviewsOverTime: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  };
}

const DashboardAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchAnalyticsData = async () => {
      try {
        // Mock data for development
        const data: AnalyticsData = {
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

        setAnalyticsData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
        setIsLoading(false);
      }
    };

    fetchAnalyticsData();
  }, []);

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-80 bg-gray-200 rounded"></div>
            <div className="h-80 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="p-6">
        <p>Failed to load analytics data. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-6">Dashboard Analytics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <AnalyticsCard
          title="Total Reviews"
          value={analyticsData.totalReviews}
          icon={<BarChart3 className="h-4 w-4" />}
          className="bg-dashboard1"
        />
        <AnalyticsCard
          title="Average Rating"
          value={analyticsData.averageRating.toFixed(1)}
          icon={<Star className="h-4 w-4 fill-yellow-400" />}
          className="bg-dashboard2"
        />
        <AnalyticsCard
          title="Response Rate"
          value={`${analyticsData.responseRate}%`}
          trend={{ value: 5, isPositive: true }}
          icon={<ArrowUpRight className="h-4 w-4" />}
          className="bg-dashboard1"
        />
        <AnalyticsCard
          title="New Reviews"
          value={analyticsData.newReviews}
          description={`+${analyticsData.reviewTrend}% from last period`}
          icon={<TrendingUp className="h-4 w-4" />}
          className="bg-dashboard3"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ReviewsChart data={analyticsData.reviewsOverTime} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SentimentDistribution data={analyticsData.sentimentDistribution} />
        <RatingDistribution data={analyticsData.ratingDistribution} />
      </div>
    </div>
  );
};

export default DashboardAnalytics;
