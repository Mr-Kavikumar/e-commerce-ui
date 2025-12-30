"use client";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  Total: {
    label: "Total",
    color: "var(--chart-1)",
  },
  Successful: {
    label: "Successful",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", Total: 186, Successful: 80 },
  { month: "February", Total: 305, Successful: 200 },
  { month: "March", Total: 237, Successful: 120 },
  { month: "April", Total: 273, Successful: 190 },
  { month: "May", Total: 209, Successful: 130 },
  { month: "June", Total: 214, Successful: 140 },
];

const AppBarChart = () => {
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Total Revenue</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="Total" fill="var(--color-Total)" radius={4} />
          <Bar dataKey="Successful" fill="var(--color-Successful)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppBarChart;
