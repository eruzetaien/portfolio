import React from "react";

interface CardItem {
  label: string;
  locked?: boolean;
}

interface SkillContainerProps {
  title: string;
  items: CardItem[];
}

const SkillContainer: React.FC<SkillContainerProps> = ({ title, items }) => {
  return (
    <div className="bg-[#1F263980]  min-w-3/4 h-fit rounded-[10px] flex flex-col p-[10px] fade-in-animation"
        style={{ '--duration': '2.5' } as React.CSSProperties}>
      <div className="bg-[#495891] w-full h-12 rounded-t-[10px] flex justify-center items-center">
        <h3 className="text-[#D8E0FF] text-lg font-bold">{title}</h3>
      </div>
      <div className="bg-[#1F263980] w-full flex-1 rounded-b-[10px] flex flex-col px-[15px] py-[10px] gap-y-1">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-x-[5px]">
            <img className={`${item.locked? "w-[15px]":"w-[10px]"}`} src={item.locked? "src/assets/game-icons/lock.svg": "src/assets/game-icons/list.svg"} alt="" />
            <span className={`font-bold ${item.locked ? "text-[#838FB5]" : "text-[#DEF1FF]"}`}>
              {item.locked ? "???" : item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillContainer;
