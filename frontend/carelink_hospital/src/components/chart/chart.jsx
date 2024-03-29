import React from "react";
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

const data = [
  { date: "2024-03-01", patients: 10 },
  { date: "2024-03-02", patients: 15 },
  { date: "2024-03-03", patients: 20 },
  { date: "2024-03-01", patients: 30 },
  { date: "2024-03-08", patients: 22 },
  { date: "2024-03-07", patients: 2 },
  { date: "2024-03-06", patients: 17 },
  { date: "2024-03-05", patients: 14 },
  { date: "2024-03-04", patients: 23 },
  // Add more data points as needed
];

const PatientChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="patients"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          strokeWidth={5}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PatientChart;
