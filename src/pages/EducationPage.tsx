import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import LoadingScreen from "../components/LoadingScreen";
import Resource from "../components/Resource";

function EducationPage() {
  const baseUrl =  import.meta.env.BASE_URL;
  const bangkitBanner = baseUrl + "assets/bangkit-banner.svg"
  const uiBanner = baseUrl + "assets/ui-banner.svg"


  const imagesToPreload = [
    bangkitBanner, uiBanner
  ];

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const totalImages = imagesToPreload.length;

  useEffect(() => {
    let count = 0;

    const handleLoaded = () => {
      count++;
      setLoadedCount(count);
      if (count === totalImages) {
        setIsLoaded(true);
      }
    };

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.onload = handleLoaded;
      img.onerror = handleLoaded;
      img.src = src;
    });
  }, []);

  if (!isLoaded) {
    const progress = Math.floor((loadedCount / totalImages) * 100);
    return <LoadingScreen progress={progress} />;
  }

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
