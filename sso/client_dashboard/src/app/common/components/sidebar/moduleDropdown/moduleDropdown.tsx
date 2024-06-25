"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { setModuleId } from "src/redux/features/module";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";

interface ModuleProps {
  name: string;
  redirectForgotPasswordUrl: string;
  redirectLoginUrl: string;
  redirectRegisterUrl: string;
  secretId: string;
  secretKey: string;
  __v: number;
  _id: string;
}

const ModuleDropDown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Application");
  const [data, setData] = useState<ModuleProps[]>([]);
  const [error, setError] = useState<any>();
  const [isLoadingState, setIsLoadingState] = useState(true);
  const [creatModuleModalIsOpen, setCreateModuleModalIsOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (_id: string, name: string) => {
    setSelectedOption(name);
    dispatch(setModuleId(_id));
    setIsDropdownOpen(false);
    router.push(`/en/dashboard/application/?application=${name}`);
  };

  // fetch all the users here.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:1337/applications/");
        if (!response.ok) {
          setIsLoadingState(false);
          throw new Error("Failed to fetch data");
        }
        if (response.ok) {
          const result = await response.json();
          console.log(result, "application");
          setData(result);
          setIsLoadingState(false);
          router.refresh();
        }
      } catch (error) {
        setError(error);
        setIsLoadingState(false);
      }
    };

    fetchData();
  }, []);

  // console.log(data, "data");

  return (
    <div className="text-white">
      <div className="mb-4">
        <Button
          onClick={toggleDropdown}
          className="flex justify-between w-full text-left text-white bg-gray-700 hover:bg-gray-600 rounded"
          isLoading={isLoadingState}
        >
          <span className="text-left">{selectedOption}</span>
        </Button>
        {isDropdownOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 mt-2 rounded p-2 overflow-hidden"
          >
            <ul className="overflow-y-auto max-h-40 ">
              {data.map((d: ModuleProps) => (
                <li
                  key={d._id}
                  className={`p-2 hover:bg-gray-700 rounded cursor-pointer ${
                    selectedOption === d.name ? "bg-gray-600" : ""
                  }`}
                  onClick={() => handleOptionClick(d._id, d.name)}
                >
                  {d.name}
                </li>
              ))}
              <li
                className={`p-2 hover:bg-gray-700 rounded cursor-pointer`}
                onClick={() => {
                  router.push("/en/dashboard/createmodule"),
                    setIsDropdownOpen(false);
                }}
              >
                Create Module
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ModuleDropDown;
