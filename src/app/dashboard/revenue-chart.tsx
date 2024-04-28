"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "01",
    lastSixDays: 4000,
    lastWeek: 2400,
    amt: 2400,
  },
  {
    date: "02",
    lastSixDays: 3000,
    lastWeek: 1398,
    amt: 2210,
  },
  {
    date: "03",
    lastSixDays: 2000,
    lastWeek: 9800,
    amt: 2290,
  },
  {
    date: "04",
    lastSixDays: 2780,
    lastWeek: 3908,
    amt: 2000,
  },
  {
    date: "05",
    lastSixDays: 1890,
    lastWeek: 4800,
    amt: 2181,
  },
  {
    date: "06",
    lastSixDays: 2390,
    lastWeek: 3800,
    amt: 2500,
  },
  {
    date: "07",
    lastSixDays: 3490,
    lastWeek: 4300,
    amt: 2100,
  },
  { date: "08", lastSixDays: 4000, lastWeek: 2400, amt: 2400 },
  { date: "09", lastSixDays: 3000, lastWeek: 1398, amt: 2210 },
  { date: "10", lastSixDays: 2000, lastWeek: 9800, amt: 2290 },
  { date: "11", lastSixDays: 2780, lastWeek: 3908, amt: 2000 },
  { date: "12", lastSixDays: 1890, lastWeek: 4800, amt: 2181 },
];
export const legendColor = (value, entry) => (
  <span style={{ color: "#121212" }}>{value}</span>
);
export default function RevenueChart() {
  return (
    <div>
      <BarChart
        barCategoryGap={30}
        width={1200}
        height={600}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        {/* <YAxis /> */}
        <Tooltip />
        <Legend
          iconType="circle"
          layout="horizontal"
          align="left"
          formatter={legendColor}
        />
        <Bar dataKey="lastSixDays" fill="#5A6ACF" />
        <Bar dataKey="lastWeek" fill="#E6E8EC" />
      </BarChart>
    </div>
  );
}
