"use client";

import { useState } from "react";
import LineChart from "./LineChart";
import Chart from "chart.js/auto";

const Graph = () => {
  const UserData = [
    { month: "Jan", value: 182 },
    { month: "Feb", value: 256 },
    { month: "Mar", value: 124 },
    { month: "Apr", value: 292 },
    { month: "May", value: 89 },
    { month: "Jun", value: 305 },
    { month: "Jul", value: 172 },
    { month: "Aug", value: 95 },
    { month: "Sep", value: 227 },
    { month: "Oct", value: 203 },
    { month: "Nov", value: 58 },
    { month: "Dec", value: 314 },
  ];
  const userData2 = [
    { month: "Jan", value: 250 },
    { month: "Feb", value: 180 },
    { month: "Mar", value: 320 },
    { month: "Apr", value: 200 },
    { month: "May", value: 280 },
    { month: "Jun", value: 150 },
    { month: "Jul", value: 310 },
    { month: "Aug", value: 220 },
    { month: "Sep", value: 290 },
    { month: "Oct", value: 180 },
    { month: "Nov", value: 270 },
    { month: "Dec", value: 230 },
  ];

  const userData3 = [
    { month: "Jan", value: 300 },
    { month: "Feb", value: 220 },
    { month: "Mar", value: 180 },
    { month: "Apr", value: 270 },
    { month: "May", value: 320 },
    { month: "Jun", value: 190 },
    { month: "Jul", value: 250 },
    { month: "Aug", value: 310 },
    { month: "Sep", value: 230 },
    { month: "Oct", value: 280 },
    { month: "Nov", value: 200 },
    { month: "Dec", value: 290 },
  ];

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        // label: "Line 1",
        data: UserData.map((data) => data.value),

        borderWidth: 4,
        // fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4, // Set tension to make the line smooth
        pointRadius: 1,
      },
      {
        data: userData2.map((data) => data.value),

        borderWidth: 4,
        // fill: true,
        backgroundColor: "#51B900",
        borderColor: "#51B900",
        tension: 0.4, // Set tension to make the line smooth
        pointRadius: 1,
      },
      {
        // label: "Line 3",
        data: userData3.map((data) => data.value),

        borderWidth: 4,
        // fill: true,
        backgroundColor: "#A699F8",
        borderColor: "#A699F8",
        tension: 0.4, // Set tension to make the line smooth
        pointRadius: 1,
      },
    ],
  });

  return (
    <div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
    </div>
  );
};

export default Graph;
