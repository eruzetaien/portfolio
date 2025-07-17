import React from "react";
import IconMenu from "./IconMenu";

const baseUrl = import.meta.env.BASE_URL;
const iconPanel = baseUrl + 'assets/game-icons/menu-panel.svg';

const educationIcon = baseUrl + 'assets/game-icons/education.svg';
const educationGlow = baseUrl + 'assets/game-icons/education-glow.svg';

const skillIcon = baseUrl + 'assets/game-icons/skill.svg';
const skillGlow = baseUrl + 'assets/game-icons/skill-glow.svg';

const questIcon = baseUrl + 'assets/game-icons/quest.svg';
const questGlow = baseUrl + 'assets/game-icons/quest-glow.svg';

const shopIcon = baseUrl + 'assets/game-icons/shop.svg';
const shopGlow = baseUrl + 'assets/game-icons/shop-glow.svg';


export function getMenuImage() {
  return [
    iconPanel, 
    educationIcon, educationGlow,
    skillIcon, skillGlow,
    questIcon, questGlow,
    shopIcon, shopIcon
  ];
}

const Menu: React.FC = () => {


  return (
    <div className="w-full h-fit flex justify-center items-center gap-x-10 p-1">
      <IconMenu panel={iconPanel} glow={educationGlow} icon={educationIcon} label="Education" to="/education"/>
      <IconMenu panel={iconPanel} glow={skillGlow} icon={skillIcon} label="Skill" to="/skill"/>
      <IconMenu panel={iconPanel} glow={questGlow} icon={questIcon} label="Quest" to="/quest"/>
      <IconMenu panel={iconPanel} glow={shopGlow} icon={shopIcon} label="Shop" to="/shop"/>
    </div>
  );
};

export default Menu;