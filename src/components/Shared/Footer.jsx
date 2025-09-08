
  
  const Footer = () => {
  const currentYear = new Date().getFullYear();
    return (
      // <div className="foo mt-20">
      //   <footer className="foote py-5 md:py-10">
      //     <div className="text-center py-6 md:py-20 md:animate__animated animate__slideInDown animate__slower animate__infinite">
      //       <h1 className="font-extrabold shadow-xl text-2xl md:text-7xl w-fit mx-auto p-2 text-[#ffffff]">
      //         MediMart
      //       </h1>
      //     </div>
  
      //     <div className="flex md:flex-row gap-5 flex-col items-start text-[#ffffff] justify-between px-4 md:px-20">
      //       <div className="flex flex-col gap-2 text-sm md:text-xl">
      //         <h6 className="footer-title">Services</h6>
      //         <a className="link link-hover" href="/services/medicines">Medicines</a>
      //         <a className="link link-hover" href="/services/health-checkups">Health Checkups</a>
      //         <a className="link link-hover" href="/services/consultations">Doctor Consultations</a>
      //         <a className="link link-hover" href="/services/health-packages">Health Packages</a>
      //       </div>
      //       <div className="flex flex-col gap-2 text-sm md:text-xl">
      //         <h6 className="footer-title">Support</h6>
      //         <a className="link link-hover" href="/support/faqs">FAQs</a>
      //         <a className="link link-hover" href="/support/how-to-order">How to Order</a>
      //         <a className="link link-hover" href="/support/cancellations">Cancellations</a>
      //         <a className="link link-hover" href="/support/contact">Contact Support</a>
      //       </div>
      //       <div className="flex flex-col gap-2 text-sm md:text-xl">
      //         <h6 className="footer-title">About</h6>
      //         <a className="link link-hover" href="/about">About Us</a>
      //         <a className="link link-hover" href="/about/team">Our Team</a>
      //         <a className="link link-hover" href="/about/terms">Terms of Service</a>
      //         <a className="link link-hover" href="/about/privacy">Privacy Policy</a>
      //       </div>
      //     </div>
      //   </footer>
      //   <footer className="foote px-4 md:px-20 text-xl flex md:flex-row flex-col gap-5 items-center justify-between text-[#ffffffe4] py-10">
      //     <aside className="grid-flow-col items-center text-[#ffffffc2] text-sm md:text-2xl text-center md:text-start ">
      //       <p>
      //         &copy; {new Date().getFullYear()} MediMart Online Store. All Rights Reserved.
      //         <br />
      //         Your trusted partner in health and wellness since 2015.
      //         <br />
      //         <h1 className="underline">
      //           Contact us: <span className="font-bold">support@medimart.com | +1-800-555-7890</span>
      //         </h1>
      //       </p>
      //     </aside>
      //     <nav className="md:place-self-center md:justify-self-end text-[#ffffffc2]">
      //       <div className="grid grid-flow-col gap-4">
      //         <div className="text-xl md:text-5xl">
      //           <FaFacebook />
      //         </div>
      //         <div className="text-xl md:text-5xl">
      //           <FaTwitter />
      //         </div>
      //         <div className="text-xl md:text-5xl">
      //           <FaInstagram />
      //         </div>
      //         <div className="text-xl md:text-5xl">
      //           <FaGithub />
      //         </div>
      //         <div className="text-xl md:text-5xl">
      //           <FaLinkedin />
      //         </div>
      //       </div>
      //     </nav>
      //   </footer>
      // </div>
      <div className="w-full bg-prime text-light foou mt-20">
     
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-10 py-8">
          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h6 className=" font-bold text-lg uppercase tracking-wider border-b border-blue-400/30 pb-2 mb-2">Services</h6>
            {[
              { href: "/services/medicines", text: "Medicines" },
              { href: "/services/health-checkups", text: "Health Checkups" },
              { href: "/services/consultations", text: "Doctor Consultations" },
              { href: "/services/health-packages", text: "Health Packages" }
            ].map((link, index) => (
              <a 
                key={index}
                className=" hover:text-blue-200 transition-colors duration-300 flex items-center group"
                href={link.href}
              >
                <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {link.text}
              </a>
            ))}
          </div>
          
          {/* Support Column */}
          <div className="flex flex-col gap-4">
            <h6 className=" font-bold text-lg uppercase tracking-wider border-b border-blue-400/30 pb-2 mb-2">Support</h6>
            {[
              { href: "/support/faqs", text: "FAQs" },
              { href: "/support/how-to-order", text: "How to Order" },
              { href: "/support/cancellations", text: "Cancellations" },
              { href: "/support/contact", text: "Contact Support" }
            ].map((link, index) => (
              <a 
                key={index}
                className=" hover:text-blue-200 transition-colors duration-300 flex items-center group"
                href={link.href}
              >
                <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {link.text}
              </a>
            ))}
          </div>
          
          {/* About Column */}
          <div className="flex flex-col gap-4">
            <h6 className=" font-bold text-lg uppercase tracking-wider border-b border-blue-400/30 pb-2 mb-2">About</h6>
            {[
              { href: "/about", text: "About Us" },
              { href: "/about/team", text: "Our Team" },
              { href: "/about/terms", text: "Terms of Service" },
              { href: "/about/privacy", text: "Privacy Policy" }
            ].map((link, index) => (
              <a 
                key={index}
                className=" hover:text-blue-200 transition-colors duration-300 flex items-center group"
                href={link.href}
              >
                <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-blue-400/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright and Contact */}
            <div className="/80 text-sm md:text-base">
              <p>
                &copy; {currentYear} MediMart Online Store. All Rights Reserved.
                <br />
                Your trusted partner in health and wellness since 2015.
              </p>
              <p className="mt-2">
                <span className="">Contact us: </span>
                <span className="font-medium">support@medimart.com | +1-800-555-7890</span>
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-6">
              {[
                { icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12", name: "Facebook" },
                { icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3", name: "Twitter" },
                { icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm0-14a6 6 0 0 0-6 6c0 3.3 2.7 6 6 6s6-2.7 6-6-2.7-6-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.5-10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z", name: "Instagram" },
                { icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z", name: "GitHub" },
                { icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z", name: "LinkedIn" }
              ].map((social, index) => (
                <button
                  key={index}
                  className="/70 hover: transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-6 h-6 md:w-7 md:h-7"
                  >
                    <path d={social.icon} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <div className="flex justify-center pb-6">
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="bg-third text-white  p-5 rounded-full shadow-lg transition-all duration-300 transform hover:translate-y-1"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    );
  };
  
  export default Footer;
