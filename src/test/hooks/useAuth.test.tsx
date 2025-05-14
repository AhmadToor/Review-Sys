import { renderHook, act } from "@testing-library/react";
import { useAuth } from "@/hooks/useAuth";
import { AuthProvider } from "@/context/AuthContext";
import { ReactNode } from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BuisnessProfileContext } from "@/App";

// Mock react-router-dom
vi.mock("react-router-dom", () => ({
  useNavigate: () => vi.fn(),
}));

// Mock auth services
vi.mock("@/services/authServices", () => ({
  loginRequest: vi.fn(),
  signupRequest: vi.fn(),
  linkGoogleBuisnessAccountRequest: vi.fn(),
}));

// Mock toast hook
vi.mock("@/hooks/use-toast", () => ({
  useToast: () => ({
    toast: vi.fn(),
  }),
}));

// Mock AuthContext
vi.mock("@/context/AuthContext", () => ({
  useAuth: () => ({
    login: vi.fn(),
    logout: vi.fn(),
    user: null,
    isAuthenticated: false,
    isLoading: false,
    updateUser: vi.fn(),
  }),
  AuthProvider: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const setBuisnessProfile = vi.fn();

  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <BuisnessProfileContext.Provider
        value={{ buisnessProfile: null, setBuisnessProfile }}
      >
        <AuthProvider>{children}</AuthProvider>
      </BuisnessProfileContext.Provider>
    </QueryClientProvider>
  );
};

describe("useAuth hook", () => {
  beforeEach(() => {
    localStorage.clear();
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

  it("should toggle confirm password visibility", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: createWrapper(),
    });

    expect(result.current.confirmPasswordType).toBe("password");

    act(() => {
      result.current.toggleConfirmPasswordVisibility();
    });

    expect(result.current.confirmPasswordType).toBe("text");
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
  });
});
