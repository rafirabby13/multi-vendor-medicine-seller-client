import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar.jsx";
import Footer from "../Shared/Footer.jsx";
import Banner from "../Pages/Home/Banner.jsx";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      {location.pathname == "/" && <Banner />}
      <section className="md:max-w-[85%] mx-auto">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
