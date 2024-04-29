"use client";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { poppins } from "./font";

const data1 = [{ name: "Food Taste", value: 85 }];
const data2 = [{ name: "Packaging", value: 92 }];
const data3 = [{ name: "Hygiene", value: 85 }];

const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      <text
        x={cx}
        y={cy}
        dy={-10}
        textAnchor="middle"
        fill="white"
        fontSize={25}
      >
        {`${value}%`}
      </text>
      <text
        x={cx}
        y={cy}
        dy={20}
        textAnchor="middle"
        fill="white"
        fontSize={15}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        startAngle={80}
        endAngle={-170}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

export default function RatingsChart() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-1/2">
      <div className="font-bold text-lg mb-5">Your Rating</div>
      <div className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur
      </div>
      <PieChart width={500} height={300}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data3}
          cx={140}
          cy={70}
          outerRadius={55}
          fill="#8884d8"
          dataKey="value"
          startAngle={0}
        />
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data2}
          cx={90}
          cy={200}
          outerRadius={60}
          fill="#2fbfde"
          dataKey="value"
          startAngle={0}
        />
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data1}
          cx={270}
          cy={140}
          outerRadius={100}
          fill="#f99c30"
          dataKey="value"
          startAngle={0}
        />
      </PieChart>
    </div>
  );
}
