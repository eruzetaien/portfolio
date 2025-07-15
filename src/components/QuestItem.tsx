import React from "react";

interface QuestItemProps {
  title: string;
  description: string;
  progress: number; // 0 to 100
  onButtonClick?: () => void;
  rewardImageSrc?: string;
}

const QuestItem: React.FC<QuestItemProps> = ({
  title,
  description,
  progress,
  onButtonClick,
  rewardImageSrc,
}) => {
  const baseUrl =  import.meta.env.BASE_URL ;
  const completeButton = baseUrl + "assets/buttons/complete-button.svg";
  const startButton = baseUrl + "assets/buttons/start-button.svg";

  const isCompleted = progress >= 100

  return (
    <div className="flex h-30 flex-shrink-0">
      <div className="w-4/5 flex h-full bg-[#7385BD] rounded-l-[4px]">
        <div className={`w-3 mr-3 rounded-l-[4px] ${isCompleted ? "bg-[var(--yellow)]" : "bg-[var(--main-blue)]"}`} >

        </div>
        <div className="w-3/4 flex flex-col leading-none py-4 justify-between gap-y-1">
          <div className="flex flex-1 flex-col gap-y-3">
            <h2 className="text-[20px] text-white font-bold">{title}</h2>
            <h3 className="h-[32px] text-[16px] text-[var(--bluish-white)] overflow-hidden">
              {description}
            </h3>
          </div>
          
          <div className="flex gap-x-2 items-center">
            <div className="w-1/2 h-[6px] bg-[#495891] rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--yellow)] rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="font-bold">{progress}%</span>
          </div>
        </div>
        <div className="w-1/4 flex justify-end items-center pr-5">
          {rewardImageSrc && (
            <img
              className="h-2/3 hover:scale-102"
              src={rewardImageSrc}
              alt="reward"
            />
          )}
        </div>
      </div>

      <div className="w-1/5 bg-[#8FA0D6] rounded-r-[4px] flex justify-center items-center px-7">
        <button onClick={onButtonClick} className={`${!isCompleted ? "hover:scale-105 cursor-pointer" : ""}`}>
          <img
            className={`w-full ${
              !isCompleted ? "drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]" : ""
            }`}
            src={
              isCompleted
                ? completeButton
                : startButton
            }
            alt={isCompleted ? "Complete" : "Start"}
          />
        </button>
      </div>
    </div>
  );
};

export default QuestItem;
