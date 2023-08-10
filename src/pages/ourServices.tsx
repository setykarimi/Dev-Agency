import BannerNewsLetter from "Components/banners/bannerNewsLetter";
import HeroSectionBanner from "Components/banners/heroSectionBanner";
import { Card as ProvidedCard } from "Components/cards/cardWhatWeProvide";
import Title from "Components/title/title";
import { whatWeProvided } from "Data/whatWeProvided";

const OurServices = () => {
    return (
        <>
            <HeroSectionBanner title="Services" />
            <div className="lg:container xl:px-40 px-4 mx-auto">
                <div className="text-center flex flex-col justify-center items-center mt-20">
                    <Title title="What We Provide" />
                    <p className="text-typography-flint text-lg mt-2 md:flex lg:flex-col flex-row md:whitespace-nowrap flex-wrap">
                        <span className="md:block">
                            Praesent placerated egestas egestas cras rhone
                        </span>
                        magna rutrum tellus laoreet
                    </p>
                </div>
                <div className="md:col-span-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
                    {whatWeProvided.map(({ img, title, desc, background, link }) => <ProvidedCard img={img} title={title} desc={desc} background={background} link={link}/>)}
                </div>
            </div>
            <BannerNewsLetter />
        </>
    );
}

export default OurServices;