import chevronRight from "Images/icons/chevronRight.svg";
import heroBannerBg from "Images/heroBannerBg.png";
import { Link } from "react-router-dom";

type BannerTypes = {
    title: string
    breadcrumbs?: string
}

const HeroSectionBanner = ({title, breadcrumbs}: BannerTypes) => {
    return ( 
        <div className="bg-background-merino p-4">
        <div className="lg:container mx-auto xl:px-40">
            <div className="flex flex-col items-center justify-center  md:py-28 py-16" style={{background: `url(${heroBannerBg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: 'center'}}>
                <h1 className="md:text-5xl text-3xl font-extra-bold md:mt-8 mt-4  md:px-10 md:max-w-[40rem] text-center">
                   {title}
                </h1>
                <div className="mt-6 flex items-center gap-2 text-typography-flint">
                    <Link to="/">Home</Link>
                    <span><img src={chevronRight} alt="right" /></span>
                    {breadcrumbs && <>  <span>{breadcrumbs}</span>
                    <span><img src={chevronRight} alt="right" /></span></>}
                    <span className="truncate max-w-[11rem]">{title}</span>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default HeroSectionBanner;