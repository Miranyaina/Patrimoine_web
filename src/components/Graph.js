// src/components/Graph.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function Graph({ data }) {
  const chartData = data.entries.map((entry, index) => ({
    name: entry.label,
    value: entry.value
  }));

  return (
    <div>
      <h3>Graphes</h3>
      <LineChart width={1000} height={500} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Graph;
