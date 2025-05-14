import { useMutation } from "@tanstack/react-query";
import { generateBulkAiResponsesRequest } from "@/services/reviewServices";

export const useGenerateBulkResponses = () => {
  return useMutation({
    mutationFn: ({
      reviewIds,
      prompt,
    }: {
      reviewIds: string[];
      prompt?: string;
    }) => generateBulkAiResponsesRequest(reviewIds, prompt),
  });
};
