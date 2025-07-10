import React from "react";

const Profile: React.FC = () => {

  return (
    <div className="w-74 h-19 flex items-center gap-x-[10px] bg-[#252B3B] p-1 rounded-[10px] hover:scale-105">
      <img className="h-full" src="src/assets/profile.svg" alt="profile"/>
      <div className="flex flex-col leading-none gap-y-2">
        <h2 className="text-[20px] text-[var(--bluish-white)] font-normal">Ruzain</h2>
        <h3 className="text-[16px] text-[var(--light-green)]">Lv. <span className=" font-bold">16</span> </h3>
      </div>
    </div>
  );
};

export default Profile;