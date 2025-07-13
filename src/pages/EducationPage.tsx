import BackButton from "../components/BackButton"
import Resource from "../components/Resource"

function EducationPage() {

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
            <img className="w-1/5 expand-vertical-mask-animation" style={{ '--delay': '0.5' } as React.CSSProperties} src="src/assets/bangkit-banner.svg" alt=""/>
            <img className="w-1/4 expand-vertical-mask-animation" src="src/assets/ui-banner.svg" alt=""/>
          </div>
        </div>
      </div>
    </>
  )
}

export default EducationPage
