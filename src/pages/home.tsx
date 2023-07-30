import homeHeroSection from "Images/homeHeroSection.svg";
const Home = () => {
  return (
    <div className="bg-background-merino p-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center pb-8">
          <h1 className="flex flex-col text-5xl font-extra-bold items-center mt-8">
            <span className="flex gap-2 items-center">
              {" "}
              We Build <span className="p-1 bg-background-maize">
                Digital
              </span>{" "}
              Product
            </span>
            <span className="block mt-2">For Your Success</span>
          </h1>
          <div className="mt-6 flex gap-4">
            <button className="text-white py-3 px-8 rounded bg-primary-orange-default text-lg font-medium">
                Get Started
            </button>
            <button className="text-primary-orange-default py-3 px-8 rounded bg-background-maize text-lg font-medium">
                Watch Demo
            </button>
          </div>
          <img src={homeHeroSection} className="-mt-44"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
