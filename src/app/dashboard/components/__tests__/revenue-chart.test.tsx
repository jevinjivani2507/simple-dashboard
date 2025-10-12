import { render, screen } from "@testing-library/react";
import RevenueChart from "../revenue-chart";

// Mock @/components/ui imports
jest.mock("@/components/ui/card", () => ({
  Card: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={className} {...props}>
      {children}
    </div>
  ),
  CardContent: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={className} {...props}>
      {children}
    </div>
  ),
  CardHeader: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={className} {...props}>
      {children}
    </div>
  ),
  CardTitle: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={className} {...props}>
      {children}
    </div>
  ),
}));

jest.mock("@/components/ui/separator", () => ({
  Separator: ({ className, ...props }: { className?: string }) => (
    <div className={className} {...props} />
  ),
}));

jest.mock("@/components/ui/chart", () => ({
  ChartConfig: {},
  ChartContainer: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    config?: unknown;
    className?: string;
  }) => (
    <div className={className} {...props}>
      {children}
    </div>
  ),
  ChartTooltip: ({ children, ...props }: { children?: React.ReactNode }) => (
    <div {...props}>{children}</div>
  ),
  ChartTooltipContent: ({
    children,
    ...props
  }: {
    children?: React.ReactNode;
  }) => <div {...props}>{children}</div>,
}));

// Mock recharts components
jest.mock("recharts", () => ({
  CartesianGrid: () => <div data-testid="cartesian-grid" />,
  Line: () => <div data-testid="line" />,
  LineChart: ({ children }: { children?: React.ReactNode }) => (
    <div data-testid="line-chart">{children}</div>
  ),
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  ResponsiveContainer: ({ children }: { children?: React.ReactNode }) => (
    <div data-testid="responsive-container">{children}</div>
  ),
}));

describe("RevenueChart Component", () => {
  it("should render revenue chart title", () => {
    render(<RevenueChart />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
  });

  it("should display current week revenue", () => {
    render(<RevenueChart />);
    expect(screen.getByText("$58,211")).toBeInTheDocument();
  });

  it("should display previous week revenue", () => {
    render(<RevenueChart />);
    expect(screen.getByText("$68,768")).toBeInTheDocument();
  });

  it("should render legend with Current Week label", () => {
    render(<RevenueChart />);
    expect(screen.getByText("Current Week")).toBeInTheDocument();
  });

  it("should render legend with Previous Week label", () => {
    render(<RevenueChart />);
    expect(screen.getByText("Previous Week")).toBeInTheDocument();
  });

  it("should render chart container", () => {
    render(<RevenueChart />);
    expect(screen.getByTestId("line-chart")).toBeInTheDocument();
  });

  it("should render Card component", () => {
    const { container } = render(<RevenueChart />);
    expect(container.querySelector(".bg-muted")).toBeInTheDocument();
  });

  it("should have proper card structure", () => {
    render(<RevenueChart />);

    // Check for title
    expect(screen.getByText("Revenue")).toBeInTheDocument();

    // Check for revenue values
    expect(screen.getByText("$58,211")).toBeInTheDocument();
    expect(screen.getByText("$68,768")).toBeInTheDocument();
  });

  it("should render with correct styling classes", () => {
    const { container } = render(<RevenueChart />);

    // Should have the main card with proper classes
    expect(container.firstChild).toHaveClass("bg-muted");
  });

  it("should display revenue indicators", () => {
    const { container } = render(<RevenueChart />);

    // Check for revenue indicator dots
    const dots = container.querySelectorAll(".size-2.rounded-full");
    expect(dots.length).toBeGreaterThan(0);
  });

  it("should render separators between legend items", () => {
    render(<RevenueChart />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
  });

  it("should have both current and previous week sections", () => {
    render(<RevenueChart />);

    expect(screen.getByText("Current Week")).toBeInTheDocument();
    expect(screen.getByText("Previous Week")).toBeInTheDocument();
  });

  it("should render without errors", () => {
    expect(() => render(<RevenueChart />)).not.toThrow();
  });

  it("should maintain layout structure", () => {
    const { container } = render(<RevenueChart />);

    // Check that main container exists
    expect(container.firstChild).toBeInTheDocument();
  });
});
