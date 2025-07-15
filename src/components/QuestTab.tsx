import React from "react";

interface QuestTabProps {
  tabs: { key: string; label: string }[];
  selected: string;
  onSelect: (key: string) => void;
}

const QuestTab: React.FC<QuestTabProps> = ({ tabs, selected, onSelect }) => {
  return (
    <div className="w-full h-fit flex gap-x-[5px]">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onSelect(tab.key)}
          className={`w-full text-center rounded-[10px] py-3 cursor-pointer font-bold text-lg ${
            selected === tab.key
              ? "bg-[var(--main-blue)] text-white"
              : "bg-[#495891] text-[var(--grey)]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default QuestTab;
