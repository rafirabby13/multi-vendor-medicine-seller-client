import { Outlet } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";

const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-9 md:py-20 md:max-w-[95%] lg::max-w-[85%] mx-auto">
            <section className=" md:col-span-2"><Dashboard/></section>
            <section className="col-span-7"><Outlet/></section>
        </div>
    );
};

export default DashboardLayout;