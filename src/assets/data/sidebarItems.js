import {
  FaAd,
  FaChartLine,
  FaCreditCard,
  FaHome,
  FaList,
  FaPlus,
  FaUsers,
} from "react-icons/fa";
  export const sidebarItems = [
    // Admin
    {
      icon: FaHome,
      label: "Dashboard",
      path: "/dashboard",
      roles: ["admin", "seller", "user"],
    },
    {
      icon: FaUsers,
      label: "Manage Users",
      path: "/dashboard/users",
      roles: ["admin"],
    },
    {
      icon: FaList,
      label: "Manage Category",
      path: "/dashboard/medicineCategory",
      roles: ["admin"],
    },
    {
      icon: FaCreditCard,
      label: "Payment Management",
      path: "/dashboard/paymentManagement",
      roles: ["admin"],
    },
    {
      icon: FaChartLine,
      label: "Sales Report",
      path: "/dashboard/salesReport",
      roles: ["admin"],
    },
    {
      icon: FaAd,
      label: "Manage Banner Advertise",
      path: "/dashboard/manageBannerAdd",
      roles: ["admin"],
    },

    // Seller
    // {
    //   icon: FaHome,
    //   label: "Seller Home",
    //   path: "/dashboard/sellerHome",
    //   roles: ["seller"],
    // },
    {
      icon: FaPlus,
      label: "Manage Medicines",
      path: "/dashboard/manageMedicine",
      roles: ["seller"],
    },
    {
      icon: FaCreditCard,
      label: "Payment History",
      path: "/dashboard/paymentHistorySeller",
      roles: ["seller"],
    },
    {
      icon: FaAd,
      label: "Ask For Advertisement",
      path: "/dashboard/askBannerAd",
      roles: ["seller"],
    },

    // User
    // {
    //   icon: FaCreditCard,
    //   label: "Payment History",
    //   path: "/dashboard/myPayment",
    //   roles: ["user"],
    // },

    // Common
    {
      icon: FaHome,
      label: "Home",
      path: "/",
      roles: ["admin", "seller", "user"], // Home is common for all
    },
  ];