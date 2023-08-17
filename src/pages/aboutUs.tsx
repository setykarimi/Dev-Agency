import HeroSectionBanner from "../components/banners/heroSectionBanner";
import aboutImg from "Images/aboutUs.png";
import Title from "../components/title/title";
import Brands from "../components/brands/brands";
import { ourTeam } from "../assets/data/ourTeam";

const AboutUs = () => {
    const items = [
        {
            title: "224k+",
            detail: "Happy Clients"
        },
        {
            title: "42k+",
            detail: "Projects Done"
        },
        {
            title: "360D+",
            detail: "Days Of Work"
        }
    ]
    return (
        <>
            <HeroSectionBanner title="About Us" />
            <div className="lg:container xl:px-40 px-4 mx-auto md:mt-20 mt-10">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-6 items-center">
                    <div>
                        <img src={aboutImg} alt="about us" />
                    </div>
                    <div>
                        <Title title="Khow More About - Dev Agency & Their Process" customClass="xl:after:w-[15rem] md:after:w-[26rem] after:w-[18rem] " />
                        <p className=" text-typography-flint mt-4 text-justify lg:text-lg">
                            Nulla volutpat enim lorem, non volutpat tortor consequa ac Quisque ipsum arcu, vehicula sit amet tempor non, blandite
                            proin dignissim vitae ipsum a laoreet. In molestie imperdiet
                            vehicula urna. Ut ullamcorper neque dui, imperdiet ornared at augue. Donec semper velit eget urna aliquet.
                        </p>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {items.map(({ title, detail }) => <div>
                                <span className="block md:text-2xl text-xl text-typography-graphine font-bold">{title}</span>
                                <span className="block text-sm text-typography-flint">{detail}</span>
                            </div>)}
                        </div>

                        <button className=" bg-primary-orange-default px-4 py-2 text-white rounded mt-4">Learn More</button>
                    </div>
                </div>
                <Brands />

                <div className="md:mt-20 mt-10">
                    <div className="flex flex-col justify-center items-center">
                        <Title title="Our Team Members" />
                        <p className="text-typography-flint text-lg mt-2 md:flex lg:flex-col flex-row md:whitespace-nowrap flex-wrap text-center">
                            <span className="md:block">Praesent placerated egestas egestas cras rhone </span>
                            magna rutrum tellus laoreet
                        </p>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
                            {ourTeam.map(({ img, name, position }) => <div>
                                <img src={img} className=" rounded-t"></img>
                                <div className="rounded-b bg-background-merino md:p-8 p-6">
                                    <span className="text-typography-graphite font-bold text-xl block text-center">{name}</span>
                                    <span className="text-typography-flint block text-center mt-2">{position}</span>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;