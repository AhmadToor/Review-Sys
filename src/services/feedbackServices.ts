import api from "@/api";

export const getFeedbackTemplatesRequest = async () => {
  try {
    const response = await api.get("/feedback-templates");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const createFeedbackTemplateRequest = async (data: any) => {
  try {
    const response = await api.post("/feedback-templates", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const updateFeedbackTemplateRequest = async (id: string, data: any) => {
  try {
    const response = await api.put(`/feedback-templates/${id}`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const deleteFeedbackTemplateRequest = async (id: string) => {
  try {
    const response = await api.delete(`/feedback-templates/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const sendFeedbackEmailRequest = async (data: any) => {
  try {
    const response = await api.post("/feedback/send-email", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};
