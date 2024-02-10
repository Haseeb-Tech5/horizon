import React from "react";
import Icon14 from "../Icons/Icon14";
import Icon15 from "../Icons/Icon15";
import Icon16 from "../Icons/Icon16";
import Icon17 from "../Icons/Icon17";
import Icon20 from "../Icons/Icon20";
const Balance = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[95%]">
        <div className="w-[100%]  h-[auto] pt-[12%] pb-[2%] flex flex-wrap justify-between max-[1362px]:pt-[14%] max-[1200px]:pt-[12%] max-[980px]:pt-[14%] max-[820px]:pt-[16%] max-[700px]:pt-[24%] max-[690px]:pt-[26%]  max-[630px]:pt-[29%] max-[550px]:pt-[33%] max-[480px]:pt-[36%] max-[430px]:pt-[39%] max-[400px]:pt-[45%] max-[340px]:pt-[50%]">
          <div className="w-[32%] max-[1000px]:w-[49%] max-[700px]:w-[100%] flex justify-end bg-[white] rounded-[20px]  mb-[2%]">
            <div className="flex w-[95%] gap-[6%] py-[4.5%] max-[700px]:py-[3%] ">
              <div className="flex items-center">
                <div className="flex items-center h-[50px] w-[50px] rounded-full bg-[#f4f7fe] justify-center">
                  <Icon20 />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#808080a4] font-[poppins] font-[500] text-[15px]">
                  Earings
                </h2>
                <h2 className="text-[black] font-[poppins] font-[500] text-[22px]">
                  $340.5
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[32%] max-[1000px]:w-[49%] max-[700px]:w-[100%] flex justify-end bg-[white] rounded-[20px] mb-[2%]">
            <div className="flex w-[95%] gap-[6%] py-[4.5%] max-[700px]:py-[3%]">
              <div className="flex items-center">
                <div className="flex items-center h-[50px] w-[50px] rounded-full bg-[#f4f7fe] justify-center">
                  <Icon16 />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#808080a4] font-[poppins] font-[500] text-[15px]">
                  Spend this month
                </h2>
                <h2 className="text-[black] font-[poppins] font-[500] text-[22px]">
                  $642.39
                </h2>
              </div>
            </div>
          </div>{" "}
          <div className="w-[32%] max-[1000px]:w-[49%] max-[700px]:w-[100%] flex justify-end bg-[white] rounded-[20px] mb-[2%]">
            <div className="flex w-[95%] gap-[6%] py-[4.5%] max-[700px]:py-[3%]">
              <div className="flex items-center">
                <div className="flex items-center h-[50px] w-[50px] rounded-full bg-[#f4f7fe] justify-center">
                  <Icon20 />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#808080a4] font-[poppins] font-[500] text-[15px]">
                  Sales
                </h2>
                <h2 className="text-[black] font-[poppins] font-[500] text-[22px]">
                  $574.34
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[32%] max-[1000px]:w-[49%] max-[700px]:w-[100%] flex justify-end bg-[white] rounded-[20px] max-[1000px]:mb-[2%]">
            <div className="flex w-[95%] gap-[6%] py-[4.5%] max-[700px]:py-[3%]">
              <div className="flex items-center">
                <div className="flex items-center h-[50px] w-[50px] rounded-full bg-[#f4f7fe] justify-center">
                  <Icon17 />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#808080a4] font-[poppins] font-[500] text-[15px]">
                  Your Balance
                </h2>
                <h2 className="text-[black] font-[poppins] font-[500] text-[22px]">
                  $1,000
                </h2>
              </div>
            </div>
          </div>{" "}
          <div className="w-[32%] max-[1000px]:w-[49%] max-[700px]:w-[100%] flex justify-end bg-[white] rounded-[20px] max-[700px]:mb-[2%] ">
            <div className="flex w-[95%] gap-[6%] py-[4.5%] max-[700px]:py-[3%]">
              <div className="flex items-center">
                <div className="flex items-center h-[50px] w-[50px] rounded-full bg-[#f4f7fe] justify-center">
                  <Icon20 />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#808080a4] font-[poppins] font-[500] text-[15px]">
                  New Tasks
                </h2>
                <h2 className="text-[black] font-[poppins] font-[500] text-[22px]">
                  145
                </h2>
              </div>
            </div>
          </div>{" "}
          <div className="w-[32%] max-[1000px]:w-[49%] max-[700px]:w-[100%] flex justify-end bg-[white] rounded-[20px]">
            <div className="flex w-[95%] gap-[6%] py-[4.5%] max-[700px]:py-[3%]">
              <div className="flex items-center">
                <div className="flex items-center h-[50px] w-[50px] rounded-full bg-[#f4f7fe] justify-center">
                  <Icon15 />
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#808080a4] font-[poppins] font-[500] text-[15px]">
                  Total Projects
                </h2>
                <h2 className="text-[black] font-[poppins] font-[500] text-[22px]">
                  $2433
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
