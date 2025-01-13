import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import Home from "../Pages/Home/Home.jsx";
import Login from "../Pages/Login/Login.jsx";
import Register from "../Pages/Register/Register.jsx";

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
            }
        ]
    }
])