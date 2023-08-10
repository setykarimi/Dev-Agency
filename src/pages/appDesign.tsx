
import HeroSectionBanner from "Components/banners/heroSectionBanner";
import Title from "Components/title/title";
import appDesignSection from "Images/appDesignSection.png";
import bestUserExperience from "Images/illustration/bestUserExperience.png";
import bestIdeasOnWhiteBoard from "Images/illustration/bestIdeasOnWhiteBoard.png";
import check from 'Images/icons/check.svg';

const AppDesign = () => {
    const items = [
        "Blandit ut nunc vel bibendum semper elit", "Bibendum blandit ut nunc vel "
    ]
    return (
        <>
            <HeroSectionBanner title="App Design" breadcrumbs="Services" />
            <div className="lg:container xl:px-40 px-4 mx-auto mt-20">
                <Title title="App Design" />
                <p className="text-typography-flint text-lg mt-2">
                    Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.
                </p>

                <p className="text-typography-flint text-lg mt-4">
                    Proin gravida ex eget augue eleifend eleifend. Integer auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla. Maecenas ornare sollicitudin risus, vitae gravida erat porttitor quis. Sed elementum blandit ultricies. Quisque velit turpis, interdum sit amet suscipit sed, placerat
                </p>

                <img src={appDesignSection} alt="image" className="mt-8 w-full" />

                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-32 md:mt-20 mt-10 items-center">
                    <div className="xl:pr-20">
                        <Title title="Providing The World's Best User Experiences"
                            customClass="xl:after:w-[24rem] md:after:w-[24rem] after:w-[9rem]"
                        />
                        <p className="text-typography-flint md:text-lg mt-4">
                            Vestibulum blandit ut nunc vel bibendum semper elit eget dignissim rhoncus, nisl augue lacinia urna vel rutrum nisi nunc sit amet risus nulla ornare egestas.
                        </p>
                        <ul className="text-typography-flint items-center mt-4">
                            {items.map((item) => <li key={item} className="flex items-center gap-2 mt-4 md:text-lg">
                                <img src={check} alt="check" className="w-8" />
                                <span className="block">
                                    {item}
                                </span>
                            </li>)}
                        </ul>
                    </div>
                    <img src={bestUserExperience} alt="User Experience" className="md-mt-0 mt-8"/>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-32 md:mt-20 mt-10 items-center">
                    <img src={bestIdeasOnWhiteBoard} alt="User Experience" className="md:order-first order-last md:mt-0 mt-8"/>
                    <div className="xl:pr-20">
                        <Title title="Explore Your Best Ideas On a Whiteboard"
                            customClass="xl:after:w-[20rem] md:after:w-[24rem] after:w-[9rem]"
                        />
                        <p className="text-typography-flint md:text-lg mt-4">
                            Vestibulum blandit ut nunc vel bibendum semper elit eget dignissim rhoncus, nisl augue lacinia urna vel rutrum nisi nunc sit amet risus nulla ornare egestas.
                        </p>
                        <ul className="text-typography-flint items-center mt-4">
                            {items.map((item) => <li key={item} className="flex items-center gap-2 mt-4 md:text-lg">
                                <img src={check} alt="check" className="w-8" />
                                <span className="block">
                                    {item}
                                </span>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AppDesign;