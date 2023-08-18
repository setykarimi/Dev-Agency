import avatar from 'Images/blogs/avatar.png';
import hero from 'Images/blogs/hero.png';
import picture from 'Images/blogs/picture.png';
import facebook from 'Images/icons/facebookOrange.svg';
import instagram from 'Images/icons/instagramOrange.svg';
import twitter from 'Images/icons/twitterOrange.svg';
import ve from 'Images/icons/veOrange.svg';
import HeroSectionBanner from "../../components/banners/heroSectionBanner";
import Comment from "../../components/forms/comment";
import Title from "../../components/title/title";


const BestDesignTips = () => {
    const socialMedia = [
        facebook, instagram, twitter, ve
    ]

    const tags = [
        "DESIGN", "FOOD", "TRAVEL"
    ]
    return (
        <>
            <HeroSectionBanner title="Best Design Tips You Will Read This Year" breadcrumbs="Design" />
            <div className="lg:container xl:px-40 px-4 mx-auto md:mt-20 mt-10">
                <img src={hero} />
                <div className="md:mt-20 mt-10">
                    <span className=" text-typography-hurricane">By Dev's -- 24 August 2022 -- 4 COMMENTS</span>
                    <p className="text-typography-flint mt-4 md:text-lg text-justify">
                        Proin gravida ex eget augue eleifend eleifend. Integer dui auctor vehicula urna. Ut ullamcorper neque dui, imperdiet ornare ipsum semper quis. Sed lorem ipsum, molestie in leo ac, convallis eleifend diam. Pellentesque condimentum mauris neque, at vestibulum sapien hendrerit fringilla. Maecenas ornare sollicitudin risus, vitae gravida erat porttitor quis. Sed elementum blandit ultricies. Quisque velit turpis, interdum sit amet suscipit sed, placerat
                    </p>
                </div>
                <div className="md:mt-20 mt-10">
                    <Title title="User Interview" />
                    <p className=" text-typography-flint mt-4 md:text-lg text-justify">
                        Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget ligula urna volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.
                    </p>
                </div>

                <div className="md:mt-20 mt-10 bg-background-merino rounded-md md:border-l-4 border-l-primary-orange-default md:border-t-0 border-t-4 border-t-primary-orange-default md:p-8 p-4 flex md:flex-row flex-col gap-4 relative">
                    <span className=" font-black leading-[100px] absolute lg:top-12 md:top-16 top-8 text-background-maize text-[120px] flex md:justify-start md:left-8 left-0 md:w-fit w-full justify-center">
                        "
                    </span>
                    <p className="text-typography-flint md:text-lg md:ml-20 md:mt-0 mt-10 md:text-justify text-center leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum dictum.
                    </p>
                </div>

                <p className="text-typography-flint md:text-lg md:mt-20 mt-10 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum, dictum a lacus sit amet, blandit cursus augue. Nullam id augue sagittis, molestie urna nec, hendrerit ipsum. Etiam posuere maximus sapien lobortis interdum. Ut laoreet urna suscipit quam.
                </p>

                <div className="grid md:grid-cols-2 col-span-1 gap-8 md:mt-20 mt-10 items-center">
                    <div className="flex md:justify-start justify-center">
                        <img src={picture} alt="picture" />
                    </div>
                    <div>
                        <Title title="Problem Solving" />
                        <p className="text-typography-flint text-lg mt-2">
                            Proin eu bibendum dui, nec volutpat torto velit. Quisque ligula velit faucibus eu posuere in, tincidunt at urna. Aenean tincidunt dictum sem id pharetra curabitur tortor lacinia.
                        </p>

                        <ul className="pl-4 list-disc text-typography-flint">
                            <li className="mt-4">Aenean auctor massa id malesuada tincidunt</li>
                            <li className="mt-2">Aenean auctor massa id malesuada tincidunt</li>
                            <li className="mt-2">Aenean auctor massa id malesuada tincidunt</li>
                            <li className="mt-2">Aenean auctor massa id malesuada tincidunt</li>
                        </ul>
                        <p className=" text-typography-flint md:text-lg mt-4">
                            Curabitur blandit purus amet enim condimentum Aenean auctor massa id malesuada tincidunt. Nullam elementum posuere erat at accumsan ante sagittis fames ac ante ipsum.
                        </p>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-typography-flint md:text-lg md:mt-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet mollis nunc, non aliquam magna tristique at. Nulla et lorem finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magna ipsum, dictum a lacus sit amet, blandit cursus augue. Nullam id augue sagittis, molestie urna nec, hendrerit ipsum. Etiam posuere maximus sapien lobortis interdum. Ut laoreet urna suscipit quam.
                        </p>
                    </div>
                </div>

                <div className="md:mt-20 mt-10">
                    <Title title="Interface Design" />
                    <p className="text-typography-flint md:text-lg mt-4 text-justify">
                        Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit eget urna igula volutpat aliquet. Donec eget ligula at mauris sollicitudin congue. Proin dignissim vitae ipsum a
                        finibus, faucibus nibh nec, aliquam nisi. Integer nec erat ex. In ac libero id erat pulvinar faucibus nec sit amet erat. Aenean magne laoreet. In molestie imperdiet ante, eget lacinia lorem venenatis vitae. Donec et tristique nunc.
                    </p>
                </div>

                <div className="md:mt-20 mt-10 pt-8 border-t border-t-background-merino flex md:flex-row flex-col justify-between md:gap-0 gap-8">
                    <div className="flex gap-4 items-center">
                        <span className="font-bold md:text-xl text-lg text-typography-graphite">SOCIAL:</span>
                        {socialMedia.map((media) => <div className="bg-background-merino rounded-full w-10 h-10 border-2 border-primary-orange-default flex items-center justify-center"><img src={media} alt="media" /></div>)}
                    </div>
                    <div className="flex gap-4 items-center">
                        <span className="font-bold md:text-xl text-lg text-typography-graphite">TAGS:</span>
                        {tags.map((tag) => <span className="w-fit block px-4 py-2 text-primary-orange-default bg-background-maize text-sm font-semibold rounded">{tag}</span>)}
                    </div>
                </div>


                <div className="rounded md:mt-20 mt-10 gap-8 bg-background-merino md:p-8 p-6 flex md:flex-row flex-col items-center">
                    <img src={avatar} alt="avatar" className="rounded-full w-40 h-40 object-cover" />
                    <div>
                        <span className="block text-typography-graphite md:text-2xl text-xl font-bold md:text-left text-center">
                            Ethan Brooks
                        </span>
                        <span className="block mt-4 text-typography-hurricane text-sm md:text-left text-center">Blog Writter</span>
                        <p className="text-typography-flint md:text-lg mt-4 md:text-justify text-center leading-relaxed">
                            Nulla volutpat enim lorem, non volutpat tortor consequat ac. Quisque ipsum arcu, vehicula sit amet tempor non, blandit at augue. Donec semper velit congue.
                        </p>
                    </div>
                </div>

                <Comment />
            </div>
        </>
    );
}

export default BestDesignTips;