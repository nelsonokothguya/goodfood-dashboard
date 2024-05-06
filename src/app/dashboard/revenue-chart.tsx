"use client";

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
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import ViewReportButton from "./view-report-button";

type Data = {
  date: string;
  lastEightDays: number;
  lastWeek: number;
  amt: number;
};

type Label = {
  [key: string]: string;
};

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
  { date: "08", lastEightDays: 4000, lastWeek: 2400, amt: 2400 },
  { date: "09", lastEightDays: 3000, lastWeek: 1398, amt: 2210 },
  { date: "10", lastEightDays: 2000, lastWeek: 9800, amt: 2290 },
  { date: "11", lastEightDays: 2780, lastWeek: 3908, amt: 2000 },
  { date: "12", lastEightDays: 1890, lastWeek: 4800, amt: 2181 },
];
export const legendFormatter = (key: string) => {
  const labels: Label = {
    lastEightDays: "Last 8 days",
    lastWeek: "Last Week",
  };
  return <span style={{ color: "#121212" }}>{labels[key] || key}</span>;
};
export const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  label?: string;
  payload?: {
    value: number;
    color: string;
    name: string;
  }[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-2 shadow-lg rounded">
        <p className="label">{`Date : ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} className="intro" style={{ color: entry.color }}>
            {`${
              entry.name === "lastEightDays" ? "Last 8 days" : "Last Week"
            } : ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default function RevenueChart() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xlg font-semibold">Revenue</h1>
        <ViewReportButton />
      </div>
      <RevenueChartInfo />
      <div className="h-full mt-10">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            barCategoryGap={15}
            data={data}
            margin={{
              top: 2,
              right: 30,
              left: 20,
              bottom: 2,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            {/* <YAxis /> */}
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="circle"
              layout="horizontal"
              align="left"
              formatter={legendFormatter}
            />
            <Bar dataKey="lastEightDays" fill="#5A6ACF" />
            <Bar dataKey="lastWeek" fill="#E6E8EC" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function RevenueChartInfo() {
  const totalRevenue = (data: Data[]) => {
    const total = data.reduce((acc, curr) => acc + curr.lastEightDays, 0);
    return `IDR ${total.toFixed(3)}`;
  };

  const percentage =
    ((data[6].lastEightDays - data[6].lastWeek) / data[6].lastWeek) * 100;

  const date = new Date();

  return (
    <div>
      <div>
        <div>
          <p className="text-2xl font-semibold">{totalRevenue(data)}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <p className="flex text-lg">
            {percentage > 0 ? (
              <ArrowUpIcon className="h-7 w-5 text-green-500" />
            ) : (
              <ArrowDownIcon className="h-7 w-5 text-red-500" />
            )}
            {percentage.toFixed(1)}% vs last week
          </p>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          Sales from {date.getDate() - 7}-{date.getDate()}{" "}
          {date.toLocaleString("default", { month: "long" })},{" "}
          {date.getFullYear()}
        </p>
      </div>
    </div>
  );
}
