"use client";

import React, { useState } from "react";
import DashboardSideBar from "@/app/common/components/sidebar/sidebar";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:w-64 lg:w-2/12 bg-white py-4 pl-6 pr-16 h-full z-50`}
      >
        <DashboardSideBar />
      </div>

      {/* Content */}
      <div
        className={`flex-1 py-4 px-10 transition-all duration-300 ease-in-out bg-[#f5f7f9] ${
          isSidebarOpen ? "ml-64 md:ml-80 lg:ml-[20%]" : "lg:ml-72"
        }`}
      >
        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden p-2 bg-blue-500 text-white rounded mb-4"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
        {children}
      </div>
    </div>
  );
};

export default LayoutComponent;
