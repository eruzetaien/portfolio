import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import LoadingScreen from "../components/LoadingScreen";
import Resource from "../components/Resource";



function ShopPage() {
  const baseUrl =  import.meta.env.BASE_URL ;
  const executiveCostume = baseUrl +  "assets/shop-items/executive-costume.png"
  const shopItem1 = baseUrl +  "assets/shop-items/item-1.svg"

  const imagesToPreload = [
    shopItem1, executiveCostume
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
      <div className="w-screen h-screen flex flex-col items-center bg-[#D9D9D9]">
        <div className="w-full px-16 py-8 flex justify-between items-center bg-[#252A36]">
            <div>
              <BackButton pageName="Shop" />
            </div>
            <div className="w-1/2 h-full">
              <Resource/>
            </div>
        </div>

        <div className="w-full h-full px-24 pt-10 flex justify-start gap-2">
          <button className="relative w-1/5 h-fit hover:scale-102 ">
              <img
                className="w-full"
                src={shopItem1}
                alt="costume"
              />
              <img
                className="w-2/3 absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none"
                style={{ imageRendering: "pixelated" }}
                src={executiveCostume}
                alt="costume"
              />
          </button>
        </div>
      </div>


    </>
  )
}

export default ShopPage
