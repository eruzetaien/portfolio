import BackButton from "../components/BackButton";
import Personality from "../components/Personality";
import Resource from "../components/Resource";
import { playerData } from "../data/playerData";

function ProfilePage() {
  const goToBig5PersonalityWeb = () => {
    window.open("https://bigfive-test.com/result/6864b107d71bcf440be34803", "_blank");
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center bg-gradient-to-b from-[#495891] to-[#B9C4DA]">
        <div className="w-full px-16 py-8 flex justify-between items-center">
            <div>
              <BackButton pageName="Profile" />
            </div>
            <div className="w-1/2 h-full">
              <Resource/>
            </div>
        </div>

        <div className="w-full h-full px-16 flex justify-center items-center overflow-auto">

          <div className="relative h-11/12 flex justify-center items-center">
            <img className="h-full" src="src/assets/containers/profile.svg" alt=""/>
            <div className="absolute w-full h-full flex py-10 px-16">
              
              <div className="w-1/2 h-99/100 pr-10 ">
                <div className="flex flex-col h-full">
                  
                  <h1 className="font-bold tracking-tight text-white">{playerData.name}</h1>
                  <h2 className="text-lg tracking-tight text-[var(--yellow)] leading-none">{playerData.job}</h2>

                  <div className="flex justify-center">
                    <div className="w-5/6 aspect-11/14 sprite"></div>
                  </div>

                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-end">
                      <h2 className="text-lg text-[var(--light-green)]"> Lv. <span className="font-bold">{playerData.level}</span></h2>
                      <h2 className="text-sm font-bold text-[var(--light-green)]"> {playerData.xp}/{playerData.maxXp}</h2>
                    </div>
                    <div className="w-full h-1/5 bg-[#495891] rounded-sm overflow-hidden">
                      <div
                        className="h-full bg-[var(--light-green)] rounded-sm"
                        style={{ width: `${playerData.xp/playerData.maxXp * 100}%` }}
                      ></div>
                    </div>
                  </div>

                </div>  
              </div>

              <div className="w-1/2 h-99/100 pl-10 pt-5 flex flex-col gap-y-3"> 
                <button
                  onClick={goToBig5PersonalityWeb}
                  className="hover:scale-105 cursor-pointer"
                >
                  <img className="w-2/3" src="src/assets/containers/tag.svg" alt="profile"/>
                </button>
                <Personality/>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProfilePage
