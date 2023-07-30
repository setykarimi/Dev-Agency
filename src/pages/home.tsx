import homeHeroSection from "Images/homeHeroSection.svg";
const Home = () => {
  return (
    <div className="bg-background-merino p-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center pb-8">
          <h1 className="flex flex-col md:text-5xl text-2xl font-extra-bold items-center md:mt-8 mt-4">
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
            <button className="text-white md:py-3 py-2 md:px-8 px-4 rounded bg-primary-orange-default md:text-xl font-medium">
                Get Started
            </button>
            <button className="text-primary-orange-default md:py-3 py-2 md:px-8 px-4 rounded bg-background-maize md:text-lg font-medium">
                Watch Demo
            </button>
          </div>
          <img src={homeHeroSection} className="md:-mt-44 -mt-12"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
