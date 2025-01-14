import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import Register from "../Pages/Register/Register.jsx";
import Shop from "../Pages/Shop/Shop.jsx";
import MedicineDetail from "../Pages/MedicineDetail/MedicineDetail.jsx";
import Cart from "../Pages/Cart/Cart.jsx";

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
                element: <Cart/>
            }
        ]
    }
])