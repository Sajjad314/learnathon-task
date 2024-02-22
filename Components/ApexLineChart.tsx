"use client";

import { dmSans } from "@/utils/fonts/index";
import { ApexOptions } from "apexcharts";
import { log } from "console";
import React, { useEffect, useRef } from "react";
import ReactApexChart from "react-apexcharts";

const ApexLineChart: React.FC = () => {
  const dataWithRange1 = [
    { month: "Jan", noOfUsers: 230 },
    { month: "Feb", noOfUsers: 200 },
    { month: "Mar", noOfUsers: 170 },
    { month: "April", noOfUsers: 140 },
    { month: "May", noOfUsers: 220 },
    { month: "June", noOfUsers: 300 },
    { month: "July", noOfUsers: 340 },
    { month: "Aug", noOfUsers: 320 },
    { month: "Sept", noOfUsers: 300 },
    { month: "Oct", noOfUsers: 250 },
    { month: "Nov", noOfUsers: 200 },
    { month: "Dec", noOfUsers: 170 },
  ];

  const dataWithRange2 = [
    { month: "Jan", noOfUsers: 330 },
    { month: "Feb", noOfUsers: 290 },
    { month: "Mar", noOfUsers: 250 },
    { month: "April", noOfUsers: 210 },
    { month: "May", noOfUsers: 240 },
    { month: "June", noOfUsers: 290 },
    { month: "July", noOfUsers: 280 },
    { month: "Aug", noOfUsers: 260 },
    { month: "Sept", noOfUsers: 240 },
    { month: "Oct", noOfUsers: 220 },
    { month: "Nov", noOfUsers: 150 },
    { month: "Dec", noOfUsers: 100 },
  ];
  const dataWithRange3 = [
    { month: "Jan", noOfUsers: 310 },
    { month: "Feb", noOfUsers: 350 },
    { month: "Mar", noOfUsers: 320 },
    { month: "April", noOfUsers: 290 },
    { month: "May", noOfUsers: 240 },
    { month: "June", noOfUsers: 250 },
    { month: "July", noOfUsers: 280 },
    { month: "Aug", noOfUsers: 300 },
    { month: "Sept", noOfUsers: 320 },
    { month: "Oct", noOfUsers: 350 },
    { month: "Nov", noOfUsers: 325 },
    { month: "Dec", noOfUsers: 290 },
  ];

  const monthlyActiveUsersLabels1 = dataWithRange1.map((data) => data.month);
  const monthlyActiveUsersData1 = dataWithRange1.map((data) => data.noOfUsers);
  const monthlyActiveUsersData2 = dataWithRange2.map((data) => data.noOfUsers);
  const monthlyActiveUsersData3 = dataWithRange3.map((data) => data.noOfUsers);

  const monthlyActiveUsersChartData = {
    series: [
      {
        name: "Visitors",
        type: "line",
        data: monthlyActiveUsersData1!,
      },
      {
        name: "Views",
        type: "line",
        data: monthlyActiveUsersData2!,
      },
      {
        name: "Conversations",
        type: "line",
        data: monthlyActiveUsersData3!,
      },
    ],
  };

  const options: ApexOptions = {
    legend: {
      markers: {
        radius: 4,
      },

      itemMargin: {
        horizontal: 15,
        vertical: 30,
      },
      fontFamily: dmSans.style.fontFamily,
      fontWeight: 700,
      fontSize: "12px",
      labels: {
        colors: "#17173F",
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [5, 5, 5],
      curve: "smooth",
      dashArray: [0, 0, 0],
    },
    tooltip: {
      custom: function ({ series, dataPointIndex, w }) {
        const month = dataWithRange1[dataPointIndex].month;
        let tooltipContent = `
          <div class="bg-white shadow-md p-2 flex flex-col top-2">
            <div class="font-bold mb-2">${month}, 2024</div>
            <div class="flex flex-row gap-5">
              ${series.map(
                (data: number[], index: number) =>
                  `<div key=${index} class="flex flex-col items-left gap-2">
                  
                  <p class="${
                    dmSans.style.fontFamily
                  } text-xs font-bold tracking-normal text-left ${
                    index == 0 && " text-[#17173F] "
                  } ${index == 1 && " text-[#51B900] "} ${
                    index == 2 && " text-[#A699F8] "
                  }mr-2">${w.globals.seriesNames[index]}</p>
                  <p class="${
                    dmSans.style.fontFamily
                  } text-xl font-bold tracking-normal text-left ml-2">${
                    data[dataPointIndex]
                  }</p>
                  </div>`
              )}
            </div>
          </div>`;

        return tooltipContent;
      },
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1],
    },
    labels: monthlyActiveUsersLabels1,
    colors: ["#17173F", "#51B900", "#A699F8"],
    yaxis: {
      min: 0,
      max: 400,
      tickAmount: 4,
      labels: {
        style: {
          fontFamily: dmSans.style.fontFamily,
          fontSize: "12px",
          fontWeight: 700,
          colors: "#7B91B0",
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          fontFamily: dmSans.style.fontFamily,
          fontSize: "10px",
          fontWeight: 700,
          colors: "#464E5F",
        },
      },
    },
  };

  return (
    <div>
      {true && (
        <ReactApexChart
          type="line"
          height={330}
          options={options}
          series={monthlyActiveUsersChartData.series}
        />
      )}
    </div>
  );
};

export default ApexLineChart;
