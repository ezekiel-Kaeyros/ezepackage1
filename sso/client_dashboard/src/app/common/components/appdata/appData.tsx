"use client";

// this is my modules dynamic page
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
import { RootState } from "src/redux/store";

function AppData() {
  const searchParams = useSearchParams();
  const [newParam, setNewParam] = useState<string | any>("");
  const [currentModule, setCurrentModule] = useState<any>("");
  const { moduleId } = useSelector((state: RootState) => state.setModuleId);

  const fetchData = async (id: string) => {
    const url = `http://localhost:1337/application/${id}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCurrentModule(data);
      // Handle the data
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  useEffect(() => {
    // const param = searchParams.get("application");
    // setNewParam(param);
    fetchData(moduleId);
  }, []);

  console.log(currentModule, "currentModule");
  console.log(moduleId, "moduleId");

  return <div>appDadoijeijeijita</div>;
}

export default AppData;
