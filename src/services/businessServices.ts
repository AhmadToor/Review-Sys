import api from "@/api";

export const getBusinessProfilesRequest = async () => {
  try {
    const response = await api.get("/business-profiles");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getBusinessProfileRequest = async (id: string) => {
  try {
    const response = await api.get(`/business-profiles/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const updateBusinessProfileRequest = async (id: string, data: any) => {
  try {
    const response = await api.put(`/business-profiles/${id}`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const syncBusinessDataRequest = async (id: string) => {
  try {
    const response = await api.post(`/business-profiles/${id}/sync`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getBusinessAnalyticsRequest = async (
  id: string,
  period: string = "month",
) => {
  try {
    const response = await api.get(`/business-profiles/${id}/analytics`, {
      params: { period },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};
