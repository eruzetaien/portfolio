function UnsupportedScreen () {
  const baseUrl =  import.meta.env.BASE_URL;
  const char = baseUrl + "assets/victory.png"

    return (
      <div className="w-screen h-screen flex flex-col items-center bg-gradient-to-b from-[#495891] to-[#B9C4DA]">
        <div className="w-full h-full flex flex-col gap-y-2 justify-center items-center overflow-auto">
          <h1>Desktop Only</h1>

        <img className="h-1/2" src={char} alt=""/>
        <p className="w-1/2 text-xl text-center">
          This website is currently designed for desktop screens.
          Please access it from a larger screen~
        </p>
        </div>
      </div>
    );
}

export default UnsupportedScreen;
