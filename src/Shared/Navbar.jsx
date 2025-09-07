/* eslint-disable no-unused-vars */
import {
  FaCartPlus,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import { useState } from "react";
import useCart from "../hooks/useCart.jsx";
import useUsersRole from "../hooks/useUsersRole.jsx";
import logo from "/medicin.png";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic.jsx";
import { JackInTheBox } from "react-awesome-reveal";
import Button from '../components/buttons/Button.jsx'

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Navbar = () => {
  const { user, logoutUser, updateUser } = useAuth();
  const [hidden, setHidden] = useState(true);
  const [cart] = useCart();
  const [role] = useUsersRole();
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();

  const navItems = (
    <>
      {["/", "/shop", "/faq", "/about", "/contact"].map((path, idx) => (
        <li key={idx}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive 
                ? "px-4 py-2 rounded-lg bg-color-second text-light font-semibold transition-all duration-300 border-b-2 border-color-btn" 
                : "px-4 py-2 rounded-lg font-medium text-light  hover:bg-color-second hover:text-color-btns transition-all duration-300 relative group"
            }
          >
            <span className="relative">
              {["Home", "Shop", "FAQ", "About Us", "Contact Us"][idx]}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-color-btn transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>
        </li>
      ))}
      {role === "user" && (
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive 
                ? "px-4 py-2 rounded-lg bg-color-second text-color-btns font-semibold transition-all duration-300 border-b-2 border-color-btn flex items-center gap-2" 
                : "px-4 py-2 rounded-lg font-medium text-light  hover:bg-color-second hover:text-color-btns transition-all duration-300 flex items-center gap-2 relative group"
            }
          >
            <FaCartPlus className="text-lg" /> 
            <span className="bg-color-third text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
              {cart?.length}
            </span>
          </NavLink>
        </li>
      )}
      {user?.email && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive 
                ? "px-4 py-2 rounded-lg bg-color-second text-light font-semibold transition-all duration-300 border-b-2 border-color-btn" 
                : "px-4 py-2 rounded-lg font-medium text-light  hover:bg-color-second hover:text-light transition-all duration-300 relative group"
            }
          >
            <span className="relative">
              Dashboard
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-color-btn transition-all duration-300 group-hover:w-full"></span>
            </span>
          </NavLink>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    logoutUser()
      .then(() =>
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged out",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .catch(console.error);
  };

  const handleProfileUpdate = () => {
    document.getElementById("my_modal_5").showModal();
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    axiosPublic
      .post(image_hosting_api, formData)
      .then((res) => {
        if (res.data.success) {
          const photoURL = res.data.data.display_url;
          updateUser(data.name, photoURL)
            .then(() => {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Profile Updated",
                showConfirmButton: false,
                timer: 1500,
              });
              document.getElementById("my_modal_5").close();
            })
            .catch(console.error);
        }
      });
  };

  return (
    <header className="bg-gradient-to-r from-prime to-prime/90 fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-sm border-b border-second">
      <div className="navbar md:max-w-[90%] xl:max-w-[85%] mx-auto items-center py-3 lg:py-4 text-light ">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden hover:bg-color-second p-3 rounded-xl transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-color-btns"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-4 shadow-xl bg-second border border-color-second rounded-2xl w-64 z-50 space-y-2"
            >
              {navItems}
            </ul>
          </div>
          
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <img className="h-12 md:h-16 lg:h-18 drop-shadow-md" src={logo} alt="MediMart Logo" />
              <div className="absolute -inset-1 bg-gradient-to-r from-color-btn to-color-btns rounded-full opacity-20 blur-sm"></div>
            </div>
            <JackInTheBox delay={2000}>
              <div className="hidden xl:block">
                <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-black bg-gradient-to-r from-color-btns to-color-btn bg-clip-text text-transparent">
                  MediMart
                </h1>
                <p className="text-xs text-light /70 font-medium tracking-wide">Healthcare Made Easy</p>
              </div>
            </JackInTheBox>
          </Link>
        </div>

        {/* Navbar Center */}
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 xl:gap-4 text-lg font-medium">
            {navItems}
          </ul>
        </nav>

        {/* Navbar End */}
        <div className="navbar-end">
          {user ? (
            <div className="relative">
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setHidden(!hidden)}>
                <div className="hidden md:block text-right">
                  <p className="text-sm font-semibold text-light  group-hover:text-color-btns transition-colors duration-300">
                    {user.displayName}
                  </p>
                  <p className="text-xs text-light /70">Welcome back!</p>
                </div>
                <div className="relative">
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="h-12 w-12 lg:h-14 lg:w-14 rounded-full border-3 border-color-btn p-0.5 hover:border-color-btn-hover transition-all duration-300 hover:scale-105 shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-color-success rounded-full border-2 border-color-background"></div>
                </div>
              </div>
              
              {!hidden && (
                <div className="absolute right-0 mt-4 w-72 bg-prime/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl z-50 border border-color-second animate-fadeIn">
                  <div className="text-center pb-4 border-b border-color-second/50">
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="h-16 w-16 rounded-full mx-auto mb-3 border-2 border-color-btn"
                    />
                    <p className="text-lg font-bold text-light ">{user.displayName}</p>
                    <p className="text-sm text-light /70">{user.email}</p>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <button
                      onClick={handleProfileUpdate}
                      className="w-full px-4 py-3 bg-light/30 hover:bg-prime/10 text-light font-medium rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                      Update Profile
                    </button>
                    
                    <Link 
                      to="/dashboard" 
                      className="w-full px-4 py-3 bg-light/30 hover:bg-prime/10 text-light font-medium rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      Dashboard
                    </Link>
                    
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-3 bg-light/30 hover:bg-prime/10 text-light font-medium rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="transform hover:scale-105 transition-all duration-300">
                <Button text='Login'></Button>
              </Link>
              <Link to="/register" className="transform hover:scale-105 transition-all duration-300">
                <Button text={'Register'}></Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Modal for Profile Update */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-md bg-prime border border-color-second shadow-2xl rounded-2xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-light ">Update Profile</h3>
            <p className="text-light /70 mt-1">Keep your information current</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-light ">Full Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border-2 border-color-second rounded-xl focus:border-color-btn focus:outline-none transition-all duration-300 bg-color-background text-light "
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-light ">Profile Image</label>
              <div className="relative">
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="w-full px-4 py-3 border-2 border-color-second rounded-xl focus:border-color-btn focus:outline-none transition-all duration-300 bg-color-background file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-color-second file:text-color-btns file:font-medium hover:file:bg-color-second-dark"
                  accept="image/*"
                />
              </div>
            </div>
            
            <div className="flex gap-3 pt-4">
              <button 
                type="button" 
                className="flex-1 px-6 py-3 border-2 border-color-second text-light  font-medium rounded-xl hover:bg-color-second transition-all duration-300"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="flex-1 px-6 py-3 bg-color-btn hover:bg-color-btn-hover text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop bg-black/20 backdrop-blur-sm">
          <button>close</button>
        </form>
      </dialog>

    </header>
  );
};

export default Navbar;