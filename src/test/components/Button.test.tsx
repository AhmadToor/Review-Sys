import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components/ui/button";
import { describe, it, expect, vi } from "vitest";

describe("Button component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
  });

  it("renders as a different element when asChild is true", () => {
    render(
      <Button asChild>
        <a href="#">Link Button</a>
      </Button>,
    );
    const link = screen.getByRole("link", { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#");
  });

  it("applies variant classes correctly", () => {
    render(<Button variant="outline">Outline Button</Button>);
    const button = screen.getByRole("button", { name: /outline button/i });
    expect(button).toHaveClass("border");
    expect(button).not.toHaveClass("bg-primary");
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);

    const button = screen.getByRole("button", { name: /clickable/i });
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("can be disabled", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button", { name: /disabled button/i });
    expect(button).toBeDisabled();
  });

  it("applies size classes correctly", () => {
    render(<Button size="sm">Small Button</Button>);
    const button = screen.getByRole("button", { name: /small button/i });
    expect(button).toHaveClass("h-9");
    expect(button).toHaveClass("px-3");
  });

  it("applies destructive variant correctly", () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole("button", { name: /delete/i });
    expect(button).toHaveClass("bg-destructive");
    expect(button).toHaveClass("text-destructive-foreground");
  });

  it("doesn't trigger click when disabled", async () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>,
    );

    const button = screen.getByRole("button", { name: /disabled/i });
    await userEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});
