import { setResponseData } from "@/redux/features/auth-slice";
import { RootState } from "@/redux/store";
import { config } from "@/utils";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useItems = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useDispatch();
  const { responseData } = useSelector((item: RootState) => item.setResponseData)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    if (responseData && responseData.length > 0) return;
    !isLoading && setIsLoading(true)
    async function fetchData() {
      try {
        const url = `${config.ssoUrl}/api/items/5577831`;
        const res = await axios.get(url);
        dispatch(setResponseData(res.data));
      } catch (error: any) {
        console.log("Data Not Fetched", error)
        setError(error)
      } finally {
        return
      }
    }

    fetchData();
  }, [isLoading])

  return { responseData, isLoading, setIsLoading, error }
}
