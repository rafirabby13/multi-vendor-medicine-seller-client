import useUsersRole from "../../hooks/useUsersRole.jsx";

import useAuth from "../../hooks/useAuth.jsx";
import Drawer from "react-modern-drawer";
// import 'react-modern-drawer/dist/index.css'
//import styles 👇
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaAd,
  FaBars,
  FaChartLine,
  FaCreditCard,
  FaHome,
  FaList,
  FaPlus,
  FaUsers,
} from "react-icons/fa";
const Dashboard = () => {
  const { user } = useAuth();
  const [role] = useUsersRole();
  console.log(role);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
       <button className="flex lg:hidden p-4 md:p-10 mr-10" onClick={toggleDrawer} >
          <FaBars className="text-4xl" />
        </button>
      <div className="">
     
      <div className="hidden lg:flex bg-btns md:min-h-screen hidden  py-20 xl:pl-8">
        {role === "admin" && (
          <div className="  flex flex-col gap-8">
            <NavLink
              to="/dashboard/home"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
              <span className="flex items-center justify-between">
                Admin Home <FaHome className="text-4xl" />
              </span>
            </NavLink>

            <NavLink
              to="/dashboard/users"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
              <span className="flex items-center justify-between">
                Manage Users <FaUsers className="text-4xl" />
              </span>
            </NavLink>

            <NavLink
              to="/dashboard/medicineCategory"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
              <span className="flex items-center justify-between">
                Manage Category <FaList className="text-4xl" />
              </span>
            </NavLink>

            <NavLink
              to="/dashboard/paymentManagement"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
              <span className="flex items-center justify-between">
                Payment management
                <FaCreditCard className="text-4xl" />
              </span>
            </NavLink>

            <NavLink
              to="/dashboard/salesReport"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
              <span className="flex items-center justify-between">
                {" "}
                Sales Report
                <FaChartLine className="text-4xl" />
              </span>
            </NavLink>

            <NavLink
              to="/dashboard/manageBannerAdd"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
              <span className="flex items-center justify-between gap-4">
                Manage banner Advertise
                <FaAd className="text-4xl" />
              </span>
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
              <span className="flex items-center justify-between">
                Home
                <FaHome className="text-4xl" />
              </span>
            </NavLink>
          </div>
        )}{" "}
        {role === "seller" && (
          <div className="  flex flex-col gap-8  ">
            {/* 
              <NavLink
                to="/dashboard/home"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] p-3 font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Seller Home
              </NavLink>
             */}

            <NavLink
              to="/dashboard/manageMedicine"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
              <span className="flex items-center justify-between gap-4">
              Manage Medicines
                <FaPlus className="text-4xl" />
                </span>
            </NavLink>

            <NavLink
              to="/dashboard/paymentHistorySeller"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
                <span className="flex items-center justify-between gap-4">
                Payment History
                <FaCreditCard className="text-4xl" />
              </span>
              
            </NavLink>

            <NavLink
              to="/dashboard/askBannerAd"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
               <span className="flex items-center justify-between gap-4">
               Ask For Advertisement
                <FaAd className="text-4xl" />
              </span>
              
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
               <span className="flex items-center justify-between">
                Home
                <FaHome className="text-4xl" />
              </span>
            </NavLink>
          </div>
        )}
        {role === "user" && (
          <div className="  flex flex-col gap-8  ">
            {/* 
                <NavLink
                  to="/dashboard/home"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#439A97] p-3 font-bold text-white lg:text-lg"
                      : "font-bold"
                  }
                >
                  User Home
                </NavLink>
               */}

           
            <NavLink
              to="/dashboard/myPayment"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
              Payment history
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-background text-btns   w-full p-3 rounded-lg font-bold text-white lg:text-lg"
                  : "font-bold text-xl border-b-4 p-3 rounded-sm"
              }
            >
               <span className="flex items-center justify-between">
                Home
                <FaHome className="text-4xl" />
              </span>
            </NavLink>
          </div>
        )}
      </div>
      <div className="flex lg:hidden">
        
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          {role === "admin" && (
            <div className="  flex flex-col gap-8  ">
              <NavLink
                to="/dashboard/home"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] p-3 font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Admin Home
              </NavLink>

              <NavLink
                to="/dashboard/users"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Manage Users
              </NavLink>

              <NavLink
                to="/dashboard/medicineCategory"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Manage Category
              </NavLink>

              <NavLink
                to="/dashboard/paymentManagement"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Payment management
              </NavLink>

              <NavLink
                to="/dashboard/salesReport"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Sales Report
              </NavLink>

              <NavLink
                to="/dashboard/manageBannerAdd"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Manage banner Advertise
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Home
              </NavLink>
            </div>
          )}{" "}
          {role === "seller" && (
            <div className="  flex flex-col gap-8  ">
              {/* 
                <NavLink
                  to="/dashboard/home"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#439A97] p-3 font-bold text-white lg:text-lg"
                      : "font-bold"
                  }
                >
                  Seller Home
                </NavLink>
               */}

              <NavLink
                to="/dashboard/manageMedicine"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Manage Medicines
              </NavLink>

              <NavLink
                to="/dashboard/paymentHistorySeller"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Payment History
              </NavLink>

              <NavLink
                to="/dashboard/askBannerAd"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Ask For Advertisement
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Home
              </NavLink>
            </div>
          )}
          {role === "user" && (
            <div className="  flex flex-col gap-8  ">
              {/* 
                <NavLink
                  to="/dashboard/home"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#439A97] p-3 font-bold text-white lg:text-lg"
                      : "font-bold"
                  }
                >
                  User Home
                </NavLink>
               */}

              <NavLink
                to="/dashboard/myPayment"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] p-3 font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Payment history
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#439A97] font-bold text-white lg:text-lg"
                    : "font-bold"
                }
              >
                Home
              </NavLink>
            </div>
          )}
        </Drawer>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
