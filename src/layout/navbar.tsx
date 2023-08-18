import logo from 'Images/logo.svg'
import menu from 'Images/icons/menu.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react'



const Navbar = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const menuItems = [
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
            name: "About",
            link: "/about-us"
        }
    ]

    const showMenuHandler = () => {
        console.log(showMenu);
        setShowMenu(!showMenu)
    }
    return (
        <nav className="bg-background-merino p-4 flex sticky top-0 z-20">
            <div className="lg:container xl:px-40 px-0 mx-auto flex justify-between items-center w-full">
                <div className="logo flex items-center gap-2">
                    <img src={logo} alt='logo' className='w-4' />
                    <span className='font-bold text-typography-asphalt text-xl'>DevAgency</span>
                </div>

                <button className='md:hidden block' onClick={showMenuHandler}>
                    <img src={menu} alt="menu" />
                </button>
                <div className={`flex md:flex-row flex-col md:static fixed md:top-auto top-0 md:p-0 p-8 md:left-auto md:h-auto ${showMenu ? "left-0" : "-left-96"} transition-all h-screen md:bg-transparent bg-background-maize md:w-auto w-1/2 gap-8 md:items-center`}>
                    <div className={`flex md:flex-row flex-col gap-4 z-50`}>
                        {menuItems.map(({ name, link }) => <Link to={link} className='font-medium border-b border-b-transparent text-typography-flint hover:border-b hover:border-b-primary-orange-default hover:font-bold transition-all'>{name}</Link>)}
                    </div>
                    <Link to="contact-us" className='py-2 px-4 bg-primary-orange-default text-white rounded'>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;