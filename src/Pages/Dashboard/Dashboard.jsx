import useUsersRole from "../../hooks/useUsersRole.jsx";

import useAuth from "../../hooks/useAuth.jsx";
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
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
      <div className="hidden md:flex">
        {role === "admin" && (
          <div className="  flex flex-col gap-8  ">
            <p className="bg-orange-400 p-3">
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
            </p>
            <p className="bg-orange-400 p-3">
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
            </p>
            <p className="bg-orange-400 p-3">
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
            </p>
            <p className="bg-orange-400 p-3">
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
            </p>
            <p className="bg-orange-400 p-3">
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
            </p>
            <p className="bg-orange-400 p-3">
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
            </p>
            <p className="bg-orange-400 p-3">
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
            </p>
          </div>
        )}{" "}
        {role === "seller" && (
          <div className="  flex flex-col gap-8  ">
            {/* <p className="bg-orange-400 p-3">
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
            </p> */}
            <p className="bg-orange-400 p-3">
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
            </p>
            <p className="bg-orange-400 p-3">
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
            </p>
            <p className="bg-orange-400 p-3">
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
            </p>
            <p className="bg-orange-400 p-3">
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
            </p>
          </div>
        )}
        {role === "user" && (
          <div className="  flex flex-col gap-8  ">
             {/* <p className="bg-orange-400 p-3">
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
              </p> */}
            <p className="bg-orange-400 p-3">
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
            </p>
            <p className="bg-orange-400 p-3">
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
            </p>
          </div>
        )}
      </div>
      <div className="flex md:hidden">
        <button onClick={toggleDrawer} className="p-4"><FaBars/></button>
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          {role === "admin" && (
            <div className="  flex flex-col gap-8  ">
              <p className="bg-orange-400 ">
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
              </p>
              <p className="bg-orange-400 p-3">
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
              </p>
              <p className="bg-orange-400 p-3">
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
              </p>
              <p className="bg-orange-400 p-3">
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
              </p>
              <p className="bg-orange-400 p-3">
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
              </p>
              <p className="bg-orange-400 p-3">
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
              </p>
              <p className="bg-orange-400 p-3">
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
              </p>
            </div>
          )}{" "}
          {role === "seller" && (
            <div className="  flex flex-col gap-8  ">
              {/* <p className="bg-orange-400 p-3">
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
              </p> */}
              <p className="bg-orange-400 p-3">
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
              </p>
              <p className="bg-orange-400 p-3">
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
              </p>
              <p className="bg-orange-400 p-3">
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
              </p>
              <p className="bg-orange-400 p-3">
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
              </p>
            </div>
          )}
          {role === "user" && (
            <div className="  flex flex-col gap-8  ">
              {/* <p className="bg-orange-400 p-3">
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
              </p> */}
              <p className="bg-orange-400 p-3">
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
              </p>
              <p className="bg-orange-400 p-3">
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
              </p>
            </div>
          )}
        </Drawer>
      </div>
    </div>
  );
};

export default Dashboard;
