import React, { useEffect, useState } from "react";

const Setting: React.FC = () => {
  const baseUrl =  import.meta.env.BASE_URL ;

  const enterFullscreenButton =  baseUrl + "assets/buttons/fullscreen-enter.svg";
  const exitFullscreenButton =  baseUrl + "assets/buttons/fullscreen-exit.svg";
  const nextButton =  baseUrl + "assets/buttons/next-button.svg";
  const settingIcon =  baseUrl + "assets/game-icons/setting.svg";
  const githubLogo =  baseUrl + "assets/logo/github.png";
  const linkedinLogo =  baseUrl + "assets/logo/linkedin.png";

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

  const enterFullscreen = () => {
    setIsModalOpen(false);
    document.documentElement.requestFullscreen().catch((err) => {
        console.error("Failed to enter fullscreen:", err);
    });
  };

  const exitFullscreen = () => {
    setIsModalOpen(false);
    document.exitFullscreen().catch((err) => {
      console.error("Failed to exit fullscreen:", err);
    });
  };

  const goToGithubPage = () => {
    window.open("https://github.com/eruzetaien", "_blank");
  };
  const goToLinkedinPage = () => {
    window.open("https://www.linkedin.com/in/muhammad-ruzain-644614220", "_blank");
  };



  return (
    <>
      <button
        className="hover:scale-105 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={settingIcon}
          alt="Settings"
          className="w-10"
        />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
          
          <button
            onClick={() => setIsModalOpen(false)}
            className=" cursor-pointer flex items-center justify-center text-[#B6C2CB]  
                      rounded-full hover:scale-110 hover:text-white transition duration-200" 
          >
            <span className="text-6xl">X</span>
          </button>

          {/* Divider */}
          <div className="w-full border-t border-white/20 my-6" />
       
          <div className="flex gap-x-10 justify-between">
            <div className="flex items-center justify-center">
              <span className="text-[#B6C2CB] text-lg mr-5">Fullscreen:</span>
              <button  title="Exit Fullscreen"
                onClick={exitFullscreen}
                className="hover:scale-105 cursor-pointer"
              >
                <img className="h-10" src={exitFullscreenButton}></img>
              </button>
              <button  title="Enter Fullscreen"
                onClick={enterFullscreen}
                className="hover:scale-105 cursor-pointer"
              >
                <img className="h-10" src={enterFullscreenButton}></img>
              </button>
            </div>

            <div className="flex items-center  text-lg">
              <span className="text-[#B6C2CB] mr-5">Language: 
                
              </span>
              <div className="flex gap-x-2 items-center">
                <span className="text-white">English  </span>
                <img className="h-5 hover:scale-110 cursor-pointer" src={nextButton}></img>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/20 my-6" />

          <div className=" flex justify-center gap-x-4">
            <button className="hover:scale-110 cursor-pointer" onClick={goToLinkedinPage}>
              <img className="h-9" src={linkedinLogo} alt="" />
            </button>
            <button className="hover:scale-110 cursor-pointer" onClick={goToGithubPage}>
              <img className="h-9" src={githubLogo} alt="" />
            </button>
          </div>

        </div>

        
      )}
    </>
  );
};

export default Setting;