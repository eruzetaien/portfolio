import React, { useState } from "react";
import QuestItem from "./QuestItem";
import QuestTab from "./QuestTab";

const QuestContainer: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("software");

  const tabs = [
    { key: "game", label: "Game Development" },
    { key: "software", label: "Software Development" },
    { key: "ml", label: "Machine Learning" },
  ];

  return (
    <div className="h-full flex flex-col gap-y-[10px]">
      <QuestTab tabs={tabs} selected={selectedTab} onSelect={setSelectedTab} />
      <div className="h-full bg-[#414D77CC] rounded-[10px] p-[10px]  overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {selectedTab === "game" && 
          <div className="h-full flex flex-col gap-y-[10px] rounded-[10px] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">  
            <QuestItem 
                title="Astragares Multiplayer"
                description= "An online multiplayer board game where player interaction is the core of the experience"
                progress={30}
                rewardImageSrc="src/assets/game-icons/reward.svg"
            />

            <QuestItem 
                title="Hafiz Helper"
                description= "Mobile application to assist Muslims in reciting the Al-Qur’an correctly"
                progress={100}
            />

            <QuestItem 
                title="Hafiz Helper"
                description= "Mobile application to assist Muslims in reciting the Al-Qur’an correctly An online multiplayer board game where player interaction is the core of the experience"
                progress={100}
            />

                        <QuestItem 
                title="Hafiz Helper"
                description= "Mobile application to assist Muslims in reciting the Al-Qur’an correctly An online multiplayer board game where player interaction is the core of the experience"
                progress={100}
            />


          </div>

        }
        {selectedTab === "software" && 
          <div className="h-full flex flex-col gap-y-[10px] rounded-[10px] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">  
            <QuestItem 
                title="Astragares Multiplayer"
                description= "An online multiplayer board game where player interaction is the core of the experience"
                progress={30}
                rewardImageSrc="src/assets/game-icons/reward.svg"
            />

            <QuestItem 
                title="Hafiz Helper"
                description= "Mobile application to assist Muslims in reciting the Al-Qur’an correctly"
                progress={100}
            />

          </div>
        }
        {selectedTab === "ml" && <p>Machine learning content</p>}
      </div>
    </div>
  );
};

export default QuestContainer;
