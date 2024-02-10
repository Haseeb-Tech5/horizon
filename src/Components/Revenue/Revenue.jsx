import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts"; // Add this line to import ApexCharts
import Icon18 from "../Icons/Icon18";
import Icon19 from "../Icons/Icon19";
import Icon20 from "../Icons/Icon20";

const Revenue = () => {
  useEffect(() => {
    const options = {
      series: [
        {
          name: "Revenue",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "Profit",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false, // Hide toolbar icons
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "category",
        categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR"],
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            if ([0, 30, 60, 90, 120].includes(value)) {
              return "";
            }
            return value;
          },
        },
      },
      grid: {
        stroke: {
          colors: ["#f0f0f0"], // Change the color of horizontal grid lines
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Clean up function
    return () => {
      chart.destroy();
    };
  }, []);
  useEffect(() => {
    const options = {
      series: [
        {
          name: "Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "Cash",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false, // Hide the toolbar, including the hamburger icon
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
      grid: {
        lines: {
          show: false,
        },
      },
    };

    const chart = new ApexCharts(document.querySelector("#chartt"), options);
    chart.render();

    // Clean up function to destroy the chart when the component is unmounted
    return () => chart.destroy();
  }, []);
  return (
    <div className="flex justify-center ">
      <div className="w-[95%] flex gap-[2%] max-[800px]:flex-col">
        <div className="w-[50%] bg-[white] rounded-[20px] max-[800px]:w-[100%]">
          <div className="flex justify-center items-center">
            <div className="w-[92%]  mt-[4%]">
              <div className="w-[100%] flex justify-between">
                <div className="flex w-[140px] bg-[#f4f7fe] justify-center items-center h-[40px] gap-[8%] rounded-[10px]">
                  <Icon18 />
                  <div className="font-[poppins] text-[15px] font-[500] mt-[1px] text-[#808080a4] ">
                    This month
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center h-[50px] w-[50px] rounded-[10px] bg-[#f4f7fe] justify-center">
                    <Icon20 />
                  </div>
                </div>
              </div>
              <div className="w-[100%] flex gap-[5%] mt-[4%] max-[1000px]:flex-col">
                <div className="w-[20%]  flex flex-col">
                  <h2 className="font-[poppins] text-[32px] text-[black] font-[500] mb-[4%]">
                    $37.5K
                  </h2>
                  <h2 className="font-[poppins] text-[#808080a4] text-[15px]">
                    Total Spent
                  </h2>
                  <div className="flex gap-[4%] mt-[2%]">
                    <div className="flex items-center mb-[6%]">
                      <Icon19 />
                    </div>
                    <h2 className="font-[poppins] text-[15px] font-[600] text-[#53bd5c]">
                      +2.45%
                    </h2>
                  </div>
                </div>
                <div className="w-[80%] max-[1000px]:w-[115%]  max-[900px]:w-[120%] max-[800px]:w-[110%]">
                  <div
                    id="chart"
                    className="w-[100%] max-[1000px]:ml-[-10%] max-[800px]:ml-[-6%]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-[white] rounded-[20px] max-[800px]:w-[100%] max-[800px]:mt-[3%]">
          <div className="flex justify-center items-center">
            <div className="w-[85%]  mt-[4%]">
              <div className="w-[100%] flex justify-between ">
                <div className="font-[poppins] text-[20px] font-[500] mt-[1px] text-[black] flex items-center">
                  Weekly Revenue
                </div>
                <div className="flex items-center">
                  <div className="flex items-center h-[50px] w-[50px] rounded-[10px] bg-[#f4f7fe] justify-center">
                    <Icon20 />
                  </div>
                </div>
              </div>

              <div className="w-[100%] max-[1000px]:mt-[25%] max-[800px]:mt-[0%] max-[900px]:mt-[32%] max-[350px]:w-[110%]">
                <div
                  id="chartt"
                  className="w-[100%] max-[350px]:ml-[-3%]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
