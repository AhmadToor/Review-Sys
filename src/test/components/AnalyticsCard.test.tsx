import { render, screen } from "@testing-library/react";
import AnalyticsCard from "@/components/analytics/AnalyticsCard";
import { describe, it, expect } from "vitest";
import { BarChart } from "lucide-react";

describe("AnalyticsCard component", () => {
  it("renders correctly with basic props", () => {
    render(<AnalyticsCard title="Test Card" value={100} />);

    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });

  it("renders with icon", () => {
    render(
      <AnalyticsCard
        title="Test Card"
        value={100}
        icon={<BarChart data-testid="chart-icon" />}
      />,
    );

    expect(screen.getByTestId("chart-icon")).toBeInTheDocument();
  });

  it("renders with description", () => {
    render(
      <AnalyticsCard
        title="Test Card"
        value={100}
        description="This is a description"
      />,
    );

    expect(screen.getByText("This is a description")).toBeInTheDocument();
  });

  it("renders with positive trend", () => {
    render(
      <AnalyticsCard
        title="Test Card"
        value={100}
        trend={{ value: 5, isPositive: true }}
      />,
    );

    const trendElement = screen.getByText("+5%");
    expect(trendElement).toBeInTheDocument();
    expect(trendElement.className).toContain("bg-green-100");
  });

  it("renders with negative trend", () => {
    render(
      <AnalyticsCard
        title="Test Card"
        value={100}
        trend={{ value: 5, isPositive: false }}
      />,
    );

    const trendElement = screen.getByText("5%");
    expect(trendElement).toBeInTheDocument();
    expect(trendElement.className).toContain("bg-red-100");
  });

  it("applies custom className", () => {
    render(
      <AnalyticsCard title="Test Card" value={100} className="custom-class" />,
    );

    const card = screen.getByText("Test Card").closest(".card");
    expect(card).toHaveClass("custom-class");
  });

  it("handles string values correctly", () => {
    render(<AnalyticsCard title="Rating" value="4.5" />);
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("renders both trend and description when provided", () => {
    render(
      <AnalyticsCard
        title="Test Card"
        value={100}
        trend={{ value: 10, isPositive: true }}
        description="Compared to last month"
      />,
    );

    expect(screen.getByText("+10%")).toBeInTheDocument();
    expect(screen.getByText("Compared to last month")).toBeInTheDocument();
  });
});
