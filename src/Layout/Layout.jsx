import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar.jsx";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Layout;