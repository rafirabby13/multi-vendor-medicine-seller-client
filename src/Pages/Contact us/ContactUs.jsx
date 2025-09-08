import React from "react";
import {
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import Header from "../../components/molecules/Header";

const ContactUs = () => {
  return (
    <div>
        <Header title={'Contact Us'} description={"Have questions about MediMart? We'd love to hear from you. Reach out to our team using any of the methods below."}></Header>
      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col space-y-4">
              {/* <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="text-lg">
                Have questions about MediMart? We'd love to hear from you. Reach
                out to our team using any of the methods below.
              </p> */}

              <div className="space-y-4 mt-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#38c8c5] p-3 rounded-full">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <span>contact@medimart.com</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#6f8bd7] p-3 rounded-full">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <span>1-800-MEDI-MART</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#99bfe3] p-3 rounded-full">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                  <span>123 Health Avenue, Medical District, MD 12345</span>
                </div>
              </div>
            </div>

            <div className="bg-[#f9fdfd] p-6 rounded-lg shadow-md">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38c8c5]"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38c8c5]"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#38c8c5]"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-[#38c8c5]"
                  ></textarea>
                </div>
                <button
                  className="bg-[#38c8c5] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-all duration-200"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-second to-[#38c8c5] rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Network</h2>
            <p className="text-lg max-w-2xl mx-auto mb-6">
              Are you a licensed pharmacy or healthcare product vendor? Partner
              with MediMart and reach thousands of customers nationwide.
            </p>
            <button className="bg-white text-[#081d1d] px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-200">
              Become a Vendor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
