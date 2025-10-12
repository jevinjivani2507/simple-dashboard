"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", actuals: 16, projections: 4 },
  { month: "February", actuals: 20, projections: 5 },
  { month: "March", actuals: 18, projections: 4 },
  { month: "April", actuals: 22, projections: 6 },
  { month: "May", actuals: 14, projections: 4 },
  { month: "June", actuals: 20, projections: 5 },
];

const chartConfig = {
  actuals: {
    label: "Actuals",
    color: "var(--color-accent)",
  },
  projections: {
    label: "Projections",
    color: "color-mix(in srgb, var(--color-accent) 50%, transparent)",
  },
} satisfies ChartConfig;

const ProjectionVsActualsChart = () => {
  return (
    <Card className="bg-muted flex w-full flex-col gap-0 border-0 pb-4 shadow-none">
      <CardHeader className="flex-shrink-0 pb-2">
        <CardTitle className="text-lg font-semibold">
          Projections vs Actuals
        </CardTitle>
      </CardHeader>
      <CardContent className="flex max-h-[200px] flex-1 items-center pl-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart accessibilityLayer data={chartData} barGap={0}>
            <CartesianGrid
              vertical={false}
              stroke="var(--color-muted-foreground)"
              opacity={0.1}
            />
            <XAxis
              dataKey="month"
              tickLine={true}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}M`}
              ticks={[0, 10, 20, 30]}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
            />
            <Bar
              barSize={20}
              dataKey="actuals"
              stackId="a"
              fill="var(--color-actuals)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="projections"
              stackId="a"
              fill="var(--color-projections)"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ProjectionVsActualsChart;
