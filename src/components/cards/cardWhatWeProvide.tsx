import Title from "Components/title/title";
import { Link } from "react-router-dom";

import appDesign from "Images/cards/appDesign.svg";
import webDesign from "Images/cards/webDesign.svg";
import webDevelopment from "Images/cards/webDevelopment.svg";


type CardProps = {
    img: string
    title: string
    desc: string
    background: string
}

const CardWhatWeProvide = () => {
    const items = [
        {
            img: appDesign,
            title: "App Design",
            desc: "Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet",
            background: "#E3F8FA"
        },
        {
            img: webDesign,
            title: "Web Design",
            desc: "Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet",
            background: "#F4ECE0"
        },
        {
            img: webDevelopment,
            title: "Web Development",
            desc: "Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet",
            background: "#F5E6FE"
        },
    ]
    return (
        <div className="mt-12">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8 items-end">
                <div>
                    <Title title="What We Provide" />
                    <p className="text-typography-flint text-lg mt-2">
                        <span className="block">Praesent placerated egestas egestas cras rhone</span>
                        magna rutrum tellus laoreet
                    </p>
                </div>

                <div className="flex md:justify-end justify-center md:order-none order-last ">
                    <button className="bg-background-merino text-primary-orange-default md:py-3 py-2 md:px-8 px-4 h-fit w-fit rounded font-medium">See More</button>
                </div>


                <div className="md:col-span-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
                    {items.map(({ img, title, desc, background }) => <Card img={img} title={title} desc={desc} background={background} />)}
                </div>
            </div>
        </div>
    );
}

export default CardWhatWeProvide;

const Card = ({ background, img, title, desc }: CardProps) => {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-4 px-8 py-16 rounded-md" style={{ background: background }}>
            <img src={img} />

            <span className="block -mt-12 font-bold text-2xl">{title}</span>
            <p className=" text-typography-flint text-lg">{desc}</p>
            <Link to="/" className="font-medium underline text-lg">Learn More</Link>
        </div>
    )
}