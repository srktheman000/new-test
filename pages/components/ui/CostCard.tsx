import React from "react";
import Text from "./Text";

interface ICoatcard {
  yearCost: number | string;
  monthCost: number | string;
}

const CostCard = ({ yearCost, monthCost }: ICoatcard) => {
  return (
    <div className='w-36 '>
      <div className='bg-blue-900 p-1 rounded-t-md'>
        <Text className={"text-sm text-white"}>Estimated Cost</Text>
      </div>
      <div className='bg-slate-400 p-2 rounded-b-md space-y-2'>
        <p className=' '>
          <span className='text-xl text-blue-900 font-bold'>${yearCost}</span>{" "}
          ^/yr
        </p>
        <p className='text-sm'>
          <span className='  text-blue-900 font-bold'>$ {monthCost}</span> /mo
        </p>
      </div>
    </div>
  );
};

export default CostCard;
