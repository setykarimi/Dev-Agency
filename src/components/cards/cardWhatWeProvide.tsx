import Title from "Components/title/title";
import { Link } from "react-router-dom";
import { whatWeProvided } from "Data/whatWeProvided";

export default function CardWhatWeProvide() {
    return (
        <>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-end md:mt-20 mt-10">
                <div>
                    <Title title="What We Provide" />
                    <p className="text-typography-flint text-lg mt-2 md:flex lg:flex-col flex-row md:whitespace-nowrap flex-wrap">
                        <span className="md:block">Praesent placerated egestas egestas cras rhone </span>
                        magna rutrum tellus laoreet
                    </p>
                </div>

                <div className="flex md:justify-end justify-center md:order-none order-last ">
                    <Link to="/our-services" className="bg-background-merino text-primary-orange-default md:py-3 py-2 md:px-8 px-4 h-fit w-fit rounded font-medium">See More</Link>
                </div>


                <div className="md:col-span-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {whatWeProvided.slice(0, 3).map(({ img, title, desc, background }) => <Card img={img} title={title} desc={desc} background={background} link="/our-services"/>)}
                </div>
            </div>
        </>
    );
}

type CardProps = {
    img: string
    title: string
    desc: string
    background: string
    link?: string
}

export const Card = ({ background, img, title, desc, link }: CardProps) => {
    return (
        <div className="flex flex-col items-center justify-center text-center gap-4 px-8 py-16 rounded-md" style={{ background: background }}>
            <img src={img} />

            <span className="block -mt-12 font-bold text-2xl">{title}</span>
            <p className=" text-typography-flint text-lg">{desc}</p>
            <Link to={link ? link : ""} className="font-medium underline text-lg">Learn More</Link>
        </div>
    )
}