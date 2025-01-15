import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
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
          to="/"
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
  );
};

export default Dashboard;
