import { useEffect, useState } from "react";
import { response } from "../services/api";

export function useResponse() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newResponse = await response();
        setRes(newResponse);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return res;
}
