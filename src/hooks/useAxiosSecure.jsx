import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import { useEffect, useState } from "react";

const axiosSecure = axios.create({
  // baseURL: "https://multi-vendor-medicine-selling-server-alpha.vercel.app",
  baseURL: "http://localhost:5001/api/v1",
});
const useAxiosSecure = () => {
  const { logoutUser } = useAuth();
  // Add a request interceptor
  const navigate = useNavigate();
  const [shouldNavigate, setShouldNavigate] = useState(false);

  axiosSecure.interceptors.request.use(
    function (config) {
      // console.log('req stop by interceptor');
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor

  axiosSecure.interceptors.response.use(
    function (res) {
      // setShouldNavigate(false);
      // console.log(res);

      return res;
    },
    async (err) => {
      const status = err.response ? err.response.status : null;

      console.log(status);

      if (status == 401 || status === 403) {
        try {
          await logoutUser();

          setShouldNavigate(true);
        } catch (error) {
          console.error("Error during logout:", error);
        }
      }

      return Promise.reject(err);
    }
  );
  useEffect(() => {
    if (shouldNavigate) {
      navigate("/login");
    }
  }, [shouldNavigate, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
