import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NotFoundPage from "@/pages/NotFoundPage";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock navigate function
const mockNavigate = vi.fn();

// Mock useNavigate
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...(actual as any),
    useNavigate: () => mockNavigate,
  };
});

describe("NotFoundPage", () => {
  beforeEach(() => {
    mockNavigate.mockReset();
  });

  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
    );

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(
      screen.getByText(/The page you are looking for/),
    ).toBeInTheDocument();
  });

  it("has a Go Back button that calls navigate(-1)", async () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
    );

    const goBackButton = screen.getByText("Go Back");
    expect(goBackButton).toBeInTheDocument();

    await userEvent.click(goBackButton);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  it("has a Go to Dashboard link", () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
    );

    const dashboardLink = screen.getByText("Go to Dashboard");
    expect(dashboardLink).toBeInTheDocument();
    expect(dashboardLink.closest("a")).toHaveAttribute("href", "/dashboard");
  });

  it("displays the error message", () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
    );

    expect(
      screen.getByText(
        /The page you are looking for does not exist or has been moved/i,
      ),
    ).toBeInTheDocument();
  });
});
