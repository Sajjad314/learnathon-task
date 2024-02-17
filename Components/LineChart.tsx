"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { ChartData, Chart as ChartJS, registerables } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
ChartJS.register(...registerables);

function LineChart({
  chartData,
}: {
  chartData: ChartData<"line", (number | [number, number] | null)[], unknown>;
}) {
  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
      },
      y: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 5, // Adjust this to set the maximum number of ticks/columns
        },
      },
    },
  };
  return <Line data={chartData} options={options} />;
}

export default LineChart;
