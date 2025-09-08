import { Outlet, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth.jsx";
import Banner2 from "../Pages/Home/Banner2.jsx";
import Navbar from "../components/Shared/Navbar.jsx";
import Footer from "../components/Shared/Footer.jsx";

const Layout = () => {
  const {theme } = useAuth()
 

  const location = useLocation();

  return (
    <div id={`${theme}`}>
      <Navbar />
      <section className="h-[72px] md:h-[88px] lg:h-[105px]"></section>
      {location.pathname == "/" && <Banner2 />}
      <section className="md:max-w-[85%] mx-auto ">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
