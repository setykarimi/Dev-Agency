import HeroSectionBanner from "Components/banners/heroSectionBanner";
import { Card as ProjectsCard } from "Components/cards/cardOurProjects";
import { projects } from "Data/projects";
import Title from "Components/title/title";
import profile from "Images/icons/profile.svg";
import setting from "Images/icons/setting.svg";
import people from "Images/icons/people.svg";
import calender from "Images/icons/calender.svg";
import website from "Images/icons/website.svg";
import tags from "Images/icons/tag.svg";

type cardProps = {
    backgroundColor: string
    title: string
    img: string
}
type ProjectsSubDetailsProps = {
    title: string
    titleSub: string
    cardData: cardProps
}

export default function ProjectsSubDetails({ cardData, title, titleSub }: ProjectsSubDetailsProps) {
    const details = [
        {
            img: profile,
            title: "client",
            subTitle: "PAUL THEMES",
            desc: "COMPANY, RUSSIA"
        },
        {
            img: setting,
            title: "Services",
            subTitle: "UI DESIGN",
            desc: "GRAPHIC DESIGN"
        },
        {
            img: people,
            title: "Team",
            subTitle: "DEV PIXELS -",
            desc: "UI/UX DESIGN"
        },
        {
            img: calender,
            title: "Date",
            subTitle: "2020",
            desc: "24, JANUARY"
        },
        {
            img: website,
            title: "Website",
            subTitle: "PIXELS.COM",
            desc: "DEVPIXELS.COM"
        },
        {
            img: tags,
            title: "Tags",
            subTitle: "WEB DESIGNS",
            desc: "CREATIVE, WEB"
        },
    ]

    return (
        <>
            <HeroSectionBanner title={title} breadcrumbs="Projects" />
            <div className="lg:container xl:px-40 px-4 mx-auto md:mt-20 mt-10">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8 items-center">
                    <div>
                        <Title title={`What ${titleSub}`}
                            customClass="lg:after:w-[28rem] md:after:w-[16rem] after:w-[19rem]" />
                        <p className="text-typography-flint md:text-lg mt-8">
                            Nulla volutpat enim lorem, non volutpat tortor consequa ac Quisque ipsum arcu, vehicula sit amet tempor non, blandite
                            proin dignissim vitae ipsum a laoreet. In molestie imperdiet
                            vehicula urna. Ut ullamcorper neque dui, imperdiet ornared at augue. Donec semper velit eget urna volutpat aliquet. Donec eget sollicitudin congue.
                        </p>

                        <p className="text-typography-flint md:text-lg mt-8">
                            Proin gravida ex eget augue eleifend eleifen Integer auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla.
                        </p>
                    </div>
                    <ProjectsCard backgroundColor={cardData.backgroundColor} img={cardData.img} title={cardData.title} />
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 bg-background-merino md:p-16 p-8 md:mt-20 mt-10 rounded-lg">
                    {details.map(({ img, title, subTitle, desc }) => <div className="flex gap-4 items-center">
                        <div className="bg-primary-orange-default rounded-full md:w-20 w-16 md:h-20 h-16 flex justify-center items-center md:p-6 p-5">
                            <img src={img} alt="icon" />

                        </div>
                        <div className="flex flex-col">
                            <span className="block text-typography-hurricane">{title}</span>
                            <div className="mt-1">
                                <span className="font-bold text-typography-graphite text-lg block">
                                    {subTitle}
                                </span>
                                <span className="font-bold text-typography-graphite text-lg block -mt-2">
                                    {desc}
                                </span>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    );
}


export const Watch = () => {
    return <ProjectsSubDetails title="Watch" titleSub="Watch - Product Responsive Landing Page" cardData={projects[0]}/>
}

export const Seo = () => {
    return <ProjectsSubDetails title="SEO Agency" titleSub="SEO Agency - Creative Landing Page" cardData={projects[1]}/>
}

export const Education = () => {
    return <ProjectsSubDetails title="E-Online" titleSub="E-Online - Education Landing Page" cardData={projects[2]}/>
}

export const Mdcl = () => {
    return <ProjectsSubDetails title="MDCL " titleSub="MDCL - Medical Landing Page" cardData={projects[3]}/>
}