import behance from "Images/logos/behance.svg"
import cocacola from "Images/logos/cocacola.svg"
import google from "Images/logos/google.svg"
import dribbble from "Images/logos/dribbble.svg"
import amazon from "Images/logos/amazon.svg"

const Brands = () => {
    const images = [behance, cocacola, google, dribbble, amazon]
    return (
        <div className="container md:px-12 px-4 mx-auto flex flex-wrap md:justify-between justify-center mt-12 items-center md:gap-4 gap-8">
            {images.map((img) => <img src={img} alt="logo" className="md:w-auto w-24"/>)}
        </div>
    );
}

export default Brands;