import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

interface ReviewsChartProps {
  title: string;
  data: ChartData;
  type: "line" | "bar";
  height?: number;
}

const ReviewsChart = ({
  title,
  data,
  type,
  height = 300,
}: ReviewsChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<any>(null);

  useEffect(() => {
    // This is a placeholder for chart implementation
    // In a real implementation, you would use a library like Chart.js
    const renderChart = async () => {
      if (chartRef.current) {
        try {
          // Dynamically import Chart.js if available
          // const { Chart } = await import('chart.js/auto');
          // if (chartInstance.current) {
          //   chartInstance.current.destroy();
          // }
          // chartInstance.current = new Chart(chartRef.current, {
          //   type,
          //   data,
          //   options: {
          //     responsive: true,
          //     maintainAspectRatio: false,
          //   },
          // });

          // For now, just render a placeholder
          const ctx = chartRef.current.getContext("2d");
          if (ctx) {
            ctx.clearRect(
              0,
              0,
              chartRef.current.width,
              chartRef.current.height,
            );
            ctx.font = "14px Arial";
            ctx.fillStyle = "#888";
            ctx.textAlign = "center";
            ctx.fillText(
              "Chart would render here with actual data",
              chartRef.current.width / 2,
              chartRef.current.height / 2,
            );
          }
        } catch (error) {
          console.error("Error rendering chart:", error);
        }
      }
    };

    renderChart();

    return () => {
      // Clean up chart instance if needed
      if (chartInstance.current) {
        // chartInstance.current.destroy();
      }
    };
  }, [data, type]);

  return (
    <Card className="border-none rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: `${height}px`, position: "relative" }}>
          <canvas ref={chartRef} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewsChart;
