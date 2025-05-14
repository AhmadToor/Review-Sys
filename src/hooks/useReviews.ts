import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getReviewsRequest,
  respondToReviewRequest,
  generateAiResponseRequest,
} from "@/services/reviewServices";

export const useReviews = (filters?: Record<string, any>) => {
  return useQuery({
    queryKey: ["reviews", filters],
    queryFn: () => getReviewsRequest(filters),
  });
};

export const useRespondToReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      reviewId,
      response,
    }: {
      reviewId: string;
      response: string;
    }) => respondToReviewRequest(reviewId, response),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });
};

export const useGenerateAiResponse = () => {
  return useMutation({
    mutationFn: ({ reviewId, prompt }: { reviewId: string; prompt?: string }) =>
      generateAiResponseRequest(reviewId, prompt),
  });
};
