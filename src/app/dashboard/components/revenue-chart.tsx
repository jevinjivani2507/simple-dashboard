"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "@/components/ui/separator";

const chartData = [
  { month: "January", currentWeek: 12, previousWeek: 7 },
  { month: "February", currentWeek: 7, previousWeek: 16 },
  { month: "March", currentWeek: 6, previousWeek: 16 },
  {
    month: "April",
    currentWeek: 11,
    previousWeek: 10,
    currentWeekProjection: 11,
  },
  {
    month: "May",
    currentWeek: null,
    previousWeek: 11,
    currentWeekProjection: 19,
  },
  {
    month: "June",
    currentWeek: null,
    previousWeek: 23,
    currentWeekProjection: 20,
  },
];

const chartConfig = {
  currentWeek: {
    label: "Current Week",
    color: "var(--color-primary)",
  },
  currentWeekProjection: {
    label: "Current Week Projection",
    color: "var(--color-primary)",
  },
  previousWeek: {
    label: "Previous Week",
    color: "var(--color-secondary)",
  },
} satisfies ChartConfig;

const RevenueChart = () => {
  return (
    <Card className="bg-muted flex h-full w-full flex-col gap-0 border-0 pb-4 shadow-none">
      <CardHeader className="pb-4">
        <div className="flex items-center">
          <div className="flex h-5 items-center space-x-4 text-sm">
            <CardTitle className="text-lg font-semibold">Revenue</CardTitle>
            <Separator orientation="vertical" />
            <div className="flex flex-col space-x-4 md:flex-row">
              <div className="flex items-center gap-2">
                <div className="bg-primary size-2 rounded-full" />
                <span className="text-muted-foreground">Current Week</span>
                <span className="font-semibold">$58,211</span>
              </div>
              <Separator orientation="vertical" />
              <div className="flex items-center gap-2">
                <div className="bg-secondary size-2 rounded-full" />
                <span className="text-muted-foreground">Previous Week</span>
                <span className="font-semibold">$68,768</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="max-h-[320px] flex-1 pl-0">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="var(--color-muted-foreground)"
              opacity={0.1}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              tickFormatter={(value) => value.slice(0, 3)}
              stroke="var(--color-muted-foreground)"
              opacity={0.5}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              tickFormatter={(value) => `${value}M`}
              ticks={[0, 10, 20, 30]}
              stroke="var(--color-muted-foreground)"
              opacity={0.5}
            />
            <ChartTooltip
              cursor={{ stroke: "hsl(0, 0%, 80%)", strokeWidth: 1 }}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="previousWeek"
              type="natural"
              stroke="var(--color-previousWeek)"
              strokeWidth={3}
              dot={false}
            />
            <Line
              dataKey="currentWeek"
              type="natural"
              stroke="var(--color-currentWeek)"
              strokeWidth={3}
              dot={false}
              connectNulls={false}
            />
            <Line
              dataKey="currentWeekProjection"
              type="natural"
              stroke="var(--color-currentWeekProjection)"
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
