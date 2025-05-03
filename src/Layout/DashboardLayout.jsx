/* eslint-disable no-unused-vars */
import { Outlet, useNavigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";
import useAuth from "../hooks/useAuth.jsx";
import Swal from "sweetalert2";

const DashboardLayout = () => {
  const { user, logoutUser } = useAuth();
const navigate= useNavigate()
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
        navigate('/')
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  return (
    // TODO md:max-w-[95%] lg:max-w-[85%]
    <div className="grid lg:grid-cols-12   mx-auto">
      <section className=" lg:col-span-3">
        <Dashboard />
      </section>

      <div className="lg:col-span-9 py-20 lg:py-0 lg:px-10">
        <div className="py-6 mb-20 px-8 flex items-center justify-between bg-btns rounded-lg shadow-md hidden lg:flex">
          <h2 className="text-2xl font-semibold text-white">
            Welcome,{" "}
            <span className="text-fuchsia-800">
              {user?.displayName || "User"}
            </span>
          </h2>

          <button
            onClick={handleLogout}
            className="btn btn-outline bg-background hover:bg-cyan-300 text-btns font-bold  transition duration-300"
          >
            Logout
          </button>
        </div>
        <Outlet />
      </div>
      {/* <section className="lg:col-span-9  lg:px-10">
      </section> */}
    </div>
  );
};

export default DashboardLayout;
