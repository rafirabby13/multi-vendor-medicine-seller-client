import { FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-[#439A97] font-bold text-white lg:text-lg"
              : "font-bold"
          }
        >
          <FaCartPlus />

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
            <Link className=" border-none p-1 lg:text-xl xl:btn text-sm bg-[#439A97] xl:bg-[#439A97] text-white xl:text-white">
            Join US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
