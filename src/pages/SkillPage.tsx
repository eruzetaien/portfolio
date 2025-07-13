import { useState } from "react";
import BackButton from "../components/BackButton";
import Resource from "../components/Resource";
import SkillContainer from "../components/SkillContainer";

const skillSections = [
  {
    key: "language",
    label: "Programming Languages",
    items: [],
  },
  {
    key: "framework",
    label: "Libraries and Frameworks",
    items: [],
  },
  {
    key: "data",
    label: "Data Science",
    items: [],
  },
  {
    key: "ml",
    label: "Machine Learning",
    items: [
      { label: "Supervised Learning" },
      { label: "???", locked: true },
    ],
  },
  {
    key: "software",
    label: "Software Development",
    items: [
      { label: "Object-Oriented Programming (OOP)" },
      { label: "???", locked: true },
    ],
  },
];

function SkillPage() {
  const [selectedKey, setSelectedKey] = useState(skillSections[0].key);

  const selectedSection = skillSections.find((s) => s.key === selectedKey);
  return (
    <>
      <div className="w-screen h-screen flex flex-col bg-cover bg-bottom-left bg-[url(src/assets/screens/skill-page.png)]">
        <div className="w-full px-16 pt-8 flex justify-between items-center">
            <div>
              <BackButton pageName="Skill" />
            </div>
            <div className="w-1/2 h-full">
              <Resource />
            </div>
        </div>

        <div className="flex w-full h-full px-16 pb-10">
          <div className="relative w-3/5 h-full ">
            <div className="absolute w-3/4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              aspect-square bg-contain bg-center bg-no-repeat bg-[url(src/assets/screens/brain-glow.png)]"
            ></div>

            <div className="absolute w-3/4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             aspect-square bg-contain bg-center bg-no-repeat bg-[url(src/assets/screens/brain.png)]"
            ></div>

            <div className="absolute w-3/4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             aspect-square "
            >
              <button className="absolute left-65.5 top-6 hover:scale-105 cursor-pointer"
                 onClick={() => setSelectedKey("language")}
              >
                <img className="h-30" src="src/assets/game-icons/java-skill.svg" alt="" />
              </button>
              <button className="absolute right-11 top-44.5 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedKey("framework")}
              >
                <img className="h-30 " src="src/assets/game-icons/react-skill.svg" alt="" />
              </button>
              <button className="absolute -left-3.5 top-12.5 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedKey("software")}
              >
                <img className="h-30 " src="src/assets/game-icons/cicd-skill.svg" alt="" />
              </button>
              <button className="absolute left-[47px] bottom-[227px]">
                <img className="h-[87px]" src="src/assets/game-icons/locked-skill.svg" alt="" />
              </button>
              <button className="absolute right-[12px] bottom-45">
                <img className="h-[87px]" src="src/assets/game-icons/locked-skill.svg" alt="" />
              </button>
              <button className="absolute left-31.5 bottom-0 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedKey("ml")}
              >
                <img className="h-30 " src="src/assets/game-icons/ml-skill.svg" alt="" />
              </button>
              <button className="absolute right-45.5 bottom-10.5 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedKey("data")}
              >
                <img className="h-30 " src="src/assets/game-icons/data-skill.svg" alt="" />
              </button>
            </div>

            {/* <div className="absolute w-3/4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             aspect-square bg-contain bg-center bg-no-repeat bg-[url(src/assets/screens/skill.png)]"
            ></div> */}
            {/* <div className=" absolute w-1/2 h-2/3 bg-amber-300"
              style={{
                WebkitMaskImage: 'radial-gradient(circle at center, transparent 40%, white 100%)',
                maskImage: 'radial-gradient(circle at center, transparent 40%, white 100%)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'cover',
                maskSize: 'cover'
              }}>
            </div> */}
          </div>

          <div className="ml-10 w-1/3 h-full flex justify-center items-center">
            {selectedSection && (
              <SkillContainer
                title={selectedSection.label}
                items={selectedSection.items}
              />
            )}
          </div>
        </div>

      </div>


    </>
  )
}

export default SkillPage
