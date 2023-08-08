import Navbar from "Layout/navbar";
import { Outlet } from "react-router-dom";
import Footer from "Layout/footer";

const Layout = () => {
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