import React from "react";
import { PieChart, ResponsiveContainer, Pie, Legend, Cell } from "recharts";

const PieChartComponent = ({ data }) => {
  const COLORS = ["#00C49F", "#FFBB28"];
  const renderLegend = (props) => {
    const { payload } = props;
    return (
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          textAlign: "center"
        }}
      >
        {payload.map((entry, index) => {
          return (
            <li
              key={`item-${index}`}
              style={{ color: "#555", paddingRight: 20 }}
            >
              <span
                style={{
                  backgroundColor: entry.color,
                  width: 10,
                  height: 10,
                  display: "inline-block",
                  marginRight: 5
                }}
              ></span>
              {entry.value}
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div
      style={{
        width: 800,
        height: 300,
        borderBottom: "1px solid #ddd",
        paddingBottom: 10
      }}
    >
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
            <Legend align="center" content={renderLegend} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;
