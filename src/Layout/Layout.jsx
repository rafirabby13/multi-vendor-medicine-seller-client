import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar.jsx";
import Footer from "../Shared/Footer.jsx";
import Banner from "../Pages/Home/Banner.jsx";
import { useState } from "react";
import useAuth from "../hooks/useAuth.jsx";

const Layout = () => {
  const {theme } = useAuth()
 

  const location = useLocation();

  return (
    <div id={`${theme}`}>
      <Navbar />
      <section className="h-[80px] md:h-[96px] lg:h-[128px]"></section>
      {location.pathname == "/" && <Banner />}
      <section className="md:max-w-[85%] mx-auto ">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
