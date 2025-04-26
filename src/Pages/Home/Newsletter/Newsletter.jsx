import {
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Swal from "sweetalert2";
const Newsletter = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Send Email to Medimart?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send Email!",
    }).then((result) => {
      if (result.isConfirmed) {
        emailjs
          .sendForm("service_vpkxgkp", "template_qut7tdf", form.current, {
            publicKey: "u6maY1mTe0XfC72by",
          })
          .then(
            () => {
              console.log("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
        Swal.fire({
          title: "Email Sent!",
          text: "Your file has been sent.",
          icon: "success",
        });
        e.target.reset();
      }
    });
  };
  return (
    <div>
      <div className="bg-white border rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center  px-6 py-5">
     
        <form ref={form} onSubmit={sendEmail} className="flex items-center justify-between gap-2">
          <div className="  ">
          
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02995D] border border-btns"
              placeholder="Your Email"
              required 
            />
          </div>

        <div>
        <button className="btn  bg-btns text-xl font-semibold  hover:bg-[#6B8A7A] transition duration-300">
            SUBSCRIBE
          </button>
        </div>
        </form>

      
        <div className="text-center md:text-left mx-4 ">
          <h2 className="text-lg font-semibold text-gray-900">
            SIGN UP FOR NEWSLETTER
          </h2>
          <p className="text-gray-600 text-sm">
            Get <span className="text-red-500 font-bold">30% OFF</span> coupon
            today subscribers
          </p>
        </div>

   
      </div>
    </div>
  );
};

export default Newsletter;
