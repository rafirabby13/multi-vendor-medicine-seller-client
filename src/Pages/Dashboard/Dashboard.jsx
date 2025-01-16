import { NavLink } from "react-router-dom";
import useUsersRole from "../../hooks/useUsersRole.jsx";

const Dashboard = () => {
  const [data] = useUsersRole();
  // console.log(data);
  // const role = data.role

  return (
    <div>
      {data === "admin" && (
        <div className="border-2 min-h-screen flex flex-col gap-8  mx-10">
          <p className="bg-orange-400 p-3">
            <NavLink
              to="/dashboard"
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
              to="/"
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
              to="/"
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
              to="/"
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
      )}
      {data === "seller" && (
        <div className="border-2 min-h-screen flex flex-col gap-8  mx-10">
          <p className="bg-orange-400 p-3">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#439A97] p-3 font-bold text-white lg:text-lg"
                  : "font-bold"
              }
            >
              Seller Home
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
              Manage Medicines
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
      {data === "user" && (
        <div className="border-2 min-h-screen flex flex-col gap-8  mx-10">
          <p className="bg-orange-400 p-3">
            <NavLink
              to="/dashboard"
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
  );
};

export default Dashboard;
