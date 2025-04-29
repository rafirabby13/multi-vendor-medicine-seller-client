/* eslint-disable no-unused-vars */
import {
  FaBirthdayCake,
  FaCartPlus,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import { useState } from "react";
import useCart from "../hooks/useCart.jsx";
import useUsersRole from "../hooks/useUsersRole.jsx";
import logo from "../../public/medicin.png";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic.jsx";
import { JackInTheBox } from "react-awesome-reveal";
import { WiDaySunny } from "react-icons/wi";
import { GiNightSleep } from "react-icons/gi";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Navbar = () => {
  const { user, logoutUser, updateUser, toggleTheme, theme } = useAuth();
  const [hidden, setHidden] = useState(true);
  const [cart] = useCart();
  const [role] = useUsersRole();
  const [profileHide, setProfileHide] = useState(true);
  const { register, handleSubmit } = useForm();

  const items = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-background font-bold  lg:text-lg" : "font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "bg-background font-bold  lg:text-lg" : "font-bold"
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/faq"
          className={({ isActive }) =>
            isActive ? "bg-background font-bold  lg:text-lg" : "font-bold"
          }
        >
          FAQ
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "bg-background font-bold  lg:text-lg" : "font-bold"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "bg-background font-bold  lg:text-lg" : "font-bold"
          }
        >
          Contact Us
        </NavLink>
      </li>
      {/* <li onClick={toggleTheme}>
       { theme == 'light' ? <FaToggleOn className="  text-7xl"/> : <FaToggleOff className="  text-7xl"/>}
      </li> */}
      {role === "user" ? (
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "bg-background font-bold  lg:text-lg" : "font-bold"
            }
          >
            <FaCartPlus /> <span>{cart?.length}</span>
          </NavLink>
        </li>
      ) : (
        ""
      )}
      {user && user?.email && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "bg-background font-bold  lg:text-lg" : "font-bold"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      {/* <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-background font-bold text-white lg:text-lg"
              : "font-bold"
          }
        >
          languages dropdown
        </NavLink>
      </li> */}
    </>
  );

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        // console.log("logged out");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "logged out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const axiosPublic = useAxiosPublic();
  const handleProfileUpdate = () => {
    document.getElementById("my_modal_5").showModal();
  };

  const onSubmit = (data) => {
    // console.log(data);
    const formData = { image: data.image[0] };

    axiosPublic
      .post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.success) {
          const photoURL = res.data.data.display_url;
          updateUser(data.name, photoURL)
            .then(() => {
              // console.log("updated");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registered Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              document.getElementById("my_modal_5").close();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };

  return (
    <div className="bg-btns  fixed right-0 top-0 left-0 z-50">
      <div className="navbar  md:max-w-[85%] mx-auto text-font items-center py-4 lg:py-6">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text- bg-third rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {items}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <img className="h-12 md:h-20" src={logo} alt="" />
            <JackInTheBox delay={2000}>
              <Link
                to="/"
                className=" hidden 2xl:flex text-3xl xl:text-4xl font-extrabold"
              >
                MediMart
              </Link>
            </JackInTheBox>
          </div>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal font-semibold flex items-center gap-3  xl:text-xl px-1">
            {items}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="">
                <img
                  onClick={() => setHidden(!hidden)}
                  className="h-16 rounded-full w-16 cursor-pointer relative border-2 border-third p-1"
                  src={user?.photoURL}
                  alt=""
                />
                {!hidden && (
                  <div
                    onClick={() => setHidden(true)}
                    className="flex flex-col absolute right-0    items-center gap-4 p-4 bg-btns rounded-lg shadow-md "
                  >
                    {/* Update Profile Button */}
                    <h1 className="text-3xl font-bold">{user?.displayName}</h1>
                    <h1 className="text-3xl font-bold">{user?.email}</h1>
                    <button
                      onClick={handleProfileUpdate}
                      className="btn  px-6 py-2 text-white rounded-md  transition w-full z-30"
                    >
                      Update Profile
                    </button>

                    {/* Dashboard Button */}
                    <Link
                      to="/dashboard"
                      className="btn px-6 py-2  rounded-md  transition w-full z-30"
                    >
                      Dashboard
                    </Link>

                    {/* Logout Button */}
                    <button
                      onClick={handleLogout}
                      className="btn btn-danger px-6 py-2bg-red-600  rounded-md  transition w-full z-30"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login" className=" p-1 lg:text-xl xl:btn  text-md border-2">
                Login
              </Link>
              <Link to="/register" className=" p-1 lg:text-xl xl:btn  text-md ">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* form starts */}

          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Image</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                placeholder="Your Photo "
                className="file-input w-full max-w-xs file-input-accent "
              />
            </div>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <div className="form-control mt-6">
              <button className="btn bg-btns">Update Profile</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Navbar;
