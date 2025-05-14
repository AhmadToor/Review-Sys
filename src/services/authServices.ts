import {
  ChangePasswordSchemaTypes,
  ResetPasswordSchemaTypes,
  SigninSchemaTypes,
  SignupSchemaTypes,
} from "@/types/authtypes";
import api from "@/api";

export const loginRequest = async (values: SigninSchemaTypes) => {
  try {
    const response = await api.post("/users/login", values);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const signupRequest = async (values: SignupSchemaTypes) => {
  try {
    const response = await api.post("/users/register", values);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const linkGoogleBuisnessAccountRequest = async () => {
  try {
    const response = await api.post("/attachbuisness");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const resetPasswordRequest = async (
  values: ResetPasswordSchemaTypes,
) => {
  try {
    const response = await api.post("/users/resetpassword", values);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const changePasswordRequest = async (
  values: ChangePasswordSchemaTypes,
) => {
  try {
    const response = await api.post("/users/change-password", values);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const forgotPasswordRequest = async (email: string) => {
  try {
    const response = await api.post("/users/forgotpassword", { email });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const verifyEmailRequest = async (token: string) => {
  try {
    const response = await api.post(`/users/verify-email/${token}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};

export const resendVerificationEmailRequest = async (email: string) => {
  try {
    const response = await api.post("/users/resend-verification", { email });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response.data;
    }
    throw new Error("An unexpected error occurred");
  }
};
