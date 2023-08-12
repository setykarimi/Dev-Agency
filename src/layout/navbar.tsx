import logo from 'Images/logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            link: "/about"
        }
    ]
    return (
        <nav className="bg-background-merino p-4 flex sticky top-0 z-20">
            <div className="lg:container xl:px-40 px-0 mx-auto flex justify-between items-center w-full">
                <div className="logo flex items-center gap-2">
                    <img src={logo} alt='logo' className='w-4' />
                    <span className='font-bold text-typography-asphalt text-xl'>DevAgency</span>
                </div>
                <div className='md:flex hidden gap-8 items-center'>
                    <div className='flex gap-4'>
                        {menuItems.map(({ name, link }) => <Link to={link} className='font-medium border-b border-b-transparent text-typography-flint hover:border-b hover:border-b-primary-orange-default hover:font-bold transition-all'>{name}</Link>)}
                    </div>
                    <button className='py-2 px-4 bg-primary-orange-default text-white rounded'>Contact</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;