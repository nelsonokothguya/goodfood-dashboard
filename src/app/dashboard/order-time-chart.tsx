"use client";

import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  Cell,
  TooltipProps,
  ResponsiveContainer,
} from "recharts";

import { Payload } from "recharts/types/component/DefaultLegendContent";

import ViewReportButton from "./view-report-button";

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

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="relative inline-block">
        <div className="custom-tooltip bg-slate-900 text-white p-4 rounded-lg shadow-md before:content-[''] before:absolute before:border-8 before:border-transparent before:border-b-slate-900 before:-top-2 before:left-1/2 before:-translate-x-1/2 before:-z-10">
          <p className=" text-white font-medium text-12px tracking-0.3px leading-13 font-poppins">{`${payload[0].name}:`}</p>
          <p className=" relative text-white font-medium text-12px tracking-0.3px leading-12 font-poppins opacity-50">
            {payload[0].payload.time}
          </p>
          <p className="relative text-white text-left inline-block font-medium font-poppins text-base leading-4">{`${payload[0].value} orders`}</p>
        </div>
      </div>
    );
  }

  return null;
}

// Custom legend formatter
const renderCustomLegend = (value: string, entry: Payload): React.ReactNode => {
  const { payload } = entry;
  const total = data02.reduce((acc, item) => acc + item.value, 0);
  const percentage = ((payload?.value / total) * 100).toFixed(2) + "%";

  return (
    <span style={{ color: "#121212" }}>
      {value} {percentage}
    </span>
  );
};

export default function OrderTimeChart() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xlg font-semibold">Order Time</h1>
        <ViewReportButton />
      </div>
      <OrderTimeChartInfo />
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={500} height={300}>
            <Pie
              dataKey="value"
              data={data02}
              cx={200}
              cy={100}
              innerRadius={70}
              outerRadius={100}
              width={500}
            >
              {data02.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend formatter={renderCustomLegend} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function OrderTimeChartInfo() {
  const date = new Date();

  return (
    <div>
      <p className="text-sm text-gray-500">
        From {date.getDate() - 7}-{date.getDate()}{" "}
        {date.toLocaleString("default", { month: "long" })},{" "}
        {date.getFullYear()}
      </p>
    </div>
  );
}
