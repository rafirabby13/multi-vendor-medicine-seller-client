import {
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      <div className="bg-background border border-second rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center px-6 py-5">
        {/* Form Section */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex items-center justify-between gap-4 w-full md:w-auto"
          role="form"
          aria-label="Newsletter Signup"
        >
          <div className="w-full md:w-64">
            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 rounded-lg border border-second focus:outline-none focus:ring-2 focus:ring-third focus:border-third transition duration-300 placeholder:font placeholder:opacity-60"
              placeholder="Your Email"
              required
            />
          </div>
          <button className="btn bg-btns text-font font-semibold hover:bg-second transition duration-300">
            SUBSCRIBE
          </button>
        </form>

        {/* Text Section */}
        <div className="text-center md:text-left mt-4 md:mt-0 md:ml-6">
          <h2 className="text-lg font-semibold text-font">
            SIGN UP FOR NEWSLETTER
          </h2>
          <p className="text-font text-sm mt-1">
            Get <span className="text-btns font-bold">30% OFF</span> coupon
            today subscribers
          </p>
          <p className="text-font text-xs mt-1 italic opacity-70">
            We respect your privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
