import { Outlet } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard.jsx";

const DashboardLayout = () => {
    return (
        <div className="grid grid-cols-9 py-20">
            <section className="border-2 col-span-2"><Dashboard/></section>
            <section className="col-span-7"><Outlet/></section>
        </div>
    );
};

export default DashboardLayout;