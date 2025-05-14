import { renderHook, waitFor } from "@testing-library/react";
import {
  useReviews,
  useRespondToReview,
  useGenerateAiResponse,
} from "@/hooks/useReviews";
import {
  getReviewsRequest,
  respondToReviewRequest,
  generateAiResponseRequest,
} from "@/services/reviewServices";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the services
vi.mock("@/services/reviewServices", () => ({
  getReviewsRequest: vi.fn(),
  respondToReviewRequest: vi.fn(),
  generateAiResponseRequest: vi.fn(),
}));

// Create a wrapper with QueryClientProvider
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useReviews", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should call getReviewsRequest with no filters", async () => {
    const mockReviews = [{ id: "1", fullname: "John Doe" }];
    (getReviewsRequest as any).mockResolvedValue(mockReviews);

    const { result } = renderHook(() => useReviews(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(getReviewsRequest).toHaveBeenCalledWith(undefined);
    expect(result.current.data).toEqual(mockReviews);
  });

  it("should call getReviewsRequest with filters", async () => {
    const mockReviews = [{ id: "1", fullname: "John Doe" }];
    (getReviewsRequest as any).mockResolvedValue(mockReviews);

    const filters = { rating: 5 };
    const { result } = renderHook(() => useReviews(filters), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(getReviewsRequest).toHaveBeenCalledWith(filters);
    expect(result.current.data).toEqual(mockReviews);
  });
});

describe("useRespondToReview", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should call respondToReviewRequest with correct parameters", async () => {
    const mockResponse = { success: true };
    (respondToReviewRequest as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useRespondToReview(), {
      wrapper: createWrapper(),
    });

    result.current.mutate({
      reviewId: "1",
      response: "Thank you for your feedback",
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(respondToReviewRequest).toHaveBeenCalledWith(
      "1",
      "Thank you for your feedback",
    );
    expect(result.current.data).toEqual(mockResponse);
  });
});

describe("useGenerateAiResponse", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should call generateAiResponseRequest with correct parameters", async () => {
    const mockResponse = { aiResponse: "Thank you for your feedback" };
    (generateAiResponseRequest as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useGenerateAiResponse(), {
      wrapper: createWrapper(),
    });

    result.current.mutate({
      reviewId: "1",
      prompt: "Generate a positive response",
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(generateAiResponseRequest).toHaveBeenCalledWith(
      "1",
      "Generate a positive response",
    );
    expect(result.current.data).toEqual(mockResponse);
  });

  it("should call generateAiResponseRequest without prompt", async () => {
    const mockResponse = { aiResponse: "Thank you for your feedback" };
    (generateAiResponseRequest as any).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useGenerateAiResponse(), {
      wrapper: createWrapper(),
    });

    result.current.mutate({ reviewId: "1" });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(generateAiResponseRequest).toHaveBeenCalledWith("1", undefined);
    expect(result.current.data).toEqual(mockResponse);
  });
});
