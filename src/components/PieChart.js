import React from "react";
import { PieChart, ResponsiveContainer, Pie, Legend, Cell } from "recharts";

const PieChartComponent = ({ data }) => {
  const COLORS = ["#00C49F", "#FFBB28"];
  return (
    <div style={{ width: 800, height: 300 }}>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart align="center">
            <Pie
              data={data}
              innerRadius={75}
              outerRadius={90}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;
