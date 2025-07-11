import BackButton from "../components/BackButton"
import Resource from "../components/Resource"

function ShopPage() {

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
          <button className="w-1/5 h-fit hover:scale-102 ">
              <img
                className="w-full hover:scale-102 "
                src="src/assets/shop-items/item-1.svg"
                alt="costume"
              />
          </button>
        </div>
      </div>


    </>
  )
}

export default ShopPage
