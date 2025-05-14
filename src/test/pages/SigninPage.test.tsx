import { render, screen } from "@testing-library/react";
import SignInPage from "@/pages/SigninPage";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Mock components
vi.mock("@/components/auth/signinForm", () => ({
  default: () => <div data-testid="signin-form">Mocked SignIn Form</div>,
}));

vi.mock("@/_layouts/AuthWrapper.tsx", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="auth-wrapper">{children}</div>
  ),
}));

// Create a wrapper with QueryClientProvider
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
};

describe("SignInPage", () => {
  it("renders correctly", () => {
    render(<SignInPage />, { wrapper: createWrapper() });

    expect(screen.getByTestId("auth-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("signin-form")).toBeInTheDocument();
  });

  it("renders within the auth wrapper", () => {
    render(<SignInPage />, { wrapper: createWrapper() });

    const authWrapper = screen.getByTestId("auth-wrapper");
    const signinForm = screen.getByTestId("signin-form");

    expect(authWrapper).toContainElement(signinForm);
  });
});
