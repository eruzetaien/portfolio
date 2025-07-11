import React from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  pageName: string;   
}

const BackButton: React.FC<BackButtonProps> = ({pageName}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); 
  };

  return (
    <div className="flex items-center gap-x-6">
      <button className="hover:scale-110 " onClick={handleClick}>
        <img className="h-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" src="src/assets/buttons/back-button.svg" alt="" />
      </button>
      <span className="text-2xl font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        {pageName}
      </span>
    </div>
  );
};

export default BackButton;
