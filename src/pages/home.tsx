import Brands from "Components/brands/brands";
import BannerHome from "Components/banners/bannerHome";
import CardOurProjects from "Components/cards/cardOurProjects";
import CardWhatWeProvide from "Components/cards/cardWhatWeProvide";

const Home = () => {
  return (
    <>
      <BannerHome />
      <div className="lg:container xl:px-40 px-4 mx-auto">
        <Brands />
        <CardOurProjects />
        <CardWhatWeProvide />
      </div>
    </>
  );
};

export default Home;
