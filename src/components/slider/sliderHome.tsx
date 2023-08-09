import Title from "Components/title/title";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

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
            bgColor: "#F4ECE0",
            textColor: "#FF733B"
        },
        {
            avatar: avatar2,
            name: "Callum Bolton",
            position: "Ui/Ux Designer",
            description: "Nulla pulvinar felis ipsum. Nulla facilisi. Duis placerat erd urna Lorem ipsum dolor sit amet con adipiscing elit. Proin gravida orc pulvinar aliquet.",
            bgColor: "#E3F8FA",
            textColor: "#26C6DA"
        },
        {
            avatar: avatar1,
            name: "Sety Karimi",
            position: "Frontend Developer",
            description: "Nulla pulvinar felis ipsum. Nulla facilisi. Duis placerat erd urna Lorem ipsum dolor sit amet con adipiscing elit. Proin gravida orc pulvinar aliquet.",
            bgColor: "#F5E6FE",
            textColor: "#BE63F9"
        }
    ]
    return (
        <div className="md:mt-10 relative">
            <div className="mb-8">
                <Title title="Customers Feedback" />
                <p className="text-typography-flint md:text-lg mt-4">
                    Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet
                </p>
            </div>
            <Swiper
                modules={[Navigation]}
                navigation={true}  
                spaceBetween={30}
                breakpoints={{
                    576: {
                      // width: 576,
                      slidesPerView: 1,
                    },
                    768: {
                      // width: 768,
                      slidesPerView: 2,
                    },
                  }}
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

const SlideOne = ({ slider }: SliderItemProps) => {
    return (
        <div className="md:px-10 px-6 pt-20 md:pb-10 pb-6 rounded-md relative mt-12" style={{ background: slider.bgColor }}>
            <div className="-top-12 z-10 absolute rounded-full p-[3px]" style={{background: slider.textColor}}>
                <img src={slider.avatar} alt="avatar" />
            </div>
            <div className="flex justify-between relative">
                <div>
                    <span className="text-typography-graphite font-semibold block md:text-lg text-xl">{slider.name}</span>
                    <span className="text-typography-hurricane block">
                        {slider.position}
                    </span>
                </div>
                <span className="block font-black absolute right-0 top-0 leading-[100px]" style={{ fontSize: "120px", color: slider.textColor }}>"</span>
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