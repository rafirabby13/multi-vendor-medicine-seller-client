import { FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import { useState } from "react";
import useCart from "../hooks/useCart.jsx";
const Navbar = () => {
  const { user,logoutUser } = useAuth();
  const [hidden, setHidden] = useState(true);
  const [cart] = useCart()
  // console.log(cart);

  const items = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#439A97] font-bold text-white lg:text-lg"
              : "font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
        to='/shop'
          className={({ isActive }) =>
            isActive
              ? "bg-[#439A97] font-bold text-white lg:text-lg"
              : "font-bold"
          }
        >
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink to='/cart'
          className={({ isActive }) =>
            isActive
              ? "bg-[#439A97] font-bold text-white lg:text-lg"
              : "font-bold"
          }
        >
          <FaCartPlus /> <span>{cart?.length}</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#439A97] font-bold text-white lg:text-lg"
              : "font-bold"
          }
        >
          languages dropdown
        </NavLink>
      </li>
    </>
  );

  const handleLogout=()=>{
    logoutUser()
    .then(()=>{
      console.log('logged out');
    })
    .catch(err=>{
      console.log(err);
    })

  }
  return (
    <div>
      <div>
        <div className="navbar items-center lg:py-10">
          <div className="navbar-start">
            <div className="dropdown">
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
                className="menu menu-sm dropdown-content text-white bg-green-950 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                {items}
              </ul>
            </div>
            <a className=" hidden lg:flex text-3xl xl:text-4xl font-extrabold">
              MediMarket
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal font-semibold flex items-center gap-3  xl:text-xl px-1">
              {items}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <div className="relative">
                  <img
                    onClick={() => setHidden(!hidden)}
                    className="h-16 rounded-full w-16 cursor-pointer"
                    src={user?.photoURL}
                    alt=""
                  />
                  {!hidden && (
                    <div className="flex flex-col absolute top-20 right-0   items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md w-[200px]">
                      {/* Update Profile Button */}
                      <button   className="btn btn-primary px-6 py-2 text-white rounded-md hover:bg-blue-700 transition w-full">
                        Update Profile
                      </button>

                      {/* Dashboard Button */}
                      <button   className="btn btn-secondary px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition w-full">
                        Dashboard
                      </button>

                      {/* Logout Button */}
                      <button   onClick={handleLogout} className="btn btn-danger px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition w-full">
                        Logout
                      </button>
                    </div>
                  )}
                   <button
                onClick={handleLogout}
                className=" border-none p-1 lg:text-xl xl:btn text-sm bg-[#439A97] xl:bg-[#439A97] text-white xl:text-white"
              >
                Logout
              </button>
                </div>
              </>
            ) : (
             <div>
               <Link
                to="/login"
                className=" border-none p-1 lg:text-xl xl:btn text-sm bg-[#439A97] xl:bg-[#439A97] text-white xl:text-white"
              >
                Join US
              </Link>
             
             </div>
              
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
