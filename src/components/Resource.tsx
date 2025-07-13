import React from "react";
import Setting from "./Setting";

const Resource: React.FC = () => {
  const gold = 22194;
  const time = 106;

  return (
    <div className="w-full h-fit flex justify-end items-center gap-x-5 ">
      <div className="relative w-3/10 h-fit flex justify-end items-center">
        <img className="" src="src/assets/containers/resource-time.svg" alt="" />
        <span className="absolute right-0 font-bold text-xl px-6">{time}</span>
      </div>

      <div className="relative w-3/10 h-fit flex justify-end items-center ">
        <img className="" src="src/assets/containers/resource-gold.svg" alt="" />
        <span className="absolute right-0 font-bold text-xl px-6">{gold.toLocaleString()}</span>
      </div>

      <Setting />
    </div>
  );
};

export default Resource;