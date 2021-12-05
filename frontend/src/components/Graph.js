import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend
} from "recharts";

const data = [
  {
    name: "6h00",
    LIGNE_J: 700,
    RER_A: 1000,
  },
  {
    name: "6h30",
    LIGNE_J: 850,
    RER_A: 1300,
  },
  {
    name: "7h00",
    LIGNE_J: 1000,
    RER_A: 1700,
  },
  {
    name: "7h30",
    LIGNE_J: 1300,
    RER_A: 2000,
  },
  {
    name: "8h00",
    LIGNE_J: 1200,
    RER_A: 2000,
  },
  {
    name: "8h30",
    LIGNE_J: 800,
    RER_A: 1300,
  },

  {
    name: "9h00",
    LIGNE_J: 500,
    RER_A: 1000,
  },
];

export default function Graph() {
  return (
            <LineChart width={280} height={200} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Line type="monotone" dataKey="RER_A" stroke="#ff0000"/>
            <Line type="monotone" dataKey="LIGNE_J" stroke="#82ca9d"/>
            </LineChart> 
  );
}
