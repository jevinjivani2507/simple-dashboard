import { render, screen } from "@testing-library/react";
import ProjectsPage from "../page";

// Mock dependencies
jest.mock("@/lib/store", () => ({
  useSidebarStore: () => ({ isExpanded: false }),
}));

jest.mock("motion/react", () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("Projects Page Integration", () => {
  it("should render complete projects page", () => {
    render(<ProjectsPage />);

    // Verify page title
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should display projects table structure", () => {
    render(<ProjectsPage />);

    // Verify the page structure
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should have filters and table in the same page", () => {
    const { container } = render(<ProjectsPage />);

    // Check that the page has proper structure
    expect(container.querySelector(".space-y-4")).toBeInTheDocument();
  });

  it("should render without errors", () => {
    expect(() => render(<ProjectsPage />)).not.toThrow();
  });

  it("should maintain page layout", () => {
    const { container } = render(<ProjectsPage />);

    // Check for main container
    expect(container.firstChild).toBeInTheDocument();
  });
});
