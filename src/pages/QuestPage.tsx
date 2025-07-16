import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import LoadingScreen from "../components/LoadingScreen";
import QuestContainer from "../components/QuestContainer";
import Resource from "../components/Resource";

function QuestPage() {
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
      <div className="w-screen h-screen flex flex-col items-center bg-gradient-to-b from-[#495891] to-[#B9C4DA]">
        <div className="w-full px-16 py-8 flex justify-between items-center">
            <div>
              <BackButton pageName="Quest Book" />
            </div>
            <div className="w-1/2 h-full">
              <Resource />
            </div>
        </div>

        <div className="w-full h-full px-16 pb-4 flex flex-col justify-between items-center gap-y-5 overflow-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="w-5/6 h-full bg-gradient-to-b from-[#252B3BCC] to-[#6575A1CC] rounded-[10px] p-[10px]">
            <QuestContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestPage
