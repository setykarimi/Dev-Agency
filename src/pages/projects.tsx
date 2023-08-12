import HeroSectionBanner from "Components/banners/heroSectionBanner";
import BannerNewsLetter from "Components/banners/bannerNewsLetter";
import Title from "Components/title/title";
import { projects } from "Data/projects";
import { Card as ProjectsCard } from "Components/cards/cardOurProjects";

const Projects = () => {
    return (
        <div>
            <HeroSectionBanner title="Projects" />
            <div className="lg:container xl:px-40 px-4 mx-auto">
                <div className="text-center flex flex-col justify-center items-center mt-20">
                    <Title title="Our Projects" />
                    <p className="text-typography-flint text-lg mt-2 md:flex lg:flex-col flex-row md:whitespace-nowrap flex-wrap">
                        <span className="md:block">
                            Praesent placerated egestas egestas cras rhone
                        </span>
                        magna rutrum tellus laoreet
                    </p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
                {projects.map(({ backgroundColor, img, title }) => <ProjectsCard backgroundColor={backgroundColor} img={img} title={title} />)}

                </div>
            </div>
            <BannerNewsLetter />
        </div>
    );
}

export default Projects;