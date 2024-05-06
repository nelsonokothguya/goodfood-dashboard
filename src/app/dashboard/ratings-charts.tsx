"use client";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { poppins } from "./font";

type Data = {
  name: string;
  value: number;
  color: string;
  cx: number;
  cy: number;
  radius: number;
};

type ActiveShapeProps = {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: {
    name: string;
    value: number;
    color: string;
    cx: number;
    cy: number;
    radius: number;
  };
  value: number;
};

const initialData = [
  {
    name: "Food Taste",
    value: 85,
    color: "#f99c30",
    cx: 225,
    cy: 170,
    radius: 100,
  },
  {
    name: "Packaging",
    value: 92,
    color: "#2fbfde",
    cx: 50,
    cy: 200,
    radius: 52,
  },
  {
    name: "Hygiene",
    value: 85,
    color: "#8884d8",
    cx: 120,
    cy: 90,
    radius: 50,
  },
];

const renderActiveShape = (props: unknown) => {
  if (!isActiveShapeProps(props)) {
    throw new Error("Invalid props passed to renderActiveShape");
  }

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

function isActiveShapeProps(props: any): props is ActiveShapeProps {
  return (
    "cx" in props &&
    "cy" in props &&
    "innerRadius" in props &&
    "outerRadius" in props &&
    "startAngle" in props &&
    "endAngle" in props &&
    "fill" in props &&
    "payload" in props &&
    typeof props.payload === "object" &&
    "value" in props
  );
}

export default function RatingsChart() {
  const [data, setData] = useState(initialData);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="font-bold text-lg mb-1">Your Rating</div>
      <div className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
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
      </ResponsiveContainer>
    </div>
  );
}
