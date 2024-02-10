import React, { useState } from "react";
import Icon3 from "../Icons/Icon3";
import Icon1 from "../Icons/Icon1";
import Icon2 from "../Icons/Icon2";
import Icon4 from "../Icons/Icon4";
import Icon5 from "../Icons/Icon5";
import Icon6 from "../Icons/Icon6";
import Icon7 from "../Icons/Icon7";
import Icon12 from "../Icons/Icon12";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [selectedOption, setSelectedOption] = useState("Option1");

  return (
    <div
      className={`w-[320px] bg-[white] text-white h-screen flex flex-col justify-between  fixed z-20 top-0 left-0 transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        className=" w-[95%] flex justify-end mt-[5%]"
        onClick={toggleSidebar}
      >
        <Icon12 onClick={toggleSidebar} />
      </div>
      <div className="text-black flex justify-center items-center pt-[5%] pb-[8%] font-[poppins] text-[32px] ">
        <span className=" font-[600]">HORIZON</span>{" "}
        <span className=" font-[400] ml-[2%]">FREE</span>
      </div>
      <hr className="border-grey" />
      <div className="flex flex-col items-start justify-center flex-1 w-[100%] font-[poppins] text-[16px] font-[500] text-[#808080a4] mb-[15%]">
        <div
          className="flex items-center justify-end w-[100%] py-[2%]"
          onClick={() => setSelectedOption("Option1")}
        >
          <a href="#" className="flex items-center   w-[92%] relative">
            <div className="flex items-center justify-center  w-[100%]">
              <div className="w-8">
                {" "}
                <Icon3 selected={selectedOption === "Option1"} />{" "}
              </div>
              <div
                className={`ml-[5%] w-[100%] ${
                  selectedOption === "Option1"
                    ? "text-[#363636cc]  text-[17px] mt-[1%]"
                    : ""
                }`}
              >
                Main Dashboard
              </div>
            </div>
            <div className="mr-[-8.4%] absolute right-0">
              {selectedOption === "Option1" && <Icon1 />}
            </div>
          </a>
        </div>
        <div
          className="flex items-center justify-end w-[100%] py-[2%]"
          onClick={() => setSelectedOption("Option2")}
        >
          <a href="#" className="flex items-center   w-[92%] relative">
            <div className="flex items-center justify-center  w-[100%]">
              <div className="w-8">
                {" "}
                <Icon2 selected={selectedOption === "Option2"} />
              </div>
              <div
                className={`ml-[5%] w-[100%] ${
                  selectedOption === "Option2"
                    ? "text-[#363636cc]  text-[17px] mt-[1%]"
                    : ""
                }`}
              >
                {" "}
                NFT Marketplace
              </div>
            </div>
            <div className="mr-[-8.4%] absolute right-0">
              {selectedOption === "Option2" && <Icon1 />}
            </div>
          </a>
        </div>
        <div
          className="flex items-center justify-end w-[100%] py-[2%]"
          onClick={() => setSelectedOption("Option3")}
        >
          <a href="#" className="flex items-center w-[92%] relative">
            <div className="flex items-center justify-center  w-[100%]">
              <div className="w-8">
                {" "}
                <Icon4 selected={selectedOption === "Option3"} />{" "}
              </div>
              <div
                className={`ml-[5%] w-[100%] ${
                  selectedOption === "Option3"
                    ? "text-[#363636cc]  text-[17px] mt-[1%]"
                    : ""
                }`}
              >
                {" "}
                Data Tables
              </div>
            </div>
            <div className="mr-[-8.4%] absolute right-0">
              {selectedOption === "Option3" && <Icon1 />}
            </div>
          </a>
        </div>
        <div
          className="flex items-center justify-end w-[100%] py-[2%]"
          onClick={() => setSelectedOption("Option4")}
        >
          <a href="#" className="flex items-center  w-[92%] relative">
            <div className="flex items-center justify-center  w-[100%]">
              <div className="w-8">
                {" "}
                <Icon5 selected={selectedOption === "Option4"} />{" "}
              </div>
              <div
                className={`ml-[5%] w-[100%] ${
                  selectedOption === "Option4"
                    ? "text-[#363636cc]  text-[17px] mt-[1%]"
                    : ""
                }`}
              >
                {" "}
                Profiles
              </div>
            </div>
            <div className="mr-[-8.4%] absolute right-0">
              {selectedOption === "Option4" && <Icon1 />}
            </div>
          </a>
        </div>
        <div
          className="flex items-center justify-end w-[100%] py-[2%]"
          onClick={() => setSelectedOption("Option5")}
        >
          <a href="#" className="flex items-center  w-[92%] relative">
            <div className="flex items-center justify-center  w-[100%]">
              <div className="w-8">
                {" "}
                <Icon6 selected={selectedOption === "Option5"} />{" "}
              </div>
              <div
                className={`ml-[5%] w-[100%] ${
                  selectedOption === "Option5"
                    ? "text-[#363636cc]  text-[17px] mt-[1%]"
                    : ""
                }`}
              >
                Sign In
              </div>
            </div>
            <div className="mr-[-8.4%] absolute right-0">
              {selectedOption === "Option5" && <Icon1 />}
            </div>
          </a>
        </div>
        <div
          className="flex items-center justify-end w-[100%] py-[2%]"
          onClick={() => setSelectedOption("Option6")}
        >
          <a href="#" className="flex items-center  w-[92%] relative">
            <div className="flex items-center justify-center  w-[100%]">
              <div className="w-8">
                {" "}
                <Icon7 selected={selectedOption === "Option6"} />{" "}
              </div>
              <div
                className={`ml-[5%] w-[100%] ${
                  selectedOption === "Option6"
                    ? "text-[#363636cc]  text-[17px] mt-[1%]"
                    : ""
                }`}
              >
                {" "}
                RTL Admin
              </div>
            </div>
            <div className="mr-[-8.4%] absolute right-0">
              {selectedOption === "Option6" && <Icon1 />}
            </div>
          </a>
        </div>
      </div>

      <div className="relative flex w-[100%]  items-center justify-center flex-col text-center font-[poppins]">
        <div className="absolute -top-12 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-[#3a25df] ">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0923 27.3033H30.8176V36.3143H10.0923V27.3033Z"
              fill="white"
            />
            <path
              d="M31.5385 29.1956C31.5385 26.2322 30.3707 23.3901 28.2922 21.2947C26.2136 19.1992 23.3945 18.022 20.4549 18.022C17.5154 18.022 14.6963 19.1992 12.6177 21.2947C10.5392 23.3901 9.37143 26.2322 9.37143 29.1956L20.4549 29.1956H31.5385Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.5 31.989C26.8452 31.989 31.989 26.8452 31.989 20.5C31.989 14.1548 26.8452 9.01099 20.5 9.01099C14.1548 9.01099 9.01099 14.1548 9.01099 20.5C9.01099 26.8452 14.1548 31.989 20.5 31.989ZM20.5 41C31.8218 41 41 31.8218 41 20.5C41 9.17816 31.8218 0 20.5 0C9.17816 0 0 9.17816 0 20.5C0 31.8218 9.17816 41 20.5 41Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="w-[88%] bg-[#3a25df]  rounded-tl-[25px] rounded-tr-[25px] pt-[18%] pb-[10%]">
          <div className="text-white text-[22px] font-[500] ">
            Upgrade to Pro
          </div>
          <div className="text-white text-[15px] font-[400] leading-[20px] mt-[3%] flex items-center justify-center tracking-[-0.6px]">
            <div className="w-[90%]">
              {" "}
              Improve your development process and start doing more with Horizon
              UI PRO!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
