import { NavLink } from "react-router-dom";
import useUsersRole from "../../hooks/useUsersRole.jsx";
import Loading from "../../components/Loading.jsx";

const Dashboard = () => {
  const [role, refetch, isLoading] = useUsersRole();
  console.log(role);
  // const role = role.role
 
  return (
    <div>
      {role === "admin" && (
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
      )}
      {role === "seller" && (
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
        <div className="border-2 min-h-screen flex flex-col gap-8  mx-10">
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
  );
};

export default Dashboard;
