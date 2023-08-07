import BannerHome from "Components/banners/bannerHome";
import Brands from "Components/brands/brands";
import CardBestIdeas from "Components/cards/cardBestIdeas";
import CardBestUserExperience from "Components/cards/cardBestUserExperience";
import CardOurProjects from "Components/cards/cardOurProjects";
import CardWhatWeProvide from "Components/cards/cardWhatWeProvide";
import SliderHome from "Components/slider/sliderHome";

const Home = () => {
  return (
    <>
      <BannerHome />
      <div className="lg:container xl:px-40 px-4 mx-auto">
        <Brands />
        <CardOurProjects />
        <CardWhatWeProvide />
        <CardBestUserExperience />
        <CardBestIdeas />
        <SliderHome />
      </div>
    </>
  );
};

export default Home;
