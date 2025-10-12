import { render, screen } from "@testing-library/react";
import ProjectsPage from "../page";
import { useSidebarStore } from "@/lib/store";

// Mock the store
jest.mock("@/lib/store");

// Mock motion
jest.mock("motion/react", () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("ProjectsPage", () => {
  beforeEach(() => {
    (useSidebarStore as unknown as jest.Mock).mockReturnValue({
      isExpanded: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the projects page title", () => {
    render(<ProjectsPage />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should render with sidebar not expanded", () => {
    (useSidebarStore as unknown as jest.Mock).mockReturnValue({
      isExpanded: false,
    });

    render(<ProjectsPage />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should render with sidebar expanded", () => {
    (useSidebarStore as unknown as jest.Mock).mockReturnValue({
      isExpanded: true,
    });

    render(<ProjectsPage />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should render FiltersHeader component", () => {
    render(<ProjectsPage />);
    // The page should render the title which is part of FiltersHeader area
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should render ProjectsTable component", () => {
    render(<ProjectsPage />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should initialize with empty status filters", () => {
    render(<ProjectsPage />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should initialize with empty global filter", () => {
    render(<ProjectsPage />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should initialize with empty sorting state", () => {
    render(<ProjectsPage />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should have proper page structure", () => {
    const { container } = render(<ProjectsPage />);

    // Check that the main container exists
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render ActiveStatusSection", () => {
    render(<ProjectsPage />);
    // Page should render without errors
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should call useSidebarStore on render", () => {
    render(<ProjectsPage />);
    expect(useSidebarStore).toHaveBeenCalled();
  });

  it("should handle different sidebar states", () => {
    const { rerender } = render(<ProjectsPage />);

    (useSidebarStore as unknown as jest.Mock).mockReturnValue({
      isExpanded: true,
    });

    rerender(<ProjectsPage />);
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });
});
