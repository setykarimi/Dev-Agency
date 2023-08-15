import HeroSectionBanner from "../../components/banners/heroSectionBanner";
import Title from "../../components/title/title";

const BestDesignTips = () => {
    return (
        <>
            <HeroSectionBanner title="Best Design Tips You Will Read This Year" breadcrumbs="Design" />
            <div className="lg:container xl:px-40 px-4 mx-auto md:mt-20 mt-5">
                <div>
                    <span className=" text-typography-hurricane">By Dev's -- 24 August 2022 -- 4 COMMENTS</span>
                    <p className="text-typography-flint mt-4 md:text-lg text-justify">
                        Proin gravida ex eget augue eleifend eleifend. Integer dui auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla. Maecenas ornare sollicitudin risus, vitae gravida erat porttitor quis. Sed elementum blandit ultricies. Quisque velit turpis, interdum sit amet suscipit sed, placerat
                    </p>
                </div>
                <div className="md:mt-20 mt-5">
                    <Title title="User Interview" />
                    <p className=" text-typography-flint mt-4 md:text-lg text-justify">
                        Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget ligula urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.
                    </p>
                </div>

                <div className="md:mt-20 mt-5 bg-background-merino rounded-md md:border-l-4 border-l-primary-orange-default md:border-t-0 border-t-4 border-t-primary-orange-default md:p-8 p-4 flex md:flex-row flex-col gap-4 relative">
                    <span className=" font-black leading-[100px] absolute lg:top-12 md:top-16 top-8 text-background-maize text-[120px] flex md:justify-start md:left-8 left-0 md:w-fit w-full justify-center">
                        "
                    </span>
                    <p className="text-typography-flint md:text-lg md:ml-20 md:mt-0 mt-20 md:text-justify text-center leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum dictum.
                    </p>
                </div>

                <p className="text-typography-flint md:text-lg md:mt-20 mt-5 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum, dictum a lacus sit amet, blandit cursus augue. Nullam id augue sagittis, molestie urna nec, hendrerit ipsum. Etiam posuere maximus sapien lobortis interdum. Ut laoreet urna suscipit quam.
                </p>
            </div>
        </>
    );
}

export default BestDesignTips;