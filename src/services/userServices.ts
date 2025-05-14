import api from "@/api";

export const getUserProfileRequest = async () => {
  try {
    const response = await api.get("/users/profile");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const updateUserProfileRequest = async (data: any) => {
  try {
    const response = await api.put("/users/profile", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const updateUserAvatarRequest = async (formData: FormData) => {
  try {
    const response = await api.post("/users/avatar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const updateNotificationSettingsRequest = async (settings: any) => {
  try {
    const response = await api.put("/users/notification-settings", settings);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};
