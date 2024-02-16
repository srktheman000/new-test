import { useState, useEffect } from "react";
import getToken from "../lib";

interface UseGetPlanListReturn {
  loading: boolean;
  error: string;
  data: any[] | null;
}
const useGetPlanList = (): UseGetPlanListReturn => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  // getting cors error for APIS

  const token = getToken();
  useEffect(() => {
    const fetchPlanList = async () => {
      try {
        const response = await fetch(
          "https://devcore02.cimet.io/v1/plan-list",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
              "Auth-token":
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiNE5LUTMtODE1QzItOFQ1UTItMTYzMTgtNTUzMDEiLCJzdWIiOjQzOCwiaXNzIjoiaHR0cHM6Ly9kZXZjb3JlMDIuY2ltZXQuaW8vdjEvZ2VuZXJhdGUtdG9rZW4iLCJpYXQiOjE3MDgwNTQzMDcsImV4cCI6MTcwODA2NTEwNywibmJmIjoxNzA4MDU0MzA3LCJqdGkiOiJzTHA0NGt3YnJyU1VQa2tSIn0.wGMw7ScohqJH8h-2uiQ1Jr7rhj1G2ruU3EnnMLILzOE",
            },
            body: JSON.stringify({
              session_id:
                "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9",
            }),
          }
        );

        if (response.status === 0) {
          setError("Failed to fetch plan list");
        }

        const responseData = await response.json();
        setData(responseData.data.electricity);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch plan list");
        setLoading(false);
      }
    };

    fetchPlanList();
  }, []);

  return { loading, error, data };
};

export default useGetPlanList;
