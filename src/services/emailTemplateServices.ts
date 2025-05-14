import { EmailTemplateType } from "@/types/dashboardtypes";
import api from "@/api";

export const createTemplateRequest = async (values: EmailTemplateType) => {
  try {
    const response = await api.post("/email-templates", values);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const getTemplatesRequest = async () => {
  try {
    const response = await api.get("/email-templates");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const updateTemplateRequest = async (
  id: string,
  values: EmailTemplateType,
) => {
  try {
    const response = await api.put(`/email-templates/${id}`, values);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const deleteTemplateRequest = async (id: string) => {
  try {
    const response = await api.delete(`/email-templates/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};
