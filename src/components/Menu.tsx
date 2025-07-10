import React from "react";
import IconMenu from "./IconMenu";

const Menu: React.FC = () => {
  const iconPanel = 'src/assets/game-icons/menu-panel.svg';

  const educationIcon = 'src/assets/game-icons/education.svg';
  const educationGlow = 'src/assets/game-icons/education-glow.svg';

  const skillIcon = 'src/assets/game-icons/skill.svg';
  const skillGlow = 'src/assets/game-icons/skill-glow.svg';

  const questIcon = 'src/assets/game-icons/quest.svg';
  const questGlow = 'src/assets/game-icons/quest-glow.svg';

  const shopIcon = 'src/assets/game-icons/shop.svg';
  const shopGlow = 'src/assets/game-icons/shop-glow.svg';

  return (
    <div className="w-full h-fit flex justify-center items-center gap-x-10 p-1">
      <IconMenu panel={iconPanel} glow={educationGlow} icon={educationIcon} label="Education" />
      <IconMenu panel={iconPanel} glow={skillGlow} icon={skillIcon} label="Skill" />
      <IconMenu panel={iconPanel} glow={questGlow} icon={questIcon} label="Quest" />
      <IconMenu panel={iconPanel} glow={shopGlow} icon={shopIcon} label="Shop" />
    </div>
  );
};

export default Menu;