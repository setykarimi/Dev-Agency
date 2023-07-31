import Brands from "Components/brands/brands";
import BannerHome from "Components/banners/bannerHome";
import CardOurProjects from "Components/cards/cardOurProjects";

const Home = () => {
  return (
    <>
      <BannerHome />
      <div className="container md:px-12 px-4 mx-auto ">
        <Brands />
        <CardOurProjects />
      </div>
    </>
  );
};

export default Home;
