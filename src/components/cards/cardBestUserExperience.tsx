import Title from "Components/title/title";
import check from 'Images/icons/check.svg';
import img from "Images/bestUserExperience.png";
import bgImg from "Images/bestUserExperienceBg.png";

const CardBestUserExperience = () => {
    const items = [
        "Blandit ut nunc vel bibendum semper elit", "Bibendum blandit ut nunc vel "
    ]
    return (
        <div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 md:mt-10 mt-5 items-center">
                <div className="xl:pr-20">
                    <Title title="Providing The World's Best User Experiences"
                        customClass="xl:after:w-[13rem] lg:after:w-[24rem] md:after:w-[24rem] after:w-[9rem]"
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
                <div className="relative">
                    <img src={img} alt="User Experience" className="z-10 relative" />
                    <img src={bgImg} alt="User Experience" className="md:absolute md:block hidden bottom-20 z-0 w-2/3 right-0" />
                </div>
            </div>
        </div>);
}

export default CardBestUserExperience;