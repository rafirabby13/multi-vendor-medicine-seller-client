import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import Register from "../Pages/Register/Register.jsx";
import Shop from "../Pages/Shop/Shop.jsx";
import MedicineDetail from "../Pages/MedicineDetail/MedicineDetail.jsx";
import Cart from "../Pages/Cart/Cart.jsx";
import Payment from "../Pages/Payment/Payment.jsx";
import DashboardLayout from "../Layout/DashboardLayout.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AskBannerAd from "../Pages/Dashboard/Seller/AskBanner/AskBannerAd.jsx";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome.jsx";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers.jsx";
import ManageBannerAd from "../Pages/Dashboard/Admin/BannerAdvertise/ManageBannerAd.jsx";

export const router = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: 'shop',
                element: <Shop/>
            },
            {
                path: 'medicineDetail/:category',
                element: <MedicineDetail/>
            },
            {
                path: 'cart',
                element: <PrivateRoute><Cart/></PrivateRoute>
            }
            ,
            {
                path: 'payment',
                element: <Payment/>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout/>,
        children: [
            {
                path: '',
                element: <AdminHome/>
            },
            {
                path: 'users',
                element: <ManageUsers/>
            },
            {
                path: 'askBannerAd',
                element: <AskBannerAd/>
            },
            {
                path: 'manageBannerAdd',
                element: <ManageBannerAd/>
            },
            
        ]
    }
])