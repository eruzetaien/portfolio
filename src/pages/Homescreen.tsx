import Menu from "../components/Menu"
import Profile from "../components/Profile"
import Resource from "../components/Resource"

function Homescreen() {

  return (
    <>
      <div className="w-screen h-screen bg-cover bg-bottom-left bg-[url(src/assets/screens/homescreen-bg.png)]">
            <div className="absolute w-screen h-screen bottom-0 left-0 overflow-hidden">
              <img className="absolute -bottom-0 move-animation" style={{ '--duration': '2' } as React.CSSProperties} src="src/assets/clouds/cloud1.png"></img>
              <img className="absolute -bottom-0 move-animation" style={{ '--duration': '3' } as React.CSSProperties} src="src/assets/clouds/cloud1.png"></img>
              <img className="absolute -bottom-0 move-animation" style={{ '--duration': '5' } as React.CSSProperties} src="src/assets/clouds/cloud2.png"></img>
              <img className="absolute -bottom-5 move-animation" style={{ '--duration': '7' } as React.CSSProperties} src="src/assets/clouds/cloud3.png"></img>
              <img className="absolute -bottom-0 move-animation" style={{ '--duration': '11' } as React.CSSProperties} src="src/assets/clouds/cloud2.png"></img>
              <img className="absolute -bottom-5 move-animation" style={{ '--duration': '13' } as React.CSSProperties} src="src/assets/clouds/cloud3.png"></img>
            </div>

            <div className="absolute w-screen h-screen bg-contain bg-bottom-right bg-no-repeat bg-[url(src/assets/screens/homescreen-fg.png)]">
              <div className="w-screen h-screen px-16 py-[24px] flex flex-col justify-between items-center">
                <div className="w-full h-1/18 flex justify-between items-start">
                  <div>
                    <Profile></Profile>
                  </div>
                  <div className="w-1/2 h-full">
                    <Resource></Resource>
                  </div>
                </div>
                <div className="flex flex-col justify-end">
                  <Menu></Menu>
                </div>
              </div>
            </div>
          

      </div>


    </>
  )
}

export default Homescreen
