"use client";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import { poppins } from "./font";

const initialData = [
  {
    name: "Food Taste",
    value: 85,
    color: "#f99c30",
    cx: 270,
    cy: 140,
    radius: 100,
  },
  {
    name: "Packaging",
    value: 92,
    color: "#2fbfde",
    cx: 90,
    cy: 200,
    radius: 70,
  },
  {
    name: "Hygiene",
    value: 85,
    color: "#8884d8",
    cx: 150,
    cy: 70,
    radius: 50,
  },
];

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
  const [data, setData] = useState(initialData);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateData = useCallback((index: number, value: number) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[index].value = value;
      return newData;
    });
  }, []);

  return (
    <div className="w-1/2 p-6">
      <div className="font-bold text-lg mb-1">Your Rating</div>
      <div className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur
      </div>
      <PieChart width={500} height={300}>
        {data.map((entry, index) => (
          <Pie
            key={index}
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={[entry]}
            cx={entry.cx}
            cy={entry.cy}
            outerRadius={entry.radius}
            fill={entry.color}
            dataKey="value"
            startAngle={0}
          />
        ))}
      </PieChart>
    </div>
  );
}
