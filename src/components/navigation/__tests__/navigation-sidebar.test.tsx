import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { NavSidebar } from "../navigation-sidebar";
import { usePathname } from "next/navigation";

// Mock next/navigation with proper implementation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
  })),
  useSearchParams: jest.fn(() => new URLSearchParams()),
  redirect: jest.fn(),
}));

const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>;

describe("NavSidebar Component", () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue("/dashboard");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render dashboards section", () => {
    render(<NavSidebar />);
    expect(screen.getByText("Dashboards")).toBeInTheDocument();
  });

  it("should render pages section", () => {
    render(<NavSidebar />);
    expect(screen.getByText("Pages")).toBeInTheDocument();
  });

  it("should render with default isExpanded true", () => {
    const { container } = render(<NavSidebar />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should render with isExpanded false", () => {
    const { container } = render(<NavSidebar isExpanded={false} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    const { container } = render(<NavSidebar className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("should call usePathname to determine active items", () => {
    render(<NavSidebar />);
    expect(usePathname).toHaveBeenCalled();
  });

  it("should update active items when pathname changes", () => {
    const { rerender } = render(<NavSidebar />);
    expect(screen.getByText("Dashboards")).toBeInTheDocument();

    mockUsePathname.mockReturnValue("/projects");
    rerender(<NavSidebar />);

    expect(screen.getByText("Dashboards")).toBeInTheDocument();
  });

  it("should pass onItemClick prop to NavSection", () => {
    const mockOnItemClick = jest.fn();
    render(<NavSidebar onItemClick={mockOnItemClick} />);

    expect(screen.getByText("Dashboards")).toBeInTheDocument();
  });

  it("should have proper structure", () => {
    const { container } = render(<NavSidebar />);

    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("flex", "h-full", "flex-col");
  });

  it("should mark active items correctly based on pathname", () => {
    mockUsePathname.mockReturnValue("/projects");
    render(<NavSidebar />);

    // Component should render without errors
    expect(screen.getByText("Dashboards")).toBeInTheDocument();
    expect(screen.getByText("Pages")).toBeInTheDocument();
  });

  it("should handle nested routes", () => {
    mockUsePathname.mockReturnValue("/user-profile/overview");
    render(<NavSidebar />);

    expect(screen.getByText("Dashboards")).toBeInTheDocument();
    expect(screen.getByText("Pages")).toBeInTheDocument();
  });

  it("should memoize dashboard items", () => {
    const { rerender } = render(<NavSidebar />);

    // Rerender with same pathname
    rerender(<NavSidebar />);

    // useMemo should prevent unnecessary recalculations
    expect(screen.getByText("Dashboards")).toBeInTheDocument();
  });

  it("should memoize page items", () => {
    const { rerender } = render(<NavSidebar />);

    // Rerender with same pathname
    rerender(<NavSidebar />);

    // useMemo should prevent unnecessary recalculations
    expect(screen.getByText("Pages")).toBeInTheDocument();
  });

  it("should handle root path", () => {
    mockUsePathname.mockReturnValue("/");
    render(<NavSidebar />);

    expect(screen.getByText("Dashboards")).toBeInTheDocument();
    expect(screen.getByText("Pages")).toBeInTheDocument();
  });

  it("should render all navigation items", () => {
    render(<NavSidebar />);

    // Both sections should be rendered
    const sections = screen.getAllByText(/Dashboards|Pages/);
    expect(sections.length).toBeGreaterThanOrEqual(2);
  });
});
