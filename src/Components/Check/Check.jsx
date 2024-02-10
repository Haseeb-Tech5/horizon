import React, { useEffect } from "react";
import Chart from "react-apexcharts";
// import ApexCharts from "apexcharts";
import Icon18 from "../Icons/Icon18";
import Icon19 from "../Icons/Icon19";
import Icon20 from "../Icons/Icon20";
import Icon21 from "../Icons/Icon21";
import "../../App.css";

const Check = () => {
  //   useEffect(() => {
  //     const options = {
  //       series: [
  //         {
  //           name: "Profit",
  //           data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  //         },
  //         {
  //           name: "Revenue",
  //           data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  //         },
  //         {
  //           name: "Cash",
  //           data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  //         },
  //       ],
  //       chart: {
  //         type: "bar",
  //         height: 350,
  //         toolbar: {
  //           show: false, // Hide the toolbar, including the hamburger icon
  //         },
  //       },
  //       plotOptions: {
  //         bar: {
  //           horizontal: false,
  //           columnWidth: "55%",
  //           endingShape: "rounded",
  //         },
  //       },
  //       dataLabels: {
  //         enabled: false,
  //       },
  //       stroke: {
  //         show: true,
  //         width: 2,
  //         colors: ["transparent"],
  //       },
  //       xaxis: {
  //         categories: [
  //           "Feb",
  //           "Mar",
  //           "Apr",
  //           "May",
  //           "Jun",
  //           "Jul",
  //           "Aug",
  //           "Sep",
  //           "Oct",
  //         ],
  //       },
  //       yaxis: {
  //         title: {
  //           text: "$ (thousands)",
  //         },
  //       },
  //       fill: {
  //         opacity: 1,
  //       },
  //       tooltip: {
  //         y: {
  //           formatter: function (val) {
  //             return "$ " + val + " thousands";
  //           },
  //         },
  //       },
  //       grid: {
  //         lines: {
  //           show: false,
  //         },
  //       },
  //     };

  //     const chart = new ApexCharts(document.querySelector("#chartt1"), options);
  //     chart.render();
  //     return () => chart.destroy();
  //   }, []);
  return (
    <div className="flex justify-center mt-[2%]">
      <div className="w-[95%] flex gap-[2%] max-[800px]:flex-col">
        <div className="w-[50%] bg-[white] rounded-[20px] max-[800px]:w-[100%]">
          <div className="flex justify-center items-center">
            <div className="w-[92%]  mt-[4%]">
              <div className="w-[100%] flex justify-between ">
                <div className="font-[poppins] text-[20px] font-[500] mt-[1px] text-[black] flex items-center">
                  Check Table
                </div>
                <div className="flex items-center">
                  <div className="flex items-center h-[50px] w-[50px] rounded-[10px] bg-[#f4f7fe] justify-center">
                    <Icon21 />
                  </div>
                </div>
              </div>
              {/* <div className="w-[89%] flex justify-between  font-[poppins] text-[#a8a9ac] text-[13px] font-[500] mt-[2%]">
                <h2>NAME</h2>
                <h2>PROGRESS</h2>
                <h2>QUANTITY</h2>
                <h2>DATE</h2>
              </div> */}
              <div className="w-[100%] ">
                <table className="w-[100%] divide-y divide-[#8080808a] mt-[6%] ">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className=" text-left  font-[poppins] text-[#a8a9ac] text-[14px] font-[500] py-4 "
                      >
                        NAME
                      </th>
                      <th
                        scope="col"
                        className=" text-left font-[poppins] text-[#a8a9ac] text-[14px] font-[500] py-4"
                      >
                        PROGRESS
                      </th>
                      <th
                        scope="col"
                        className=" text-left font-[poppins] text-[#a8a9ac] text-[14px] font-[500] py-4"
                      >
                        QUANTITY
                      </th>
                      <th
                        scope="col"
                        className="text-left font-[poppins] text-[#a8a9ac] text-[14px] font-[500] py-4 "
                      >
                        DATE
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white font-[poppins] font-[600] text-[14px] text-[#404041]">
                    <tr>
                      <td className="pt-5 pb-6">
                        <div className="flex items-center gap-[5%]">
                          <div className="content">
                            <label className="checkBox">
                              <input id="ch1" type="checkbox" />
                              <div className="transition"></div>
                            </label>
                          </div>
                          Marketplace
                        </div>
                      </td>
                      <td className="pt-5 pb-6">75.5%</td>
                      <td className="pt-5 pb-6">2458</td>
                      <td className="pt-5 pb-6">Apr 26, 2024</td>
                    </tr>

                    <tr>
                      <td className=" pb-6">
                        <div className="flex items-center gap-[5%]">
                          <div className="content">
                            <label className="checkBox">
                              <input id="ch1" type="checkbox" />
                              <div className="transition"></div>
                            </label>
                          </div>
                          Venus DB PRO
                        </div>
                      </td>
                      <td className="pb-6">35.4%</td>
                      <td className="pb-6">1485</td>
                      <td className="pb-6">Jul 20, 2024</td>
                    </tr>

                    <tr>
                      <td className=" pb-6">
                        <div className="flex items-center gap-[5%]">
                          <div className="content">
                            <label className="checkBox">
                              <input id="ch1" type="checkbox" />
                              <div className="transition"></div>
                            </label>
                          </div>
                          Marketplace
                        </div>
                      </td>
                      <td className="pb-6">75.5%</td>
                      <td className="pb-6">258</td>
                      <td className="pb-6">Nov 29, 2024</td>
                    </tr>

                    <tr>
                      <td className=" pb-6">
                        <div className="flex items-center gap-[5%]">
                          <div className="content">
                            <label className="checkBox">
                              <input id="ch1" type="checkbox" />
                              <div className="transition"></div>
                            </label>
                          </div>
                          Venus 3D Asset
                        </div>
                      </td>
                      <td className="pb-6">100%</td>
                      <td className="pb-6">858</td>
                      <td className="pb-6">Oct 24, 2024</td>
                    </tr>

                    <tr>
                      <td className=" pb-6">
                        <div className="flex items-center gap-[5%]">
                          <div className="content">
                            <label className="checkBox">
                              <input id="ch1" type="checkbox" />
                              <div className="transition"></div>
                            </label>
                          </div>
                          Venus DS
                        </div>
                      </td>
                      <td className="pb-6">25%</td>
                      <td className="pb-6">1024</td>
                      <td className="pb-6">Sep 30, 2024</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-[50%] bg-[white] rounded-[20px] max-[800px]:w-[100%] max-[800px]:mt-[3%]">
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

              <div className="w-[100%] max-[1000px]:mt-[25%] max-[900px]:mt-[32%] max-[350px]:w-[110%]">
                <div
                  id="chartt1"
                  className="w-[100%] max-[350px]:ml-[-3%]"
                ></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Check;
