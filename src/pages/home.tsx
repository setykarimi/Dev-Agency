import Brands from "Components/brands/brands";
import BannerHome from "Components/banners/bannerHome";
import CardOurProjects from "Components/cards/cardOurProjects";
import CardWhatWeProvide from "Components/cards/cardWhatWeProvide";
import CardBestUserExperience from "Components/cards/cardBestUserExperience";

const Home = () => {
  return (
    <>
      <BannerHome />
      <div className="lg:container xl:px-40 px-4 mx-auto">
        <Brands />
        <CardOurProjects />
        <CardWhatWeProvide />
        <CardBestUserExperience />
      </div>
    </>
  );
};

export default Home;
