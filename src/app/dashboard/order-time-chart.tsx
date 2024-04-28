"use client";

import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  TooltipProps,
  Payload,
} from "recharts";
import { Payload } from "recharts";

// Define an interface for your data
interface ChartData {
  name: string;
  value: number;
  time: string;
}

const data02: ChartData[] = [
  { name: "Afternoon", value: 2400, time: "1pm -4pm" },
  { name: "Evening", value: 4567, time: "5pm - 8pm" },
  { name: "Morning", value: 1398, time: "9am - 12pm" },
];

const COLORS: string[] = ["#5A6ACF", "#8593ED", "#C7CEFF"];

type CustomTooltipProps = TooltipProps<number, string>;

export function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="relative inline-block">
        <div className="custom-tooltip bg-slate-900 text-white p-4 rounded-lg shadow-md before:content-[''] before:absolute before:border-8 before:border-transparent before:border-b-slate-900 before:-top-2 before:left-1/2 before:-translate-x-1/2 before:-z-10">
          <p className="font-bold">{`${payload[0].name}:`}</p>
          <p>{payload[0].payload.time}</p>
          <p>{`${payload[0].value} orders`}</p>
        </div>
      </div>
    );
  }

  return null;
}

// Custom legend formatter
const renderCustomLegend = (value: string, entry: Payload) => {
  const { color, payload } = entry;
  const total = data02.reduce((acc, item) => acc + item.value, 0);
  const percentage = ((payload.value / total) * 100).toFixed(2) + "%";

  return (
    <span style={{ color: "#121212" }}>
      {value} {percentage}
    </span>
  );
};

export default function OrderTimeChart() {
  return (
    <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        data={data02}
        cx={500}
        cy={200}
        innerRadius={50}
        outerRadius={80}
        width={1000}
      >
        {data02.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltip />} />
      <Legend formatter={renderCustomLegend} iconType="circle" />
    </PieChart>
  );
}
