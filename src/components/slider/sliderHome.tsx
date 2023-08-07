import Title from "Components/title/title";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import rate from "Images/icons/stars.svg";
import avatar1 from "Images/avatars/1.png";
import avatar2 from "Images/avatars/2.png";


const SliderHome = () => {
    const sliders = [
        {
            avatar: avatar1,
            name: "Ethan Brooks",
            position: "Ui/Ux Designer",
            description: "Nulla pulvinar felis ipsum. Nulla facilisi. Duis placerat erd urna Lorem ipsum dolor sit amet con adipiscing elit. Proin gravida orc pulvinar aliquet.",
            bgColor: "background-merino",
            textColor: "primary-orange-default"
        },
        {
            avatar: avatar2,
            name: "Callum Bolton",
            position: "Ui/Ux Designer",
            description: "Nulla pulvinar felis ipsum. Nulla facilisi. Duis placerat erd urna Lorem ipsum dolor sit amet con adipiscing elit. Proin gravida orc pulvinar aliquet.",
            bgColor: "[#E3F8FA]",
            textColor: "accent-cyan"
        },
    ]
    return (
        <div className="md:mt-10">
            <div className="mb-8">
                <Title title="Customers Feedback" />
                <p className="text-typography-flint md:text-lg mt-4">
                    Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet
                </p>
            </div>
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
            >
                {sliders.map((slider) => <SwiperSlide key={slider.name}><SlideOne slider={slider} /></SwiperSlide>)}

            </Swiper>
        </div>

    );
}

export default SliderHome;

type SliderItemProps = {
    slider: {
        avatar: string
        name: string
        position: string
        description: string,
        bgColor: string,
        textColor: string
    }
}


const SlideOne = ({slider}: SliderItemProps) => {
    return (
        <div className={`bg-${slider.bgColor} px-10 pt-20 pb-10 rounded-md relative mt-12`}>
            <div className={`-top-12 z-10 absolute rounded-full p-[3px] bg-${slider.textColor}`}>
                <img src={slider.avatar} alt="avatar" />
            </div>
            <div className="flex justify-between relative">
                <div>
                    <span className="text-typography-graphite font-semibold block text-lg">{slider.name}</span>
                    <span className="text-typography-hurricane block">
                        {slider.position}
                    </span>
                </div>
                <span className={`block text-${slider.textColor} font-black absolute right-0 top-0 leading-[100px]`} style={{ fontSize: "120px" }}>"</span>
            </div>


            <p className="my-4 font-medium text-typography-flint text-lg">
                {slider.description}
            </p>

            <div>
                <img src={rate} alt="rate" />
            </div>
        </div>
    )
}