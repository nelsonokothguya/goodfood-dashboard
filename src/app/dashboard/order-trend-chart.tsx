"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { legendColor } from "./revenue-chart";

const data = [
  {
    date: "01",
    lastEightDays: 4000,
    lastWeek: 2400,
    amt: 2400,
  },
  {
    date: "02",
    lastEightDays: 3000,
    lastWeek: 1398,
    amt: 2210,
  },
  {
    date: "03",
    lastEightDays: 2000,
    lastWeek: 9800,
    amt: 2290,
  },
  {
    date: "04",
    lastEightDays: 2780,
    lastWeek: 3908,
    amt: 2000,
  },
  {
    date: "05",
    lastEightDays: 1890,
    lastWeek: 4800,
    amt: 2181,
  },
  {
    date: "06",
    lastEightDays: 2390,
    lastWeek: 3800,
    amt: 2500,
  },
  {
    date: "07",
    lastEightDays: 3490,
    lastWeek: 4300,
    amt: 2100,
  },
  {
    date: "08",
    lastEightDays: 4000,
    lastWeek: 2400,
    amt: 2400,
  },
];

export default function OrderTrendChart() {
  return (
    <LineChart
      width={1000}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="date" />

      <Tooltip />
      <Legend iconType="circle" formatter={legendColor} />
      <Line dataKey="lastWeek" stroke="#E6E8EC" dot={false} strokeWidth={4} />
      <Line
        dataKey="lastEightDays"
        stroke="#5A6ACF"
        dot={false}
        strokeWidth={4}
      />
    </LineChart>
  );
}
