import behance from "Images/logos/behance.svg"
import cocacola from "Images/logos/cocacola.svg"
import google from "Images/logos/google.svg"
import dribbble from "Images/logos/dribbble.svg"
import amazon from "Images/logos/amazon.svg"

const Brands = () => {
    const images = [behance, cocacola, google, dribbble, amazon]
    return (
        <div className="flex flex-wrap md:justify-between justify-center items-center md:gap-4 gap-8 mt-20">
            {images.map((img) => <img src={img} alt="logo" className="lg:w-auto md:w-30 w-24"/>)}
        </div>
    );
}

export default Brands;