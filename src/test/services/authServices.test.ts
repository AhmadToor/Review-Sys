import {
  loginRequest,
  signupRequest,
  resetPasswordRequest,
  forgotPasswordRequest,
  verifyEmailRequest,
  resendVerificationEmailRequest,
  changePasswordRequest,
  linkGoogleBuisnessAccountRequest,
} from "@/services/authServices";
import { describe, it, expect, vi, beforeEach } from "vitest";
import api from "@/api";

// Mock the API module
vi.mock("@/api", () => ({
  default: {
    post: vi.fn(),
  },
}));

describe("authServices", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe("loginRequest", () => {
    it("should call api.post with correct parameters", async () => {
      const mockResponse = { data: { token: "test-token", user: { id: "1" } } };
      (api.post as any).mockResolvedValue(mockResponse);

      const loginData = { email: "test@example.com", password: "password" };
      const result = await loginRequest(loginData);

      expect(api.post).toHaveBeenCalledWith("/users/login", loginData);
      expect(result).toEqual(mockResponse.data);
    });

    it("should handle errors from the API", async () => {
      const errorResponse = {
        response: { data: { message: "Invalid credentials" } },
      };
      (api.post as any).mockRejectedValue(errorResponse);

      const loginData = {
        email: "test@example.com",
        password: "wrong-password",
      };

      await expect(loginRequest(loginData)).rejects.toEqual(
        errorResponse.response.data,
      );
    });

    it("should handle unexpected errors", async () => {
      const error = new Error("Network error");
      (api.post as any).mockRejectedValue(error);

      const loginData = { email: "test@example.com", password: "password" };

      await expect(loginRequest(loginData)).rejects.toThrow(
        "An unexpected error occurred",
      );
    });
  });

  describe("signupRequest", () => {
    it("should call api.post with correct parameters", async () => {
      const mockResponse = { data: { token: "test-token", user: { id: "1" } } };
      (api.post as any).mockResolvedValue(mockResponse);

      const signupData = {
        firstname: "Test",
        lastname: "User",
        email: "test@example.com",
        password: "password",
        confirmPassword: "password",
      };
      const result = await signupRequest(signupData);

      expect(api.post).toHaveBeenCalledWith("/users/register", signupData);
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe("resetPasswordRequest", () => {
    it("should call api.post with correct parameters", async () => {
      const mockResponse = { data: { message: "Password reset successfully" } };
      (api.post as any).mockResolvedValue(mockResponse);

      const resetData = {
        newpassword: "newpassword",
        confirmPassword: "newpassword",
        accessToken: "token123",
      };
      const result = await resetPasswordRequest(resetData);

      expect(api.post).toHaveBeenCalledWith("/users/resetpassword", resetData);
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe("changePasswordRequest", () => {
    it("should call api.post with correct parameters", async () => {
      const mockResponse = {
        data: { message: "Password changed successfully" },
      };
      (api.post as any).mockResolvedValue(mockResponse);

      const changeData = {
        oldPassword: "oldpassword",
        newPassword: "newpassword",
        confirmPassword: "newpassword",
      };
      const result = await changePasswordRequest(changeData);

      expect(api.post).toHaveBeenCalledWith(
        "/users/change-password",
        changeData,
      );
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe("forgotPasswordRequest", () => {
    it("should call api.post with correct parameters", async () => {
      const mockResponse = { data: { message: "Reset email sent" } };
      (api.post as any).mockResolvedValue(mockResponse);

      const email = "test@example.com";
      const result = await forgotPasswordRequest(email);

      expect(api.post).toHaveBeenCalledWith("/users/forgotpassword", { email });
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe("verifyEmailRequest", () => {
    it("should call api.post with correct parameters", async () => {
      const mockResponse = { data: { message: "Email verified successfully" } };
      (api.post as any).mockResolvedValue(mockResponse);

      const token = "verification-token-123";
      const result = await verifyEmailRequest(token);

      expect(api.post).toHaveBeenCalledWith(`/users/verify-email/${token}`);
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe("resendVerificationEmailRequest", () => {
    it("should call api.post with correct parameters", async () => {
      const mockResponse = { data: { message: "Verification email resent" } };
      (api.post as any).mockResolvedValue(mockResponse);

      const email = "test@example.com";
      const result = await resendVerificationEmailRequest(email);

      expect(api.post).toHaveBeenCalledWith("/users/resend-verification", {
        email,
      });
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe("linkGoogleBuisnessAccountRequest", () => {
    it("should call api.post with correct parameters", async () => {
      const mockResponse = {
        data: {
          buisness: "next.js",
          url: "https://business.google.com/create",
        },
      };
      (api.post as any).mockResolvedValue(mockResponse);

      const result = await linkGoogleBuisnessAccountRequest();

      expect(api.post).toHaveBeenCalledWith("/attachbuisness");
      expect(result).toEqual(mockResponse.data);
    });
  });
});
