import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import LoadingScreen from "../components/LoadingScreen";
import Resource from "../components/Resource";



function ShopPage() {
  const baseUrl =  import.meta.env.BASE_URL ;
  const executiveCostume = baseUrl +  "assets/shop-items/executive-costume.png"
  const shopItem1 = baseUrl +  "assets/shop-items/item-1.svg"

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
