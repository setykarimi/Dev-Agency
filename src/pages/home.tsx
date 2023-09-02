import BannerHome from "Components/banners/bannerHome";
import Brands from "Components/brands/brands";
import CardBestIdeas from "Components/cards/cardBestIdeas";
import CardBestUserExperience from "Components/cards/cardBestUserExperience";
import CardOurProjects from "Components/cards/cardOurProjects";
import CardWhatWeProvide from "Components/cards/cardWhatWeProvide";
import SliderHome from "Components/slider/sliderHome";
import BannerNewsLetter from "Components/banners/bannerNewsLetter";
import { useRef } from "react";

const Home = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  const navigateToBottomHandler = () => {
    console.log(elementRef);
    
  }

  return (
    <>
      <BannerHome navigateHandler={navigateToBottomHandler} />
      <div className="lg:container xl:px-40 px-4 mx-auto">
        <Brands ref={elementRef} />
        <CardOurProjects />
        <CardWhatWeProvide />
        <CardBestUserExperience />
        <CardBestIdeas />
        <SliderHome />
        <BannerNewsLetter />
      </div>
    </>
  );
};

export default Home;
