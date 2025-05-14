import { renderHook, act } from "@testing-library/react";
import { useAuth } from "@/hooks/useAuth";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { BuisnessProfileContext } from "@/App";
import { AuthContext } from "@/context/AuthContext";

// Mock navigate function
const mockNavigate = vi.fn();

// Mock useToast
vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

// Mock react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...(actual as any),
    useNavigate: () => mockNavigate,
  };
});

// Mock linkGoogleBuisnessAccountRequest
vi.mock("@/services/authServices", () => ({
  linkGoogleBuisnessAccountRequest: vi.fn().mockResolvedValue({
    buisness: "next.js",
    url: "https://business.google.com/create",
  }),
}));

const createWrapper = (buisnessProfile: string | null = null) => {
  const setBuisnessProfile = vi.fn();
  const logout = vi.fn();

  return ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>
      <BuisnessProfileContext.Provider
        value={{ buisnessProfile, setBuisnessProfile }}
      >
        <AuthContext.Provider
          value={{
            user: null,
            token: null,
            isAuthenticated: false,
            login: vi.fn(),
            logout,
          }}
        >
          {children}
        </AuthContext.Provider>
      </BuisnessProfileContext.Provider>
    </BrowserRouter>
  );
};

describe("useAuth", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should toggle password visibility", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    expect(result.current.passwordType).toBe("password");

    act(() => {
      result.current.togglePasswordVisibility();
    });

    expect(result.current.passwordType).toBe("text");

    act(() => {
      result.current.togglePasswordVisibility();
    });

    expect(result.current.passwordType).toBe("password");
  });

  it("should toggle old password visibility", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    expect(result.current.oldPasswordType).toBe("password");

    act(() => {
      result.current.toggleOldPasswordVisibility();
    });

    expect(result.current.oldPasswordType).toBe("text");

    act(() => {
      result.current.toggleOldPasswordVisibility();
    });

    expect(result.current.oldPasswordType).toBe("password");
  });

  it("should toggle confirm password visibility", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    expect(result.current.confirmPasswordType).toBe("password");

    act(() => {
      result.current.toggleConfirmPasswordVisibility();
    });

    expect(result.current.confirmPasswordType).toBe("text");

    act(() => {
      result.current.toggleConfirmPasswordVisibility();
    });

    expect(result.current.confirmPasswordType).toBe("password");
  });

  it("should handle logout correctly", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      await result.current.handleLogout();
    });

    expect(mockNavigate).toHaveBeenCalledWith("/signin");
  });

  it("should handle linking Google Business account", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      result.current.handleLinkGoogleBuisnessAccount();
    });

    // Wait for the mutation to complete
    await vi.waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
    });
  });
});
