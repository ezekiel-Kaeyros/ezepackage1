"use client";

import React from "react";
import ModuleDropDown from "./moduleDropdown/moduleDropdown";
import AnimateClick from "@/app/common/ui/animate-click/AnimateClick";

function DashboardSideBar() {
  const buttonVal = ["Users", "Roles", "Sessions"];

  return (
    <div className="">
      <h1 className="text-xl font-bold">Manage Application</h1>

      <div className="mt-6">
        <ModuleDropDown />
      </div>
      <div className="flex flex-col gap-4">
        {buttonVal.map((val, index) => {
          return (
            <div key={index}>
              <AnimateClick>
                <button className="w-full text-left text-white font-bold p-2 bg-gray-700 hover:bg-gray-600 rounded">
                  {val}
                </button>
              </AnimateClick>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DashboardSideBar;
