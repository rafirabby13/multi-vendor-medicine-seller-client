import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import Register from "../Pages/Register/Register.jsx";
import Shop from "../Pages/Shop/Shop.jsx";
import MedicineDetail from "../Pages/MedicineDetail/MedicineDetail.jsx";
import Cart from "../Pages/Cart/Cart.jsx";
import Payment from "../Pages/Payment/Payment.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import AskBannerAd from "../features/dashboard/seller/AskBanner/AskBannerAd.jsx";
import ManageUsers from "../features/dashboard/admin/ManageUsers/ManageUsers.jsx";
import ManageBannerAd from "../features/dashboard/admin/BannerAdvertise/ManageBannerAd.jsx";
import ManageCategory from "../features/dashboard/admin/ManageCategory/ManageCategory.jsx";
import UpdateMedicineCategory from "../features/dashboard/admin/ManageCategory/UpdateMedicineCategory.jsx";
import Paymentmanagement from "../features/dashboard/admin/PaymentManagement/Paymentmanagement.jsx";
import MyPayment from "../features/dashboard/users/User/MyPayment.jsx";
import ManageMedicine from "../features/dashboard/seller/ManageMedicine/ManageMedicine.jsx";
import SellerPaymentHistory from "../features/dashboard/seller/SellerPayment/SellerPaymentHistory.jsx";
import SalesReport from "../features/dashboard/admin/SalesReport/SalesReport.jsx";
import SellerHome from "../features/dashboard/seller/SellerHome/SellerHome.jsx";
import Faq from "../Pages/faq/Faq.jsx";
import Error from "../Pages/Error/Error.jsx";
import About from "../Pages/AboutUS/About.jsx";
import ContactUs from "../Pages/Contact us/ContactUs.jsx";
import DashboardHome from "../Pages/Dashboard/DashBoardHome/DashboardHome.jsx";
import DashboardLayout from "../features/dashboard/DashboardLayout/DashboardLayout.jsx";

export const router = createBrowserRouter([
    {
        path: '',
        element: <Layout/>,
        errorElement: <Error/>,
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
                path: 'faq',
                element: <Faq/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'contact',
                element: <ContactUs/>
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
                element: <DashboardHome/>
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
            {
                path: 'medicineCategory',
                element: <ManageCategory/>
            },
            {
                path: 'updateMedicineCategory/:id',
                element: <UpdateMedicineCategory/>
            },
            {
                path: 'paymentManagement',
                element: <Paymentmanagement/>
            },
            {
                path: 'myPayment',
                element: <MyPayment/>
            },
            {
                path: 'manageMedicine',
                element: <ManageMedicine/>
            },
            {
                path: 'paymentHistorySeller',
                element: <SellerPaymentHistory/>
            },
            {
                path: 'salesReport',
                element: <SalesReport/>
            },
            {
                path: 'sellerHome',
                element: <SellerHome/>
            },
            
            
        ]
    }
])