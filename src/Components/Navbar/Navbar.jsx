import React from "react";
import Icon8 from "../Icons/Icon8";
import pic from "../../Asset/pic.svg";
import Icon9 from "../Icons/Icon9";
import Icon10 from "../Icons/Icon10";
import Icon11 from "../Icons/Icon11";
import Icon13 from "../Icons/Icon13";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="w-[100%] flex items-center justify-center ">
      <nav className="bg-[#ffffff1a]  fixed top-0 z-10 mt-[2%] rounded-[15px] py-[5px] w-calc-100-320 max-[1200px]:w-[97%] max-[700px]:h-[150px] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto  min-[1201px]:px-8 max-[1200px]:px-3">
          <div className="flex justify-between h-20 w-[100%] max-[700px]:flex-col ">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex flex-col">
                <div className="text-black font-[400] text-[14px] font-[poppins]">
                  Pages / Main Dashboard
                </div>
                <div className="text-black font-[600] text-[30px] font-[poppins]">
                  Main Dashboard
                </div>
              </div>
            </div>
            <div className="flex items-center  max-[786px]:w-[100%] max-[786px]:flex  justify-end  ">
              <div className="w-[420px] h-[60px] bg-[white] flex items-center justify-evenly rounded-[40px]  max-[786px]:w-[90%] max-[700px]:w-[100%] ">
                <div className="flex items-center  w-[60%]  max-[750px]:w-[58%] max-[700px]:w-[65%] max-[550px]:w-[62%] max-[440px]:w-[57%]  max-[380px]:w-[52%] max-[340px]:w-[47%] min-[1201px]:w-[65%]">
                  <div className="absolute z-[1] flex ml-[10px]">
                    <Icon13 />
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="relative  pl-[14%] py-[4%]  rounded-[40px] focus:outline-none focus:border-blue-500 w-[275px] bg-[#f4f7fe] max-[1200px]:w-[230px]  max-[786px]:w-[100%] max-[750px]:py-[5%] max-[750px]:pl-[18%] max-[700px]:pl-[10%] max-[700px]:py-[3%] max-[550px]:py-[4%] max-[550px]:pl-[15%] max-[440px]:pl-[18%] max-[400px]:pl-[23%] max-[400px]:py-[6%]  max-[440px]:py-[5%] max-[380px]:py-[6%] max-[340px]:py-[7%]"
                  />
                </div>
                <div className="flex  justify-between w-[15%] max-[1200px]:w-[23%] max-[400px]:w-[25%] max-[340px]:w-[28%]">
                  <div className="min-[1201px]:hidden" onClick={toggleSidebar}>
                    {" "}
                    <Icon11 onClick={toggleSidebar} />
                  </div>
                  <Icon8 />
                  <Icon10 />
                  <Icon9 />
                </div>
                <div className="w-12 h-12 bg-[white] rounded-full flex items-center justify-center">
                  {" "}
                  <img src={pic} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
