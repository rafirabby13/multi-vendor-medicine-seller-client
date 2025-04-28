import React from "react";
import useUsersRole from "../../../hooks/useUsersRole";
import AdminHome from "../Admin/AdminHome/AdminHome";
import SellerHome from "../Seller/SellerHome/SellerHome";
import Payment from "../../Payment/Payment";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
  const { user } = useAuth();
  const [role] = useUsersRole();

  console.log(role);
  return (
    <div>
      
      {role === "admin" && <AdminHome />}
      {role === "seller" && <SellerHome />}
      {role === "user" && <Payment />}
    </div>
  );
};

export default DashboardHome;
