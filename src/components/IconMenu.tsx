import React from "react";

interface IconMenuProps {
  panel: string;     // menu-panel background
  glow: string;      // glow effect image
  icon: string;      // main icon
  label: string;     // text below the icon
}

const IconMenu: React.FC<IconMenuProps> = ({ panel, glow, icon, label }) => {
  return (
    <button className="flex flex-col items-center hover:scale-110 transition-transform duration-200">
      <div className="relative h-20 w-20">
        <img className="absolute top-0 z-0" src={panel} alt="" />
        <img className="absolute top-0 z-10 mix-blend-hard-light" src={glow} alt="" />
        <img className="absolute top-0 z-20 mix-blend-hard-light" src={glow} alt="" />
        <img className="absolute top-0 z-30 mix-blend-hard-light" src={glow} alt="" />
        <img className="absolute top-0 z-40" src={icon} alt={label} />
      </div>
      <span className="text-xl font-bold text-[var(--bluish-white)] drop-shadow-[0_2px_4px_rgba(0,58,109,0.5)]">
        {label}
      </span>
    </button>
  );
};

export default IconMenu;
