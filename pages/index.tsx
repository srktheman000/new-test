import { Key, useEffect, useState } from "react";
import BillCard from "./components/generic/BillCard";
import useGetPlanList from "./hooks/useGetPlanList";

export default function Home() {
  const { data, error, loading } = useGetPlanList();

  return (
    <div className='min-h-screen bg-white'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='max-w-screen-xl mx-auto p-4 overflow-y-auto'>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : Array.isArray(data) ? (
            data.map((plan: any, index: Key | null | undefined) => (
              <BillCard key={index} plan={plan} />
            ))
          ) : (
            <div>No data available.</div>
          )}

          <BillCard />
          <BillCard />
          <BillCard />
        </div>
      </div>
    </div>
  );
}
