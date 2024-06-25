"use client";

// this is my modules dynamic page
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AppData from "@/common/components/appdata/appdata";

export default function Dashboard({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const searchParams = useSearchParams();
  const [newParam, setNewParam] = useState<string | null>(null);

  useEffect(() => {
    const param = searchParams.get("new");
    setNewParam(param);
    console.log(param, "param");
    // Perform any other actions needed with the param
  }, [searchParams]);

  // You can also fetch the dictionary or any async data here using useEffect

  return (
    <div className="">
      <AppData />
      {/* Use newParam or any other state/props as needed */}
    </div>
  );
}
