"use client";

import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { category: "direct", amount: 300.56, fill: "hsl(0, 0%, 10%)" },
  { category: "affiliate", amount: 135.18, fill: "hsl(140, 40%, 75%)" },
  { category: "sponsored", amount: 154.02, fill: "hsl(240, 60%, 70%)" },
  { category: "email", amount: 48.96, fill: "hsl(200, 60%, 80%)" },
];

const chartConfig = {
  amount: {
    label: "Amount",
  },
  direct: {
    label: "Direct",
    color: "hsl(0, 0%, 10%)",
  },
  affiliate: {
    label: "Affiliate",
    color: "hsl(140, 40%, 75%)",
  },
  sponsored: {
    label: "Sponsored",
    color: "hsl(240, 60%, 70%)",
  },
  email: {
    label: "E-mail",
    color: "hsl(200, 60%, 80%)",
  },
} satisfies ChartConfig;

const TotalSalesChart = () => {
  const totalAmount = chartData.reduce((acc, curr) => acc + curr.amount, 0);
  const directPercentage = ((chartData[0].amount / totalAmount) * 100).toFixed(
    1,
  );

  return (
    <Card className="bg-muted flex h-full w-full flex-col gap-0 border-0 shadow-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold">Total Sales</CardTitle>
      </CardHeader>
      <CardContent className="flex w-full flex-1 flex-col items-center justify-center pb-2">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[150px]"
        >
          <PieChart width={150} height={150}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="category"
              innerRadius={40}
              outerRadius={65}
              cornerRadius={4}
              paddingAngle={4}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl font-bold"
                        >
                          {directPercentage}%
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <div className="mt-2 w-full space-y-1.5">
          {chartData.map((item) => (
            <div
              key={item.category}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.fill }}
                />
                <span className="text-foreground text-sm">
                  {chartConfig[item.category as keyof typeof chartConfig].label}
                </span>
              </div>
              <span className="text-sm font-semibold">
                ${item.amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalSalesChart;
