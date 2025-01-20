import { FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import { useState } from "react";
import useCart from "../hooks/useCart.jsx";
import useUsersRole from "../hooks/useUsersRole.jsx";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const [hidden, setHidden] = useState(true);
  const [cart] = useCart();
  const [role] = useUsersRole();

  const items = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-background font-bold text-white lg:text-lg"
              : "font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "bg-background font-bold text-white lg:text-lg"
              : "font-bold"
          }
        >
          Shop
        </NavLink>
      </li>
      {role === "user" ? (
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "bg-background font-bold text-white lg:text-lg"
                : "font-bold"
            }
          >
            <FaCartPlus /> <span>{cart?.length}</span>
          </NavLink>
        </li>
      ) : (
        ""
      )}
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "bg-background font-bold text-white lg:text-lg"
              : "font-bold"
          }
        >
          Dashboard
        </NavLink>
      </li>
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
        console.log("logged out");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
   
      <div className="bg-btns fixed right-0 top-0 left-0 z-50">
        <div className="navbar  md:max-w-[85%] mx-auto text-font items-center lg:py-10">
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
              <Link
                to="/"
                className=" hidden lg:flex text-3xl xl:text-4xl font-extrabold"
              >
                MediMarket
              </Link>
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
                    className="h-16 rounded-full w-16 cursor-pointer relative"
                    src={user?.photoURL}
                    alt=""
                  />
                  {!hidden && (
                    <div className="flex flex-col absolute right-0    items-center gap-4 p-4 bg-btns rounded-lg shadow-md w-[200px]">
                      {/* Update Profile Button */}
                      <button className="btn  px-6 py-2 text-white rounded-md  transition w-full z-30">
                        Update Profile
                      </button>

                      {/* Dashboard Button */}
                      <Link
                        to="/dashboard"
                        className="btn px-6 py-2  text-white rounded-md  transition w-full z-30"
                      >
                        Dashboard
                      </Link>

                      {/* Logout Button */}
                      <button
                        onClick={handleLogout}
                        className="btn btn-danger px-6 py-2bg-red-600 text-white rounded-md  transition w-full z-30"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                  
                </div>
              </>
            ) : (
              <div>
                <Link
                  to="/login"
                  className=" border-none p-1 lg:text-xl xl:btn text-sm bg-background xl:bg-background text-white xl:text-white"
                >
                  Join US
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
   
  );
};

export default Navbar;
