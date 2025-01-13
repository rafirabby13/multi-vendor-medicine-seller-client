import { useContext } from "react";
import { AuthContext } from "../Context/AuthProviders.jsx";

const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;