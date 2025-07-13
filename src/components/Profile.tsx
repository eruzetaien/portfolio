import React from "react";
import { playerData } from "../data/playerData";
import { useTransitionNavigate } from "../utils/useTransitionNavigate";


const Profile: React.FC = () => {
  const transitionNavigate = useTransitionNavigate();
  const handleClick = () => transitionNavigate("profile");

  return (
    <button className="w-fit h-fit" onClick={handleClick}>
      <div className="w-74 h-19 flex items-center gap-x-[10px] bg-[#252B3BE6] p-1 rounded-[10px] hover:scale-105 cursor-pointer transition-transform duration-200">
        <img className="h-full" src="src/assets/profile.svg" alt="profile"/>
        <div className="flex flex-col items-start leading-none gap-y-2">
          <h2 className="text-[20px] text-[var(--bluish-white)] font-normal">{playerData.name}</h2>
          <h3 className="text-[16px] text-[var(--light-green)]">Lv. <span className=" font-bold">{playerData.level}</span> </h3>
        </div>
      </div>
    </button>
  );
};

export default Profile;