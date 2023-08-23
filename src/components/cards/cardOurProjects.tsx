import Title from "Components/title/title";

import { projects } from "Data/projects";
import { Link } from "react-router-dom";

export default function CardOurProjects() {
    return (
        <>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-end md:mt-20 mt-10">
                <div>
                    <Title title="Our Projects" />
                    <p className="text-typography-flint text-lg mt-2 md:flex lg:flex-col flex-row md:whitespace-nowrap flex-wrap">
                        <span className="md:block">Praesent placerated egestas egestas cras rhone </span>
                        magna rutrum tellus laoreet
                    </p>
                </div>

                <div className="flex md:justify-end justify-center md:order-none order-last ">
                    <Link to="/projects" className="bg-background-merino text-primary-orange-default md:py-3 py-2 md:px-8 px-4 h-fit w-fit rounded font-medium">See More</Link>
                </div>
                {projects.slice(0, 2).map(({ backgroundColor, img, title }) => <Card backgroundColor={backgroundColor} img={img} title={title} />)}
            </div>
        </>
    );
}


type CardProps = {
    backgroundColor: string
    img: string
    title: string
    path?: string
}

export const Card = ({ backgroundColor, img, title, path }: CardProps) => {
    return (
        <Link to={path ? path : ""} className={`pt-12 px-4 rounded ${path ? "cursor-pointer" : "cursor-default"}`} style={{ background: backgroundColor }}>
            <div className="block text-2xl font-bold text-center">
                <span className="block">{title}</span>
                <span className="block">Landing Page</span>
            </div>
            <img src={img} alt="landing" className="mt-8 mx-auto" />
        </Link>
    )
}