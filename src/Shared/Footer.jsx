import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <div className="foo mt-20">
        <footer className="foote py-5 md:py-10">
          <div className="text-center py-6 md:py-20 md:animate__animated animate__slideInDown animate__slower animate__infinite">
            <h1 className="font-extrabold shadow-xl text-2xl md:text-7xl w-fit mx-auto p-2 text-[#ffffff]">
              MediMart
            </h1>
          </div>
  
          <div className="flex md:flex-row gap-5 flex-col items-start text-[#ffffff] justify-between px-4 md:px-20">
            <div className="flex flex-col gap-2 text-sm md:text-xl">
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover" href="/services/medicines">Medicines</a>
              <a className="link link-hover" href="/services/health-checkups">Health Checkups</a>
              <a className="link link-hover" href="/services/consultations">Doctor Consultations</a>
              <a className="link link-hover" href="/services/health-packages">Health Packages</a>
            </div>
            <div className="flex flex-col gap-2 text-sm md:text-xl">
              <h6 className="footer-title">Support</h6>
              <a className="link link-hover" href="/support/faqs">FAQs</a>
              <a className="link link-hover" href="/support/how-to-order">How to Order</a>
              <a className="link link-hover" href="/support/cancellations">Cancellations</a>
              <a className="link link-hover" href="/support/contact">Contact Support</a>
            </div>
            <div className="flex flex-col gap-2 text-sm md:text-xl">
              <h6 className="footer-title">About</h6>
              <a className="link link-hover" href="/about">About Us</a>
              <a className="link link-hover" href="/about/team">Our Team</a>
              <a className="link link-hover" href="/about/terms">Terms of Service</a>
              <a className="link link-hover" href="/about/privacy">Privacy Policy</a>
            </div>
          </div>
        </footer>
        <footer className="foote px-4 md:px-20 text-xl flex md:flex-row flex-col gap-5 items-center justify-between text-[#ffffffe4] py-10">
          <aside className="grid-flow-col items-center text-[#ffffffc2] text-sm md:text-2xl text-center md:text-start ">
            <p>
              &copy; {new Date().getFullYear()} MediMart Online Store. All Rights Reserved.
              <br />
              Your trusted partner in health and wellness since 2015.
              <br />
              <h1 className="underline">
                Contact us: <span className="font-bold">support@medimart.com | +1-800-555-7890</span>
              </h1>
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end text-[#ffffffc2]">
            <div className="grid grid-flow-col gap-4">
              <div className="text-xl md:text-5xl">
                <FaFacebook />
              </div>
              <div className="text-xl md:text-5xl">
                <FaTwitter />
              </div>
              <div className="text-xl md:text-5xl">
                <FaInstagram />
              </div>
              <div className="text-xl md:text-5xl">
                <FaGithub />
              </div>
              <div className="text-xl md:text-5xl">
                <FaLinkedin />
              </div>
            </div>
          </nav>
        </footer>
      </div>
    );
  };
  
  export default Footer;
