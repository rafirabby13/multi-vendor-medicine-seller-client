/* eslint-disable no-unused-vars */
import useUsersRole from "../../hooks/useUsersRole.jsx";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import useAuth from "../../hooks/useAuth.jsx";
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
import { Helmet } from "react-helmet";
const Dashboard = () => {
  const { user } = useAuth();
  const [role] = useUsersRole();
  // console.log(role);
  const [toggled, setToggled] = useState(false);

  const navItems = [
    // Admin
    {
      Icon: <FaHome className="w-5 h-5" />,
      name: "Dashboard",
      path: "/dashboard",
      roles: ["admin", "seller", "user"],
    },
    {
      Icon: <FaUsers className="w-5 h-5" />,
      name: "Manage Users",
      path: "/dashboard/users",
      roles: ["admin"],
    },
    {
      Icon: <FaList className="w-5 h-5" />,
      name: "Manage Category",
      path: "/dashboard/medicineCategory",
      roles: ["admin"],
    },
    {
      Icon: <FaCreditCard className="w-5 h-5" />,
      name: "Payment Management",
      path: "/dashboard/paymentManagement",
      roles: ["admin"],
    },
    {
      Icon: <FaChartLine className="w-5 h-5" />,
      name: "Sales Report",
      path: "/dashboard/salesReport",
      roles: ["admin"],
    },
    {
      Icon: <FaAd className="w-5 h-5" />,
      name: "Manage Banner Advertise",
      path: "/dashboard/manageBannerAdd",
      roles: ["admin"],
    },

    // Seller
    // {
    //   Icon: <FaHome className="w-5 h-5" />,
    //   name: "Seller Home",
    //   path: "/dashboard/sellerHome",
    //   roles: ["seller"],
    // },
    {
      Icon: <FaPlus className="w-5 h-5" />,
      name: "Manage Medicines",
      path: "/dashboard/manageMedicine",
      roles: ["seller"],
    },
    {
      Icon: <FaCreditCard className="w-5 h-5" />,
      name: "Payment History",
      path: "/dashboard/paymentHistorySeller",
      roles: ["seller"],
    },
    {
      Icon: <FaAd className="w-5 h-5" />,
      name: "Ask For Advertisement",
      path: "/dashboard/askBannerAd",
      roles: ["seller"],
    },

    // User
    // {
    //   Icon: <FaCreditCard className="w-5 h-5" />,
    //   name: "Payment History",
    //   path: "/dashboard/myPayment",
    //   roles: ["user"],
    // },

    // Common
    {
      Icon: <FaHome className="w-5 h-5" />,
      name: "Home",
      path: "/",
      roles: ["admin", "seller", "user"], // Home is common for all
    },
  ];
  return (
    <div className="">
      <Helmet>
        <title>Dashboard | Medimart</title>
      </Helmet>
      <button
        className={`flex  p-4 md:p-10  z-50 btn lg:hidden fixed  `}
        onClick={() => setToggled(!toggled)}
      >
        <FaBars className="text-4xl" />
      </button>

      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="always"
        className={`bg-btns md:min-h-screen lg:hidden py-20 px-4 flex flex-col gap-4`}
      >
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          {navItems.map(
            (item) =>
              item.roles.includes(role) && (
                <MenuItem
                  key={item.path}
                  icon={item.Icon}
                  component={<NavLink to={item.path} end />}
                >
                  {item.name}
                </MenuItem>
              )
          )}
        </Menu>
      </Sidebar>
      <div
        className="hidden lg:flex lg:flex-col lg:gap-8
       bg-btns md:min-h-screen   py-20 xl:px-8"
      >
        {navItems.map(
          (item) =>
            item.roles.includes(role) && (
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  isActive
                    ? "w-full p-3 bg-amber-100 rounded-lg text-btns font-bold   lg:text-lg"
                    : "font-bold text-xl border-b-4 p-3  border rounded-lg"
                }
              >
                <span className="flex items-center gap-5">
                  {item.Icon} {item.name}
                </span>
              </NavLink>
            )
        )}
      </div>
    </div>
  );
};

export default Dashboard;
