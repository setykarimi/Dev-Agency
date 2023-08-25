import logo from 'Images/logo.svg'
import { Link } from 'react-router-dom';

import facebook from 'Images/icons/facebook.svg'
import twitter from 'Images/icons/twitter.svg'
import dribbble from 'Images/icons/dribbble.svg'
import linkedin from 'Images/icons/linkedin.svg'
import ve from 'Images/icons/ve.svg'


const Footer = () => {
    const links = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Our Services",
            link: "/our-services"
        },
        {
            name: "Projects",
            link: "/projects"
        },
        {
            name: "Blog",
            link: "/blog"
        },
        {
            name: "About Us",
            link: "/about-us"
        },
        {
            name: "Contact Us",
            link: "/contact-us"
        }
    ]
    
    const socialMedias = [
        facebook, twitter, dribbble, linkedin, ve
    ]
    return (<div className=" bg-background-graphite p-10 md:mt-20 mt-10">
        <div className="lg:container xl:px-40 px-0 mx-auto  w-full">

            <div className="logo flex items-center justify-center gap-2 mx-auto">
                <img src={logo} alt='logo' className='w-4' />
                <span className='font-bold text-white text-md:2xl text-xl'>DevAgency</span>
            </div>
            <div className='flex flex-wrap gap-8 justify-center my-10 pb-10 border-b border-b-[#A39189] text-[#D7D7D7]'>
                {links.map(({name,link}) => <Link key={link} to={link} className='whitespace-nowrap'>{name}</Link>)}
            </div>

            <div className='flex md:justify-end justify-center gap-4'>
                {socialMedias.map((media)=> <img src={media} alt='social' />)}
            </div>
        </div>
    </div>);
}

export default Footer;