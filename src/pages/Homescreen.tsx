
function Homescreen() {

  return (
    <>

      <div className="w-screen h-screen bg-cover bg-bottom-left bg-[url(src/assets/homescreen-bg.png)]">
            <div className="absolute w-screen h-screen bottom-0 left-0 overflow-hidden">
              <img className="absolute -bottom-0 move-animation" style={{ '--duration': '2' } as React.CSSProperties} src="src/assets/cloud/cloud1.png"></img>
              <img className="absolute -bottom-0 move-animation" style={{ '--duration': '3' } as React.CSSProperties} src="src/assets/cloud/cloud1.png"></img>
              <img className="absolute -bottom-0 move-animation" style={{ '--duration': '5' } as React.CSSProperties} src="src/assets/cloud/cloud2.png"></img>
              <img className="absolute -bottom-5 move-animation" style={{ '--duration': '7' } as React.CSSProperties} src="src/assets/cloud/cloud3.png"></img>
              <img className="absolute -bottom-0 move-animation" style={{ '--duration': '11' } as React.CSSProperties} src="src/assets/cloud/cloud2.png"></img>
              <img className="absolute -bottom-5 move-animation" style={{ '--duration': '13' } as React.CSSProperties} src="src/assets/cloud/cloud3.png"></img>
            </div>

            <div className="absolute w-screen h-screen bg-contain bg-bottom-right bg-no-repeat bg-[url(src/assets/homescreen-fg.png)]">

            </div>
          

      </div>


    </>
  )
}

export default Homescreen
