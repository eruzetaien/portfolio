import React, { useEffect, useState } from "react";
import Setting from "./Setting";

const baseUrl = import.meta.env.BASE_URL;
const goldContainer = baseUrl + "assets/containers/resource-gold.svg";
const timeContainer = baseUrl + "assets/containers/resource-time.svg";

export function getResourceImage() {
  return [
    goldContainer, timeContainer
  ];
}

const Resource: React.FC = () => {
  const initialGold = 22194;
  const earningPerHour = 31250;
  const [gold, setGold] = useState(initialGold);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const totalMinutes = now.getHours() * 60 + now.getMinutes(); // 0 to 1439
      const goldValue =  initialGold + now.getHours() * earningPerHour  ; // increments each hour
      setTime(totalMinutes);
      setGold(goldValue);
    };

    update(); // initial run
    const interval = setInterval(update, 60 * 1000); // update every 1 minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-fit flex justify-end items-center gap-x-5 ">
      <div className="relative w-[212px] h-fit flex justify-end items-center">
        <img className="" src={timeContainer} alt="" />
        <span className="absolute right-0 font-bold text-xl px-6">{time}</span>
      </div>

      <div className="relative w-[212px] h-fit flex justify-end items-center ">
        <img className="" src={goldContainer} alt="" />
        <span className="absolute right-0 font-bold text-xl px-6">{gold.toLocaleString()}</span>
      </div>

      <Setting />
    </div>
  );
};

export default Resource;