import { Outlet } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";

const DashboardLayout = () => {
    return (
        // TODO md:max-w-[95%] lg:max-w-[85%]
        <div className="grid lg:grid-cols-12   mx-auto">
            <section className=" lg:col-span-3"><Dashboard/></section>
            <section className="lg:col-span-9 py-20 lg:px-10"><Outlet/></section>
        </div>
    );
};

export default DashboardLayout;