import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import LoadingScreen from "../components/LoadingScreen";
import Resource from "../components/Resource";
import SkillContainer from "../components/SkillContainer";

const skillSections = [
  {
    key: "language",
    label: "Programming Languages",
    items: [
      { label: "Python" },
      { label: "Java" },
      { label: "Golang" },
      { label: "JavaScript"},
      { label: "C#" },
      { label: "???", locked: true },
      { label: "???", locked: true },
    ],
  },
  {
    key: "framework",
    label: "Libraries and Frameworks",
    items: [
      { label: "React, Next.js" },
      { label: "Flutter, React Native" },
      { label: "Nest.js" },
      { label: "Spring Boot" },
      { label: "Django, FastAPI" },
      { label: "Pandas, Matplotlib & Seaborn, Scikit-learn" },
      { label: "TensorFlow, Pytorch" },
      { label: "???", locked: true },
    ],
  },
  {
    key: "data",
    label: "Data Science",
    items: [
      { label: "Data Cleaning & Preprocessing" },
      { label: "Exploratory Data Analysis" },
      { label: "Data Visualization" },
      { label: "CRISP-DM" },
      { label: "???", locked: true },
      { label: "???", locked: true },
    ],
  },
  {
    key: "ml",
    label: "Machine Learning",
    items: [
      { label: "Supervised Learning" },
      { label: "Unsupervised Learning" },
      { label: "Reinforcement Learning" },
      { label: "Deep Learning" },
      { label: "Information Retrieval" },
      { label: "???", locked: true },
    ],
  },
  {
    key: "software",
    label: "Software Development",
    items: [
      { label: "Data Structures & Algorithms" },
      { label: "Clean Code & Design Principles" },
      { label: "Software Architecture" },
      { label: "Testing Practices (Unit, Integration, System, Load)" },
      { label: "Containerization (Docker)" },
      { label: "CI/CD Pipelines (GitLab CI, GitHub Actions)" },
      { label: "Cloud Platforms (GCP, AWS)" },
      { label: "Knowledge Graph" },
      { label: "Software Product Line" },
      { label: "???", locked: true },
    ],
  },
];

function SkillPage() {
  const [selectedKey, setSelectedKey] = useState(skillSections[0].key);
  const baseUrl = import.meta.env.BASE_URL;

  const skillPage = baseUrl + "assets/screens/skill-page.png";
  const brain = baseUrl + "assets/screens/brain.png";
  const brainGlow = baseUrl + "assets/screens/brain-glow.png";

  const javaIcon = baseUrl + "assets/game-icons/java-skill.svg";
  const javaGlow = baseUrl + "assets/game-icons/java-skill-glow.svg";

  const reactIcon = baseUrl + "assets/game-icons/react-skill.svg";
  const reactGlow = baseUrl + "assets/game-icons/react-skill-glow.svg";

  const mlIcon = baseUrl + "assets/game-icons/ml-skill.svg";
  const mlGlow = baseUrl + "assets/game-icons/ml-skill-glow.svg";

  const cicdIcon = baseUrl + "assets/game-icons/cicd-skill.svg";
  const cicdGlow = baseUrl + "assets/game-icons/cicd-skill-glow.svg";

  const dataIcon = baseUrl + "assets/game-icons/data-skill.svg";
  const dataGlow = baseUrl + "assets/game-icons/data-skill-glow.svg";

  const lockedIcon = baseUrl + "assets/game-icons/locked-skill.svg";

  const selectedSection = skillSections.find((s) => s.key === selectedKey);

  // Loading Screen
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  if (!isLoaded) return <LoadingScreen />;

  return (
    <>
      <div style={{backgroundImage: `url(${skillPage})`}}
        className="w-screen h-screen flex flex-col bg-cover bg-bottom-left">
        <div className="w-full px-16 pt-8 flex justify-between items-center">
            <div>
              <BackButton pageName="Skill" />
            </div>
            <div className="w-1/2 h-full">
              <Resource />
            </div>
        </div>

        <div className="flex w-full h-full px-16 pb-10">
          <div className="relative w-3/5 h-full">
            <div style={{backgroundImage: `url(${brainGlow})`}}
              className="absolute w-[634px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              aspect-square bg-contain bg-center bg-no-repeat expand-circle-mask-animation"
            ></div>

            <div style={{backgroundImage: `url(${brain})`}}
              className="absolute w-[634px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              aspect-square bg-contain bg-center bg-no-repeat"
            ></div>

            <div className="absolute w-[634px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
             aspect-square "
            >
              <button className="absolute left-65.5 top-6 hover:scale-105 cursor-pointer"
                 onClick={() => setSelectedKey("language")}
              >
                <img className="absolute h-[87px] left-4 top-4" src={javaIcon} alt="" />
                <img className="h-30 mix-blend-hard-light expand-circle-mask-animation" 
                style={{ '--delay': '1' } as React.CSSProperties} src={javaGlow} alt="" />
              </button>

              <button className="absolute right-11 top-44.5 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedKey("framework")}
              >
                <img className="absolute h-[87px] left-4 top-4" src={reactIcon} alt="" />
                <img className="h-30 mix-blend-hard-light expand-circle-mask-animation" 
                style={{ '--delay': '1' } as React.CSSProperties} src={reactGlow}alt="" />
              </button>

              <button className="absolute -left-3.5 top-12.5 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedKey("software")}
              >
                <img className="absolute h-[87px] left-4 top-4" src={cicdIcon} alt="" />
                <img className="h-30 mix-blend-hard-light expand-circle-mask-animation" 
                style={{ '--delay': '1' } as React.CSSProperties} src={cicdGlow} alt="" />
              </button>

              <button className="absolute left-[47px] bottom-[227px]">
                <img className="h-[87px]" src={lockedIcon} alt="" />
              </button>

              <button className="absolute right-[12px] bottom-45">
                <img className="h-[87px]" src={lockedIcon} alt="" />
              </button>

              <button className="absolute left-31.5 bottom-0 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedKey("ml")}
              >
                <img className="absolute h-[87px] left-4 top-4" src={mlIcon} alt="" />
                <img className="h-30 mix-blend-hard-light expand-circle-mask-animation" 
                style={{ '--delay': '1' } as React.CSSProperties} src={mlGlow} alt="" />
              </button>

              <button className="absolute right-45.5 bottom-10.5 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedKey("data")}
              >
                <img className="absolute h-[87px] left-4 top-4" src={dataIcon} alt="" />
                <img className="h-30 mix-blend-hard-light expand-circle-mask-animation" 
                style={{ '--delay': '1' } as React.CSSProperties} src={dataGlow} alt="" />
              </button>

            </div>
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
