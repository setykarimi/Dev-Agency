import location from "Images/icons/location.svg";
import phone from "Images/icons/phone.svg";
import email from "Images/icons/email.svg";
import HeroSectionBanner from "Components/banners/heroSectionBanner";
import Message from "Components/forms/message";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const ContactUs = () => {
    const details = [
        {
            img: location,
            title: "Our Main Office",
            subTitle: "24 Sylhet, Bagbari 40",
            desc: "Central Rd, Modina Tower"
        },
        {
            img: phone,
            title: "Direct Call Us On",
            subTitle: "(224) 4466-7788",
            desc: "(224) 4466-7789"
        },
        {
            img: email,
            title: "E-mail Us At",
            subTitle: "design@gmail.com",
            desc: "example@gmail.com"
        },
    ]
    return (
        <>
            <HeroSectionBanner title="Contact" />
            <div className="lg:container xl:px-40 px-4 mx-auto md:mt-20 mt-10">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 md:mt-20 mt-10">
                    {details.map(({ img, title, subTitle, desc }) => <div className="flex gap-4 items-center bg-background-merino xl:p-8 p-6 rounded-md">
                        <div className="bg-primary-orange-default rounded-full md:w-20 w-16 md:h-20 h-16 flex justify-center items-center md:p-7 p-5">
                            <img src={img} alt="icon" />
                        </div>
                        <div className="flex flex-col">
                            <span className="block font-bold text-typography-graphite text-xl">{title}</span>
                            <div className="mt-1">
                                <span className="block text-typography-hurricane text-sm">
                                    {subTitle}
                                </span>
                                <span className="block text-typography-hurricane text-sm">
                                    {desc}
                                </span>
                            </div>
                        </div>
                    </div>)}
                </div>

                <Message />

                <MapContainer center={{ lat: 35.7219, lng: 51.3347 }} zoom={13} style={{ width: '100%', height: '500px', marginTop: '40px', borderRadius: "5px", zIndex: '0'}}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={[ 35.7219, 51.3347]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>
    );
}

export default ContactUs;