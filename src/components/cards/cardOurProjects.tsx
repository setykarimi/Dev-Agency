import Title from "Components/title/title";

import img1 from "Images/cards/productLandingpage1.png";
import img2 from "Images/cards/productLandingpage2.png";

const CardOurProjects = () => {
    return (
        <>
           <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-end mt-20">
                <div>
                    <Title title="Our Projects" />
                    <p className="text-typography-flint text-lg mt-2 flex lg:flex-col flex-row whitespace-nowrap flex-wrap">
                        <span className="block">Praesent placerated egestas egestas cras rhone</span>
                        magna rutrum tellus laoreet
                    </p>
                </div>

              <div className="flex md:justify-end justify-center md:order-none order-last ">
              <button className="bg-background-merino text-primary-orange-default md:py-3 py-2 md:px-8 px-4 h-fit w-fit rounded font-medium">See More</button>
              </div>
            
           
                <div className="bg-[#F5E6FE] pt-12 px-4 rounded">
                    <div className="block text-2xl font-bold text-center">
                        <span className="block">Watch - Product Responsive </span>
                        <span className="block">Landing Page</span>
                    </div>
                    <img src={img1} alt="landing" className="mt-8 mx-auto"/>
                </div>
                <div className="bg-background-merino pt-12 px-4 rounded">
                <div className="block text-2xl font-bold text-center">
                        <span className="block">SEO Agency - Creative</span>
                        <span className="block">Landing Page</span>
                    </div>
                    <img src={img2} alt="landing" className="mt-8 mx-auto"/>
                </div>
            </div>
        </>
    );
}

export default CardOurProjects;