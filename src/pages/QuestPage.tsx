import BackButton from "../components/BackButton"
import QuestContainer from "../components/QuestContainer"
import Resource from "../components/Resource"

function QuestPage() {

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center bg-gradient-to-b from-[#495891] to-[#B9C4DA]">
        <div className="w-screen h-screen px-16 py-[32px] flex flex-col justify-between items-center gap-y-5">
          <div className="w-full h-fit flex justify-between items-center">
            <div>
              <BackButton pageName="Quest Book" />
            </div>
            <div className="w-1/2 h-full">
              <Resource></Resource>
            </div>
          </div>
          <div className="w-5/6 h-11/12 bg-gradient-to-b from-[#252B3BCC] to-[#6575A1CC]  rounded-[10px] p-[10px]">
            <QuestContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestPage
