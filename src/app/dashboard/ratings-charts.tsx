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
        fontSize={50}
      >
        {`${value}%`}
      </text>
      <text
        x={cx}
        y={cy}
        dy={20}
        textAnchor="middle"
        fill="white"
        fontSize={25}
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
    <PieChart width={1200} height={1200}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data3}
        cx={600}
        cy={320}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
        startAngle={0}
      />
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data2}
        cx={450}
        cy={580}
        outerRadius={140}
        fill="#2fbfde"
        dataKey="value"
        startAngle={0}
      />
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data1}
        cx={800}
        cy={500}
        outerRadius={180}
        fill="#f99c30"
        dataKey="value"
        startAngle={0}
      />
    </PieChart>
  );
}
