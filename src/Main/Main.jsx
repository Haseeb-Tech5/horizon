import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import Balance from "../Components/Balance/Balance";
import Revenue from "../Components/Revenue/Revenue";
import Check from "../Components/Check/Check";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="overflow-hidden w-[100%] ">
      <Sidebar
        isOpen={isSmallScreen ? isSidebarOpen : true}
        toggleSidebar={toggleSidebar}
      />

      <div className=" bg-[#f4f7fe] absolute right-0 w-calc-100-320 max-[1200px]:w-[100%] overflow-hidden">
        <Navbar toggleSidebar={toggleSidebar} />
        <Balance />
        <Revenue />
        <Check />
      </div>
    </div>
  );
};

export default Main;
