"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { legendFormatter } from "./revenue-chart";
import ViewReportButton from "./view-report-button";
import { CustomTooltip } from "./revenue-chart";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
type Data = {
  date: string;
  lastEightDays: number;
  lastWeek: number;
  amt: number;
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
  {
    date: "08",
    lastEightDays: 4000,
    lastWeek: 2400,
    amt: 2400,
  },
];

export default function OrderTrendChart() {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-xlg font-semibold">Order</h1>
        <ViewReportButton />
      </div>
      <div>
        <OrderTrendChartInfo />
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              width={700}
              height={300}
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

              <Tooltip content={<CustomTooltip />} />
              <Legend iconType="circle" formatter={legendFormatter} />
              <Line
                dataKey="lastEightDays"
                stroke="#5A6ACF"
                dot={false}
                strokeWidth={4}
              />
              <Line
                dataKey="lastWeek"
                stroke="#E6E8EC"
                dot={false}
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function OrderTrendChartInfo() {
  const totalOrder = (data: Data[]) => {
    const total = data.reduce((acc, curr) => acc + curr.lastEightDays, 0);
    return total.toFixed(3);
  };
  const percentage =
    ((data[6].lastEightDays - data[6].lastWeek) / data[6].lastWeek) * 100;

  const date = new Date();

  return (
    <div>
      <div>
        <p className="text-lg font-semibold">{totalOrder(data)}</p>
      </div>
      <div>
        <div className="flex items-center">
          <p className="flex text-lg ">
            {percentage > 0 ? (
              <ArrowUpIcon className="h-7 w-5 text-green-500" />
            ) : (
              <ArrowDownIcon className="h-7 w-5 text-red-500" />
            )}
            <p>{percentage.toFixed(1)}% vs last week</p>
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
