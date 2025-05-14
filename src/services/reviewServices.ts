import api from "@/api";

export const getReviewsRequest = async (filters?: Record<string, any>) => {
  try {
    const response = await api.get("/reviews", { params: filters });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getReviewByIdRequest = async (id: string) => {
  try {
    const response = await api.get(`/reviews/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const respondToReviewRequest = async (id: string, response: string) => {
  try {
    const apiResponse = await api.post(`/reviews/${id}/respond`, { response });
    return apiResponse.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const generateAiResponseRequest = async (
  reviewId: string,
  prompt?: string,
) => {
  try {
    const response = await api.post("/ai/generate-response", {
      reviewId,
      prompt,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const generateBulkAiResponsesRequest = async (
  reviewIds: string[],
  prompt?: string,
) => {
  try {
    const response = await api.post("/ai/bulk-responses", {
      reviewIds,
      prompt,
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};
