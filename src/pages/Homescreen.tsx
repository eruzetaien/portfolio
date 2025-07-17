import { useEffect, useRef, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Menu, { getMenuImage } from "../components/Menu";
import Profile, { getProfileImage } from "../components/Profile";
import Resource, { getResourceImage } from "../components/Resource";



function Homescreen() {
  const baseUrl =  import.meta.env.BASE_URL ;
  const cloud1 = baseUrl + "assets/clouds/cloud1.png";
  const cloud2 = baseUrl + "assets/clouds/cloud2.png";
  const cloud3 = baseUrl + "assets/clouds/cloud3.png";
  const homescreenBg = baseUrl + "assets/screens/homescreen-bg.png";
  const homescreenfg = baseUrl + "assets/screens/homescreen-fg.png";

  const [isVisible, setIsVisible] = useState(true);
  const isVisibleRef = useRef(true); // 
  const timeoutRef = useRef<number | null>(null);
  const idleDuration = 10000; // 10 seconds

  const handleActivity = () => {
    if (!isVisibleRef.current) {
      setIsVisible(true);
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      isVisibleRef.current = false;
      setIsVisible(false);
    }, idleDuration);

    isVisibleRef.current = true; // update latest visible state
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);

    handleActivity(); // start the timer

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("click", handleActivity);
    };
  }, []);

  const imagesToPreload = [
    cloud1, cloud2, cloud3, homescreenBg, homescreenfg, 
    ...getProfileImage(), ...getResourceImage(), ...getMenuImage()
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
      <div style={{backgroundImage: `url(${homescreenBg})`}}
        className="w-screen h-screen bg-cover bg-bottom-left">
            <div className="absolute w-screen h-screen bottom-0 left-0 overflow-hidden">
              <img className="absolute -bottom-0 move-animation" style={{ '--duration': '2' } as React.CSSProperties} src={cloud1}></img>
              <img className="absolute -bottom-0 move-animation" style={{ '--duration': '3' } as React.CSSProperties} src={cloud1}></img>
              <img className="absolute -bottom-0 move-animation" style={{ '--duration': '5' } as React.CSSProperties} src={cloud2}></img>
              <img className="absolute -bottom-5 move-animation" style={{ '--duration': '7' } as React.CSSProperties} src={cloud3}></img>
              <img className="absolute -bottom-0 move-animation" style={{ '--duration': '11' } as React.CSSProperties} src={cloud2}></img>
              <img className="absolute -bottom-5 move-animation" style={{ '--duration': '13' } as React.CSSProperties} src={cloud3}></img>
            </div>

            <div style={{backgroundImage: `url(${homescreenfg})`}}
              className="absolute w-screen h-screen bg-contain bg-bottom-right bg-no-repeat">
              <div className="w-screen h-screen px-16 py-[32px] flex flex-col justify-between items-center">
                {/* Navbar */}
                <div
                  className={`w-full h-fit flex justify-between items-start transition-opacity ${
                    isVisible ? "opacity-100 duration-500" : "opacity-0 pointer-events-none duration-2000"
                  }`}
                >
                  <div>
                    <Profile></Profile>
                  </div>
                  <div className="w-1/2 h-full">
                    <Resource></Resource>
                  </div>
                </div>
                
                <div
                  className={`flex flex-col justify-end transition-opacity ${
                    isVisible ? "opacity-100 duration-500" : "opacity-0 pointer-events-none duration-2000"
                  }`}
                >
                  <Menu></Menu>
                </div>
              </div>
            </div>
          

      </div>


    </>
  )
}

export default Homescreen
