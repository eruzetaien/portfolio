import React, { useState } from "react";
import { questItems, questTabs } from "../data/questData";
import QuestItem from "./QuestItem";
import QuestTab from "./QuestTab";

const QuestContainer: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(questTabs[questTabs.length - 1].key);

  return (
    <div className="h-full flex flex-col gap-y-[10px]">
      <QuestTab tabs={questTabs} selected={selectedTab} onSelect={setSelectedTab} />
      <div className="h-full bg-[#414D77CC] rounded-[4px] p-[10px] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="h-full flex flex-col gap-y-[10px] overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {questItems[selectedTab]?.map((item, index) => (
            <QuestItem
              key={index}
              title={item.title}
              description={item.description}
              progress={item.progress}
              rewardImageSrc={item.rewardImageSrc}
              {...(item.link && {
                onButtonClick: () => window.open(item.link, "_blank"),
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestContainer;
