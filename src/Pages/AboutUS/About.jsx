// eslint-disable-next-line no-unused-vars
import { HeartPulse, Mail, MapPin, Phone, ShieldCheck, Truck, Users } from "lucide-react";
import Header from "../../components/Header";
import img from '/contact.jpg'

const About = () => {
  return (
    <div className="bg-[#f9fdfd] text-[#081d1d] min-h-screen">
      {/* Hero Section */}
      

      <Header title={' About MediMart'} description={'Your trusted multi-vendor marketplace for all your pharmaceutical needs'}></Header>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg">
                Founded in 2022, MediMart was created with a simple mission: to
                make healthcare accessible to everyone. We recognized the
                challenges people face when trying to find affordable and
                reliable medications.
              </p>
              <p className="text-lg">
                By bringing together trusted pharmacies and healthcare vendors
                on a single platform, we've created a marketplace where
                customers can easily compare options, read reviews, and make
                informed decisions about their health.
              </p>
              <p className="text-lg">
                Today, MediMart serves thousands of customers nationwide,
                connecting them with certified vendors who provide quality
                healthcare products at competitive prices.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="h-64 bg-[#99bfe3] flex items-center justify-center">
                {/* <HeartPulse size={120} className="text-white" /> */}
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Core Values</h2>
            <div className="h-1 w-16 bg-[#38c8c5] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f9fdfd] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#6f8bd7] p-4 rounded-full mb-4">
                <ShieldCheck className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p>
                We verify all vendors to ensure they meet the highest standards
                of pharmaceutical care and product quality.
              </p>
            </div>

            <div className="bg-[#f9fdfd] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#38c8c5] p-4 rounded-full mb-4">
                <Users className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p>
                We prioritize your health and satisfaction with transparent
                information and responsive customer support.
              </p>
            </div>

            <div className="bg-[#f9fdfd] p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-[#99bfe3] p-4 rounded-full mb-4">
                <Truck className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Service</h3>
              <p>
                We ensure timely delivery of medications and healthcare products
                when you need them most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Leadership Team</h2>
            <div className="h-1 w-16 bg-[#38c8c5] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-[#99bfe3] flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-white">JD</span>
              </div>
              <h3 className="text-xl font-bold">Jane Doe</h3>
              <p className="text-[#6f8bd7] font-medium">CEO & Founder</p>
              <p className="text-center mt-2">
                Former healthcare executive with 15+ years of experience in
                pharmaceutical distribution.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-[#6f8bd7] flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-white">JS</span>
              </div>
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-[#38c8c5] font-medium">CTO</p>
              <p className="text-center mt-2">
                Tech innovator with expertise in building secure e-commerce
                platforms for healthcare.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full bg-[#38c8c5] flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-white">SD</span>
              </div>
              <h3 className="text-xl font-bold">Sarah Davis</h3>
              <p className="text-[#99bfe3] font-medium">
                Head of Vendor Relations
              </p>
              <p className="text-center mt-2">
                Pharmaceutical industry veteran focused on building our network
                of trusted vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default About;
