import Navbar from "Layout/navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "Layout/footer";
import { useEffect } from "react";

const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, [pathname]);
    return ( 
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
     );
}
 
export default Layout;