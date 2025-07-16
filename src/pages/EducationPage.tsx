import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import LoadingScreen from "../components/LoadingScreen";
import Resource from "../components/Resource";

function EducationPage() {
  const baseUrl =  import.meta.env.BASE_URL;
  const bangkitBanner = baseUrl + "assets/bangkit-banner.svg"
  const uiBanner = baseUrl + "assets/ui-banner.svg"

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
              <BackButton pageName="Education" />
            </div>
            <div className="w-1/2 h-full">
              <Resource/>
            </div>
        </div>

        <div className="w-full h-full px-16 pb-4 flex flex-col justify-between items-center">
          <div className="flex w-full items-start justify-center pt-5 pb-10 gap-x-12">
            <img className="w-1/5 expand-vertical-mask-animation" style={{ '--delay': '0.5' } as React.CSSProperties} src={bangkitBanner} alt=""/>
            <img className="w-1/4 expand-vertical-mask-animation" src={uiBanner} alt=""/>
          </div>
        </div>
      </div>
    </>
  )
}

export default EducationPage
