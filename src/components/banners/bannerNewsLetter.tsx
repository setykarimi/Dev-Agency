import Title from "Components/title/title";
import leftChevron from 'Images/icons/leftChevron.svg';
import rightChevron from 'Images/icons/rightChevron.svg';

const BannerNewsLetter = () => {
    return (
        <div className="md:mt-20 mt-10 text-center flex justify-center items-center">
            <img src={leftChevron} alt="left" className="lg:block hidden"/>
            <div className="flex flex-col gap-4 justify-center items-center ">
                <Title title="Newsletter Subscription" />
                <p className="text-lg text-typography-flint px-10 text-center">
                    <span className="block">
                        Praesent placerated egestas egestas cras rhone
                    </span>
                    <span className="block">
                        magna rutrum tellus laoreet
                    </span>
                </p>
                <form>
                <div className=" bg-white p-1 rounded-md flex gap-4 w-full" style={{
                    boxShadow: '0px 30px 49px 0px rgba(156, 45, 0, 0.09)'
                }}>
                    <input type="email" className="w-5/6 outline-none px-4 text-typography-hurricane" placeholder="Enter your email address"/>
                    <button type="submit" className=" bg-primary-orange-default text-white py-2 px-4 rounded">Subscibe</button>
                </div>
                </form>
            </div>
            <img src={rightChevron} alt="right" className="lg:block hidden"/>

        </div>
    );
}

export default BannerNewsLetter;