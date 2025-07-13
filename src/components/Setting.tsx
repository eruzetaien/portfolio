import React, { useEffect, useState } from "react";
import { useTransitionNavigate } from "../utils/useTransitionNavigate";

const Setting: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  const transitionNavigate = useTransitionNavigate();
  const goToMainMenu = () => transitionNavigate("/");
  const goToGithubPage = () => {
    window.open("https://github.com/eruzetaien", "_blank");
  };
  const goToLinkedinPage = () => {
    window.open("https://www.linkedin.com/in/muhammad-ruzain-644614220", "_blank");
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Failed to enter fullscreen:", err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error("Failed to exit fullscreen:", err);
      });
    }
  };

  return (
    <>
      <button
        className="hover:scale-105 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src="src/assets/game-icons/setting.svg"
          alt="Settings"
          className="w-10"
        />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
          
          <button
            onClick={() => setIsModalOpen(false)}
            className=" aspect-square  flex items-center justify-center text-[#B6C2CB] 
                      rounded-full hover:scale-110 hover:text-white transition duration-200" 
          >
            <span className="text-6xl">X</span>
          </button>

          {/* Divider */}
          <div className="w-full border-t border-white/20 my-6" />
       
          <div className="flex flex-col">
            <button
              onClick={toggleFullscreen}
              className="cursor-pointer"
            >
              <span className="text-[#B6C2CB] text-lg hover:text-white">{isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}</span>
            </button>

            <button
              onClick={goToMainMenu}
              className="cursor-pointer"
            >
              <span className="text-[#B6C2CB] text-lg hover:text-white">Return to Main Menu</span>
            </button>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/20 my-6" />

          <div className=" flex justify-center gap-x-4">
            <button className="hover:scale-110 cursor-pointer" onClick={goToLinkedinPage}>
              <img className="h-9" src="src/assets/logo/linkedin.png" alt="" />
            </button>
            <button className="hover:scale-110 cursor-pointer" onClick={goToGithubPage}>
              <img className="h-9" src="src/assets/logo/github.png" alt="" />
            </button>
          </div>

        </div>

        
      )}
    </>
  );
};

export default Setting;