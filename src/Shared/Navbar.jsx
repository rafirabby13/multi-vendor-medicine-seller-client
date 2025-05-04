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
import Button from '../components/Button.jsx'

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
              isActive ? "bg-background font-bold lg:text-lg" : "font-bold"
            }
          >
            {["Home", "Shop", "FAQ", "About Us", "Contact Us"][idx]}
          </NavLink>
        </li>
      ))}
      {role === "user" && (
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "bg-background font-bold lg:text-lg" : "font-bold"
            }
          >
            <FaCartPlus className="inline mr-1" /> <span>{cart?.length}</span>
          </NavLink>
        </li>
      )}
      {user?.email && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "bg-background font-bold lg:text-lg" : "font-bold"
            }
          >
            Dashboard
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
    <header className="bg-btns fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="navbar md:max-w-[85%] mx-auto items-center py-4 lg:py-6 text-font">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-third rounded-box w-52 z-50"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-3">
            <img className="h-12 md:h-20" src={logo} alt="Logo" />
            <JackInTheBox delay={2000}>
              <span className="hidden 2xl:inline text-3xl xl:text-4xl font-extrabold">
                MediMart
              </span>
            </JackInTheBox>
          </Link>
        </div>

        {/* Navbar Center */}
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 xl:text-xl font-semibold">
            {navItems}
          </ul>
        </nav>

        {/* Navbar End */}
        <div className="navbar-end">
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL}
                alt="User"
                className="h-12 w-12 rounded-full border-2 border-third p-1 cursor-pointer"
                onClick={() => setHidden(!hidden)}
              />
              {!hidden && (
                <div className="absolute right-0 mt-2 w-64 bg-btns p-4 rounded-md shadow-lg z-50 text-center">
                  <p className="text-lg font-bold">{user.displayName}</p>
                  <p className="text-sm">{user.email}</p>
                  <div className="mt-3 space-y-2">
                    <button
                      onClick={handleProfileUpdate}
                      className="btn btn-sm w-full bg-accent text-white"
                    >
                      Update Profile
                    </button>
                    <Link to="/dashboard" className="btn btn-sm w-full">
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm w-full bg-red-700 border-none text-white"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" >
               <Button text='Login'></Button>
              </Link>
              <Link to="/register" >
                <Button text={'Register'}></Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Profile Update */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form className="card-body space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label font-semibold">Your Image</label>
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={() => document.getElementById("my_modal_5").close()}>
                Cancel
              </button>
              <button type="submit" className="btn bg-btns text-white">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </header>
  );
};

export default Navbar;
